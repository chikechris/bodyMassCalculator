import React from 'react';

const BmiCalculator = () => {
  return (
    <>
      <div className='bmi-inpute'>
        <div className='inputs-fields'>
          <div>
            <span className='label-unit'>Unit</span>
            <div className='unit'>
              <select
              name='unit'
              value=''
              className='form-control form-control-sm'
              >
                <option value='Imperial'>Imperial</option>
                <option value='Metric'>Metric</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BmiCalculator;
