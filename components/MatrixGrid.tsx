import React from 'react';
import { MATRIX_DATA, Y_AXIS_LABELS, X_AXIS_LABELS } from '../constants';
import MatrixCell from './MatrixCell';

const MatrixGrid: React.FC = () => {
  return (
    <div className="flex flex-col select-none">
      
      {/* Main Container Area */}
      <div className="flex">
        
        {/* Y-Axis Label (Vertical) */}
        <div className="flex items-center justify-center w-12 md:w-16 mr-2 md:mr-4 shrink-0">
            <h2 className="text-xl md:text-2xl font-bold tracking-widest text-slate-800" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                PERFORMANCE
            </h2>
        </div>

        {/* Matrix Container */}
        <div className="flex-1">
            {/* Grid Area */}
            <div className="grid grid-rows-3 gap-3 md:gap-5 mb-2 md:mb-4">
                
                {/* Row 1 */}
                <div className="flex items-stretch">
                    <div className="w-24 md:w-32 pr-4 text-right shrink-0 flex flex-col justify-center">
                        <div className="font-bold text-slate-800 text-lg">{Y_AXIS_LABELS[0].label}</div>
                        <div className="text-xs text-slate-500 font-medium">{Y_AXIS_LABELS[0].subLabel}</div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 md:gap-5 flex-1">
                        {MATRIX_DATA.filter(d => d.row === 0).sort((a,b) => a.col - b.col).map(item => (
                            <MatrixCell key={item.id} data={item} />
                        ))}
                    </div>
                </div>

                {/* Row 2 */}
                <div className="flex items-stretch">
                    <div className="w-24 md:w-32 pr-4 text-right shrink-0 flex flex-col justify-center">
                        <div className="font-bold text-slate-800 text-lg">{Y_AXIS_LABELS[1].label}</div>
                        <div className="text-xs text-slate-500 font-medium">{Y_AXIS_LABELS[1].subLabel}</div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 md:gap-5 flex-1">
                        {MATRIX_DATA.filter(d => d.row === 1).sort((a,b) => a.col - b.col).map(item => (
                            <MatrixCell key={item.id} data={item} />
                        ))}
                    </div>
                </div>

                {/* Row 3 */}
                <div className="flex items-stretch">
                    <div className="w-24 md:w-32 pr-4 text-right shrink-0 flex flex-col justify-center">
                        <div className="font-bold text-slate-800 text-lg">{Y_AXIS_LABELS[2].label}</div>
                        <div className="text-xs text-slate-500 font-medium">{Y_AXIS_LABELS[2].subLabel}</div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 md:gap-5 flex-1">
                        {MATRIX_DATA.filter(d => d.row === 2).sort((a,b) => a.col - b.col).map(item => (
                            <MatrixCell key={item.id} data={item} />
                        ))}
                    </div>
                </div>
            </div>

            {/* X-Axis Labels */}
            <div className="flex">
                <div className="w-24 md:w-32 shrink-0"></div> {/* Spacer for Y-axis labels column */}
                <div className="grid grid-cols-3 gap-5 flex-1">
                    {X_AXIS_LABELS.map((label, idx) => (
                         <div key={idx} className="text-center pt-2">
                            <div className="font-bold text-slate-800 text-lg">{label.label}</div>
                            <div className="text-xs text-slate-500 font-medium max-w-[120px] mx-auto">{label.subLabel}</div>
                         </div>
                    ))}
                </div>
            </div>

            {/* X-Axis Main Title */}
             <div className="flex mt-4">
                <div className="w-24 md:w-32 shrink-0"></div>
                <div className="flex-1 text-center">
                     <h2 className="text-xl md:text-2xl font-bold tracking-widest text-slate-800 uppercase">
                        Growth / Potential
                    </h2>
                </div>
             </div>
        </div>
      </div>
    </div>
  );
};

export default MatrixGrid;