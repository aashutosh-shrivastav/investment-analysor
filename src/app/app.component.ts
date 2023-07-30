import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly DARK_THEME = "dark-theme"
  title = 'investment-analysor';
  appName:string = "Investment Analysor";
  isDarkTheme = false;
  links:any[] = [
    {
      isActive:true,
      label:"Home",
      link:"/home"
    },
    {
      isActive:false,
      label:"Bank Onboarding",
      link:"/onboard-bank"
    }
  ];
  constructor(private router:Router,private themeService:ThemeService){
  }
  routeTo(link:any){
    if(link && link.link){
      this.links.forEach(l=>{if(l.link !== link.link) l.isActive = false; else{ l.isActive = true;}});
      this.router.navigate([link.link]);
    }
  }
  toggleTheme():void{
    if(!this.isDarkTheme){
      this.themeService.addTheme(this.DARK_THEME);
    }
    else{
      this.themeService.removeTheme(this.DARK_THEME);
    }
    this.isDarkTheme = !this.isDarkTheme
  }
}

