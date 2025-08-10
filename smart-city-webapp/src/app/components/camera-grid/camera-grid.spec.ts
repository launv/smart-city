import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraGrid } from './camera-grid';

describe('CameraGrid', () => {
  let component: CameraGrid;
  let fixture: ComponentFixture<CameraGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CameraGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CameraGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
