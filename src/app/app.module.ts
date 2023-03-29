import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';


import { SharedModule } from '../app/shared/shared.module';
import { ApplicationModule } from './pages/application/application.module';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,

    NzMenuModule,
    NzLayoutModule,

    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,

    ApplicationModule,
    SharedModule,
  ],
  providers: [

    { provide: NZ_I18N, useValue: zh_CN }
  ],
  bootstrap: [AppComponent],
  exports:[
    NzMenuModule,
    NzLayoutModule,
  ]
})
export class AppModule { }
