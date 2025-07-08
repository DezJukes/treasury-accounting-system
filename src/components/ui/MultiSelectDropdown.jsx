import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import "@/components/styles/multiselect.css";

const animatedComponents = makeAnimated();

  // Collection Documentation
const options = [
  { value: 'gmc', label: 'GMC' },
  { value: 'certs', label: 'Certification' },
  { value: 'ver', label: 'Verification' },
  { value: 'ched', label: 'CHED' },
  { value: 'course', label: 'Course Description' },
  { value: 'docstamp', label: 'Document Stamps' },
  { value: 'id', label: 'Lost ID' },
  { value: 'lost-dio', label: 'Lost Disploma' },
  { value: 'grad-fee', label: 'Graduation Fee' },
];

const MultiSelectDropdown = () => {
  const [selectedOptions, setSelectedOptions] = React.useState([]);

  return (
    <div className="multiselect-div">
      <Select className='multiselect border-2 border-indigoHue rounded-sm'
        options={options}
        components={animatedComponents}
        isMulti
        value={selectedOptions}
        onChange={setSelectedOptions}
        placeholder="Search and select documents..."
      />
    </div>
  );
};

export default MultiSelectDropdown;
