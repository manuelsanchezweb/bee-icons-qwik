import { Resource, component$, useResource$ } from '@builder.io/qwik'
import { fetchBeeIcons } from '../../api/fetchBeeIcons'
import { BeeIcon, Icon } from '../../types/types'

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
