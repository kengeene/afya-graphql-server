export const analyticMetrics = [
  {
    "id": "1",
    "name": "Footfall",
    "value": 2000,
    "trend": 0.05,
    "unit": "patients"
  },
  {
    "id": "2",
    "name": "Patient Satisfaction",
    "value": 85,
    "trend": 0.02,
    "unit": "%"
  },
  {
    "id": "3",
    "name": "Revenue",
    "value": 150000,
    "trend": 0.1,
    "unit": "USD"
  }
]

export const footfallMetrics = [
  {
    "id": "1",
    "count": 13000,
    "trend": 0.08,
    "startDate": "2024-07-01",
    "endDate": "2024-07-31",
    "location": "1"
  },
  {
    "id": "2",
    "count": 9000,
    "trend": 0.05,
    "startDate": "2024-07-01",
    "endDate": "2024-07-31",
    "location": "2"
  }
]

export const locations = [
  {
    id: "1",
    name: "Main Hospital",
    visits: 1200,
    keyIssues: ["1", "2"],
    npsData: ["1", "2"],
  },
  {
    id: "2",
    name: "Clinic A",
    visits: 800,
    keyIssues: ["3"],
    npsData: ["3", "4"],
  },
];


export const npsMetrics = [
  {
    id: "1",
    location: "1",
    staffName: "Dr. Smith",
    efficiencyDelta: 0.05,
    npsDelta: 0.1,
    efficiency: 0.85,
    reportedIssues: 2,
    npsScore: 70,
  },
  {
    id: "2",
    location: "1",
    staffName: "Nurse John",
    efficiencyDelta: -0.02,
    npsDelta: -0.05,
    efficiency: 0.78,
    reportedIssues: 3,
    npsScore: 60,
  },
  {
    id: "3",
    location: "2",
    staffName: "Dr. Emily",
    efficiencyDelta: 0.08,
    npsDelta: 0.12,
    efficiency: 0.9,
    reportedIssues: 1,
    npsScore: 80,
  },
  {
    id: "4",
    location: "2",
    staffName: "Nurse Jane",
    efficiencyDelta: 0.03,
    npsDelta: 0.07,
    efficiency: 0.82,
    reportedIssues: 2,
    npsScore: 75,
  },
];


export const visits = [
  {
    "id": "1",
    "location": "1",
    "count": 300,
    "date": "2024-07-01"
  },
  {
    "id": "2",
    "location": "2",
    "count": 200,
    "date": "2024-07-02"
  }
]

export const keyIssues = [
  {
    "id": "1",
    "type": "Equipment Failure",
    "location": "1",
    "count": 5
  },
  {
    "id": "2",
    "type": "Staff Shortage",
    "location": "1",
    "count": 3
  },
  {
    "id": "3",
    "type": "Long Wait Time",
    "location": "2",
    "count": 4
  }
]

