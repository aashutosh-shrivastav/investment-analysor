import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { RangeForm, RangeOperatorType } from 'src/app/models/models';

@Component({
  selector: 'app-range-form',
  templateUrl: './range-form.component.html',
  styleUrls: ['./range-form.component.scss']
})
export class RangeFormComponent implements OnInit{

  @Input() form!:FormGroup<RangeForm>;
  @Input() index!:number;
  rangeTypes =[{id:RangeOperatorType.EQUAL,value:"Equal"},{id:RangeOperatorType.BETWEEN,value:"Between"}]
  ngOnInit(): void {

  }
}
