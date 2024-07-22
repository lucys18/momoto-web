import { BreadcrumbsProps, Breadcrumbs as MantineBreadcrumbs } from "@mantine/core"
import styles from './breadcrumbs.module.css'
import { IconChevronRight } from "@tabler/icons-react"

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
