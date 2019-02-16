import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorListComponent } from './author/author-list/author-list.component';
import { AuthorCreateComponent } from './author/author-create/author-create.component';

const routes: Routes = [
  {
    path: '',
    component: AuthorListComponent
  },
  {
    path: 'create',
    component: AuthorCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
