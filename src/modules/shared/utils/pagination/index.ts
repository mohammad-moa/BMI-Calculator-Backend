import {
  ObjectLiteral,
  SelectQueryBuilder,
} from 'typeorm';

export interface IMeta {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}

export interface IPagination<T> {
  items: T[];
  meta: IMeta;
}

export class Pagination<T> {
  items: T[];
  meta: IMeta;

  constructor(
    items: T[],
    totalItems: number,
    page: number = 1,
    limit: number = 10,
  ) {
    this.items = items;
    this.meta = {
      totalItems,
      itemCount: items.length,
      itemsPerPage: limit,
      totalPages: totalItems > 0 ? Math.ceil(totalItems / limit) : 0,
      currentPage: page,
    };
  }
}

export async function pagination<T extends ObjectLiteral>(
  queryBuilder: SelectQueryBuilder<T>,
  page: number = 1,
  limit: number = 10,
): Promise<Pagination<T>> {
  const [items, totalItems] = await queryBuilder
    .take(limit)
    .skip((page - 1) * limit)
    .getManyAndCount();

  return new Pagination<T>(items, totalItems, page, limit);
}
