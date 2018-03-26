import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from "ag-grid-angular/main";
import { AppComponent } from './app.component';
import { CommentComponent } from './comment/comment.component';
import { CommentService } from './core/service/comment.service';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AgGridModule.withComponents([])
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }