import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzMessageModule } from 'ng-zorro-antd/message';


@NgModule({
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule,
      NzLayoutModule,
      NzGridModule,
      NzButtonModule,
      NzSpinModule,
      NzSliderModule,
    NzMenuModule,
    NzAvatarModule,
    NzPopoverModule,
    NzMessageModule,
    NzTableModule,
    ],
    declarations: [],
    exports: [
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
    ],
    providers: [],
  })

export class SharedModule {}
