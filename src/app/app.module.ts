import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogentryListComponent } from './blogentry/blogentry-list/blogentry-list.component';
import { BlogentryCreateComponent } from './blogentry/blogentry-create/blogentry-create.component';
import { BlogentryUpdateComponent } from './blogentry/blogentry-update/blogentry-update.component';
import { AuthorListComponent } from './author/author-list/author-list.component';
import { AuthorCreateComponent } from './author/author-create/author-create.component';
import { AuthorUpdateComponent } from './author/author-update/author-update.component';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import {MatTableModule, MatPaginatorModule, MatInputModule} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    BlogentryListComponent,
    BlogentryCreateComponent,
    BlogentryUpdateComponent,
    AuthorListComponent,
    AuthorCreateComponent,
    AuthorUpdateComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    MatPaginatorModule,
    MatInputModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
