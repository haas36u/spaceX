import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoresThumbComponent } from './cores-thumb.component';

describe('CoresThumbComponent', () => {
  let component: CoresThumbComponent;
  let fixture: ComponentFixture<CoresThumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoresThumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoresThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
