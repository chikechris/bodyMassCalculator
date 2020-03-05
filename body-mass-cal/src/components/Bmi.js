import React from 'react';
import BmiCalculator from './BmiCalculator'

const Bmi = () => {
  return (
    <>
      <div className='calculator'>
        <h3>Body Mass Index Calculator</h3>
        <div className='bmi-result-container'>
          <div className='bmi-result'>
            <div className='bmi-result-number'>Body Mass Index (Bmi) = 34</div>
            <div className={`bmi-category`}>Underweight</div>
          </div>
          <BmiCalculator />
        </div>
      </div>
    </>
  );
};

export default Bmi;
