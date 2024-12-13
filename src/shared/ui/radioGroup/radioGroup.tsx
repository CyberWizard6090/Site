import React, { useState } from 'react';

// Define the type for radio options
interface RadioOption {
  label: string;
  value: string;
}

// Props for the RadioGroup component
interface RadioGroupProps {
  options: RadioOption[];
  name: string;
  selectedValue?: string;
  onChange: (value: string) => void;
}

// RadioGroup functional component
export const RadioGroup: React.FC<RadioGroupProps> = ({ options, name, selectedValue, onChange }) => {
  const [currentValue, setCurrentValue] = useState<string | undefined>(selectedValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCurrentValue(value);
    onChange(value);
  };

  return (
    <div role="radiogroup" aria-labelledby={`${name}-label`}>
     {options.map((option) => (
        <label key={option.value} style={{ display: 'block', margin: '4px 0' }}>
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={currentValue === option.value}
            onChange={handleChange}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

