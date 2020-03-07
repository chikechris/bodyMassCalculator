import React, { useState, useEffect } from 'react';
import FormInput from './FormInput';

const BmiCalculator = () => {
  const [heightUnit, setHeightUnit] = useState('m');
  const [weightUnit, setWeightUnit] = useState('kg');
  const [unit, setUnit] = useState('Metric');
  // const [count, setCount] = useState({
  //  data:{
  //       heightCount: '0',
  //       inchesCount: '0',
  //       weightCount: '0'
  //     }
  // })
  const [count, setCount] = useState({
    heightCount: '0',
    inchesCount: '0',
    weightCount: '0'
  });

  // const { heightCount, inchesCount, weightCount   }= count.data
  const { heightCount, inchesCount, weightCount } = count;

  useEffect(() => {}, []);

  const onChangeInput = e => {
    const { name, value } = e.target;
    // const {data} = count
    // setCount({
    //  data:{
    //    ...data,
    //     [name]: value
    // }
    // })
    setCount(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const onSelectTag = e => {
    setUnit(e.target.value);
    if (e.target.value === 'Metric') {
      setHeightUnit('m');
      setWeightUnit('kg');
    } else {
      setHeightUnit('ft');
      setWeightUnit('lbs');
    }
  };

  const resetData = e => {
    e.preventDefault();
    setUnit('Metric');
    setCount({
      heightCount: '0',
      inchesCount: '0',
      weightCount: '0'
    });
    setHeightUnit('m');
    setWeightUnit('kg');
  };
  return (
    <>
      <div className='bmi-inpute'>
        <div className='inputs-fields'>
          <div>
            <span className='label-unit'>Select Unit</span>
            <div className='unit'>
              <select
                name='unit'
                value={unit}
                onChange={onSelectTag}
                className='form-control form-control-sm'
              >
                <option value='Metric'>Metric</option>
                <option value='Imperial'>Imperial</option>
              </select>
            </div>
          </div>
          <FormInput
            type='text'
            name='heightCount'
            title={`Height (${heightUnit})`}
            value={heightCount}
            onChange={onChangeInput}
          />
          {unit === 'Imperial' ? (
            <FormInput
              type='text'
              name='inchesCount'
              title={`(inches)`}
              value={inchesCount}
              onChange={onChangeInput}
            />
          ) : (
            ''
          )}

          <FormInput
            type='text'
            name='weightCount'
            title={`Weight (${weightUnit})`}
            value={weightCount}
            onChange={onChangeInput}
          />
        </div>
        <button className='button' type='submit' onClick={resetData}>
          Reset
        </button>
      </div>
    </>
  );
};

export default BmiCalculator;
