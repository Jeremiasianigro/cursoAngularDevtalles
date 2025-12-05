import { Routes } from '@angular/router';
import { CountryLayout } from './layouts/countryLayout/countryLayout';
import { ByCapitalPage } from './pages/by-capital-page/by-capital-page';
import { ByCoutryPage } from './pages/by-coutry-page/by-coutry-page';
import { ByRegionPage } from './pages/by-region-page/by-region-page';
import { CountryPage } from './pages/country-page/country-page';


export const countryRoutes: Routes = [

  {
    path: '',
    component: CountryLayout,
    children: [
      {
        path: 'by-capital',
        component: ByCapitalPage,
      },
      {
        path: 'by-country',
        component: ByCoutryPage,
      },
            {
        path: 'by-region',
        component: ByRegionPage,
      },
      {
        path: 'by/:code',
        component: CountryPage
      },
      {
        path: '**',
        redirectTo: 'by-capital',
      }
    ]
  },

];

export default countryRoutes;
