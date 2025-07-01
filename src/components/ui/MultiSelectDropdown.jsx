import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'alabama', label: 'Alabama' },
  { value: 'alaska', label: 'Alaska' },
  { value: 'arizona', label: 'Arizona' },
  { value: 'arkansas', label: 'Arkansas' },
  { value: 'california', label: 'California' },
  { value: 'colorado', label: 'Colorado' },
  { value: 'connecticut', label: 'Connecticut' },
  { value: 'delaware', label: 'Delaware' },
];

const MultiSelectDropdown = () => {
  const [selectedOptions, setSelectedOptions] = React.useState([]);

  return (
    <div className="w-full max-w-md">
      <Select className='border-2 border-indigoHue rounded-sm'
        options={options}
        isMulti
        value={selectedOptions}
        onChange={setSelectedOptions}
        placeholder="Search and select states..."
      />
    </div>
  );
};

export default MultiSelectDropdown;
