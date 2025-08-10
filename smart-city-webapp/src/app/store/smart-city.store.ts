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
import { MessageService } from 'primeng/api';

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

  withMethods(
    (
      store,
      service = inject(SurveillanceService),
      messageService = inject(MessageService)
    ) => ({
      setSelectedCameras: (cameras: Camera[]) => {
        patchState(store, { selectedCameras: cameras });
      },

      loadInitialData() {
        return service
          .getRealtimeAlerts()
          .pipe(
            tap((alert) => {
              const alerts: Alert[] = [alert, ...store.alerts()];

              // Giới hạn số lượng cảnh báo hiển thị
              if (alerts.length > 5) {
                alerts.splice(5);
              }
              patchState(store, { alerts });
            })
          )
          .subscribe();
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
          const message = `Đã điều động bảo vệ ${guard.name} đến vị trí: ${alert.location}`;
          messageService.add({
            severity: 'success',
            summary: 'Thành công',
            detail: message,
            life: 3000,
          });
        }
        this.closeDispatchModal();
      },
    })
  ),

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
