import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeOfIndiaComponent } from './time-of-india.component';

describe('TimeOfIndiaComponent', () => {
  let component: TimeOfIndiaComponent;
  let fixture: ComponentFixture<TimeOfIndiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeOfIndiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeOfIndiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
