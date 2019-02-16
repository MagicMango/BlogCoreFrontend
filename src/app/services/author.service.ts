import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Author } from '../entities/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) { }

  getAuthors(): Observable<Array<Author>> {
    const backendUrl = environment.backendURL;
    console.log(backendUrl);
    return this.http.get<Array<Author>>(backendUrl + '/authors');
  }

  createAuthor(author: Author) {
    const backendUrl = environment.backendURL;
    return this.http.post<Author>(backendUrl + '/authors/create', author
    , {
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    });
  }
}
