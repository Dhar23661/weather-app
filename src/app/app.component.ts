import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather-app';

  weatherResponse: WeatherResponse | undefined;

  searchForm: FromGroup;

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
