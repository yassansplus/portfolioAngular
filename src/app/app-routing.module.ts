import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './page/index/index.component';
import { BlogComponent} from './page/blog/blog.component';


const routes: Routes = [
  { path: '', component: IndexComponent, },
  {path: 'blog', component: BlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
