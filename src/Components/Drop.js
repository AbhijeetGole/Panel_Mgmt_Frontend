import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'panel1', label: 'panel1' },
  { value: 'panel2', label: 'panel2' },
  { value: 'xpanel3', label: 'xpanel3' },
];

export default function Drop() {
  const [selectedOption, setSelectedOption] = useState(null);
  console.log(selectedOption);
  return (
    <div className="Apps">
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </div>
  );
}