import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormControlState, FormGroup, Validators } from '@angular/forms';
import { BankDetails, BankDetailsForm, CompoundingType, InvestmentDetailForm, InvestmentType, RangeForm, RangeOperatorType } from '../models/models';
import { BankDetailService } from '../services/bankDetail.service';

@Component({
  selector: 'app-onboard-bank',
  templateUrl: './onboard-bank.component.html',
  styleUrls: ['./onboard-bank.component.scss']
})
export class OnboardBankComponent implements OnInit {
  formGroup!: FormGroup<BankDetailsForm>;
  investmentOptions = [{id:InvestmentType.S,value:"Saving"},{id:InvestmentType.FD,value:"Fixed Deposit"}]
  compoundingOptions = [
    {id:CompoundingType.D,value:"Daily"},
    {id:CompoundingType.M,value:"Monthly"},
    {id:CompoundingType.Q,value:"Quarterly"},
    {id:CompoundingType.Y,value:"Yearly"}
  ]
  rangeTypes =[{id:RangeOperatorType.EQUAL,value:"Equal"},{id:RangeOperatorType.BETWEEN,value:"Between"}]

  constructor(private fb: FormBuilder,private bankDetailService :BankDetailService) { }
  ngOnInit(): void {
    this.formGroup = this.getNewBankDetailForm();
    this.addNewInvestmentDetail();
  }

  getNewBankDetailForm():FormGroup<BankDetailsForm>{
    return  this.fb.group({
      bankId: new FormControl("",Validators.required),
      investmentDetails : new FormArray<FormGroup<InvestmentDetailForm>>([])
    })
  }

  getNewInvestmentDetail():FormGroup<InvestmentDetailForm> {
    return this.fb.group({
      investmentType: new FormControl("", Validators.required),
      compoundingType: new FormControl("", Validators.required),
      range: this.fb.array<FormGroup<RangeForm>>([this.getRangeForm()])
    })
  }

  getRangeForm():FormGroup<RangeForm> {
    return this.fb.group<RangeForm>({
      fromAmount: new FormControl(0, [Validators.required, Validators.min(0)]),
      operator: new FormControl("", [Validators.required, Validators.min(0)]),
      toAmount: new FormControl(0, [Validators.required, Validators.min(0)]),
      rate: new FormControl(0, [Validators.required, Validators.min(0)])
    });
  }

  addNewInvestmentDetail() {
    const investmentDetailsFormArray = this.formGroup.controls.investmentDetails
    investmentDetailsFormArray.push(this.getNewInvestmentDetail());
  }

  addNewRange(investMentDetailForm: FormGroup<InvestmentDetailForm>) {
    investMentDetailForm.controls.range.push(this.getRangeForm())
  }
  deleteInstructionDetailAtIndex(index:number)
  {
    this.formGroup.controls.investmentDetails.removeAt(index);
  }

  get investmentDetailsFormArray():FormArray<FormGroup<InvestmentDetailForm>>{
    return this.formGroup.controls.investmentDetails
  }

  getrangeFormArray(investmentDetailForm:FormGroup<InvestmentDetailForm>):FormGroup<RangeForm>[]{
    return investmentDetailForm.controls.range.controls;
  }

  saveBankDetails(){
    this.bankDetailService.setBankDetail(this.formGroup.value as BankDetails)
  }
  getBankDetails(bankId:string){
    return this.bankDetailService.getBankDetail(bankId);
  }
}


