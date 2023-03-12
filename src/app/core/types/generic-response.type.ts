export interface IGenericResponse<T> {
  status: EStatus
  data: T
}

export enum EStatus {
  SUCCESS = 'success',
  ERROR = 'error',
}
