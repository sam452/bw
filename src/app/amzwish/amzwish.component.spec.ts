import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmzwishComponent } from './amzwish.component';

describe('AmzwishComponent', () => {
  let component: AmzwishComponent;
  let fixture: ComponentFixture<AmzwishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmzwishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmzwishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
