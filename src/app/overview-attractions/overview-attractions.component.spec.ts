import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewAttractionsComponent } from './overview-attractions.component';

describe('OverviewAttractionsComponent', () => {
  let component: OverviewAttractionsComponent;
  let fixture: ComponentFixture<OverviewAttractionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewAttractionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewAttractionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
