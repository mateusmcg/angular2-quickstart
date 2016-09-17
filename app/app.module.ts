import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { UsersComponent } from './features/users/users.component'
import { HttpModule } from '@angular/http';

import { AppDirectivesModule, HeaderDirective } from './directives/directives.module';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [],
  declarations: [AppComponent, UsersComponent, HeaderDirective],
  bootstrap: [AppComponent]
})

export class AppModule { }