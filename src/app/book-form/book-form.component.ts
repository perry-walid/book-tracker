import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  standalone: true,
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
  imports: [FormsModule]
})
export class BookFormComponent {
  book: Book = new Book(0, '', '', '', 0, 'Reading');

  constructor(private bookService: BookService) {}

  onSubmit(): void {
    this.bookService.addBook(this.book);
    this.book = new Book(0, '', '', '', 0, 'Reading');
  }
}
