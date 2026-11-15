
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import RelatedProducts from '../components/RelatedProducts';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = () => {

    const { productId } = useParams();
    const { products, currency , addToCart} = useContext(ShopContext);

    const [productData, setProductData] = useState(false);
    const [image, setImage] = useState('');
    const [size, setSize] = useState('');

    // Fetch selected product
    useEffect(() => {
        const product = products.find(item => item._id === productId);

        if (product) {
            setProductData(product);
            setImage(product.image[0]);
        }
    }, [productId, products]);


    return productData ? (

        <div className='border-t-2 pt-10 transition-opacity duration-500'>

            {/* Main Product Section */}
            <div className='flex flex-col sm:flex-row gap-10 sm:gap-12'>

                {/* Product Images */}
                <div className='flex-1 flex flex-col-reverse sm:flex-row gap-3'>

                    {/* Thumbnail Images */}
                    <div className='flex sm:flex-col gap-3 overflow-x-auto sm:overflow-y-auto sm:w-[18%] sm:max-h-[550px]'>

                        {productData.image.map((item, index) => (
                            <img
                                onClick={() => setImage(item)}
                                src={item}
                                key={index}
                                className={`w-20 sm:w-full flex-shrink-0 cursor-pointer border-2 ${
                                    image === item ? 'border-gray-800' : 'border-transparent'
                                }`}
                                alt={productData.name}
                            />
                        ))}

                    </div>

                    {/* Main Image */}
                    <div className='w-full sm:w-[82%]'>
                        <img
                            className='w-full aspect-[4/5] object-contain bg-gray-50'
                            src={image}
                            alt={productData.name}
                        />
                    </div>

                </div>


                {/* Product Information */}
                <div className='flex-1'>

                    {/* Product Name */}
                    <h1 className='font-medium text-2xl sm:text-3xl mt-2'>
                        {productData.name}
                    </h1>


                    {/* Product Rating */}
                    <div className='flex items-center gap-1 mt-3'>

                        <img src={assets.star_icon} alt="" className='w-4 h-4' />
                        <img src={assets.star_icon} alt="" className='w-4 h-4' />
                        <img src={assets.star_icon} alt="" className='w-4 h-4' />
                        <img src={assets.star_icon} alt="" className='w-4 h-4' />
                        <img src={assets.star_dull_icon} alt="" className='w-4 h-4' />

                        <p className='pl-2 text-sm text-gray-500'>
                            122 Reviews
                        </p>

                    </div>


                    {/* Product Price */}
                    <p className='mt-6 text-3xl font-medium'>
                        {currency}{productData.price}
                    </p>


                    {/* Product Description */}
                    <p className='mt-5 text-gray-500 text-sm leading-relaxed sm:w-4/5'>
                        {productData.description}
                    </p>


                    {/* Size Selection */}
                    <div className='flex flex-col gap-4 my-8'>

                        <p className='font-medium'>
                            Select Size
                        </p>

                        <div className='flex flex-wrap gap-3'>

                            {productData.sizes.map((item, index) => (
                                <button
                                    onClick={() => setSize(item)}
                                    className={`border py-2 px-4 text-sm transition ${
                                        item === size
                                            ? 'border-orange-500 bg-orange-50'
                                            : 'border-gray-300 bg-gray-100'
                                    }`}
                                    key={index}
                                >
                                    {item}
                                </button>
                            ))}

                        </div>

                    </div>


                    {/* Add to Cart */}
                    <button onClick = {() => {addToCart(productData._id,size)}}className='bg-black text-white px-10 py-3 text-sm hover:bg-gray-800 active:bg-gray-700 transition'>
                        ADD TO CART
                    </button>


                    {/* Product Policies */}
                    <hr className='mt-8 sm:w-4/5' />

                    <div className='flex flex-col gap-2 mt-5 text-sm text-gray-500'>

                        <p>100% Original Product</p>

                        <p>Cash on Delivery is available for this product.</p>

                        <p>Easy return and exchange policy within 7 days.</p>

                    </div>

                </div>

            </div>
            {/*--------------display related products---------------------- */}

            <RelatedProducts category={productData.category} subCategory={productData.subCategory} />

        </div>

    ) : (
        <div className='opacity-0'></div>
    );
};

export default Product;
