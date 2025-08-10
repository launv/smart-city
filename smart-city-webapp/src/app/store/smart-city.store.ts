import { computed, inject } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { tap } from 'rxjs';
import { Alert, Camera, Guard, Premise } from '../interfaces/general.interface';
import { SurveillanceService } from '../services/surveillance.service';

const initialState = {
  premises: [] as Premise[],
  cameras: [] as Camera[],
  alerts: [] as Alert[],
  guards: [] as Guard[],
  selectedPremiseId: null as number | null,
  selectedCameras: [] as Camera[],
  dispatchModalVisible: false,
  selectedAlert: null as Alert | null,
  selectedGuardId: null as string | null,
};

export const SmartCityStore = signalStore(
  { providedIn: 'root' },

  withState(initialState),

  withMethods((store, service = inject(SurveillanceService)) => ({
    setSelectedCameras: (cameras: Camera[]) => {
      patchState(store, { selectedCameras: cameras });
    },

    loadInitialData: () => {
      return service.getRealtimeAlerts().pipe(
        tap((alert) => {
          const alerts: Alert[] = [alert, ...store.alerts()];

          patchState(store, { alerts });
        })
      );
    },
    loadPremises() {
      return service.getPremises().then((premises) => {
        console.log(premises);

        patchState(store, { premises });
      });
    },
    loadCameras(premiseId: number) {
      return service.getCamerasByPremise(premiseId).then((cameras) => {
        console.log(cameras);

        patchState(store, { cameras, selectedCameras: [] });
      });
    },
    loadGuards() {
      return service.getGuards().then((guards) => {
        console.log(guards);

        patchState(store, { guards });
      });
    },
    selectPremise(id: number) {
      patchState(store, { selectedPremiseId: id });
      this.loadCameras(id);
    },
    toggleCameraSelection(camera: Camera) {
      //   store.selectedCameras.update((cameras) => {
      //     const index = cameras.findIndex((c) => c.id === camera.id);
      //     if (index > -1) {
      //       return cameras.filter((c) => c.id !== camera.id);
      //     } else {
      //       return cameras.length < 4 ? [...cameras, camera] : cameras;
      //     }
      //   });
    },
    openDispatchModal(alert: Alert) {
      patchState(store, { selectedAlert: alert, dispatchModalVisible: true });
    },
    closeDispatchModal() {
      patchState(store, {
        selectedAlert: null,
        selectedGuardId: null,
        dispatchModalVisible: false,
      });
    },
    setGuard(selectedGuardId: string) {
      patchState(store, { selectedGuardId });
    },
    dispatchGuard() {
      const alert = store.selectedAlert();
      const guard = store
        .guards()
        .find((g) => g.id === store.selectedGuardId());
      if (alert && guard) {
        console.log(
          `Đã điều động bảo vệ ${guard.name} đến vị trí: ${alert.location}`
        );
      }
      this.closeDispatchModal();
    },
  })),

  withComputed((store) => ({
    videoSlots: computed(() => {
      const selectedCameras = store.selectedCameras();
      return [
        ...selectedCameras,
        ...Array(4 - selectedCameras.length).fill(null),
      ];
    }),
    canDispatch: computed(
      () => !!store.selectedGuardId() && !!store.selectedAlert()
    ),
  }))
);
