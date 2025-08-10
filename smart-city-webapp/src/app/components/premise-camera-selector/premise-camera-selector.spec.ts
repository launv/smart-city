import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiseCameraSelector } from './premise-camera-selector';

describe('PremiseCameraSelector', () => {
  let component: PremiseCameraSelector;
  let fixture: ComponentFixture<PremiseCameraSelector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PremiseCameraSelector]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PremiseCameraSelector);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
