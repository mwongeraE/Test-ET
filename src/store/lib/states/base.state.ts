export interface PagedList<T = any> {
  start: number
  perPage: number
  items: T[]
}

interface IFilter {
  key: string;
  value: any;
}

export interface IBaseState<T = any> {
  globFilter: IFilter;
  filters: IFilter[];
  current: T | null;
  currentIx: number | null;
  list: PagedList<T>;
  [field: string]: any;
}
