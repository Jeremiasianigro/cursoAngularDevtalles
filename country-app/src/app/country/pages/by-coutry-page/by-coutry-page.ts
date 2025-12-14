import { Component, inject, linkedSignal, resource, ResourceLoaderParams, signal } from '@angular/core';
import { SearchInput } from "../../components/search-input/search-input";
import { CountryList } from "../../components/country-list/country-list";
import { firstValueFrom } from 'rxjs';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/countryService';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-by-coutry-page',
  imports: [SearchInput, CountryList],
  templateUrl: './by-coutry-page.html',
})
export class ByCoutryPage {
  countryService = inject(CountryService);

  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  queryParam = this.activatedRoute.snapshot.queryParamMap.get('query') ?? '';
  query = linkedSignal(() => this.queryParam);

  countryResource = resource<Country[], { query: string }>({
    // En Angular 20 es `params`, no `request`
    params: () => ({ query: this.query() }),

    // El parámetro del loader es ResourceLoaderParams<{ query: string }>
    loader: async ({ params }: ResourceLoaderParams<{ query: string }>) => {
      if (!params.query) return [];

      this.router.navigate(['/country/by-country'], {
        queryParams: { query: params.query },
      });

      return await firstValueFrom(this.countryService.searchByCountry(params.query));
    },
  });


 }
