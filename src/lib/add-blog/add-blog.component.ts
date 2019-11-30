import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CookieService } from 'ngx-cookie-service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface DialogData {
  msg: string;
}

@Component({
  selector: 'lib-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  /**ckeditor start here*/
  public Editor = ClassicEditor;  //for ckeditor
  editorConfig = {
    placeholder: 'Type the content here!',
  };
  public model = {
    editorData: ''
  };
  /**ckeditor end here*/


  // ====================declarations==================
  blogCatForm: FormGroup;
  header_txt: any = "Add Blog Category";
  buttonText: any = "SUBMIT";
  configData: any;
  loader: boolean = false;
  successMessage: any = "Category Added Successfully!!!"
  getParentCatArr: any = [];
  dialogRef:any;
  // ==================================================



  constructor(private formBuilder: FormBuilder, private blogService: BlogService, private router: Router,
    private cookieService: CookieService,public dialog: MatDialog) { }

  ngOnInit() {
    //generating the form
    this.generateForm();
    //getting the parent category
    this.getParentData();
    // --------------------------------checking the cases------------------------ 
    switch (this.configData.action) {
      case 'add':
        /* Button text */
        this.buttonText = "SUBMIT";
        break;
      case 'edit':
        /* Button text */
        this.buttonText = "UPDATE";
        this.successMessage = "One row updated!!!";
        this.setDefaultValue(this.configData.defaultData);
        this.header_txt = "EDIT";
        break;
    }
    // --------------------------------------------------------------------------

  }


  // ================================================Default value======================================
  setDefaultValue(defaultValue) {
    this.blogCatForm.patchValue({
      blogtitle: defaultValue.blogtitle,
      priority: defaultValue.priority,
      status: defaultValue.status,
      description: defaultValue.description,
      parent_id: defaultValue.parent_id
    });

  }
  // ==================================================================================================


  //  ============================GENERATING THE FORM=======================
  generateForm() {
    this.blogCatForm = this.formBuilder.group({
      blogtitle: ['',[Validators.required,Validators.maxLength(50)]],
      priority: ['',[Validators.required,Validators.maxLength(2)]],
      status: [true,],
      description: ['',[Validators.required,Validators.maxLength(100)]],
      parent_id: [0,]
    });
  }
  // ========================================================================


  //  Getting the input Configuration 
  @Input()
  set config(getConfig: any) {
    this.configData = getConfig;
   
  }

  // =========================================MODAL functions==========================================
  openDialog(x: any): void {
    this.dialogRef = this.dialog.open(Modal2, {
      width: '250px',
      data: { msg: x }
    });

    this.dialogRef.afterClosed().subscribe(result => {

    });
  }
  // ===================================================================================================




//Getting the parent category
  getParentData() {
    let postData: any = {
      source: this.configData.source,
      token: this.cookieService.get('jwtToken')

    };
    this.blogService.getData(this.configData.endpoint2 + 'datalist', postData).subscribe((response: any) => {
      this.getParentCatArr = response.res;
    })
  }





  // =========================SUBMIT function==================
  onSubmit() {
    this.blogCatForm.controls['description'].markAsTouched();
   
    this.loader = true;
    /* stop here if form is invalid */
    if (this.blogCatForm.invalid) {
      return;
    } else {
      if (this.blogCatForm.value.status) {
        this.blogCatForm.value.status = parseInt("1");
      } else {
        this.blogCatForm.value.status = parseInt("0");;
      }

      /* start process to submited data */
      let postData: any = {
        source: this.configData.source,
        data: Object.assign(this.blogCatForm.value, this.configData.condition),
        "sourceobj": ["parent_id"]
      };
      
      this.blogService.addData(this.configData.endpoint, postData).subscribe((response: any) => {
        if (response.status == "success") {
         
          this.openDialog(this.successMessage);
          setTimeout(() => {
            this.dialogRef.close();
          }, 2000);

          this.router.navigate([this.configData.callBack]);
        } else {
          alert("Some error occurred. Please try again.");
        }
      }, (error) => {
        alert("Some error occurred. Please try again.");
      });
    }
  }
  // ==========================================================


  //Blur function
  inputBlur(val: any) {
    this.blogCatForm.controls[val].markAsUntouched();
  }
}

// ============================================MODAL COMPONENT===========================================
@Component({
  selector: 'app-modal',
  templateUrl: 'modal.html',
})
export class Modal2 {

  constructor(
    public dialogRef: MatDialogRef<Modal2>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
// ======================================================================================================


