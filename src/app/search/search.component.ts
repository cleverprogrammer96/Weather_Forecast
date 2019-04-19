import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {WeatherService}  from '../weather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 
  @Output() dataEvent = new EventEmitter();
  url:string;
  constructor(private weatherService:WeatherService) { }

  ngOnInit() {
  }

  onClick(city) {
    
    this.url=`http://api.apixu.com/v1/forecast.json?key=037b6ab5fd844696b5c130247191904&q=${city}&days=7`
    this.weatherService.getData(this.url).subscribe((data)=>{
      
      this.dataEvent.emit(data)
    })

  }

}
