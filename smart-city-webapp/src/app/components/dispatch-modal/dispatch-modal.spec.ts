import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchModal } from './dispatch-modal';

describe('DispatchModal', () => {
  let component: DispatchModal;
  let fixture: ComponentFixture<DispatchModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DispatchModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DispatchModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
