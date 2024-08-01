export const analyticMetrics = [
  {
    id: "1",
    name: "Footfall",
    data: [
      { month: "January", value: 186 },
      { month: "February", value: 21 },
      { month: "March", value: 237 },
      { month: "April", value: 34 },
      { month: "May", value: 632 },
      { month: "June", value: 400 },
    ],
    unit: "patients",
  },
  {
    id: "2",
    name: "Patient Satisfaction",
    data: [
      { month: "January", value: 324 },
      { month: "February", value: 12 },
      { month: "March", value: 123 },
      { month: "April", value: 73 },
      { month: "May", value: 64 },
      { month: "June", value: 312 },
    ],
    unit: "%",
  },
  {
    id: "3",
    name: "Revenue",
    data: [
      { month: "January", value: 186 },
      { month: "February", value: 305 },
      { month: "March", value: 237 },
      { month: "April", value: 73 },
      { month: "May", value: 30 },
      { month: "June", value: 30 },
    ],
    unit: "USD",
  },
];

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
    name: "Kiambu",
    visits: 1200,
    keyIssues: ["1", "2"],
    npsData: ["1", "2"],
  },
  {
    id: "2",
    name: "Mukuru Kwa Ruben",
    visits: 10,
    keyIssues: ["3"],
    npsData: ["3", "4"],
  },
  {
    id: "3",
    name: "Mukuru Kwa Njenga",
    visits: 50,
    keyIssues: ["3"],
    npsData: ["3", "4"],
  },
  {
    id: "4",
    name: "Ruaka",
    visits: 20,
    keyIssues: ["3"],
    npsData: ["3", "4"],
  },
  {
    id: "5",
    name: "Baba Ndogo",
    visits: 800,
    keyIssues: ["3"],
    npsData: ["3", "4"],
  },
  {
    id: "6",
    name: "Mukuru Kayaba",
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
    type: "Equipment Failure",
    location: "1",
    count: 5,
  },
  {
    type: "Staff Shortage",
    location: "1",
    count: 3,
  },
  {
    type: "Long Wait Time",
    location: "2",
    count: 4,
  },
  {
    type: "Patient Satisfaction",
    location: "2",
    count: 4,
  },
  ,
  {
    type: "Late check-in",
    location: "2",
    count: 4,
  },
  ,
  {
    type: "Delay in lab",
    location: "2",
    count: 4,
  },
];

