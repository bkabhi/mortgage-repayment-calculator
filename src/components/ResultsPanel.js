import React from 'react';
import Image from 'next/image';
import illustrationEmptyImage from '../assets/images/illustration-empty.svg';
import EmptyResult from './EmptyResult';
import CalculationResults from './CalculationResults';

const ResultsPanel = ({ hasCalculated, monthlyPayment, totalRepayment }) => {
  return (
    <div className="w-full sm:rounded-bl-[80px] md:w-1/2 bg-slate-900 px-6 py-8 sm:p-10 text-white">
      {!hasCalculated ? (
        <EmptyResult />
      ) : (
        <CalculationResults monthlyPayment={monthlyPayment} totalRepayment={totalRepayment} />
      )}
    </div>
  );
};

export default ResultsPanel;
