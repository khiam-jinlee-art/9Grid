import React from 'react';
import MatrixGrid from './components/MatrixGrid';
import { Info } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 lg:p-12 text-slate-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <header className="mb-10 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-slate-200 pb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-2">
                Performance-Growth <span className="text-indigo-600">9-Grid</span>
              </h1>
              <p className="text-slate-500 max-w-2xl text-lg">
                A strategic tool for evaluating talent, identifying potential leaders, and managing workforce development.
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex gap-3 text-sm font-medium text-slate-600">
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-500"></span> High Value
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-amber-500"></span> Moderate
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500"></span> Risk
                </div>
            </div>
          </div>
        </header>

        {/* Matrix Card */}
        <main className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 md:p-10 overflow-hidden">
          <div className="overflow-x-auto matrix-scroll pb-4">
            <div className="min-w-[800px]">
               <MatrixGrid />
            </div>
          </div>
        </main>

        {/* Footer/Legend */}
        <footer className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-600">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex gap-4 items-start">
                <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600 shrink-0">
                    <Info size={20} />
                </div>
                <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">How to use</h4>
                    <p className="text-xs leading-relaxed">
                        Assess employees based on their past performance (Y-axis) and their future potential (X-axis) to categorize them into one of the nine boxes.
                    </p>
                </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex gap-4 items-start">
                <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600 shrink-0">
                    <span className="font-bold text-lg leading-none">A</span>
                </div>
                <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">Top Tier</h4>
                    <p className="text-xs leading-relaxed">
                        Employees in the green zone (Top Right) are your future leaders. Focus on retention and providing challenging opportunities.
                    </p>
                </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex gap-4 items-start">
                 <div className="bg-rose-100 p-2 rounded-lg text-rose-600 shrink-0">
                    <span className="font-bold text-lg leading-none">C</span>
                </div>
                <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">Action Required</h4>
                    <p className="text-xs leading-relaxed">
                        Employees in the red zone require immediate coaching, performance improvement plans, or role reassessment.
                    </p>
                </div>
            </div>
        </footer>

      </div>
    </div>
  );
};

export default App;