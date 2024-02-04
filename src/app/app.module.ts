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
import { HttpClientModule } from '@angular/common/http';
import { ApicompComponent } from './apicomp/apicomp.component';
import { AdduserComponent } from './adduser/adduser.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PdfgetComponent } from './pdfget/pdfget.component';
import { GetxlsComponent } from './getxls/getxls.component';

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
    PipesComponent,
    ApicompComponent,
    AdduserComponent,
    PdfgetComponent,
    GetxlsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    SdataService,
    StdDataService,
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
