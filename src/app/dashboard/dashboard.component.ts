import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WeatherService } from '../weather.service';
import { WeatherResponse } from '../WeatherResponse';


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  title = 'weather-app';
  public inputText: any;

  weatherResponse: WeatherResponse | undefined;

  searchForm: FormGroup;

  constructor(private fb: FormBuilder, private weatherService: WeatherService,
    private router: Router){
    this.searchForm=this.fb.group({
      search: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  searchCity(){
    const cityValue = this.searchForm.value.search;
    this.weatherService.getWeather(cityValue);
    this.router.navigate(['/search-results']);
   // })
    
  }
}
