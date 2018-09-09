import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthquakesListComponent } from './earthquakes-list.component';

describe('EarthquakesListComponent', () => {
  let component: EarthquakesListComponent;
  let fixture: ComponentFixture<EarthquakesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarthquakesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarthquakesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
