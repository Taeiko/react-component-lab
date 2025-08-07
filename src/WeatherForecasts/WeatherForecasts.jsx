function WeatherForecasts(props) {
  return (
    <div className="weather">
      <h2>Day of the Week</h2>
      <h2>{props.forecast.day}</h2>
      <img src={props.forecast.img} alt={props.forecast.imageAlt} />
      <p>
        <span>conditions: {props.forecast.conditions} </span>
      </p>
      <p>
        <span>time: {props.forecast.time} </span>
      </p>
    </div>
  )
}
export default WeatherForecasts