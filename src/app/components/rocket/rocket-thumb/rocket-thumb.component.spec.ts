import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketThumbComponent } from './rocket-thumb.component';

describe('RocketThumbComponent', () => {
  let component: RocketThumbComponent;
  let fixture: ComponentFixture<RocketThumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketThumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
