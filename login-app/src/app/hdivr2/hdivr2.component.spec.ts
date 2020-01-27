import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hdivr2Component } from './hdivr2.component';

describe('Hdivr2Component', () => {
  let component: Hdivr2Component;
  let fixture: ComponentFixture<Hdivr2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hdivr2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hdivr2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
