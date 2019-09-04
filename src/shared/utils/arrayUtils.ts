import { map, addIndex, equals, last } from 'ramda';
import { ArrayElementType, SimpleArrayType } from '../types/arrayTypes';

export const mapIndexed = addIndex(map);

export const isLastElementInArray = (element: ArrayElementType, array: SimpleArrayType): boolean => !equals(element, last(array));
