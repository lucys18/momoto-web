import { Title as MantineTitle, TitleProps } from '@mantine/core'

import styles from './title.module.css'

interface MomotoTitleProps extends TitleProps {
  color: 'orange' | 'beige' | 'black'
}

const MomotoTitle = ({ color, ...props }: MomotoTitleProps) => (
  <MantineTitle className={styles.title} data-color={color} {...props} />
)

export default MomotoTitle
