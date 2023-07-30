import { Component, Input } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { CompoundingType, InvestmentDetailForm, InvestmentType } from 'src/app/models/models';

@Component({
  selector: 'app-investment-detail-form',
  templateUrl: './investment-detail-form.component.html',
  styleUrls: ['./investment-detail-form.component.scss']
})
export class InvestmentDetailFormComponent {
  @Input() form!:FormGroup<InvestmentDetailForm>;
  @Input() index!:number

  investmentOptions = [{id:InvestmentType.S,value:"Saving"},{id:InvestmentType.FD,value:"Fixed Deposit"}]
  compoundingOptions = [
    {id:CompoundingType.D,value:"Daily"},
    {id:CompoundingType.M,value:"Monthly"},
    {id:CompoundingType.Q,value:"Quarterly"},
    {id:CompoundingType.Y,value:"Yearly"}
  ]

  get rangeFormArray(){
    return this.form.controls.range
  }

}
