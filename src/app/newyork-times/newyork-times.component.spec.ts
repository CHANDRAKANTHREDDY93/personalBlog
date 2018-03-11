import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewyorkTimesComponent } from './newyork-times.component';

describe('NewyorkTimesComponent', () => {
  let component: NewyorkTimesComponent;
  let fixture: ComponentFixture<NewyorkTimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewyorkTimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewyorkTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
