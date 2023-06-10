import { Resource, component$, useResource$ } from '@builder.io/qwik'
import { fetchBeeIcons } from '../../api/fetchBeeIcons'

type Icon = {
  id: number
  name: string
  icon: {
    xs?: string
    sm?: string
    md?: string
    lg: string
    xl?: string
  }
  category: string[]
  tags: string[]
}

type BeeIcon =
  | 'bee'
  | 'pig'
  | 'hedgehog'
  | 'egg'
  | 'pear'
  | 'donut'
  | 'donut-bite'
  | 'banane'
  | 'search'
  | 'triangle'
  | 'triangle-fill'
  | 'zoom-in'
  | 'zoom-out'
  | 'message'
  | 'file'
  | 'file-alert'
  | 'candy'
  | 'music'
  | 'pacman'
  | 'user'
  | 'users'
  | 'mask'
  | 'reload'
  | 'chevron-left'
  | 'chevron-right'
  | 'chevron-down'
  | 'chevron-up'
  | 'user-circle'
  | 'user-circle-plus'
  | 'user-circle-minus'
  | 'login'
  | 'logout'
  | 'plus'
  | 'plus-square'
  | 'plus-circle'
  | 'minus'
  | 'minus-square'
  | 'minus-circle'
  | 'close'
  | 'close-square'
  | 'close-circle'
  | 'list'
  | 'menu'
  | 'menu-alternative'
  | 'time'
  | 'edit'
  | 'trash-delete'
  | 'calendar'
  | 'calendar-plus'
  | 'calendar-minus'
  | 'calendar-number'
  | 'contrast'
  | 'contrast-alternative'
  | 'microphone'
  | 'not-allowed'
  | 'speaker'
  | 'video'
  | 'eye'
  | 'youtube'
  | 'play'
  | 'play-fill'
  | 'play-circle'
  | 'play-circle-fill'
  | 'instagram'
  | 'facebook'
  | 'twitter'
  | 'linkedin'
  | 'copy'
  | 'download'
  | 'upload'
  | 'clip'
  | 'collabender-duo-fill'
  | 'collabender'
  | 'collabender-fill'
  | 'pause'
  | 'pause-rounded'
  | 'pause-fill'
  | 'pause-rounded-fill'
  | 'pause-circle'
  | 'pause-circle-rounded'
  | 'pause-circle-fill'
  | 'pause-circle-rounded-fill'
  | 'tick'
  | 'info-circle'
  | 'info-triangle'
  | 'info-square'
  | 'alert-circle'
  | 'alert-triangle'
  | 'alert-square'
  | 'heptagon'
  | 'heptagon-fill'

export const Bee = component$(
  ({ icon, customClass }: { icon?: BeeIcon; customClass?: string }) => {
    const beeIcons = useResource$<Icon[]>(({ cleanup }) => {
      const controller = new AbortController()
      cleanup(() => controller.abort())
      return fetchBeeIcons()
    })

    return (
      <Resource
        value={beeIcons}
        onPending={() => <div style="width: 20px; height: 20px;">🐝</div>}
        onRejected={(error) => <>Error: {error.message}</>}
        onResolved={(icons: Icon[]) => {
          // const iconNames = new Set(icons.map((icon) => icon.name))
          // console.log(iconNames)

          let iconToShow
          if (icon) {
            const fetchedIcon = icons.find((newIcon) => newIcon.name === icon)
            if (fetchedIcon) {
              iconToShow = fetchedIcon.icon.lg
            }
          }

          if (!iconToShow) {
            const defaultIcon = icons.find((icon) => icon.name === 'bee')
            if (defaultIcon) {
              iconToShow = defaultIcon.icon.lg
            } else if (icons.length > 0) {
              iconToShow = icons[0].icon.lg
            }
          }

          return (
            <div
              class={`[&>*]:text-icon ${customClass || ''}`}
              dangerouslySetInnerHTML={iconToShow}
            ></div>
          )
        }}
      />
    )
  }
)
