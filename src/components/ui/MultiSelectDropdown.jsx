import React from 'react';
import Select from 'react-select';

  // Collection Documentation
const options = [
  { value: 'certs', label: 'GMC' },
  { value: 'certs', label: 'Certification' },
  { value: 'certs', label: 'Verification' },
  { value: 'certs', label: 'CHED' },
  { value: 'certs', label: 'Course Description' },
  { value: 'docstamp', label: 'Document Stamps' },
  { value: 'id', label: 'Lost ID' },
  { value: 'diploma-fee', label: 'Lost Disploma' },
  { value: 'diploma-fee', label: 'Graduation Fee' },
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
