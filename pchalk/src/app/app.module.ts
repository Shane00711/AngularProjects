import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatMenuModule, MatCardModule, MatToolbarModule, MatIconModule,
   MatGridListModule, MatInputModule} from '@angular/material';
import { NgModule } from '@angular/core';
import { User} from '../models/user';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatInputModule
  ],
  providers: [User],
  bootstrap: [AppComponent]
})
export class AppModule { }
