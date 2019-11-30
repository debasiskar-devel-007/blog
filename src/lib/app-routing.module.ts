import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';
import { AddBlogComponent } from './add-blog/add-blog.component'
const appRoutes: Routes = [
  {path:'add', component : AddBlogComponent },
  {path:'edit/:id', component : AddBlogComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }