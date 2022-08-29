import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
 public result: any;

  constructor(private client: HttpClient) { }

 public getWeather(city: string): void{
   const headers = {
    'X-RapidAPI-Key':'967d161a6fmsh6d884ac6d4a6234p1537ccjsne551155876b7',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
   };
 this.client.get(` https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`, {headers: headers}).subscribe((response: any)=>{
   this.result = response;
   console.log('--resp', response);
 });
  }

  
 public searchCity(city: string): Observable<any>{
  const headers = {
   'X-RapidAPI-Key':'967d161a6fmsh6d884ac6d4a6234p1537ccjsne551155876b7',
   'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  };
return this.client.get(`https://weatherapi-com.p.rapidapi.com/search.json?q=${city}`, {headers: headers});
 }
}
