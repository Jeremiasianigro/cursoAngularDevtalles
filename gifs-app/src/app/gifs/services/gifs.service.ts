import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gig.mapper';
import { map, tap } from 'rxjs';

const GIF_KEY = 'gifs'


const loadFromLocalStorage = () => {
  const gifsFromLocalStorage = localStorage.getItem(GIF_KEY) ?? '{}';
  const gifs = JSON.parse(gifsFromLocalStorage);
  console.log(gifs);
  return gifs;
}



@Injectable({providedIn: 'root'})
export class GifService {

  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal(true);

  searchHistory = signal <Record<string, Gif[]>>( loadFromLocalStorage() );
  searchHistoryKeys = computed( () => Object.keys(this.searchHistory()) );

  constructor() {
    this.loadTrendingGifs();
  }

  saveGifsToLocalStorage = effect(() => {
    const historyString = JSON.stringify(this.searchHistory());
    localStorage.setItem(GIF_KEY, historyString);

  })





  loadTrendingGifs() {

    this.http.get<GiphyResponse>(`${environment.giphyApiUrl}/gifs/trending`, {
      params: {
        api_key: environment.giphyApiKey,
        limit: '25',
        }
      }).subscribe( response => {
        const gifs = GifMapper.mapGiphyItemsToGifArray( response.data );
        this.trendingGifs.set(gifs);
        this.trendingGifsLoading.set(false);

        console.log({gifs});


      } );
  }

  searchGifs(query: string) {

     return this.http.get<GiphyResponse>(`${environment.giphyApiUrl}/gifs/search`, {
      params: {
        api_key: environment.giphyApiKey,
        limit: '25',
        q: query
        }
      })
      .pipe(
        map (({ data})=> data),
        map((items) => GifMapper.mapGiphyItemsToGifArray(items)),

        tap((items) => {
          this.searchHistory.update( (history) => ({
            ...history,
            [query.toLowerCase()]: items,
          }) );
        })

      );
    }

    getHistoryGifs ( query: string ): Gif[] {
      return this.searchHistory()[query] ?? [];
    }



}
