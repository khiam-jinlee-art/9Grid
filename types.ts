export enum ZoneColor {
  Green = 'green',
  Orange = 'orange',
  Red = 'red',
}

export interface GridCellData {
  id: string;
  row: number; // 0=Top, 1=Middle, 2=Bottom
  col: number; // 0=Left, 1=Center, 2=Right
  code: string; // e.g., "AA(9)"
  title: string;
  description?: string;
  color: ZoneColor;
  icon?: string;
}

export interface AxisLabel {
  label: string;
  subLabel?: string;
}