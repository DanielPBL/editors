import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MarkdownModule } from 'ngx-markdown';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HtmlEditorComponent } from './html-editor/html-editor.component';
import { MarkdownEditorComponent } from './markdown-editor/markdown-editor.component';
import { CKEditorModule } from 'ckeditor4-angular';

@NgModule({
  declarations: [
    AppComponent,
    HtmlEditorComponent,
    MarkdownEditorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MarkdownModule.forRoot(),
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
