import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from './weather.service';

import {WeatherResponse} from './WeatherResponse'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather-app';

  weatherResponse: WeatherResponse | undefined;

  searchForm: FormGroup;

  constructor(private fb: FormBuilder, private weatherService: WeatherService){
    this.searchForm=this.fb.group({
      search: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  searchCity(){
    const cityValue = this.searchForm.value.search;
    this.weatherService.getWeather(cityValue).subscribe(res=>{
      console.log(res.body);
      this.weatherResponse=res.body;
    })
    
  }
}
