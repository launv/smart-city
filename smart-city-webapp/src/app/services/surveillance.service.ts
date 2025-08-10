import { Injectable } from '@angular/core';
import { timer, map as rxMap } from 'rxjs';
import { Premise, Camera, Guard, Alert } from '../interfaces/general.interface';
import { DUMMY_DATA } from '../data/dummy-data';

@Injectable({
  providedIn: 'root',
})
export class SurveillanceService {
  getPremises() {
    return new Promise<Premise[]>((resolve) =>
      setTimeout(() => resolve(DUMMY_DATA.premises), 500)
    );
  }
  getCamerasByPremise(premiseId: number) {
    return new Promise<Camera[]>((resolve) =>
      setTimeout(() => resolve(DUMMY_DATA.cameras), 500)
    );
  }
  getGuards() {
    return new Promise<Guard[]>((resolve) =>
      setTimeout(() => resolve(DUMMY_DATA.guards), 500)
    );
  }
  getRealtimeAlerts() {
    return timer(0, 5000).pipe(rxMap(() => this.createRandomAlert()));
  }
  // Phương thức tạo cảnh báo ngẫu nhiên
  private createRandomAlert(): Alert {
    const randomType =
      DUMMY_DATA.alertTypes[
        Math.floor(Math.random() * DUMMY_DATA.alertTypes.length)
      ];
    const randomLocation =
      DUMMY_DATA.alertLocations[
        Math.floor(Math.random() * DUMMY_DATA.alertLocations.length)
      ];
    const randomCameraId =
      DUMMY_DATA.cameras[Math.floor(Math.random() * DUMMY_DATA.cameras.length)]
        .id;

    return {
      id: Math.floor(Math.random() * 1000000),
      type: randomType,
      timestamp: new Date(),
      location: randomLocation,
      cameraId: randomCameraId,
    };
  }
}
