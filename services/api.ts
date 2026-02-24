import { supabase } from '../lib/supabase';
import { Room, Approval, Stats, Department, User } from '../types';

// --- MOCK DATA ---

const MOCK_ROOMS: Room[] = [
  {
    id: '1',
    name: '阿波罗会议室',
    capacity: '4-6人',
    location: '3楼 A区',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    status: 'idle',
    facilities: ['videocam', 'edit_note', 'cast']
  },
  {
    id: '2',
    name: '雅典娜多功能厅',
    capacity: '10-12人',
    location: '5楼 C区',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80',
    status: 'in-use',
    facilities: ['videocam', 'mic'],
    nextAvailable: '14:30 (还剩 45 分钟)'
  },
  {
    id: '3',
    name: '波塞冬工作室',
    capacity: '2-3人',
    location: '2楼 休息区',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80',
    status: 'idle',
    facilities: ['wifi', 'power']
  }
];

const MOCK_APPROVALS: Approval[] = [
  {
    id: '1',
    applicant: {
      name: '张明远',
      role: '产品研发部 · 高级工程师',
      avatar: 'https://i.pravatar.cc/150?u=zhang'
    },
    roomName: '智慧岛 A-203 视频会议室',
    time: '今天 14:00 - 16:30 (共2.5小时)',
    description: '需要与上海分公司进行季度产品路线图讨论会，预计参与人数12人。',
    status: 'pending',
    appliedAt: '10:24 AM'
  },
  {
    id: '2',
    applicant: {
      name: '李诗琪',
      role: '市场运营部 · 经理',
      avatar: 'https://i.pravatar.cc/150?u=li'
    },
    roomName: '星空 10-02 洽谈室',
    time: '明天 09:30',
    status: 'pending',
    appliedAt: '09:15 AM'
  },
  {
    id: '3',
    applicant: {
      name: '王小川',
      role: '人力资源部 · 专员',
      avatar: 'https://i.pravatar.cc/150?u=wang'
    },
    roomName: '主楼 3-12 面试间',
    time: '10月15日 14:00',
    status: 'pending',
    appliedAt: 'Yesterday'
  }
];

const MOCK_STATS: Stats = {
  todayBookings: 128,
  todayBookingsTrend: 12,
  vacancyRate: 15.4,
  vacancyRateTrend: -2.1,
  savedHours: 42,
  zoneDistribution: [
    { name: 'A区', value: 60, color: '#6366f1' },
    { name: 'B区', value: 25, color: '#38bdf8' },
    { name: 'C区', value: 15, color: '#94a3b8' }
  ]
};

const MOCK_DEPTS: Department[] = [
  { id: '1', name: '研发中心', memberCount: 128, subDepartments: [
      { id: '1-1', name: '前端开发部', memberCount: 42 },
      { id: '1-2', name: '后端开发部', memberCount: 56 },
      { id: '1-3', name: '测试运维部', memberCount: 30 },
  ]},
  { id: '2', name: '产品设计部', memberCount: 24 },
  { id: '3', name: '市场运营部', memberCount: 45 },
  { id: '4', name: '行政财务部', memberCount: 12 },
];

const MOCK_USERS: User[] = [
  { id: '1', name: '张伟', employeeId: '2023001', department: '研发部', role: 'admin', avatar: '张' },
  { id: '2', name: '李明', employeeId: '2023042', department: '市场部', role: 'employee', avatar: '李' },
  { id: '3', name: '王秀英', employeeId: '2023015', department: '行政部', role: 'approver', avatar: '王' },
  { id: '4', name: '赵雷', employeeId: '2023088', department: '产品组', role: 'employee', avatar: '赵' },
  { id: '5', name: '陈思思', employeeId: '2023091', department: '财务部', role: 'employee', avatar: '陈' },
];

// --- SERVICE METHODS ---

export const api = {
  async getStats(): Promise<Stats> {
    if (supabase) {
        // Implement real DB fetching here
        // const { data } = await supabase.from('stats').select('*').single();
        // return data;
    }
    return new Promise(resolve => setTimeout(() => resolve(MOCK_STATS), 500));
  },

  async getRooms(): Promise<Room[]> {
    if (supabase) {
        const { data, error } = await supabase.from('rooms').select('*');
        if (!error && data) return data as any;
    }
    return new Promise(resolve => setTimeout(() => resolve(MOCK_ROOMS), 600));
  },

  async getApprovals(): Promise<Approval[]> {
     if (supabase) {
        // Fetch approvals
     }
     return new Promise(resolve => setTimeout(() => resolve(MOCK_APPROVALS), 500));
  },

  async getDepartments(): Promise<Department[]> {
      return new Promise(resolve => setTimeout(() => resolve(MOCK_DEPTS), 400));
  },
  
  async getUsers(): Promise<User[]> {
      return new Promise(resolve => setTimeout(() => resolve(MOCK_USERS), 400));
  }
};
