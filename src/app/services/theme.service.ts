import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(@Inject(DOCUMENT) private document:Document){
  }
  addTheme(themeClassName:string):void {
    let classList =  this.document.body.classList;
    if(classList){
      classList.add(themeClassName);
    }
    else{
      this.document.body.setAttribute("class",themeClassName);
    }
  }
  removeTheme(themeClassName:string):void {
    let classList =  this.document.body.classList;
    if(classList){
      classList.remove(themeClassName);
    }
  }
}
