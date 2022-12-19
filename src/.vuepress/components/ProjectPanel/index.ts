import { usePageFrontmatter } from '@vuepress/client'
import { defineComponent, h, PropType } from 'vue'
import { Project } from './interface'
import ProjectPanelItem from './item'

export default defineComponent({
  name: 'ProjectPanel',
  props: {
    projects: {
      type: Array as PropType<Array<Project>>
    }
  },
  setup(props) {
    const frontmatter = usePageFrontmatter()
    const projects = (props.projects || frontmatter.value.projects) as Project[]
    return () =>
      projects?.length
        ? h(
            'div',
            { class: 'project-panel' },
            projects.map((project, index) =>
              h(ProjectPanelItem, {
                project,
                index
              })
            )
          )
        : null
  }
})
