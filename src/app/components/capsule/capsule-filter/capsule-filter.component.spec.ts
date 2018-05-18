import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapsuleFilterComponent } from './capsule-filter.component';

describe('CapsuleFilterComponent', () => {
  let component: CapsuleFilterComponent;
  let fixture: ComponentFixture<CapsuleFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapsuleFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapsuleFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
