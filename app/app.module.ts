import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { UsersComponent } from './features/users/users.component'

import { AppDirectivesModule, HeaderDirective } from './directives/directives.module';

@NgModule({
  imports: [BrowserModule, FormsModule, AppDirectivesModule],
  declarations: [AppComponent, UsersComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }