import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  addToReadingList,
  clearSearch,
  getAllBooks,
  searchBooks
} from '@tmo/books/data-access';
import { FormBuilder, FormControl } from '@angular/forms';
import { Book } from '@tmo/shared/models';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'tmo-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnDestroy {

  searchResults: Subscription;
  books$ = this.store.select(getAllBooks);
  searchForm = new FormControl('');

  constructor(
    private readonly store: Store,
    private readonly fb: FormBuilder
  ) {
    this.searchResults = this.searchForm.valueChanges
      .pipe(debounceTime(500),
      distinctUntilChanged())
      .subscribe((value) => {
        // Make an HTTP request to search for the given value
        this.searchBooks(value)
      });

  }


  formatDate(date: void | string) {
    return date
      ? new Intl.DateTimeFormat('en-US').format(new Date(date))
      : undefined;
  }

  addBookToReadingList(book: Book) {
    this.store.dispatch(addToReadingList({ book }));
  }

  searchExample() {
    this.searchForm.setValue('javascript');
  }

  searchBooks(value) {
    value ? this.store.dispatch(searchBooks({ term: value })) : this.store.dispatch(clearSearch());
  }

  ngOnDestroy(): void {
     this.searchResults.unsubscribe();
  }
}
