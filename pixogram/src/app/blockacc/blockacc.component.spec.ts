import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockaccComponent } from './blockacc.component';

describe('BlockaccComponent', () => {
  let component: BlockaccComponent;
  let fixture: ComponentFixture<BlockaccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockaccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockaccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
