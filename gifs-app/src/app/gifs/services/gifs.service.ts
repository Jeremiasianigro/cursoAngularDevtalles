import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gig.mapper';
import { map } from 'rxjs';

@Injectable({providedIn: 'root'})
export class GifService {

  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal(true);

  constructor() {
    this.loadTrendingGifs();
  }


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
        map((items) => GifMapper.mapGiphyItemsToGifArray(items))

        // TODO: hacer el historial

      );
    }

}
