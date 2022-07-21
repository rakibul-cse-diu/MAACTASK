import React from 'react';

const Question = () => {
    return (
        <div className='bg-secondary py-16'>
            <div className='mb-10'>
                <h3 className='text-primary text-center font-medium'>About Us</h3>
                <h1 class="text-3xl font-bold text-center text-primary">Frequently asked questions</h1>
            </div>
            <div className='px-14'>
                <div className='grid grid-cols-2 gap-5'>
                    <div>
                        <div tabindex="0" class="collapse collapse-arrow mb-5 border border-primary bg-primary rounded-box">
                            <div class="collapse-title text-accent text-lg font-medium">
                                What kind of data can I see in FieldX?
                            </div>
                            <div class="collapse-content duration-500">
                                <p className='text-base-100'>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate.</p>
                            </div>
                        </div>
                        <div tabindex="0" class="collapse collapse-arrow mb-5 border border-primary bg-primary rounded-box">
                            <div class="collapse-title text-accent text-lg font-medium">
                                Does Bizzy read my customers' data?
                            </div>
                            <div class="collapse-content duration-500">
                                <p className='text-base-100'>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate.</p>
                            </div>
                        </div>
                        <div tabindex="0" class="collapse collapse-arrow mb-5 border border-primary bg-primary rounded-box">
                            <div class="collapse-title text-accent text-lg font-medium">
                                What's your refund and cancellation policy?
                            </div>
                            <div class="collapse-content duration-500">
                                <p className='text-base-100'>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate.</p>
                            </div>
                        </div>
                    </div>
                    <div className='px-8'>
                        <div tabindex="0" class="collapse collapse-arrow mb-5 border border-primary bg-primary rounded-box">
                            <div class="collapse-title text-accent text-lg font-medium">
                                How do you take payments?
                            </div>
                            <div class="collapse-content duration-500">
                                <p className='text-base-100'>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate.</p>
                            </div>
                        </div>
                        <div tabindex="0" class="collapse collapse-arrow mb-5 border border-primary bg-primary rounded-box">
                            <div class="collapse-title text-accent text-lg font-medium">
                                Can I also track website analytics on fieldX?
                            </div>
                            <div class="collapse-content duration-500">
                                <p className='text-base-100'>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate.</p>
                            </div>
                        </div>
                        <div tabindex="0" class="collapse collapse-arrow mb-5 border border-primary bg-primary rounded-box">
                            <div class="collapse-title text-accent text-lg font-medium">
                                What makes Bizzy different from other analytics tools?
                            </div>
                            <div class="collapse-content duration-500">
                                <p className='text-base-100'>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;