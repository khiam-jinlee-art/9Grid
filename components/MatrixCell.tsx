import React from 'react';
import { GridCellData, ZoneColor } from '../types';
import * as Icons from 'lucide-react';

interface MatrixCellProps {
  data: GridCellData;
}

const MatrixCell: React.FC<MatrixCellProps> = ({ data }) => {
  const IconComponent = data.icon ? (Icons as any)[data.icon] : null;

  const colorStyles = {
    [ZoneColor.Green]: 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-emerald-200/50 border-emerald-400',
    [ZoneColor.Orange]: 'bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-orange-200/50 border-amber-400',
    [ZoneColor.Red]: 'bg-gradient-to-br from-rose-500 to-red-600 text-white shadow-rose-200/50 border-rose-400',
  };

  const badgeStyles = {
    [ZoneColor.Green]: 'bg-emerald-700/30 text-emerald-50',
    [ZoneColor.Orange]: 'bg-orange-700/30 text-orange-50',
    [ZoneColor.Red]: 'bg-rose-900/30 text-rose-50',
  };

  return (
    <div 
      className={`
        relative flex flex-col items-center justify-center p-6 h-full w-full
        rounded-xl shadow-lg
        border-t border-l border-white/20
        ${colorStyles[data.color]}
      `}
    >
      {/* Code Badge */}
      <div className={`absolute top-4 left-4 px-2.5 py-1 rounded-md text-sm font-bold uppercase tracking-wider ${badgeStyles[data.color]}`}>
        {data.code}
      </div>

      {/* Icon */}
      {IconComponent && (
        <div className="mb-4 mt-6 opacity-95">
          <IconComponent size={40} strokeWidth={1.5} />
        </div>
      )}

      {/* Content */}
      <h3 className="text-xl md:text-2xl font-bold text-center leading-tight mb-3">
        {data.title}
      </h3>
      
      {data.description && (
        <p className="text-sm md:text-base text-center leading-snug opacity-95 px-2">
          {data.description}
        </p>
      )}
    </div>
  );
};

export default MatrixCell;