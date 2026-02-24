import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { api } from '../services/api';
import { Stats } from '../types';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const [stats, setStats] = useState<Stats | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    api.getStats().then(setStats);
  }, []);

  if (!stats) return <div className="p-8 text-center text-slate-400">Loading...</div>;

  return (
    <div className="px-6 space-y-6 animate-fade-in">
      <header className="flex items-center justify-between py-2">
        <button onClick={() => navigate('/approvals')} className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700">
          <span className="material-icons-round text-slate-600 dark:text-slate-300">task</span>
        </button>
        <h1 className="text-lg font-bold">数据全景看板</h1>
        <button onClick={() => navigate('/config')} className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 text-primary">
          <span className="material-icons-round">settings</span>
        </button>
      </header>

      {/* KPI Cards */}
      <section className="grid grid-cols-3 gap-3">
        <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center">
          <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium mb-1">今日预订</span>
          <span className="text-xl font-bold text-primary">{stats.todayBookings}</span>
          <span className="text-[10px] text-emerald-500 mt-1">+{stats.todayBookingsTrend}% ↑</span>
        </div>
        <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center">
          <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium mb-1">空置率</span>
          <span className="text-xl font-bold text-slate-800 dark:text-slate-100">{stats.vacancyRate}%</span>
          <span className="text-[10px] text-rose-500 mt-1">{stats.vacancyRateTrend}% ↓</span>
        </div>
        <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center">
          <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium mb-1">节省工时</span>
          <span className="text-xl font-bold text-slate-800 dark:text-slate-100">{stats.savedHours}h</span>
          <span className="text-[10px] text-slate-400 mt-1">本周</span>
        </div>
      </section>

      {/* Donut Chart */}
      <section className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-bold text-slate-800 dark:text-slate-100">区域资源分布</h2>
          <span className="text-xs text-slate-400">实时统计</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="relative w-44 h-44">
             <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={stats.zoneDistribution}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={0}
                    dataKey="value"
                    stroke="none"
                    startAngle={90}
                    endAngle={-270}
                  >
                    {stats.zoneDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} cornerRadius={10} />
                    ))}
                  </Pie>
                </PieChart>
             </ResponsiveContainer>
             <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-2xl font-black text-slate-800 dark:text-slate-100">85%</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest">总占用</span>
             </div>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-8 w-full">
            {stats.zoneDistribution.map((zone) => (
                <div key={zone.name} className="flex flex-col items-center odd:border-r-0 even:border-x border-slate-100 dark:border-slate-700">
                    <div className="flex items-center space-x-1.5 mb-1">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: zone.color }}></div>
                        <span className="text-xs text-slate-500 dark:text-slate-400">{zone.name}</span>
                    </div>
                    <span className="font-bold">{zone.value}%</span>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meeting List */}
      <section className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-slate-800 dark:text-slate-100">实时会议动态</h2>
          <button className="text-primary text-xs font-semibold">查看全部</button>
        </div>
        
        <div className="space-y-3">
          <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex flex-col items-center justify-center text-primary">
              <span className="text-[10px] font-bold">14:00</span>
              <span className="text-[10px] opacity-70">START</span>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-sm">Q3 产品规划同步会</h3>
              <div className="flex items-center text-slate-400 dark:text-slate-500 text-[11px] mt-1">
                <span className="material-icons-round text-sm mr-1">meeting_room</span>
                <span>A区 - 珠穆朗玛会议室</span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold">即将开始</span>
              <div className="flex -space-x-2 mt-2">
                 {[1,2].map(i => <div key={i} className="w-5 h-5 rounded-full border-2 border-white dark:border-slate-800 bg-slate-300"></div>)}
                 <div className="w-5 h-5 rounded-full border-2 border-white dark:border-slate-800 bg-primary flex items-center justify-center text-[8px] text-white">+4</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;