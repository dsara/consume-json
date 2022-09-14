import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { JSONComment } from './json-comment';

@Injectable({
  providedIn: 'root'
})
export class JsonFetcherService {

  constructor(private http: HttpClient) { }

  getJSONFromUrl(url: string): Observable<Array<JSONComment>> {
    return this.http.get(url, {
      responseType: 'json'
    }).pipe(
      map((value) => {
        let allComments: Array<JSONComment> = value as Array<JSONComment>;
        return allComments;
      })
    )
  }
}
