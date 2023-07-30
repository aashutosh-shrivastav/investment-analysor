import { Injectable } from "@angular/core";
import { BankDetails } from "../models/models";

@Injectable({providedIn:"root"})
export class BankDetailService {

  readonly bankDetails:BankDetails[] = []

  getBankDetail(strBankId:string){
    if(strBankId){
      let idx = this.bankDetails.findIndex(bank=>bank.bankId === strBankId);
      if(idx > -1){
        return this.bankDetails[idx];
      }
    }
    return null;
  }

  setBankDetail(bankDetails:BankDetails){
    let idx = this.bankDetails.findIndex(bank=>bank.bankId === bankDetails.bankId);
    if(idx >-1){
      this.bankDetails[idx] = bankDetails;
    }
    else{
      this.bankDetails.push(bankDetails);
    }
  }
}
