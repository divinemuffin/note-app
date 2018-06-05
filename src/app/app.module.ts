import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NoteComponent } from './note/note.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NoteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
