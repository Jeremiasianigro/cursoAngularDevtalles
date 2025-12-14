import { Component, inject, linkedSignal, resource, ResourceLoaderParams, signal } from '@angular/core';
import { CountryList } from "../../components/country-list/country-list";
import { Region } from '../../interfaces/region.type';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/countryService';
import { firstValueFrom } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

function validateRegion(queryParams: string): Region{
  queryParams = queryParams.toLowerCase();
  const validRegions: Record<string, Region> = {
    'africa': 'Africa',
    'americas': 'Americas',
    'asia': 'Asia',
    'europe': 'Europe',
    'oceania': 'Oceania',
    'antarctic': 'Antarctic',
  };
  return validRegions[queryParams] ?? 'Americas';
}

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

  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  queryParam = this.activatedRoute.snapshot.queryParamMap.get('region') ?? '';

  selectedRegion = linkedSignal<Region>(() => validateRegion(this.queryParam));

  countryResource = resource<Country[], { region: Region | null }>({
    // En Angular 20 es `params`, no `request`
    params: () => ({ region: this.selectedRegion() }),

    // El parámetro del loader es ResourceLoaderParams<{ region: Region | null }>
    loader: async ({ params }: ResourceLoaderParams<{ region: Region | null }>) => {
      if (!params.region) return [];

        this.router.navigate(['/country/by-region'], {
        queryParams: { region: params.region },
      });

      return await firstValueFrom(this.countryService.searchByRegion(params.region));
    },
  });

 }
