declare module 'aplayer' {
  export interface APlayerAudio {
    name: string
    artist: string
    url: string
    cover?: string
    lrc?: string
    theme?: string
  }
  export interface APlayerOptions {
    container?: HTMLElement
    fixed?: boolean
    mini?: boolean
    autoplay?: boolean
    theme?: string
    theme?: string
    loop?: 'all' | 'one' | 'none'
    order?: 'list' | 'random'
    preload?: 'auto' | 'metadata' | 'none'
    volume?: number
    audio?: APlayerAudio[]
    mutex?: boolean
    lrcType?: number
    listFolded?: boolean
    listMaxHeight?: number
    storageName?: string
  }

  interface IAPlayer {
    play: () => void
    pause: () => void
    toggle: () => void
    seek: (time: number) => void
    volume: (percentage: number, nostorage?: boolean) => void
    list: {
      add: (audio: APlayerOptions['audio']) => void
      remove: (index: number) => void
      switch: (index: number) => void
    }
    on: (event: APlayerEventType, handler: () => void) => void
    destroy: () => void
  }

  export type APlayerEventType
    = | 'abort'
      | 'canplay'
      | 'canplaythrough'
      | 'durationchange'
      | 'emptied'
      | 'ended'
      | 'error'
      | 'loadeddata'
      | 'loadedmetadata'
      | 'loadstart'
      | 'mozaudioavailable'
      | 'pause'
      | 'play'
      | 'playing'
      | 'progress'
      | 'ratechange'
      | 'seeked'
      | 'seeking'
      | 'stalled'
      | 'suspend'
      | 'timeupdate'
      | 'volumechange'
      | 'waiting'

  const APlayer: {
    new (options: APlayerOptions): IAPlayer
  }

  export default APlayer
}
