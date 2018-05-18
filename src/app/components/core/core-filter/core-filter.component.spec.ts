import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreFilterComponent } from './core-filter.component';

describe('CoreFilterComponent', () => {
  let component: CoreFilterComponent;
  let fixture: ComponentFixture<CoreFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
