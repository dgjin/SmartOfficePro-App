import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Room } from '../types';

const SpaceManagement: React.FC = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    api.getRooms().then(setRooms);
  }, []);

  return (
    <div className="px-4 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-2 pt-2">
        <h1 className="text-xl font-bold">空间资源管理</h1>
        <button className="p-2 -mr-2 text-slate-600 dark:text-slate-400">
            <span className="material-icons-round">more_horiz</span>
        </button>
      </div>

      {/* Search */}
      <div className="flex gap-2">
        <div className="relative flex-1">
          <span className="material-icons-round absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
          <input className="w-full bg-white dark:bg-slate-800 border-none rounded-2xl py-3 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary shadow-sm transition-all outline-none" placeholder="搜索会议室名称" type="text"/>
        </div>
        <button className="bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-sm border-none flex items-center justify-center text-slate-600 dark:text-slate-400 active:scale-95 transition-transform">
          <span className="material-icons-round text-xl">tune</span>
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
        {['全部', '3楼 (研发部)', '5楼 (设计部)', '大型 (10人+)'].map((f, i) => (
            <button key={i} onClick={() => setFilter(i === 0 ? 'all' : f)} className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${i === 0 ? 'bg-primary text-white shadow-md shadow-primary/20' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-100 dark:border-slate-700'}`}>
                {f}
            </button>
        ))}
      </div>

      {/* List */}
      <div className="space-y-4 pb-20">
        {rooms.map(room => (
            <div key={room.id} className="bg-white dark:bg-slate-800/50 rounded-[24px] p-4 shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col gap-4">
                <div className="relative w-full h-40 rounded-2xl overflow-hidden group">
                    <img alt={room.name} className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${room.status === 'in-use' ? 'grayscale-[30%]' : ''}`} src={room.image}/>
                    <div className="absolute top-3 right-3">
                        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-lg ${room.status === 'idle' ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'}`}>
                            {room.status === 'idle' ? '空闲' : '使用中'}
                        </span>
                    </div>
                </div>
                
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-lg font-bold text-slate-800 dark:text-white">{room.name}</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center mt-1">
                            <span className="material-icons-round text-sm mr-1">groups</span> 
                            {room.capacity} · {room.location}
                        </p>
                    </div>
                    <div className="flex gap-2">
                        {room.facilities.map(fac => (
                             <span key={fac} className="material-icons-round text-slate-400 text-lg">{fac}</span>
                        ))}
                    </div>
                </div>

                {room.status === 'in-use' && room.nextAvailable && (
                    <div className="flex items-center gap-2 p-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-800/50">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <span className="material-icons-round text-sm">schedule</span>
                        </div>
                        <div className="flex-1">
                            <p className="text-[11px] text-slate-400 font-medium">预计释放时间</p>
                            <p className="text-xs text-slate-700 dark:text-slate-300 font-semibold">{room.nextAvailable}</p>
                        </div>
                    </div>
                )}

                {room.status === 'idle' && (
                    <button className="w-full bg-primary/10 dark:bg-primary/20 text-primary font-semibold py-3 rounded-2xl active:scale-[0.98] transition-all">
                        立即预约
                    </button>
                )}
            </div>
        ))}
      </div>
    </div>
  );
};

export default SpaceManagement;