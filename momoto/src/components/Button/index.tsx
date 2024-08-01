import { forwardRef } from "react"
import { ButtonProps, Button as MantineButton, createPolymorphicComponent } from "@mantine/core"
import styles from './button.module.css'

const MomotoButton = createPolymorphicComponent<'button', ButtonProps>(
  forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
    <MantineButton classNames={styles} {...props} ref={ref} />
  )
  ))

export default MomotoButton
