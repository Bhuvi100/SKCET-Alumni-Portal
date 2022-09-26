import React from 'react'
import { Country, State, City }  from 'country-state-city';
import Select from 'react-select'
import  { useState, useMemo } from 'react'
const CountryState = () => {
  const con = "IN"
  const [value, setValue] = useState('')
  //const options = useMemo(() => State.getStatesOfCountry(con).map((c) => c.name),[])
  const options = useMemo(() => State.getStatesOfCountry("IN").map((c) => c.name), [])
  console.log(State.getStatesOfCountry("IN").map((c) => c))
  console.log(options)
  console.log(`Options =  ${State.getStatesOfCountry("IN").map((c) => c.name)}`)
  const changeHandler = value => {
    setValue(value)
  }
  return <Select options={options} value={value} onChange={changeHandler} />
}

export default CountryState