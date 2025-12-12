import { Component, input } from '@angular/core';
import { Country } from '../../../interfaces/country.interface';

@Component({
  selector: 'country-information',
  imports: [],
  templateUrl: './country-information.html',
})
export class CountryInformation {

  country = input.required<Country>();
}
