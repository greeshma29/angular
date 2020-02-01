import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccupdateComponent } from './accupdate.component';

describe('AccupdateComponent', () => {
  let component: AccupdateComponent;
  let fixture: ComponentFixture<AccupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
