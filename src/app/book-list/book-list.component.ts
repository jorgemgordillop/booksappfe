
import { Component, OnInit } from '@angular/core';
import { BookService, Book } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  newBook: Partial<Book> = { title: '', author: '', read: false };

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this.bookService.getBooks().subscribe(data => this.books = data);
  }

  addBook() {
    if (!this.newBook.title || !this.newBook.author) return;
    this.bookService.addBook(this.newBook).subscribe(() => {
      this.loadBooks();
      this.newBook = { title: '', author: '', read: false }; 
    });
  }

  deleteBook(id: string) {
    this.bookService.deleteBook(id).subscribe(() => this.loadBooks());
  }
}