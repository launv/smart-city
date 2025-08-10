import { Injectable } from '@angular/core';
import { map, timer } from 'rxjs';
import { Premise, Camera, Guard } from '../interfaces/general.interface';
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
    return timer(0, 5000).pipe(
      map((i) => DUMMY_DATA.mockAlerts[i % DUMMY_DATA.mockAlerts.length])
    );
  }
}
