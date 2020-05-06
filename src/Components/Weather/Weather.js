import React from 'react';

const Weather = (props) => {
  return (
    <div className="weather">
      <div className="city-country">
        {
          props.temperature && <p className="city"> {props.city}, </p>
        }
        {
          props.country && <p className="country"> {props.country}</p>
        }
      </div>
      {
        props.main && <p className="main-description">{props.main}</p>
      }

      {
        props.temperature && <p className="temperature">{Math.floor((props.temperature - 273.15))} <span>o</span></p>
      }
      <div className="min-max">
        {
          props.temp_min && <p className="min-temperature">{Math.floor((props.temp_min - 273.15))} <span>o</span></p>
        }
        {
          props.temperature && <p className="max-temperature">{Math.floor((props.temp_max - 273.15))} <span>o</span></p>
        }
      </div>
      {
        props.description && <p className="description">{props.description}</p>
      }
      {
        props.error && <p className="error">{props.error}</p>
      }
    </div>

  )
}

export default Weather