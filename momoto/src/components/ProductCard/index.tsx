import { AspectRatio, Card, Image, Overlay } from "@mantine/core"
import styles from "./productCard.module.css"
import MomotoButton from "../Button"
import { useState } from "react"
import { IconZoom } from "@tabler/icons-react"
import { Link, useNavigate } from "react-router-dom"
import { ProductType } from "src/pages/Home"

const ProductCard = ({ id, name, price, image_folder }: ProductType) => {
  const [overlayVisible, setOverlayVisible] = useState(false)
  const navigate = useNavigate()
  return (
    <Card classNames={styles} radius={0}>
      <Card.Section onClick={() => navigate(`/product?product-id=${id}`)}>
        <div onMouseEnter={() => setOverlayVisible(true)} onMouseLeave={() => setOverlayVisible(false)}>
          <AspectRatio ratio={298 / 414} maw={414}>
            <img src={`../momoto-web/images/products/${image_folder}/${image_folder}_01.jpg`} alt={name} />
          </AspectRatio>
          {overlayVisible &&
            <Overlay className={styles.overlay} color='#fff' backgroundOpacity={0.5}>
              <MomotoButton leftSection={<IconZoom size={14} />}>VIEW</MomotoButton>
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
