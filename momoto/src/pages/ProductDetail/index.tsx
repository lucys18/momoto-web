import Navbar from 'src/components/Navbar'
import Footer from 'src/components/Footer'
import { useSearchParams } from 'react-router-dom'
import MomotoBreadcrumbs from 'src/components/Breadcrumbs'
import styles from './producDetail.module.css'
import { useEffect, useState } from 'react'
import { ProductType } from '../Home'
import { Divider, Grid, ScrollArea, SimpleGrid } from '@mantine/core'
import MomotoTitle from 'src/components/Title'
import ProductCard from 'src/components/ProductCard'
import MomotoButton from 'src/components/Button'

const ProductDetail = () => {
  const [searchParams] = useSearchParams()
  const productId = searchParams.get('product-id')
  const [product, setProduct] = useState<ProductType | null>(null)
  const [otherProducts, setOtherProducts] = useState<ProductType[] | null>(null)
  useEffect(() => {
    fetch("../momoto-web/products.json").then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`)
      }
      return res.json()
    })
      .then((data) => {
        setOtherProducts(data.products.slice(0, 4))
        const productById = data.products.filter((product: ProductType) => product.id === productId)
        if (productById.length) {
          setProduct(productById[0])
        } else {
          setProduct(null)
        }
      })
      .catch((error) => console.log("Unable to fetch data: ", error))
  }, [productId])

  return (<div>
    <Navbar active='products' />
    <div className={styles.wrapper}>
      <MomotoBreadcrumbs>
        <a href='/'>Home</a>
        <a href='/products'>Products</a>
        <p>{product?.name}</p>
      </MomotoBreadcrumbs>
      <Grid grow>
        <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 2, xs: 2, sm: 2, lg: 1 }}>
          <ScrollArea h={800}>
            {
              product?.images?.map((image) =>
                <img src={`../momoto-web/images/products/${product.image_folder}/${image}`} alt={product.name} width="100%" />)
            }
          </ScrollArea>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 1, xs: 1, sm: 1, lg: 2 }}>
          <div className={styles.productInfo}>
            <div className={styles.productHeader}>
              <MomotoTitle order={2} color='orange'>{product?.name}</MomotoTitle>
              <MomotoTitle order={4} color='black'>${product?.price}</MomotoTitle>
              <p className={styles.productCode}>PRODUCT CODE:</p>
            </div>
            <div>
              <MomotoButton>SEND US A MESSAGE TO BUY</MomotoButton>
            </div>
            <p className={styles.disclaimer}>All jackets available in sizes from S to L. Delivery time of 3 months from the order placement day Paying method accepts Paypal and money transfer. All shipping costs and taxes for enetring the country must be payed by the buyer and will be indicated at the time of ordering.</p>
          </div>
        </Grid.Col>
      </Grid>
      <Divider my='md' />
      <div>
        <MomotoTitle color='black' order={5}>You might also like</MomotoTitle>
        <SimpleGrid cols={{ sm: 2, lg: 4 }} spacing={{ base: 10, sm: 'xl' }}>
          {
            otherProducts?.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))
          }
        </SimpleGrid>
      </div>
    </div>
    <Footer />
  </div>)
}

export default ProductDetail
