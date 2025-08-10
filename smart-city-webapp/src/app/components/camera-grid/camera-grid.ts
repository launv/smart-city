import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { SmartCityStore } from '../../store/smart-city.store';

@Component({
  selector: 'app-camera-grid',
  imports: [CommonModule, CardModule],
  templateUrl: './camera-grid.html',
  styleUrl: './camera-grid.scss',
  
})
export class CameraGrid {
  readonly store = inject(SmartCityStore);
}
