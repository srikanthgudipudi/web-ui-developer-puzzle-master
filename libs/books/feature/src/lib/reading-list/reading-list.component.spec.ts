import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedTestingModule, createReadingListItem } from '@tmo/shared/testing';
import { ReadingListItem } from '@tmo/shared/models';
import { ReadingListComponent } from './reading-list.component';
import { BooksFeatureModule } from '@tmo/books/feature';
import { finishedReadingList } from '@tmo/books/data-access';

describe('ReadingListComponent', () => {
  let component: ReadingListComponent;
  let fixture: ComponentFixture<ReadingListComponent>;
  const readingList: ReadingListItem = createReadingListItem('1');

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [BooksFeatureModule, SharedTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch action finishedReadingList when Mark as Finished button is clicked', () => {
    const dispatchSpy = jest.spyOn((component as any).store, 'dispatch');

    component.markBookAsFinished(readingList);

    expect(dispatchSpy).toHaveBeenCalledWith(finishedReadingList({ bookId : '1' }));
  });
});
