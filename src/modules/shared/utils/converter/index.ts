import {
  HeightEnum,
  WeightEnum,
} from '@modules/shared/enums';

export const convertWeightToKilogram = (
  value: number,
  unit: `${WeightEnum}`,
): number => {
  return {
    kg: value,
    lb: value * 0.45359237,
  }[unit];
};

export const convertHeightToCentimeter = (
  value: number,
  unit: `${HeightEnum}`,
): number => {
  return {
    cm: value,
    ft: value * 30.48,
  }[unit];
};
