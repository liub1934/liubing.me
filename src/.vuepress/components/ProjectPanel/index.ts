import { usePageFrontmatter } from '@vuepress/client'
import { defineComponent, h, PropType } from 'vue'
import { Project, RenderTag } from './interface'
import ProjectPanelItem from './item'

export default defineComponent({
  name: 'ProjectPanel',
  props: {
    projects: {
      type: Array as PropType<Array<Project>>
    },
    panelRenderTag: String as PropType<RenderTag>
  },
  setup(props) {
    const frontmatter = usePageFrontmatter()
    const projects = (props.projects || frontmatter.value.projects) as Project[]
    const panelRenderTag: RenderTag = (props.panelRenderTag ||
      frontmatter.value.panelRenderTag) as RenderTag
    return () =>
      projects?.length
        ? h(
            'div',
            { class: 'project-panel' },
            projects.map((project, index) =>
              h(ProjectPanelItem, {
                project,
                index,
                panelRenderTag
              })
            )
          )
        : null
  }
})
