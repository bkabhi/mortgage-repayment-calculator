import React from 'react';

const InputField = ({ label, activeField, name, value, onChange, setActiveField, errors, startIcon, endIcon }) => {
  return (
    <div className="flex-1 mb-6">
      <label className="text-preset-4 text-slate-700 mb-3 block">
        {label}
      </label>
      <div className={`flex items-center bg-white border rounded-[4px] overflow-hidden 
    ${errors[name] ? 'border-primary-red' :
          activeField === name ? 'border-primary-lime' :
            'border-slate-500 hover:border-slate-900'}`}>
        {
          startIcon &&
          <div className={`py-3 px-4 flex items-center transition-colors duration-200 
            ${errors[name] ? 'bg-primary-red' :
              activeField === name ? 'bg-primary-lime' :
                'bg-slate-100'}`}>
            <span className={`text-preset-3 
                ${errors[name] ? 'text-white' :
                activeField === name ? 'text-slate-900' :
                  'text-slate-700'}`}>{startIcon}</span>
          </div>
        }
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setActiveField(name)}
          onBlur={() => setActiveField('')}
          className="text-preset-3 text-slate-900 font-bold w-full py-3 px-4 focus:outline-none"
        />
        {
          endIcon &&
          <div className={`py-3 px-4 flex items-center transition-colors duration-200 
        ${errors[name] ? 'bg-primary-red' :
              activeField === name ? 'bg-primary-lime' :
                'bg-slate-100'}`}>
            <span className={`text-preset-3 
            ${errors[name] ? 'text-white' :
                activeField === name ? 'text-slate-900' :
                  'text-slate-700'}`}>{endIcon}</span>
          </div>
        }
      </div>
      {errors[name] && (
        <p className="text-primary-red text-preset-5 mt-3">{errors[name]}</p>
      )}
    </div>
  );
};

export default InputField;
