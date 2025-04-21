import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  addBook(book: Book) : Observable<Book> {
    // Call API

    const err = new Error("new error")
    return of(book)
  }
}
