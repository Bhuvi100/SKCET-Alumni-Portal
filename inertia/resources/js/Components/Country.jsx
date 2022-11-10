import React, { useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

function Country(props) {
    const customStyles = {
        menu: (provided, state) => ({
          ...provided,
          width: state.selectProps.width,
          borderBottom: '1px dotted pink',
          color: state.selectProps.menuColor,        
        }),
      
        control: (_, { selectProps: { width }}) => ({
          width: width
        }),
      
        singleValue: (provided, state) => {
          const opacity = state.isDisabled ? 0.5 : 1;
          const transition = 'opacity 300ms';
      
          return { ...provided, opacity, transition };
        }
      }

    let options = useMemo(() => countryList().getLabels(), []);

    options = options.map((label) => {
        return {
            value: label,
            label: label,
        };
    });

    return (
        <Select
            options={options}
            defaultInputValue={props.value}
            onChange={({ label, value }) => {
                props.onChange("country", value);
            }}
            //styles={customStyles}
            width='100%'
            name={props.name}
            required={true}
            defaultValue={{ label: props.value, value: props.value }}
        />
    );
}

export default Country;
