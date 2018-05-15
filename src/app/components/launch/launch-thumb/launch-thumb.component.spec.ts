import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchThumbComponent } from './launch-thumb.component';

describe('LaunchThumbComponent', () => {
  let component: LaunchThumbComponent;
  let fixture: ComponentFixture<LaunchThumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchThumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
