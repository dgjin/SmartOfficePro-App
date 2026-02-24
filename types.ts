export interface Room {
  id: string;
  name: string;
  capacity: string;
  location: string;
  image: string;
  status: 'idle' | 'in-use' | 'maintenance';
  facilities: string[];
  nextAvailable?: string;
}

export interface Approval {
  id: string;
  applicant: {
    name: string;
    avatar: string;
    role: string;
  };
  roomName: string;
  time: string;
  description?: string;
  status: 'pending' | 'approved' | 'rejected';
  appliedAt: string;
}

export interface Department {
  id: string;
  name: string;
  memberCount: number;
  subDepartments?: Department[];
}

export interface User {
  id: string;
  name: string;
  role: 'admin' | 'approver' | 'employee';
  department: string;
  avatar?: string;
  employeeId: string;
}

export interface Stats {
  todayBookings: number;
  todayBookingsTrend: number;
  vacancyRate: number;
  vacancyRateTrend: number;
  savedHours: number;
  zoneDistribution: { name: string; value: number; color: string }[];
}
