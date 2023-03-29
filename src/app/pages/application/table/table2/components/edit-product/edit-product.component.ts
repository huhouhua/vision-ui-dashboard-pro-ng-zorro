import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Data } from '../../../table1/table1.component';
import { Option } from 'src/app/shared/commonType';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.less']
})
export class EditProductComponent implements OnInit{
  @Input() data: Data | undefined;
  validateForm!: FormGroup;
  typeOptions: Option[]= [{name:"All",value:0},{name:"Product",value:1},{name:"Component",value:2},{name:"middleware",value:3}];
  constructor(
    private fb: FormBuilder,
  ){}

  ngOnInit(): void {
    const group = {
      name:['',Validators.required],
      type:[''],
      age:['',Validators.required],
      address:['']
    };
    this.validateForm = this.fb.group(group);
  }
  onCancel(){
    
  }
  submitForm(){

  }
}
