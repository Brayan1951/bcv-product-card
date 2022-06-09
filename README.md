# BCV-Product-Card

Este es un paquete de pruebas de despliegue de NPK

### Brayan Coveñas

## Ejemplo

```
import {  ProductButtons, ProductCard, ProductImage, ProductTitle }from 'bcv-product-card
```

```
 <ProductCard
          product={product}
          initialValues={{ count: 4, maxCount: 10 }}

        >{
            ({ reset, increaseBy, count, isMaxCountReached }) => (
              <>
                <ProductImage
                />
                <ProductTitle />
                <ProductButtons />

              </>
            )
          }
        </ProductCard>
```
