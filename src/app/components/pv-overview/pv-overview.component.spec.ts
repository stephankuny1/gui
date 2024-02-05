import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvOverviewComponent } from './pv-overview.component';

describe('PvOverviewComponent', () => {
  let component: PvOverviewComponent;
  let fixture: ComponentFixture<PvOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PvOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PvOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
