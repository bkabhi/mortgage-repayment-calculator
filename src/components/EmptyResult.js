import React from 'react';
import Image from 'next/image';
import illustrationEmptyImage from '../assets/images/illustration-empty.svg';

const EmptyResult = () => {
    return (
        <div className="h-full flex flex-col items-center justify-center text-center">
            <div>
                <Image
                    src={illustrationEmptyImage}
                    alt="Empty Calculator"
                    width={192}
                    height={192}
                    className="mx-auto mb-4"
                />
                <h2 className="text-preset-2 font-bold mb-4">Results shown here</h2>
            </div>
            <p className="text-preset-4 text-slate-300">
                Complete the form and click "calculate repayments" to see what your monthly repayments would be.
            </p>
        </div>
    )
}

export default EmptyResult