import React, { useState, useEffect } from 'react';
import FormInput from './FormInput';
import PropTypes from 'prop-types'

const BmiCalculator = props => {
  const { setBmiValueProp } = props;
  const [heightUnit, setHeightUnit] = useState('cm');
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

  useEffect(() => {
    metricBMI(heightCount, weightCount);
    // eslint-disable-next-line
  }, [heightCount, weightCount]);

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
      setHeightUnit('cm');
      setWeightUnit('kg');
    } else {
      setHeightUnit('ft');
      setWeightUnit('lbs');
    }
  };

  const metricBMI = (height, weight) => {
    if (height > 0 && weight > 0) {
      const heightToMeter = height / 100;
      const bmi = weight / Math.pow(heightToMeter, 2);
      setBmiValueProp(Math.round(bmi))
    }
  };

  const resetData = e => {
    e.preventDefault();
    setBmiValueProp(0)
    setUnit('Metric');
    setCount({
      heightCount: '0',
      inchesCount: '0',
      weightCount: '0'
    });
    setHeightUnit('cm');
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

BmiCalculator.propTypes = {
  setBmiValueProp: PropTypes.func.isRequired
}

export default BmiCalculator;
