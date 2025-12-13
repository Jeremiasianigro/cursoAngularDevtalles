import { Component, inject, resource, ResourceLoaderParams, signal } from '@angular/core';
import { CountryList } from "../../components/country-list/country-list";
import { Region } from '../../interfaces/region.type';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/countryService';
import { firstValueFrom } from 'rxjs';


@Component({
  selector: 'app-by-region-page',
  imports: [CountryList],
  templateUrl: './by-region-page.html',
})
export class ByRegionPage {

    countryService = inject(CountryService);

    public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic',
  ];

  selectedRegion = signal<Region | null>(null);

  countryResource = resource<Country[], { region: Region | null }>({
    // En Angular 20 es `params`, no `request`
    params: () => ({ region: this.selectedRegion() }),

    // El parámetro del loader es ResourceLoaderParams<{ region: Region | null }>
    loader: async ({ params }: ResourceLoaderParams<{ region: Region | null }>) => {
      if (!params.region) return [];

      return await firstValueFrom(this.countryService.searchByRegion(params.region));
    },
  });

 }
