import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchpadThumbComponent } from './launchpad-thumb.component';

describe('LaunchpadThumbComponent', () => {
  let component: LaunchpadThumbComponent;
  let fixture: ComponentFixture<LaunchpadThumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchpadThumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchpadThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
