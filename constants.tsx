import { GridCellData, ZoneColor } from './types';
import { 
  Trophy, 
  Star, 
  TrendingUp, 
  ShieldCheck, 
  Target, 
  Sparkles, 
  AlertTriangle, 
  HelpCircle, 
  Activity 
} from 'lucide-react';

export const MATRIX_DATA: GridCellData[] = [
  // Row 1 (Top)
  {
    id: 'r1-c1',
    row: 0,
    col: 0,
    code: 'AC(6)',
    title: 'Trusted Sustainer',
    description: 'High performance but low potential for role expansion.',
    color: ZoneColor.Orange,
    icon: 'ShieldCheck'
  },
  {
    id: 'r1-c2',
    row: 0,
    col: 1,
    code: 'AB(7)',
    title: 'Reliable Performer',
    description: 'Strong performance with potential to grow further.',
    color: ZoneColor.Green,
    icon: 'Target'
  },
  {
    id: 'r1-c3',
    row: 0,
    col: 2,
    code: 'AA(9)',
    title: 'Super Star',
    description: 'Top talent ready for immediate advancement.',
    color: ZoneColor.Green,
    icon: 'Trophy'
  },

  // Row 2 (Middle)
  {
    id: 'r2-c1',
    row: 1,
    col: 0,
    code: 'BC(4)',
    title: 'Dependable Doer',
    description: 'Solid performance, fits current role well.',
    color: ZoneColor.Orange,
    icon: 'Activity'
  },
  {
    id: 'r2-c2',
    row: 1,
    col: 1,
    code: 'BB(5)',
    title: 'Core Contributor',
    description: 'Consistent output with some growth capacity.',
    color: ZoneColor.Orange,
    icon: 'TrendingUp'
  },
  {
    id: 'r2-c3',
    row: 1,
    col: 2,
    code: 'BA(8)',
    title: 'Emerging Star',
    description: 'Shows high potential, performance is improving.',
    color: ZoneColor.Green,
    icon: 'Star'
  },

  // Row 3 (Bottom)
  {
    id: 'r3-c1',
    row: 2,
    col: 0,
    code: 'CC(1)',
    title: 'At Risk',
    description: 'Low performance and low growth potential.',
    color: ZoneColor.Red,
    icon: 'AlertTriangle'
  },
  {
    id: 'r3-c2',
    row: 2,
    col: 1,
    code: 'CB(2)',
    title: 'Inconsistent Performer',
    description: 'Capable of growth but performance is lacking.',
    color: ZoneColor.Red,
    icon: 'HelpCircle'
  },
  {
    id: 'r3-c3',
    row: 2,
    col: 2,
    code: 'CA(3)',
    title: 'Developing Star',
    description: 'High potential but currently underperforming.',
    color: ZoneColor.Orange,
    icon: 'Sparkles'
  },
];

export const Y_AXIS_LABELS = [
  { label: 'A', subLabel: 'HIGH / Exceed Expectation' },
  { label: 'B', subLabel: 'MEDIUM / Meet Expectation' },
  { label: 'C', subLabel: 'LOW / Below Expectation' },
];

export const X_AXIS_LABELS = [
  { label: 'C', subLabel: 'LOW / Below Expectation' },
  { label: 'B', subLabel: 'MEDIUM / Meet Expectation' },
  { label: 'A', subLabel: 'HIGH / Exceed Expectation' },
];