import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RangeFormComponent } from './range-form/range-form.component';
import { InvestmentDetailFormComponent } from './investment-detail-form/investment-detail-form.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RangeFormComponent,
    InvestmentDetailFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports:[
    RangeFormComponent,
    InvestmentDetailFormComponent
  ]
})
export class CoreModule { }
