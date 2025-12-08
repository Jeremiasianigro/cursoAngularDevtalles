
import { Component, inject, resource, signal, type ResourceLoaderParams } from '@angular/core';
import { SearchInput } from '../../components/search-input/search-input';
import { CountryService } from '../../services/countryService';
import { Country } from '../../interfaces/country.interface';
import { firstValueFrom } from 'rxjs';
import { CountryList } from "../../components/country-list/country-list";

@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInput, CountryList],
  templateUrl: './by-capital-page.html',
})
export class ByCapitalPage {
  countryService = inject(CountryService);
  query = signal('');

  countryResource = resource<Country[], { query: string }>({
    // En Angular 20 es `params`, no `request`
    params: () => ({ query: this.query() }),

    // El parámetro del loader es ResourceLoaderParams<{ query: string }>
    loader: async ({ params }: ResourceLoaderParams<{ query: string }>) => {
      if (!params.query) return [];

      return await firstValueFrom(this.countryService.searchByCapital(params.query));
    },
  });
}

