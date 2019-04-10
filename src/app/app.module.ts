import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { ZorrorBtnComponent } from './components/zorror-btn/zorror-btn.component';
import { AnHttpService } from "./services/an-http.service";
import { apiUrlsService } from "./services/api-urls.service";
registerLocaleData(zh);

//拦截器
import { httpInterceptorProviders } from '../assets/js/httpLanJie/index';
import { AllUserAlertComponent } from './components/all-user-alert/all-user-alert.component'
@NgModule({
  declarations: [
    AppComponent,
    ZorrorBtnComponent,
    AllUserAlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN }, AnHttpService, apiUrlsService, httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
