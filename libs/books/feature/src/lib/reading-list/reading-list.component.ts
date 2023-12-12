import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { addToReadingList, getReadingList, removeFromReadingList } from '@tmo/books/data-access';


@Component({
  selector: 'tmo-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss']
})
export class ReadingListComponent {
  readingList$ = this.store.select(getReadingList);

  constructor(private readonly store: Store,
    private _snackBar: MatSnackBar) {}

  removeFromReadingList(item) {
    this.store.dispatch(removeFromReadingList({ item }));
    let snackBarRef = this._snackBar.open( item.title + ' Removed from the Reading list', 'UNDO', {
      duration: 3000
    });
    snackBarRef.onAction().subscribe(() => {
      this.store.dispatch(addToReadingList({ book: { ...item, id: item.id } }));
    });
  }
}
