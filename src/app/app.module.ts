import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContatoComponent } from './contato/contato.component';
import { ContatoService } from './contato/contato.service';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatInputModule} from '@angular/material/input'; 
import {HttpClientModule} from '@angular/common/http'
import {ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    ContatoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
