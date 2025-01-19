import React from 'react';

const MortgageTypeButton = ({ mortgageType, setMortgageType, name }) => {
  return (
    <button
      className={`w-full px-4 py-3 rounded-[4px] text-left transition-colors duration-200 ${mortgageType === name
        ? 'bg-primary-lime/15 border border-primary-lime'
        : 'border hover:border-primary-lime border-slate-500'
        }`}
      onClick={() => setMortgageType(name)}
    >
      <div className="flex items-center">
        <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border mr-3 flex items-center justify-center
                        ${mortgageType === name ? 'border-primary-lime' : 'border-slate-500'}`}>
          {mortgageType === name &&
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-primary-lime"></div>
          }
        </div>
        <span className="text-preset-3">{name}</span>
      </div>
    </button>
  );
};

const MortgageTypeSelector = ({ mortgageType, setMortgageType, errors, mortgageTypeList }) => {
  return (
    <div className="mb-6 sm:mb-10">
      <label className="text-preset-4 text-slate-700 mb-3 block">
        Mortgage Type
      </label>
      <div className={`space-y-3 ${errors.mortgageType ? 'border-primary-red' : ''}`}>
        {mortgageTypeList.map((name) => (
          <MortgageTypeButton key={name} name={name} mortgageType={mortgageType} setMortgageType={setMortgageType} />
        ))}
        {/* <MortgageTypeSelector name={'Repayment'} mortgageType={mortgageType} setMortgageType={setMortgageType} />
        <MortgageTypeSelector name={'Interest Only'} mortgageType={mortgageType} setMortgageType={setMortgageType} /> */}
      </div>
      {errors.mortgageType && (
        <p className="text-primary-red text-preset-5 mt-3">{errors.mortgageType}</p>
      )}
    </div>
  );
}

export default MortgageTypeSelector;
