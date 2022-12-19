import { withBase } from '@vuepress/client'
import { defineComponent, h, PropType, resolveComponent } from 'vue'
import {
  ArticleIcon,
  BookIcon,
  FriendIcon,
  LinkIcon,
  ProjectIcon
} from '@theme-hope/modules/blog/components/icons/index.js'
import { useNavigate, usePure } from '@theme-hope/composables/index.js'
import { Project } from './interface'
import Icon from '@theme-hope/components/Icon.js'
const AVAILABLE_PROJECT_TYPES = ['link', 'article', 'book', 'project', 'friend']

export default defineComponent({
  name: 'ProjectPanelItem',
  props: {
    project: {
      type: Object as PropType<Project>,
      required: true
    },
    index: Number
  },
  components: { ArticleIcon, BookIcon, FriendIcon, LinkIcon, ProjectIcon },
  setup(props) {
    const pure = usePure()
    const navigate = useNavigate()
    const renderIcon = (icon = '', alt = 'icon') => {
      // built in icon
      if (AVAILABLE_PROJECT_TYPES.includes(icon))
        return h(resolveComponent(`${icon}-icon`))
      // it’s a full image link
      if (icon.match(/^https?:\/\//))
        return h('img', { src: icon, alt, class: 'image' })
      // it’s an absolute image link
      if (icon.startsWith('/'))
        return h('img', { src: withBase(icon), alt, class: 'image' })
      // render as icon font
      return h(Icon, { icon })
    }
    const index =
      props.index !== void 0 ? props.index : Math.floor(Math.random() * 8)
    const { icon, link, name, desc } = props.project
    return () =>
      h(
        'div',
        {
          class: [
            'project',
            // TODO: magic number 9 is tricky here
            { [`project${index % 9}`]: !pure.value }
          ],
          onClick: () => navigate(link)
        },
        [
          renderIcon(icon, name),
          h('div', { class: 'name' }, name),
          h('div', { class: 'desc' }, desc)
        ]
      )
  }
})
