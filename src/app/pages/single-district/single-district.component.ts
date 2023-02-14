import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { district } from 'src/assets/data/data';

@Component({
  selector: 'app-single-district',
  templateUrl: './single-district.component.html',
  styleUrls: ['./single-district.component.css']
})
export class SingleDistrictComponent {
single:any
constructor(private hero: HeroService){}
ngOnInit():void{
  let id=localStorage.getItem('id')
  let singleDataArray=this.hero.getData()
  console.log(singleDataArray);
  this.single=singleDataArray.filter(e=>e.title===id)
  console.log(this.single)
}
}
