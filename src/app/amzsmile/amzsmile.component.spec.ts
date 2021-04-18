import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmzsmileComponent } from './amzsmile.component';

describe('AmzsmileComponent', () => {
  let component: AmzsmileComponent;
  let fixture: ComponentFixture<AmzsmileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmzsmileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmzsmileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
