
import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {

    const { currency } = useContext(ShopContext);

    return (
        <Link
            className='text-gray-700 cursor-pointer block'
            to={`/product/${id}`}
        >
            {/* Product Image */}
            <div className='overflow-hidden'>
                <img
                    className='w-full hover:scale-110 transition ease-in-out'
                    src={image[0]}
                    alt={name}
                />
            </div>

            {/* Product Name */}
            <p className='pt-3 pb-1 text-sm'>
                {name}
            </p>

            {/* Product Price */}
            <p className='text-sm font-medium'>
                {currency}{price}
            </p>
        </Link>
    );
};

export default ProductItem;
