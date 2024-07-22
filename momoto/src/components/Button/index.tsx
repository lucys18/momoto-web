import { ButtonProps, Button as MantineButton } from "@mantine/core"
import styles from './button.module.css'

const MomotoButton = (props: ButtonProps) => (
  <MantineButton classNames={styles} {...props} />
)

export default MomotoButton
