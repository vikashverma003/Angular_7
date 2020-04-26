import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Blogpost } from '../class/blogpost';
@Injectable({
  providedIn: 'root'
})
export class BlogpostService {

  serverUrl = 'http://localhost/dev_lie/public/';
 // serverUrl = 'http://localhost:8000/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };



  constructor(private http: HttpClient) { }

  getBlogPosts() {
    return this.http.get<Blogpost[]>(this.serverUrl + 'api/getCategory')
    .pipe(
      catchError(this.handleError)
    );
  }

  createPost (blogpost: Blogpost) {
    return this.http.post<Blogpost>(this.serverUrl + 'api/postCategory', blogpost, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }




}
