import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserReposComponent } from './user-repos/user-repos.component';
import { UserInputComponent } from './user-input/user-input.component';
import { RepoAgePipe } from './repo-age.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ColorDirective } from './color.directive';
import { NtFoundComponent } from './nt-found/nt-found.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserReposComponent,
    UserInputComponent,
    RepoAgePipe,
    ColorDirective,
    NtFoundComponent
  ],
  imports: [
    MatIconModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
