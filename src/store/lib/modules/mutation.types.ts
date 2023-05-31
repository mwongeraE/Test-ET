export interface IBaseMutationTypes {
  MN: string
  LOAD: string
  SET_LIST: string
  SET_CURRENT: string
  SET_CURRENT_IX: string
  SET_GLOBAL_FILTER: string
  PUT_FILTER: string
  DEL_FILTER: string
  RESET: string
  PUT: string
  RESET_CURRENT: string
}

export interface ICrudMutationTypes extends IBaseMutationTypes {
  DELETE: string
}

export const TYPE_DEFAULTS: ICrudMutationTypes = {
  MN: 'module',
  LOAD: 'LOAD',
  SET_LIST: 'SET_LIST',
  SET_CURRENT: 'SET_CURRENT',
  SET_CURRENT_IX: 'SET_CURRENT_IX',
  SET_GLOBAL_FILTER: 'SET_GLOBAL_FILTER',
  PUT_FILTER: 'PUT_FILTER',
  DEL_FILTER: 'DEL_FILTER',
  PUT: 'PUT',
  DELETE: 'DELETE',
  RESET: 'RESET',
  RESET_CURRENT: 'RESET_CURRENT'
};
