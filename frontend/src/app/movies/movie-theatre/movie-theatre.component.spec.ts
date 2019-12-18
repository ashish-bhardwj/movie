import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTheatreComponent } from './movie-theatre.component';

describe('MovieTheatreComponent', () => {
  let component: MovieTheatreComponent;
  let fixture: ComponentFixture<MovieTheatreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieTheatreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieTheatreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
