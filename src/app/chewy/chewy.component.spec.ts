import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChewyComponent } from './chewy.component';

describe('ChewyComponent', () => {
  let component: ChewyComponent;
  let fixture: ComponentFixture<ChewyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChewyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChewyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
