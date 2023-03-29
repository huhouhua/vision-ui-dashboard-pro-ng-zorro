import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';



@NgModule({
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule,

      NzSpinModule,
      NzSliderModule,
      NzCardModule,
      NzSelectModule,
      NzInputModule,
      NzInputNumberModule,
      NzDividerModule,
      NzBreadCrumbModule,

      
      NzButtonModule,
      NzGridModule,
      NzAvatarModule,
      NzPopoverModule,
      NzMessageModule,
      NzTableModule,
      
    ],
    declarations: [],
    exports: [
      NzSpinModule,
      NzSliderModule,
      NzCardModule,
      NzSelectModule,
      NzInputModule,
      NzInputNumberModule,
      NzDividerModule,
      NzBreadCrumbModule,

      NzButtonModule,
      NzGridModule,
      NzAvatarModule,
      NzPopoverModule,
      NzMessageModule,
      NzTableModule,
    ],
    providers: [],
  })

export class SharedModule {}
