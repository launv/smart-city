import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { SelectModule } from 'primeng/select';
import { ToastModule } from 'primeng/toast';
import { SmartCityStore } from '../../store/smart-city.store';
@Component({
  selector: 'app-dispatch-modal',
  imports: [
    CommonModule,
    FormsModule,
    DialogModule,
    SelectModule,
    ButtonModule,
    ToastModule,
  ],
  templateUrl: './dispatch-modal.html',
  styleUrl: './dispatch-modal.scss',
})
export class DispatchModal {
  readonly store = inject(SmartCityStore);
}
