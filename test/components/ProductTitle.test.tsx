import React from 'react'
import renderer from "react-test-renderer";
import { ProductTitle } from '../../src/components/ProductTitle';
import { product1 } from '../data/products';
import { ProductCard } from '../../src/components/ProductCard';


describe('Product Title', () => {
    test('debe de mostrar el componente correctamente con el titulo personalizado', () => {
        const wrapper = renderer.create(<ProductTitle title='Custom Product' className='productDescription custom-class' />)
        expect(wrapper.toJSON()).toMatchSnapshot()

    })



    test('debe de mostrar el componente con el nombre del producto', () => {
        const wrapper = renderer.create(<ProductCard initialValues={{ count: 0 }} product={product1} className='productDescription custom-class' >
            {
                () => (
                    <ProductTitle />
                )
            }
        </ProductCard>)
        expect(wrapper.toJSON()).toMatchSnapshot()

    })
});
