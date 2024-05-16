import { BaseSeriesProps, createSeries } from './BaseSeries';
import type { IRangeColumn3dSeriesSpec } from '@visactor/vchart';
import { registerRangeColumn3dSeries } from '@visactor/vchart';

export type RangeColumn3dProps = BaseSeriesProps & Omit<IRangeColumn3dSeriesSpec, 'type'>;

export const RangeColumn3d = createSeries<RangeColumn3dProps>('RangeColumn3d', ['rangeColumn'], 'rangeColumn3d', [
  registerRangeColumn3dSeries
]);