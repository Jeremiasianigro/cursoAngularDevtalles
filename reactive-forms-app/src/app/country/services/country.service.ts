import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';


@Injectable({providedIn: 'root'})
export class CountryService {

  private baseUrl = 'https://restcountries.com/v3.1'
  private http = inject(HttpClient);


  private _region = [
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Africa'
  ]


  get region(): string[]{
    return [ ... this._region]
  }

  getCountriesByRegion (region: string): Observable<Country[]>{
    if(!region) return of([]);

    console.log({region});

    const url = `${this.baseUrl}/region/${region}?fields=cca3,name,borders`
    return this.http.get<Country[]>(url);
  }

  getCountryByAlphaCode(alphaCode: string): Observable<Country>{

    const url = `${this.baseUrl}/alpha/${alphaCode}?fields=cca3,name,borders`
    return this.http.get<Country>(url);
  }

  getCountryBorderByCodes(border:string){
    //TODO: por hacer
  }

}
