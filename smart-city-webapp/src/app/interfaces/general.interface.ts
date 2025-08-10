export interface Premise {
  id: number;
  name: string;
}

export interface Camera {
  id: number;
  name: string;
  streamUrl: string;
}

export interface Alert {
  id: number;
  type: string;
  timestamp: Date;
  location: string;
  cameraId: number;
}

export interface Guard {
  id: string;
  name: string;
}
