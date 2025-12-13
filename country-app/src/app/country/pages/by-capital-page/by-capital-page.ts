
import { Component, inject, linkedSignal, resource, signal, type ResourceLoaderParams } from '@angular/core';
import { SearchInput } from '../../components/search-input/search-input';
import { CountryService } from '../../services/countryService';
import { Country } from '../../interfaces/country.interface';
import { firstValueFrom } from 'rxjs';
import { CountryList } from "../../components/country-list/country-list";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInput, CountryList],
  templateUrl: './by-capital-page.html',
})
export class ByCapitalPage {
  countryService = inject(CountryService);


  activatedRoute = inject(ActivatedRoute);
  queryParam = this.activatedRoute.snapshot.queryParamMap.get('query') ?? '';
  query = linkedSignal(() => this.queryParam);

  countryResource = resource<Country[], { query: string }>({
    // En Angular 20 es `params`, no `request`
    params: () => ({ query: this.query() }),

    // El parámetro del loader es ResourceLoaderParams<{ query: string }>
    loader: async ({ params }: ResourceLoaderParams<{ query: string }>) => {

      console.log({query: params});
      if (!params.query) return [];

      return await firstValueFrom(this.countryService.searchByCapital(params.query));
    },
  });
}

