import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsunamiPotentialPageComponent } from './tsunami-potential-page.component';

describe('TsunamiPotentialPageComponent', () => {
  let component: TsunamiPotentialPageComponent;
  let fixture: ComponentFixture<TsunamiPotentialPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsunamiPotentialPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsunamiPotentialPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
