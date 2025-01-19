
import React, { useState } from 'react';
import Image from 'next/image';
import CalculatorIcon from '../assets/images/icon-calculator.svg';
import InputField from './InputField';
import ResultsPanel from './ResultsPanel';
import MortgageTypeSelector from './MortgageTypeSelector';

const mortgageTypeList = ['Repayment', 'Interest Only'];

const MortgageCalculator = () => {
  const [amount, setAmount] = useState('300,000');
  const [term, setTerm] = useState('25');
  const [rate, setRate] = useState('5.25');
  const [mortgageType, setMortgageType] = useState('');
  const [errors, setErrors] = useState({});
  const [hasCalculated, setHasCalculated] = useState(false);
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [totalRepayment, setTotalRepayment] = useState(null);
  const [activeField, setActiveField] = useState('');

  const validateForm = () => {
    const newErrors = {};

    const cleanAmount = amount.replace(/,/g, '');
    if (!cleanAmount) {
      newErrors.amount = 'This field is required';
    } else if (isNaN(cleanAmount) || Number(cleanAmount) <= 0) {
      newErrors.amount = 'Please enter a valid amount';
    }

    if (!term) {
      newErrors.term = 'This field is required';
    } else if (isNaN(term) || Number(term) <= 0 || Number(term) > 40) {
      newErrors.term = 'Term must be between 1-40 years';
    }

    if (!rate) {
      newErrors.rate = 'This field is required';
    } else if (isNaN(rate) || Number(rate) <= 0 || Number(rate) > 100) {
      newErrors.rate = 'Please enter a valid rate';
    }

    if (!mortgageType) {
      newErrors.mortgageType = 'This field is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCalculate = () => {
    if (validateForm()) {
      setHasCalculated(true);
      const principal = Number(amount.replace(/,/g, ''));
      const yearlyRate = Number(rate) / 100;
      const monthlyRate = yearlyRate / 12;
      const numberOfPayments = Number(term) * 12;

      if (mortgageType === mortgageTypeList[0]) {
        const monthlyPayment = (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
          (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
        setMonthlyPayment(monthlyPayment.toFixed(2));
        setTotalRepayment((monthlyPayment * numberOfPayments).toFixed(2));
      } else if (mortgageType === mortgageTypeList[1]) {
        const monthlyPayment = principal * monthlyRate;
        setMonthlyPayment(monthlyPayment.toFixed(2));
        setTotalRepayment((monthlyPayment * numberOfPayments + principal).toFixed(2));
      }
    }
  };

  const handleClearAll = () => {
    setAmount('');
    setTerm('');
    setRate('');
    setMortgageType('');
    setErrors({});
    setHasCalculated(false);
    setMonthlyPayment(null);
    setTotalRepayment(null);
  };

  return (
    <div className="min-h-screen bg-slate-100 sm:p-8 font-jakarta min-w-[320px] flex items-center justify-center">
      <div className="max-w-[1008px] mx-auto">
        <div className="bg-white sm:rounded-3xl shadow-custom overflow-hidden max-w-[375px] md:max-w-none mx-auto">
          <div className="flex flex-col md:flex-row">
            {/* Calculator Form */}
            <div className="w-full md:w-1/2 p-6 pb-8 sm:p-10">
              <div className="sm:flex justify-between items-center flex-wrap mb-6 sm:mb-10">
                <h1 className="text-preset-2 font-bold text-slate-900">Mortgage Calculator</h1>
                <button
                  onClick={handleClearAll}
                  className="text-preset-4 text-slate-700 hover:text-slate-500 underline"
                >
                  Clear All
                </button>
              </div>

              {/* Mortgage Amount */}
              <InputField
                label={'Mortgage Amount'}
                activeField={activeField}
                name={'amount'}
                value={amount}
                onChange={(val) => {
                  setAmount(val.replace(/[^0-9.]/g, ''));
                  if (errors.amount) setErrors(prev => ({ ...prev, amount: null }));
                }}
                setActiveField={setActiveField}
                errors={errors}
                startIcon={'£'}
              />

              {/* Term and Rate Container */}
              <div className="flex flex-col md:flex-row md:gap-6">
                {/* Mortgage Term */}
                <InputField
                  label={'Mortgage Term'}
                  activeField={activeField}
                  name={'term'}
                  value={term}
                  onChange={(val) => {
                    setTerm(val.replace(/[^0-9.]/g, ''));
                    if (errors.term) setErrors(prev => ({ ...prev, term: null }));
                  }}
                  setActiveField={setActiveField}
                  errors={errors}
                  endIcon={'years'}
                />

                {/* Interest Rate */}
                <InputField
                  label={'Interest Rate'}
                  activeField={activeField}
                  name={'rate'}
                  value={rate}
                  onChange={(val) => {
                    setRate(val.replace(/[^0-9.]/g, ''));
                    if (errors.rate) setErrors(prev => ({ ...prev, rate: null }));
                  }}
                  setActiveField={setActiveField}
                  errors={errors}
                  endIcon={'%'}
                />
              </div>

              {/* Mortgage Type */}
              <MortgageTypeSelector
                mortgageType={mortgageType}
                onClickType={(type) => {
                  setMortgageType(type);
                  if (errors.mortgageType) setErrors(prev => ({ ...prev, mortgageType: null }));
                }}
                errors={errors}
                mortgageTypeList={mortgageTypeList}
              />

              {/* Calculate Button */}
              <button
                onClick={handleCalculate}
                className="w-full sm:w-auto bg-primary-lime hover:bg-primary-lime/50 text-slate-900 font-bold py-4 px-4 sm:px-10 rounded-full flex items-center justify-center gap-3 text-preset-5 sm:text-preset-4"
              >
                <Image
                  src={CalculatorIcon}
                  alt="Calculator"
                  width={20}
                  height={20}
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
                Calculate Repayments
              </button>
            </div>

            {/* Results Panel */}
            <ResultsPanel
              hasCalculated={hasCalculated}
              monthlyPayment={monthlyPayment}
              totalRepayment={totalRepayment}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;