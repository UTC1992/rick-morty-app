export interface IResultCharacters {
  info: IInfo
  results: ICharacter[]
}

export interface IInfo {
  count: number
  pages: number
  next: string
  prev: null
}

export interface ICharacter {
  id: number
  name: string
  status: EStatus
  species: ESpecies
  type: string
  gender: EGender
  origin: Location
  location: Location
  image: string
  episode: string[]
  url: string
  created: Date
}

export enum EGender {
  Female = 'Female',
  Male = 'Male',
  Unknown = 'unknown',
}

export interface ILocation {
  name: string
  url: string
}

export enum ESpecies {
  Alien = 'Alien',
  Human = 'Human',
}

export enum EStatus {
  Alive = 'Alive',
  Dead = 'Dead',
  Unknown = 'unknown',
}
