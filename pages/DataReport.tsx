import React from 'react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router-dom';

const DataReport: React.FC = () => {
  const navigate = useNavigate();

  const data = [
    { name: '05-01', value: 40 },
    { name: '05-10', value: 70 },
    { name: '05-20', value: 30 },
    { name: '05-31', value: 80 },
  ];

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark pb-24">
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-2 flex items-center justify-between border-b border-slate-200 dark:border-slate-800">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-primary">
            <span className="material-icons text-2xl">chevron_left</span>
        </button>
        <h1 className="text-lg font-semibold">数据中心报表</h1>
        <button className="p-2 -mr-2 text-primary flex items-center gap-1" title="导出到邮箱">
            <span className="material-icons text-2xl">mail_outline</span>
        </button>
      </header>

      <main className="p-4 space-y-6">
        {/* Date Filter */}
        <section className="space-y-3">
            <div className="flex items-center justify-between">
                <h2 className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">统计周期</h2>
                <button className="text-sm text-primary font-medium flex items-center gap-1">
                    <span className="material-icons text-sm">calendar_month</span>
                    自定义
                </button>
            </div>
            <div className="flex gap-2 overflow-x-auto hide-scrollbar">
                <button className="px-5 py-2 rounded-full bg-primary text-white text-sm font-medium whitespace-nowrap shadow-sm">本月</button>
                <button className="px-5 py-2 rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium whitespace-nowrap border border-slate-200 dark:border-slate-800">上月</button>
                <button className="px-5 py-2 rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium whitespace-nowrap border border-slate-200 dark:border-slate-800">近三月</button>
                <button className="px-5 py-2 rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium whitespace-nowrap border border-slate-200 dark:border-slate-800">今年</button>
            </div>
        </section>

        {/* Chart */}
        <section className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="font-bold text-lg">资源利用率趋势</h3>
                    <p className="text-xs text-slate-400">平均利用率: 72.4%</p>
                </div>
                <div className="text-right">
                    <span className="text-emerald-500 text-sm font-medium flex items-center justify-end">
                        <span className="material-icons text-sm">trending_up</span>
                        +12%
                    </span>
                </div>
            </div>
            <div className="h-40 w-full relative mt-2">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.2}/>
                                <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <Tooltip />
                        <Area type="monotone" dataKey="value" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#94a3b8'}} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </section>

        {/* Ranking */}
        <section className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
            <h3 className="font-bold text-lg mb-4">部门使用时长排行榜</h3>
            <div className="space-y-5">
                <div className="space-y-2">
                    <div className="flex justify-between items-end">
                        <span className="text-sm font-medium flex items-center gap-2">
                            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-yellow-400 text-white text-[10px] font-bold">1</span>
                            研发中心
                        </span>
                        <span className="text-xs font-semibold">1,240 小时</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-[95%] rounded-full"></div>
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="flex justify-between items-end">
                        <span className="text-sm font-medium flex items-center gap-2">
                            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-slate-300 dark:bg-slate-600 text-white text-[10px] font-bold">2</span>
                            市场营销
                        </span>
                        <span className="text-xs font-semibold">890 小时</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-primary/70 w-[65%] rounded-full"></div>
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="flex justify-between items-end">
                        <span className="text-sm font-medium flex items-center gap-2">
                            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-orange-200 dark:bg-orange-800 text-white text-[10px] font-bold">3</span>
                            产品中心
                        </span>
                        <span className="text-xs font-semibold">720 小时</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-primary/40 w-[50%] rounded-full"></div>
                    </div>
                </div>
            </div>
        </section>

        {/* Hot Rooms */}
        <section className="space-y-4">
            <h3 className="font-bold text-lg px-1">热门会议室排行</h3>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                    <div className="mb-3 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <span className="material-icons text-primary">meeting_room</span>
                    </div>
                    <h4 className="font-bold text-sm mb-1 truncate">启航会议室</h4>
                    <p className="text-xs text-slate-400 mb-3">5楼 · 20人</p>
                    <div className="flex items-center justify-between">
                        <span className="text-[10px] text-slate-500">预订次数</span>
                        <span className="text-sm font-bold">142</span>
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                    <div className="mb-3 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <span className="material-icons text-primary">groups</span>
                    </div>
                    <h4 className="font-bold text-sm mb-1 truncate">极客空间</h4>
                    <p className="text-xs text-slate-400 mb-3">2楼 · 8人</p>
                    <div className="flex items-center justify-between">
                        <span className="text-[10px] text-slate-500">预订次数</span>
                        <span className="text-sm font-bold">128</span>
                    </div>
                </div>
            </div>
        </section>

        {/* Summary */}
        <section className="grid grid-cols-3 gap-3">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl text-center border border-slate-100 dark:border-slate-800">
                <p className="text-[10px] text-slate-400 mb-1">会议总数</p>
                <p className="text-lg font-bold">2,481</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl text-center border border-slate-100 dark:border-slate-800">
                <p className="text-[10px] text-slate-400 mb-1">平均时长</p>
                <p className="text-lg font-bold">52m</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl text-center border border-slate-100 dark:border-slate-800">
                <p className="text-[10px] text-slate-400 mb-1">空置率</p>
                <p className="text-lg font-bold text-red-500">27%</p>
            </div>
        </section>
      </main>

      <div className="fixed bottom-8 left-0 right-0 px-8">
        <button className="w-full h-14 bg-primary text-white rounded-full shadow-lg shadow-primary/30 flex items-center justify-center gap-2 active:scale-95 transition-transform duration-100">
            <span className="material-icons">download_for_offline</span>
            <span className="font-semibold">一键导出数据至邮箱</span>
        </button>
      </div>
    </div>
  );
};

export default DataReport;