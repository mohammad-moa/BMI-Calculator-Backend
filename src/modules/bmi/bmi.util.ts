import {
  BmiStatusEnum,
  GenderEnum,
} from '@modules/shared/enums';

export function calculateBmiCore(weightKg: number, heightCm: number): number {
  const heightMeters = heightCm / 100;
  return weightKg / (heightMeters * heightMeters);
}

export function calculateBodyFatCore(
  bmi: number,
  age: number,
  gender: GenderEnum,
): number {
  const genderFactor = gender === GenderEnum.MALE ? 1 : 0;
  return 1.2 * bmi + 0.23 * age - 10.8 * genderFactor - 5.4;
}

export function generateBmiStatus(bmi: number): BmiStatusEnum {
  if (bmi < 18.5) return BmiStatusEnum.UNDER_WEIGHT;
  if (bmi < 25) return BmiStatusEnum.NORMAL;
  if (bmi < 30) return BmiStatusEnum.OVER_WEIGHT;
  return BmiStatusEnum.OBESE;
}
