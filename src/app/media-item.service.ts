import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MediaItemInterface } from './media-item-interface';
import { map,catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaItemService {

  constructor(private http: HttpClient) { }
  private _url = "http://10.112.31.212:8080/api/salepoint";
  
  // mediaItems = [
  //   {
  //     id : 1,
  //     name: 'hello',
  //     medium: 'Series',
  //     category: 'Comedy',
  //     year:2019,
  //     watchedOn:1234567898745,
  //     isFavorite: true
  //   },
  //   {
  //     id : 2,
  //     name: 'hello 02',
  //     medium: 'Series',
  //     category: 'Science',
  //     year:2019,
  //     watchedOn:14092562019,
  //     isFavorite: false
  //   },
  //   {
  //     id : 3,
  //     name: 'hello 03',
  //     medium: 'Movies',
  //     category: 'Action',
  //     year:2019,
  //     watchedOn:null,
  //     isFavorite: true
  //   },
  //   {
  //     id : 4,
  //     name: 'hello 04',
  //     medium: 'Movies',
  //     category: 'Fiction',
  //     year:2019,
  //     watchedOn:null,
  //     isFavorite: true
  //   }
  // ];


  get():Observable<MediaItemInterface[]>{
    // const getOptions = {
    //   params: { medium }
    // };
    return this.http.get<MediaItemInterface[]>(this._url)
    .pipe(
      catchError(this.handleError)

    );
    
  }

  

  add(mediaItem: MediaItemInterface){
    return this.http.post(this._url, mediaItem)
    .pipe(
      catchError(this.handleError)
    );
  }

  delete(mediaItem: MediaItemInterface){
    return this.http.delete(this._url +'/'+ mediaItem.id)
    .pipe(
      catchError(this.handleError)
    );
   }

   private handleError(error: HttpErrorResponse) {
    console.error(error.message);
    return throwError('A data error occurred, please try again.');
  }
}

