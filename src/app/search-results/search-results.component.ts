import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'search-results',
  templateUrl: './search-results.component.html'
})
export class SearchResultsComponent {
  title = 'Search Results';


  constructor(public weatherService: WeatherService,
    private router: Router){

  }

public goBack(){
  this.router.navigate(['/dashboard']);
}


    
  
}
