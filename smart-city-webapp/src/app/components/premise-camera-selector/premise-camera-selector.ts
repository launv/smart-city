import { Component, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { SelectModule } from 'primeng/select';
import { SmartCityStore } from '../../store/smart-city.store';
import { MultiSelectModule } from 'primeng/multiselect';

@Component({
  selector: 'app-premise-camera-selector',
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    SelectModule,
    MultiSelectModule,
  ],
  templateUrl: './premise-camera-selector.html',
  styleUrl: './premise-camera-selector.scss',
})
export class PremiseCameraSelector {
  readonly store = inject(SmartCityStore);

  selectedCameras = this.store.selectedCameras();

  onCameraSelectChange(cameras: any[]): void {
    this.store.setSelectedCameras(cameras);
  }
}
