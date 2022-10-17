import React, { useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

function Country(props) {
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
            name={props.name}
            required={true}
            defaultValue={{ label: props.value, value: props.value }}
        />
    );
}

export default Country;
