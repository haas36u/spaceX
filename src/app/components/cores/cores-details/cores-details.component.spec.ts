import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoresDetailsComponent } from './cores-details.component';

describe('CoresDetailsComponent', () => {
  let component: CoresDetailsComponent;
  let fixture: ComponentFixture<CoresDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoresDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoresDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
