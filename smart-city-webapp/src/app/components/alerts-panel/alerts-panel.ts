import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SmartCityStore } from '../../store/smart-city.store';

@Component({
  selector: 'app-alerts-panel',
  imports: [CommonModule, CardModule, ButtonModule],
  templateUrl: './alerts-panel.html',
  styleUrl: './alerts-panel.scss',
  
})
export class AlertsPanel {
  readonly store = inject(SmartCityStore);
}
