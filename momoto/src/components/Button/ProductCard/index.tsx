import { Card, Image, Text } from "@mantine/core"
import styles from "./productCard.module.css"

const ProductCard = ({ name, price, image }: any) => {
  return (
    <Card classNames={styles} radius={0}>
      <Card.Section>
        <Image src={image} alt={name} fit="cover" height={414} />
        <Text>
          {name}
        </Text>
        ${price}
      </Card.Section>
    </Card>
  )
}

export default ProductCard
