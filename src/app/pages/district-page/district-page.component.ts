import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-district-page',
  templateUrl: './district-page.component.html',
  styleUrls: ['./district-page.component.css']
})
export class DistrictPageComponent {
  single:any
  constructor(private hero:HeroService,private router:Router) {}
    district=this.hero.getData();

    gotohere(id: string){
      localStorage.setItem('id',id)
      this.router.navigate(['/single-district'])
    }
  }
    
  



 


function gotohere(id: any, any: any) {
  throw new Error('Function not implemented.');
}

