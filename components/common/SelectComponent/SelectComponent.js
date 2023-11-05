import React, { useState } from 'react';
import Select from 'react-select'
const options = [
    { value: 'November, 2022', label: 'November, 2022' },
    { value: 'November 23, 2022', label: 'November 23, 2022' },
    { value: 'November 24, 2022', label: 'November 24, 2022' },
  ];
const SelectComponent = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    return (
        <Select instanceId = "select-box"  className='otSelect flex-none lg:shrink-0' placeholder="Select" classNamePrefix="otSelect" name="otSelectName"  defaultValue={selectedOption} onChange={setSelectedOption} options={options} />
    );
};

export default SelectComponent;