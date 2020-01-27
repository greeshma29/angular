import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HdivrComponent } from './hdivr.component';

describe('HdivrComponent', () => {
  let component: HdivrComponent;
  let fixture: ComponentFixture<HdivrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HdivrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HdivrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
