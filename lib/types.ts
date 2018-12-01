export interface TokenPair {
  accessToken: string
  refreshToken: string
  storedAt?: number
}

export namespace Request {
  export interface MessageHeader {
    trcode: string
    accessToken: string
    refreshToken: string
  }

  export interface Message {
    header: MessageHeader
    body: any
  }

  export interface Payload {
    uri: string
    headers: any
    json: boolean
    form: string
  }

  export interface OAuthPayload {
    uri: string
    headers: any
    qs: any
    resolveWithFullResponse?: boolean
  }

  export interface AuthenticatePayload {
    uri: string
    method: string
    headers: any
    json: boolean
    body: AuthenticateBodyPayload
  }

  export interface AuthenticateBodyPayload {
    username: string
    password: string
    state: string
    auto_login: string
  }
}

export namespace PurifierResponse {
  export enum Power {
    On = '1',
    Off = '0'
  }

  export enum Light {
    On = '2',
    Off = '0'
  }

  export enum Fan {
    Low = '1',
    Medium = '2',
    High = '3'
  }

  export enum Mode {
    Manual = '0',
    Auto = '1',
    Sleep = '2',
    AutoSleep = '6'
  }

  export enum AirQuality {
    Excellent = '1',
    Good = '2',
    Fair = '3',
    Inferior = '4'
  }

  export interface Status {
    power: Power
    light: Light
    fan: Fan
    mode: Mode
    airQuality: AirQuality
  }

  export interface FilterStatus {
    name: string
    lifeLevel: number
  }

  export interface Metadata {
    nickname: string
    barcode: string
  }
}
