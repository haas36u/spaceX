import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreThumbComponent } from './core-thumb.component';

describe('CoreThumbComponent', () => {
  let component: CoreThumbComponent;
  let fixture: ComponentFixture<CoreThumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreThumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
