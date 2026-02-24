import React from 'react';
import { useNavigate } from 'react-router-dom';

const RoleManagement: React.FC = () => {
  const navigate = useNavigate();
  
  const roles = [
    {
        name: '超级管理员',
        code: 'SYSTEM_ADMIN',
        count: 12,
        desc: '核心权限：拥有系统全局访问权限，包括组织架构设置、角色定义、数据备份及全平台会议室管控。',
        icon: 'admin_panel_settings',
        color: 'bg-primary/10 text-primary',
        avatars: 3
    },
    {
        name: '审批负责人',
        code: 'APPROVAL_ADMIN',
        count: 45,
        desc: '核心权限：负责会议室预订申请的在线审批、资源冲突协调及各部门会议资源使用报告导出。',
        icon: 'verified_user',
        color: 'bg-amber-100 text-amber-500',
        avatars: 42
    },
    {
        name: '普通员工',
        code: 'EMPLOYEE',
        count: 1280,
        desc: '核心权限：可查看会议室实时状态、发起会议预订、邀请参会人员及使用移动端扫码签到功能。',
        icon: 'badge',
        color: 'bg-emerald-100 text-emerald-500',
        avatars: 1000
    }
  ];

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark pb-20">
      <header className="px-6 py-4 flex items-center justify-between sticky top-0 z-40 bg-background-light/90 backdrop-blur-sm">
        <div className="flex items-center space-x-3">
            <button onClick={() => navigate('/departments')} className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700">
                <span className="material-icons-round text-slate-600 dark:text-slate-300">arrow_back_ios_new</span>
            </button>
            <h1 className="text-xl font-bold tracking-tight">角色管理</h1>
        </div>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30">
            <span className="material-icons-round">add</span>
        </button>
      </header>

      <main className="px-6">
        <div className="mt-4 mb-8">
            <div className="relative">
                <span className="material-icons-round absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                <input className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-slate-800 border-none rounded-2xl shadow-sm focus:ring-2 focus:ring-primary/20 text-sm outline-none" placeholder="搜索角色名称..." type="text"/>
            </div>
        </div>

        <div className="space-y-4">
            {roles.map((role) => (
                 <div key={role.code} className="group bg-white dark:bg-slate-800 p-5 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 hover:border-primary transition-all active:scale-[0.98]">
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-4">
                            <div className={`w-14 h-14 ${role.color} flex items-center justify-center rounded-2xl`}>
                                <span className="material-icons-round text-3xl">{role.icon}</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">{role.name}</h3>
                                <p className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider">{role.code}</p>
                            </div>
                        </div>
                        <div className="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-[10px] font-bold text-slate-500 dark:text-slate-400">
                            {role.count.toLocaleString()} 人
                        </div>
                    </div>
                    <div className="space-y-2">
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            {role.desc}
                        </p>
                        <div className="pt-4 flex items-center justify-between border-t border-slate-50 dark:border-slate-700/50">
                            <div className="flex -space-x-2">
                                <div className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-800 bg-slate-200"></div>
                                <div className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-800 bg-slate-300"></div>
                                <div className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-800 bg-slate-400 flex items-center justify-center text-[8px] font-bold text-white">
                                    {role.avatars > 2 ? '+' : ''}{role.avatars}
                                </div>
                            </div>
                            <span className="material-icons-round text-slate-300 dark:text-slate-600">chevron_right</span>
                        </div>
                    </div>
                 </div>
            ))}
        </div>
      </main>
    </div>
  );
};

export default RoleManagement;