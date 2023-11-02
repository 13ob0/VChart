import type { Datum } from '@visactor/vgrammar-core';
import type { IMarkStyle } from '../../../mark/interface';
import type { ConvertToMarkStyleSpec, ICommonSpec } from '../../../typings';
import { PolarSeries } from '../polar';
import type { IContinuousTickData, IProgressLikeSeriesSpec } from './interface';
import type { IPolarAxis } from '../../../component/axis';
import type { IGroupMark } from '../../../mark/group';
import type { SeriesMarkMap } from '../../interface';
export declare abstract class ProgressLikeSeries<T extends IProgressLikeSeriesSpec> extends PolarSeries<T> {
    static readonly mark: SeriesMarkMap;
    protected _supportStack: boolean;
    protected _startAngle: number;
    protected _endAngle: number;
    protected _arcGroupMark: IGroupMark | null;
    setAttrFromSpec(): void;
    getStackGroupFields(): string[];
    getStackValueField(): string;
    getGroupFields(): string[];
    protected _convertMarkStyle<T extends ICommonSpec = ICommonSpec>(style: Partial<IMarkStyle<T> | ConvertToMarkStyleSpec<T>>): Partial<IMarkStyle<T> | ConvertToMarkStyleSpec<T>>;
    protected _getAngleValueStart: (datum: Datum) => number;
    protected _getAngleValueEnd: (datum: Datum) => number;
    protected _getAngleValueStartWithoutMask(datum: Datum): number;
    protected _getAngleValueEndWithoutMask(datum: Datum): number;
    getDimensionField(): string[];
    getMeasureField(): string[];
    initMark(): void;
    initMarkStyle(): void;
    protected _initArcGroupMark(): IGroupMark;
    protected _initArcGroupMarkStyle(): void;
    protected _getAngleAxis(): IPolarAxis;
    protected _getAngleAxisTickData(angleAxis?: IPolarAxis): IContinuousTickData[];
    protected _isTickMaskVisible(angleAxis?: IPolarAxis): boolean;
    protected _getAngleAxisSubTickData(angleAxis: IPolarAxis): IContinuousTickData[];
}