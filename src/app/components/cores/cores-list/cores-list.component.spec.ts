import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoresListComponent } from './cores-list.component';

describe('CoresListComponent', () => {
  let component: CoresListComponent;
  let fixture: ComponentFixture<CoresListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoresListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
