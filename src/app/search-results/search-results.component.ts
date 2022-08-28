import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'search-results',
  templateUrl: './search-results.component.html'
})
export class SearchResultsComponent {
  title = 'Search Results';


  constructor(public weatherService: WeatherService){

  }




    
  
}
