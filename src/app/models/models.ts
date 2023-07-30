import { FormControl, FormArray, FormGroup } from "@angular/forms";

export interface BankDetails{
  bankId:string|null|undefined;
  investmentDetails:InvestmentDetail[]
}
export interface InvestmentDetail{
  investmentType:InvestmentType;
  compoundingType:string
  range:Range[];
}
export interface Range{
  rate:number;
  fromAmount:number;
  operator:string;
  toAmount:number;
}

export type RangeOperatorType = 'EQUAL' | 'BETWEEN' ;
export const RangeOperatorType = {
  EQUAL: 'EQUAL' as RangeOperatorType,
  BETWEEN: 'BETWEEN' as RangeOperatorType
};

export type CompoundingType = 'D' | 'M' | 'Q' | 'Y';
export const CompoundingType = {
  D: 'D' as CompoundingType,
  M: 'M' as CompoundingType,
  Q: 'Y' as CompoundingType,
  Y: 'Y' as CompoundingType
};

export type InvestmentType = 'S' | 'FD';

export const InvestmentType = {
    S: 'S' as InvestmentType,
    FD: 'FD' as InvestmentType
};

export interface BankDetailsForm{
  bankId:FormControl<string | null>;
  investmentDetails:FormArray<FormGroup<InvestmentDetailForm>>;
}

export interface InvestmentDetailForm{
  investmentType:FormControl<string | null>;
  compoundingType:FormControl<string | null>;
  range:FormArray<FormGroup<RangeForm>>;
}
export interface RangeForm{
  fromAmount:FormControl<number| null>;
  operator:FormControl<string | null>;
  toAmount:FormControl<number | null>;
  rate:FormControl<number | null>;
}
