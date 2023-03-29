import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "../../shared/shared.module";
import { TwoerComponent } from "../twoer/twoer.component";
import { CpTableComponent } from "./table/cp-table/cp-table.component";
import { Table1Component } from "./table/table1/table1.component";
import { Table2Component } from "./table/table2/table2.component";

@NgModule({
 declarations:[
    TwoerComponent,
    Table1Component,
    CpTableComponent,
    Table2Component,
 ],
 imports:[
    CommonModule,
    SharedModule,
    FormsModule
 ]

})

export class ApplicationModule{

}