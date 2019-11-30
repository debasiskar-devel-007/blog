import { NgModule } from '@angular/core';
import { BlogComponent } from './blog.component';
import { BrowserModule } from '@angular/platform-browser';
import { DemoMaterialModule } from './material-module'
import { FileUploadModule } from 'file-upload';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AddBlogComponent,Modal2 } from './add-blog/add-blog.component';
import { ListingModule } from 'listing-angular7';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ApiService } from './api.service';
import { CommonModule } from '@angular/common';
import { AddeditBlogmanagementComponent,Modal, YoutubeComponent } from './addedit-blogmanagement/addedit-blogmanagement.component';
import { YoutubeplayerComponent } from './youtubeplayer/youtubeplayer.component';
import { ListingBlogmanagementlibComponent } from './listing-blogmanagementlib/listing-blogmanagementlib.component';


@NgModule({
  declarations: [
    BlogComponent,
    AddBlogComponent,
    
    AddeditBlogmanagementComponent,
    Modal,
    YoutubeplayerComponent,
    YoutubeComponent,
    ListingBlogmanagementlibComponent,Modal2
  ],
  imports: [
    DemoMaterialModule,
    RouterModule,
    AppRoutingModule,
    ListingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    CKEditorModule,
    ListingModule,
    FileUploadModule,
    CommonModule,
  
  ],
  exports: [BlogComponent, AddBlogComponent, AddeditBlogmanagementComponent,ListingBlogmanagementlibComponent],
  providers: [ApiService],
  entryComponents: [Modal2,Modal, YoutubeComponent],

})
export class BlogModule { }
