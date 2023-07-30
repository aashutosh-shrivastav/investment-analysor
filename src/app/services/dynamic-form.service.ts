import { Injectable } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DynamicFormService {

  constructor() { }

  createForm(formGroupConfig:FormGroupConfig[]) : FormGroup{
    return new FormGroup({});
  }
}

interface FormControlConfig {
  type: string; // e.g., 'input', 'select', 'checkbox'
  initialValue?: any;
  placeholder?: string;
  // Other control-specific properties
  // ...
}

// Interface for defining custom validators
interface CustomValidator {
  name: string;
  validatorFn: (value: any) => {[key: string]: any} | null;
}

// Interface for dependent field configuration
interface DependentFieldConfig {
  controlName: string; // Name of the control to which the dependency applies
  dependency: string; // Name of the control on which this control depends
  // Additional configuration properties specific to the dependency
  // ...
}

// Interface for interdependent form group configuration
interface InterdependentFormGroupConfig {
  formGroupNames: string[]; // Names of the form groups that have interdependencies
  validatorFn: () => {[key: string]: any} | null; // Function to validate interdependencies
}

// Interface for the form group configuration
interface FormGroupConfig {
  formGroupName: string; // Name of the form group
  controls: {[key: string]: FormControlConfig}; // Map of control names to their configurations
  customValidators?: CustomValidator[]; // Custom validators for the form group controls
  dependentFields?: DependentFieldConfig[]; // Dependencies between form controls
  interdependentGroups?: InterdependentFormGroupConfig[]; // Interdependencies between form groups
}

export interface FormFieldRow{
  cols:number;
  gutterSize?:string;
  rowHeight:string | number;
  cells:Cell[];
}

export interface Cell {
  colspan:number;
  rowspan:number;
}

export interface FormFieldCell<T> extends Cell  {
  fieldDetail:FieldDetail<T>;
}

export interface FieldDetail<T>{
  value: T|undefined;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  type: string;
  options: {key: string, value: string}[];

}
