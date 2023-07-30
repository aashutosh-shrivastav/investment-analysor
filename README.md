# InvestmentAnalysor

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

#Project Planning
1. Angular light dark Themeing : planned 2023-06-09 expected 2023-06-12
2. User Data Input through screen : planned 2023-06-09 expected 2023-06-12
3. Data Analysis metrics : planned 2023-06-09
4. Data Visualization: planned 2023-06-09
5. Data Export csv.: planned 2023-06-09
6. Data Input csv: planned 2023-06-09


#Concept
User inputs list of range and year for a type of investment and system calculates the net profit for that investment type.

#Data Hierarchy
1. Bank
2. Investment details

`
interface InvestMentData{
  bankId:string;
  investmentDetails:InvestmentDetail[]
}
interface InvestmentDetail{
  investmentType:InvestmentTypeEnum;
  compoundingType:string
  range:Range[];
}
interface Range{
  rate:float;
  fromAmount:number;
  operator:string;
  toAmount:number;
}
enum InvestmentTypeEnum{
  Saving: InvestmentTypeEnum as Saving;
  FixedDeposit:InvestmentTypeEnum as FixedDeposit;
}


2 types of  input progressive and period based

for progressive interval will be amount based
for period based interval will be time based.

 as of now developing progressive based input.

 

