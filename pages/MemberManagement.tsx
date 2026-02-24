import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { User } from '../types';
import { useNavigate } from 'react-router-dom';

const MemberManagement: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.getUsers().then(setUsers);
  }, []);

  const getRoleBadge = (role: string) => {
    if (role === 'admin') return <span className="px-1.5 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-bold uppercase">管理员</span>;
    if (role === 'approver') return <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-600 text-[10px] font-bold uppercase">审批员</span>;
    return <span className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-500 text-[10px] font-bold uppercase">员工</span>;
  }

  const getAvatarColor = (idx: number) => {
      const colors = ['bg-primary/10 text-primary', 'bg-amber-100 text-amber-600', 'bg-emerald-100 text-emerald-600', 'bg-indigo-100 text-indigo-600', 'bg-rose-100 text-rose-600'];
      return colors[idx % colors.length];
  }

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark pb-24">
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="px-4 h-11 flex items-center justify-between">
            <button onClick={() => navigate('/')} className="text-primary flex items-center gap-1">
                <span className="material-icons-round text-2xl">chevron_left</span>
                <span className="text-[17px]">返回</span>
            </button>
            <h1 className="text-[17px] font-semibold">成员管理</h1>
            <div className="flex items-center gap-3">
                <button className="text-primary">
                    <span className="material-icons-round text-2xl">add</span>
                </button>
            </div>
        </div>
        <div className="px-4 pb-3 pt-1">
            <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="material-icons-round text-gray-400 text-xl">search</span>
                </div>
                <input className="block w-full pl-10 pr-3 py-2 bg-gray-200/50 dark:bg-gray-800/50 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-gray-800 transition-all placeholder-gray-500 outline-none" placeholder="搜索姓名、工号或部门" type="text"/>
            </div>
        </div>
      </header>

      <main className="p-4 space-y-3">
        <div className="flex justify-between items-end px-1 mb-2">
            <h2 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">全部成员 ({users.length})</h2>
            <button className="text-primary text-sm flex items-center gap-1 font-medium">
                <span className="material-icons-round text-sm">file_download</span>
                批量导入
            </button>
        </div>

        <div className="space-y-[1px] bg-gray-200 dark:bg-gray-800 rounded-2xl overflow-hidden">
            {users.map((user, idx) => (
                <div key={user.id} className="bg-white dark:bg-slate-900 p-4 flex items-center gap-4 active:bg-gray-50 dark:active:bg-gray-800 transition-colors cursor-pointer">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${getAvatarColor(idx)}`}>
                        {user.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-[17px]">{user.name}</span>
                            {getRoleBadge(user.role)}
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5 truncate">
                            ID: {user.employeeId} · {user.department}
                        </p>
                    </div>
                    <div className="flex items-center text-gray-300 dark:text-gray-600">
                        <span className="material-icons-round">chevron_right</span>
                    </div>
                </div>
            ))}
        </div>

        <div className="text-center py-6">
            <p className="text-xs text-gray-400 dark:text-gray-600">已显示全部 {users.length} 位成员</p>
        </div>
      </main>
      
      <div className="fixed bottom-24 right-6">
        <button className="w-14 h-14 bg-primary text-white rounded-full shadow-lg shadow-primary/30 flex items-center justify-center active:scale-95 transition-transform">
            <span className="material-icons-round text-3xl">person_add</span>
        </button>
      </div>
    </div>
  );
};

export default MemberManagement;