import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  weatherData;
  title = 'The Weather App';
  
  pushData(data) {
    this.weatherData = data;
   
  }

}
