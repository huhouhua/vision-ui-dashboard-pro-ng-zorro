import { NgModule } from '@angular/core';
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

import { TwoerComponent } from './pages/twoer/twoer.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzCardModule } from 'ng-zorro-antd/card';
import {NzDividerModule} from 'ng-zorro-antd/divider'
import {NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb'

import {NzSelectModule  } from 'ng-zorro-antd/select';
import {NzInputModule  } from 'ng-zorro-antd/input';
import {NzInputNumberModule  } from 'ng-zorro-antd/input-number';

import { CpTableComponent } from './pages/table/cp-table/cp-table.component';
import { Table1Component } from './pages/table/table1/table1.component';
import { Table2Component } from './pages/table/table2/table2.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    TwoerComponent,
    Table1Component,
    CpTableComponent,
    Table2Component,
  ],
  imports: [
    NzButtonModule,
    NzGridModule,
    NzAvatarModule,
    NzPopoverModule,
    NzMessageModule,
    NzMenuModule,
    NzTableModule,
    NzLayoutModule,
    NzMenuModule,
    NzSpinModule,
    NzSliderModule,
    NzCardModule,
    NzSelectModule,
    NzInputModule,
    NzInputNumberModule,
    NzDividerModule,
    NzBreadCrumbModule,
    
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    HttpClientModule,
    //  SharedModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN }
  ],
  bootstrap: [AppComponent],
  exports:[
    NzSliderModule,
    NzSpinModule,
    NzGridModule,
    NzLayoutModule,
    NzButtonModule,
    NzMenuModule,
    NzAvatarModule,
    NzPopoverModule,
    NzMessageModule,
    NzTableModule,
  ]
})
export class AppModule { }
