import { BreadcrumbsProps, Breadcrumbs as MantineBreadcrumbs } from "@mantine/core"
import { IconChevronRight } from "@tabler/icons-react"
import styles from './breadcrumbs.module.css'

const MomotoBreadcrumbs = (props: BreadcrumbsProps) => {
  return (
    <MantineBreadcrumbs
      separator={<IconChevronRight size={14} />}
      classNames={{
        root: styles.breadcrumbRoot,
        breadcrumb: styles.breadcrumbItem,
      }}
      {...props} />
  )
}

export default MomotoBreadcrumbs
