import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHeadrComponent } from './user-headr.component';

describe('UserHeadrComponent', () => {
  let component: UserHeadrComponent;
  let fixture: ComponentFixture<UserHeadrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserHeadrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHeadrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
