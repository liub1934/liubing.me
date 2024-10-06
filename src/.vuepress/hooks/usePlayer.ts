import type APlayer from 'aplayer'
import { inject, ref, type App, type InjectionKey, type Ref } from 'vue'

interface Player {
  /** 播放器实例 */
  player: Ref<APlayer | null>
  /** 是否展示播放器 */
  isShowPlayer: Ref<boolean>
  /** 是否支持播放 */
  isCanPlay: Ref<boolean>
  /** 是否播放中 */
  isPlay: Ref<boolean>
  id: Ref<string>
}

const playerSymbol: InjectionKey<Player> = Symbol(
  __VUEPRESS_DEV__ ? 'player' : ''
)
export function injectPlayer(app: App) {
  const player = ref<APlayer | null>(null)
  const isShowPlayer = ref(false)
  const isCanPlay = ref(false)
  const isPlay = ref(false)
  const id = ref(`${+new Date()}`)

  app.provide(playerSymbol, {
    player,
    isShowPlayer,
    isCanPlay,
    isPlay,
    id
  })
}

export function usePlayer() {
  const player = inject(playerSymbol)
  if (!player) throw new Error('usePlayer() is called without provider.')
  return player
}
