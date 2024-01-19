import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartDeviceComponent } from './smart-device.component';

describe('SmartDeviceComponent', () => {
  let component: SmartDeviceComponent;
  let fixture: ComponentFixture<SmartDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartDeviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
