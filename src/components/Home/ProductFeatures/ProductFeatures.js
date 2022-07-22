import React from 'react';
import featureIcon from '../../../assets/images/icons/feature-icon.png';
import featureImage from '../../../assets/images/product-feature.png'

const ProductFeatures = () => {
    return (
        <div className='mt-20 px-8'>
            <div className='mt-36'>
                <h3 className='text-secondary font-medium text-center'>Products Features</h3>
                <h1 className='text-5xl font-bold text-accent mt-3 mb-9 text-center'>Make more out of your data</h1>
            </div>
            <div className='grid grid-cols-3 gap-5'>
                <div className='flex flex-col justify-center items-center'>
                    <div>
                        <img className='ml-auto' src={featureIcon} alt="icon" />
                        <h2 className='text-accent text-xl font-medium'>Real-time analytics</h2>
                        <p className='text-base-100 text-sm font-base'>See product usage, sign-ins, feature <br /> metrics change as users work on your.</p>
                    </div>
                    <div>
                        <img className='ml-auto' src={featureIcon} alt="icon" />
                        <h2 className='text-accent text-xl font-medium'>Intuitive dashboard</h2>
                        <p className='text-base-100 text-sm font-base'>See product usage, sign-ins, feature <br /> metrics change as users work on your.</p>
                    </div>
                    <div>
                        <img className='ml-auto' src={featureIcon} alt="icon" />
                        <h2 className='text-accent text-xl font-medium'>Smart suggestions</h2>
                        <p className='text-base-100 text-sm font-base'>See product usage, sign-ins, feature <br /> metrics change as users work on your.</p>
                    </div>
                </div>
                <div>
                    <img src={featureImage} alt="product feature" />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div>
                        <img className='mr-auto' src={featureIcon} alt="icon" />
                        <h2 className='text-accent text-xl font-medium'>Multiple views</h2>
                        <p className='text-base-100 text-sm font-base'>See product usage, sign-ins, feature <br /> metrics change as users work on your.</p>
                    </div>
                    <div>
                        <img className='mr-auto' src={featureIcon} alt="icon" />
                        <h2 className='text-accent text-xl font-medium'>AI-led diagnoses</h2>
                        <p className='text-base-100 text-sm font-base'>See product usage, sign-ins, feature <br /> metrics change as users work on your.</p>
                    </div>
                    <div>
                        <img className='mr-auto' src={featureIcon} alt="icon" />
                        <h2 className='text-accent text-xl font-medium'>Responsive</h2>
                        <p className='text-base-100 text-sm font-base'>See product usage, sign-ins, feature <br /> metrics change as users work on your.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductFeatures;