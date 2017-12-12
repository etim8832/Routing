import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpductDetailComponent } from './rpduct-detail.component';

describe('RpductDetailComponent', () => {
  let component: RpductDetailComponent;
  let fixture: ComponentFixture<RpductDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpductDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
