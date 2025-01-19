import React from 'react';

const CalculationResults = ({ monthlyPayment, totalRepayment }) => {
  return (
    <>
      <h2 className="text-preset-2 font-bold mb-4">Your results</h2>
      <p className="text-preset-4 text-slate-300 mb-6 sm:mb-10">
        Your results are shown below based on the information you provided.
        To adjust the results, edit the form and click "calculate repayments" again.
      </p>

      <div className="border-t-4 rounded-lg border-primary-lime sm:mb-8 bg-black/25 px-4 py-6 sm:p-8">

        {/* Monthly Repayments */}
        <div>
          <p className="text-preset-4 text-slate-300 mb-2">
            Your monthly repayments
          </p>
          <p className="text-primary-lime text-[40px] leading-[50.4px] sm:text-preset-1 font-bold">
            £{Number(monthlyPayment).toLocaleString()}
          </p>
        </div>

        <hr className="h-px my-4 sm:my-8 border-[#9ABED540]" />
        {/* Total Repayment */}
        <div>
          <p className="text-preset-4 text-slate-300 mb-2">
            Total you'll repay over the term
          </p>
          <p className="text-white text-preset-2 font-bold">
            £{Number(totalRepayment).toLocaleString()}
          </p>
        </div>
      </div>

    </>
  );
};

export default CalculationResults;
