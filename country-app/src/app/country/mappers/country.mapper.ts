import type { Country } from "../interfaces/country.interface";
import type { RESTCountry } from "../interfaces/rest-countries.interfaces";



export class CountryMapper{

  static mapRestCountryToCountry(restCountry: RESTCountry): Country {

    return {
      capital: restCountry.capital?.join(','),
      cca2: restCountry.cca2,
      coatOfArmsSvg: restCountry.coatOfArms.svg ?? '',
      flagSvg: restCountry.flags.svg,
      iconAlt: restCountry.flags.alt ?? '',
      name: restCountry.translations['spa'].common,
      population: restCountry.population,
      region: restCountry.region,
      subRegion: restCountry.subregion,
    }

  }

  static mapRestCountryArrayToCountryArray(restCountries: RESTCountry[]): Country[]{
    return restCountries.map(this.mapRestCountryToCountry);
  }




}
