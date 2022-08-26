import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private client: HttpClient) { }

  getWeather(city: string): Observable<any>{
    const headerOptions =new HttpParams().set('q', city).set('apiKey',environment.apiKey);
    return this.client.get('url',{params: headerOptions});

  }
}
