export const DUMMY_DATA = {
  premises: [
    { id: 1, name: 'Tòa nhà A' },
    { id: 2, name: 'Trạm biến áp B' },
    { id: 3, name: 'Kho hàng C' },
  ],

  alertTypes: [
    'trespass',
    'suspicious_activity',
    'equipment_failure',
    'unauthorized_access',
    'fire_alarm',
    'smoke_detection',
  ],

  alertLocations: [
    'Hàng rào đông',
    'Cổng chính',
    'Khu vực sản xuất',
    'Phòng máy chủ',
    'Bãi đỗ xe',
    'Kho hàng',
    'Tầng hầm',
  ],

  cameras: [
    {
      id: 101,
      name: 'Camera Cổng chính',
      streamUrl:
        'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
    },
    {
      id: 102,
      name: 'Camera Hàng rào đông',
      streamUrl:
        'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
    },
    {
      id: 103,
      name: 'Camera Bãi đỗ xe',
      streamUrl:
        'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
    },
    {
      id: 104,
      name: 'Camera Khu vực sản xuất',
      streamUrl:
        'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
    },
    {
      id: 105,
      name: 'Camera Khu vực IT',
      streamUrl:
        'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
    },
  ],

  guards: [
    { id: '1', name: 'Nguyễn Văn A' },
    { id: '2', name: 'Lê Thị B' },
    { id: '3', name: 'Trần Văn C' },
  ],

  mockAlerts: [
    {
      id: 1,
      type: 'trespass',
      timestamp: new Date(),
      location: 'Hàng rào đông',
      cameraId: 102,
    },
    {
      id: 2,
      type: 'suspicious_activity',
      timestamp: new Date(),
      location: 'Cổng chính',
      cameraId: 101,
    },
    {
      id: 3,
      type: 'equipment_failure',
      timestamp: new Date(),
      location: 'Trạm biến áp B',
      cameraId: 103,
    },
  ],
};
