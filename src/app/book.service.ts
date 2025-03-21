// book.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Book {
  id: string;
  title: string;
  author: string;
  read: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'http://localhost:8000/books/';

  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get<Book[]>(this.apiUrl);
  }

  addBook(book: Partial<Book>) {
    return this.http.post<Book>(this.apiUrl, book);
  }

  updateBook(book: Book) {
    return this.http.put<Book>(`${this.apiUrl}${book.id}`, book);
  }

  deleteBook(id: string) {
    return this.http.delete(`${this.apiUrl}${id}`);
  }
}