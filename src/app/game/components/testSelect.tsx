import * as React from "react";
import {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator
} from "../../../components/ui/select"; // Assuming Select components are in './Select'
import { ChevronDown } from "lucide-react";
import { useState } from "react";

function TestSelect() {
    const options = [
        { value: "option-1", label: "Option 1" },
        { value: "option-2", label: "Option 2" },
        { value: "option-3", label: "Option 3" }
    ];
    const [selectedValue, setSelectedValue] = useState(options[0].value);

  const handleChange = (value) => {
    setSelectedValue(value);
  };
  return (
    <Select value={selectedValue} onValueChange={handleChange}>
      <SelectTrigger>
        <SelectValue>{selectedValue}</SelectValue>
        <ChevronDown className="h-4 w-4 opacity-50" />
      </SelectTrigger>
      <SelectContent> 
        <SelectGroup> 
          <SelectLabel>Select an option</SelectLabel> 
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}> 
              {option.label}
            </SelectItem> 
          ))}
          <SelectSeparator />
          <SelectItem value="custom">Custom Option</SelectItem>
        </SelectGroup>
      </SelectContent> 
    </Select>
  );
}

export default TestSelect;
