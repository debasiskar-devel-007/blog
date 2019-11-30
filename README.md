# Blog

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.0.

## Code scaffolding

Run `ng generate component component-name --project blog` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project blog`.
> Note: Don't forget to add `--project blog` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build blog` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build blog`, go to the dist folder `cd dist/blog` and run `npm publish`.

## Running unit tests

Run `ng test blog` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

--------------------------------------------------------------------------------------------------
                                             BLOG MANAGEMENT
--------------------------------------------------------------------------------------------------
######################### Blog Add Edit Start Here#############################
In order to hit the Blog Add Edit we need few parameters:-
Follwing are the list of parameters:

*Parameters for the .html page:-

  <lib-add-blog
  [serverUrl]="server"
  [addEndpoint]="addUrl" 
  [getDataEndpoint]="getDataUrl"
  listRoute="blog/list"
  [dataList]="editdata"
  ></lib-add-blog>

  These parameters has to be assigned from the .ts page.

   public server:any = 'http://18.191.148.255:5009/';
   public addUrl:any = 'addorupdatedata';
   public getDataUrl:any = 'datalist';
   public editdata:any=[];


The editdata does not contains any data so, it has to be assigned in this page:

    ngOnInit() {
     if(this.activatedRoute.snapshot.params.id) {
     this.activatedRoute.data.forEach(data=>{
       let result:any;
       result=data.results.res;
       this.editdata=result;
    })
  }
  }
#########################Blog Add Edit End Here####################################

*************************Blog Listing Start Here***********************************
In order to hit the Blog Listing we need few parameters:-
Follwing are the list of parameters:

*Parameters for the .html page:-
 <lib-Blog
   [serverUrl]="server"
   addTeammember="blog/add"
   editblog="blog/edit"
   [Blogtable]="listingTablename"
   [deleteBlog]="Blogdelete"
   [AddEditBlog]="updateUrl"
   [getDataEndpoint]="getDataUrl" 
   [getDataSource]="getSourceUrl"
   [listResolve]="BlogList"
   [BlogToken]="token"
 >
</lib-Blog>
These parameters has to be assigned from the .ts page.

public server:any = 'http://18.191.148.255:5009/';
  public addUrl:any = 'addorupdatedata';
  public updateUrl:any = 'addorupdatedata';
  public deleteUrl:any = 'deletesingledata';
  public statusUpdateUrl:any = 'statusupdate';
  public getDataUrl:any = 'datalist';
  public Blogdelete:any='deletesingledata';
  public listingTablename:any='blog_category';
  public getSourceUrl:any = 'demoteam';
  public BlogList:any=[];
  public token:any='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJleHAiOjE1Njc2NTk2MzksImlhdCI6MTU2NzU3MzIzOX0.VQh6F3pVXz4GyHm-mzQArlfaBf1mP-qk7DQwt_mDhUA';

The BlogList does not contains any data so, it has to be assigned in this page:

 ngOnInit() {
    this.activatedRoute.data.forEach(data=>{
      let result:any;
      result=data.results.res;
      this.BlogList=result;
      
    })
  }


*************************Blog Listing End Here*************************************








   
