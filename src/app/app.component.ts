import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WeatherService } from './weather.service';

import {WeatherResponse} from './WeatherResponse'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather-app';
  public inputText = '';

  weatherResponse: WeatherResponse | undefined;

  searchForm: FormGroup;

  constructor(private fb: FormBuilder, private weatherService: WeatherService,
    private router: Router){
    this.searchForm=this.fb.group({
      search: ['', [Validators.required, Validators.minLength(3)]]
    })
  }
}
