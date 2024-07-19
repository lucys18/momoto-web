import { Card, Image, Overlay } from "@mantine/core"
import styles from "./productCard.module.css"
import MomotoButton from "../Button"
import { useState } from "react"
import { IconZoom } from "@tabler/icons-react"
import { Link } from "react-router-dom"

const ProductCard = ({ name, price, image }: any) => {
  const [overlayVisible, setOverlayVisible] = useState(false)
  return (
    <Card classNames={styles} radius={0}>
      <Card.Section>
        <div onMouseEnter={() => setOverlayVisible(true)} onMouseLeave={() => setOverlayVisible(false)}>
          <Image src={image} alt={name} fit="cover" height={414} />
          {overlayVisible &&
            <Overlay className={styles.overlay} color='#fff' backgroundOpacity={0.5} component={Link} to='/'>
              <MomotoButton leftSection={<IconZoom size={14}/>}>VIEW</MomotoButton>
            </Overlay>}
        </div>
        <div className={styles.productInfo}>
          <p className={styles.productName}>{name}</p>
          <p className={styles.productPrice}>${price}</p>
        </div>
      </Card.Section>
    </Card>
  )
}

export default ProductCard
