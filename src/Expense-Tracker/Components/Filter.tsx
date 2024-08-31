import React from 'react';

interface Props {
  onFilter: (catagory: string) => void;
}

const Filter = ({ onFilter }: Props) => {
  // drop down list Filter
  return (
    <div className="m-3">
      <label className="p-1" htmlFor="">
        Catagory
      </label>
      <select
        className="w-100 form-select"
        onChange={(e) => onFilter(e.target.value)}
      >
        {/* dont add value to All */}
        <option value="">All</option>
        <option value="Dairy">Dairy</option>
        <option value="Meats">Meats</option>
        <option value="Breads">Breads</option>
      </select>
    </div>
  );
};

export default Filter;
