import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DISComponent } from './dis/dis.component';
import { StddataComponent } from './stddata/stddata.component';
import { SinfoComponent } from './sinfo/sinfo.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StrrevPipe } from './strrev.pipe';
import { PipesComponent } from './pipes/pipes.component';
import { StdDataService } from './std-data.service';
import { SdataService } from './sdata.service';

@NgModule({
  declarations: [
    AppComponent,
    DISComponent,
    StddataComponent,
    SinfoComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    StrrevPipe,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    SdataService,
    StdDataService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
