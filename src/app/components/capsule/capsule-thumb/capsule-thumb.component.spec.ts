import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapsuleThumbComponent } from './capsule-thumb.component';

describe('CapsuleThumbComponent', () => {
  let component: CapsuleThumbComponent;
  let fixture: ComponentFixture<CapsuleThumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapsuleThumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapsuleThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
