import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentService } from './comments/comment.service';
import { HttpClientModule } from '@angular/common/http';
import { FormValidationComponent } from './form-validation/form-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    CommentsComponent,
    FormValidationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
