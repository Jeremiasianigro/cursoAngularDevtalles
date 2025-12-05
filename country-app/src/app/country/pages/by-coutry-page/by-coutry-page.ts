import { Component } from '@angular/core';
import { SearchInput } from "../../components/search-input/search-input";
import { CountryList } from "../../components/country-list/country-list";

@Component({
  selector: 'app-by-coutry-page',
  imports: [SearchInput, CountryList],
  templateUrl: './by-coutry-page.html',
})
export class ByCoutryPage { }
