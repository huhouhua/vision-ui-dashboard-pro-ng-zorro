import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../../shared/shared.module";
import { TwoerComponent } from "../twoer/twoer.component";
import { CpTableComponent } from "./table/cp-table.component";
import { Table1Component } from "./table/table1/table1.component";
import Table3Component from "./table/table3/table3.component";
import { Table4Component } from './table/table4/table4.component';
import { Table2Component } from './table/table2/table2.component';
import { EditProductComponent } from './table/table2/components/edit-product/edit-product.component';
import { CreateProductComponent } from './table/table2/components/create-product/create-product.component';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
 declarations:[
    TwoerComponent,
    Table1Component,
    CpTableComponent,
    Table3Component,
    Table4Component,
    Table2Component,
    EditProductComponent,
    CreateProductComponent,
 ],
 imports:[

    CommonModule,
    SharedModule,
    FormsModule
 ]

})

export class ApplicationModule{

}