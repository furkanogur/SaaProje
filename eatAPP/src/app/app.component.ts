import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from './services/services.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  yemekid:string;
  constructor(
    public route:ActivatedRoute,
    public servis:ServicesService
  ) {}
  

  ngOnInit(): void {
    this.route.params.subscribe(p=>{
      if(p){
        this.yemekid = p.yemekid
      }
    })
  }
}
