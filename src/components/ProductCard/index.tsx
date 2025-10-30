import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { AspectRatio, Card, Overlay } from '@mantine/core'
import { IconZoom } from '@tabler/icons-react'

import MomotoButton from 'src/components/Button'
import { ProductType } from 'src/pages/Home'

import styles from './productCard.module.css'

const ProductCard = ({ id, name, price, image_folder }: ProductType) => {
  const [overlayVisible, setOverlayVisible] = useState(false)
  const navigate = useNavigate()
  return (
    <Card classNames={{ section: styles.section }} radius={0}>
      <Card.Section onClick={() => navigate(`/product?product-id=${id}`)}>
        <div
          onMouseEnter={() => setOverlayVisible(true)}
          onMouseLeave={() => setOverlayVisible(false)}
        >
          <AspectRatio ratio={298 / 414} maw={414}>
            <img
              src={`../images/products/${image_folder}/${image_folder}_01.jpg`}
              alt={name}
            />
          </AspectRatio>
          {overlayVisible && (
            <Overlay
              className={styles.overlay}
              color='#fff'
              backgroundOpacity={0.5}
            >
              <MomotoButton leftSection={<IconZoom size={14} />}>
                VIEW
              </MomotoButton>
            </Overlay>
          )}
        </div>
        <div>
          <p className={styles.productName}>{name}</p>
          <p className={styles.productPrice}>${price}</p>
        </div>
      </Card.Section>
    </Card>
  )
}

export default ProductCard
