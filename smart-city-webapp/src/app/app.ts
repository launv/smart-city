import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { SmartCityStore } from './store/smart-city.store';
import { PremiseCameraSelector } from "./components/premise-camera-selector/premise-camera-selector";
import { AlertsPanel } from "./components/alerts-panel/alerts-panel";
import { CameraGrid } from "./components/camera-grid/camera-grid";
import { DispatchModal } from "./components/dispatch-modal/dispatch-modal";

@Component({
  selector: 'app-root',
  imports: [CommonModule, MenubarModule, PremiseCameraSelector, AlertsPanel, CameraGrid, DispatchModal],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  
  standalone: true,
})
export class App {
  protected readonly title = signal('smart-city-webapp');

  readonly store = inject(SmartCityStore);

  menuItems = [{ label: 'Dashboard' }];

  constructor() {}

  ngOnInit(): void {
    this.store.loadInitialData();
    this.store.loadPremises();
    this.store.loadGuards();
  }
}
