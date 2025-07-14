import React from 'react'
import Select from 'react-select'

const options = [
  { value: 'cs', label: 'College of Science' },
  { value: 'ced', label: 'College of Education' },
  { value: 'cistm', label: 'CISTM' }
]

const SelectSearch = () => (
  <Select options={options} placeholder="Select college.."/>
)

export default SelectSearch;