import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  standalone: true,
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  imports: [CommonModule]
})
export class BookListComponent implements OnInit {
  books!: Book[];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }

  onDeleteBook(id: number): void {
    this.bookService.deleteBook(id);
    this.books = this.bookService.getBooks();
  }

  onUpdateStatus(book: Book, status: string): void {
    book.status = status;
    this.bookService.updateBook(book);
  }
}
