import { Component, input, output } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'country-list',
  imports: [],
  templateUrl: './country-list.html',
})
export class CountryList {
  countries = input.required<Country[]>();
}
