import { Button as MantineButton } from "@mantine/core"
import styles from './button.module.css'

const MomotoButton = (props: any) => (
  <MantineButton classNames={styles} {...props} />
)

export default MomotoButton
