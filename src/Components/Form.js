import React from 'react';

const Form = (props) => {
  return (
    <form onSubmit={props.getWeather} className="form">
      <input type="text" name="city" placeholder="City...." />
      <input type="text" name="country" placeholder="Country...." />
      <button className="myButton">Get Weather</button>
    </form>
  )
}
export default Form