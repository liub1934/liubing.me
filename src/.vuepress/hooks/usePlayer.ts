import type APlayer from 'aplayer'
import type { App, InjectionKey, Ref } from 'vue'
import { inject, ref } from 'vue'

type APlayerInstance = InstanceType<typeof APlayer>

interface Player {
  /** 播放器实例 */
  player: Ref<APlayerInstance | null>
  /** 是否展示播放器 */
  isShowPlayer: Ref<boolean>
  /** 是否支持播放 */
  isCanPlay: Ref<boolean>
  /** 是否播放中 */
  isPlay: Ref<boolean>
  id: Ref<string>
}

const playerSymbol: InjectionKey<Player> = Symbol(
  __VUEPRESS_DEV__ ? 'player' : '',
)
export function injectPlayer(app: App) {
  const player = ref<APlayerInstance | null>(null)
  const isShowPlayer = ref(false)
  const isCanPlay = ref(false)
  const isPlay = ref(false)
  const id = ref(`${+new Date()}`)

  app.provide(playerSymbol, {
    player,
    isShowPlayer,
    isCanPlay,
    isPlay,
    id,
  })
}

export function usePlayer() {
  const player = inject(playerSymbol)
  if (!player)
    throw new Error('usePlayer() is called without provider.')
  return player
}
