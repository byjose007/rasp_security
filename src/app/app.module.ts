import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './login/register.component';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';


// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { PagesComponent } from './pages/pages.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Services
import { TramaService } from './services/trama/trama.service';
import { UsersService } from './services/users/users.service';

// Other
import { ExportAsModule } from 'ngx-export-as';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'raspSecurityWeb'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ExportAsModule,
  ],
  providers: [TramaService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
