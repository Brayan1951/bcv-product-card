import React from "react";
import renderer from "react-test-renderer";
import { ProductCard } from "../../src/components/ProductCard";
import { ProductImage } from '../../src/components/ProductImage';
import { product2 } from '../data/products';

describe('Product Image', () => {
    test('debe de mostar el componente correctamente con la imagen personalizada', () => {
        const wrapper = renderer.create(<ProductImage img="./no-image.jpg" />)
        expect(wrapper.toJSON()).toMatchSnapshot()

    })
    test('debe de mostrar el componente con el nombre del a imagen del producto', () => {
        const wrapper = renderer.create(<ProductCard initialValues={{}} product={product2}>
            {
                () => (
                    <ProductImage />
                )
            }
        </ProductCard>)
        expect(wrapper.toJSON()).toMatchSnapshot()
    })

})

