import { Injectable } from '@angular/core';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [];

  getBooks(): Book[] {
    return this.books;
  }

  addBook(book: Book): void {
    this.books.push({ ...book, id: this.books.length + 1 });
  }

  updateBook(updatedBook: Book): void {
    const index = this.books.findIndex(b => b.id === updatedBook.id);
    if (index !== -1) {
      this.books[index] = updatedBook;
    }
  }

  deleteBook(id: number): void {
    this.books = this.books.filter(b => b.id !== id);
  }
}
