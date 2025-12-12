import { Component, inject, resource, ResourceLoaderParams } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/countryService';
import { Country } from '../../interfaces/country.interface';
import { NotFound } from "../../../shared/components/not-found/not-found";
import { CountryInformation } from "./country-information/country-information";


@Component({
  selector: 'app-country-page',
  imports: [NotFound, CountryInformation],
  templateUrl: './country-page.html',
})
export class CountryPage {
  countryCode = inject(ActivatedRoute).snapshot.params['code'];
  countryService = inject(CountryService);


countryResource = resource<Country | undefined, { code: string }>({
    // En Angular 20 es `params`, no `request`
    params: () => ({ code: this.countryCode }),
    loader: async ({ params }: ResourceLoaderParams<{ code: string }>) => {
      return await this.countryService.searchByAlphaCode(params.code).toPromise();
    },
  });



}
