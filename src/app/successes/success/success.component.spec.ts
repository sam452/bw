import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucccesComponent } from './succces.component';

describe('SucccesComponent', () => {
  let component: SucccesComponent;
  let fixture: ComponentFixture<SucccesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucccesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
