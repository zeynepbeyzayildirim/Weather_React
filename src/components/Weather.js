import { useAll } from "./context/Context";
import React from "react";
function Weather() {
  const { weather } = useAll();
  const dateFormat = month => {
    const newdateFormat = month
      .replace("01", "Ocak")
      .replace("02", "Şubat")
      .replace("03", "Mart")
      .replace("04", "Nisan")
      .replace("05", "Mayıs")
      .replace("06", "Haziran")
      .replace("07", "Temmuz")
      .replace("08", "Ağustos")
      .replace("09", "Eylül")
      .replace("10", "Ekim")
      .replace("11", "Kasım")
      .replace("12", "Aralık");
    return newdateFormat;
  };

  return <>
      {!weather && <div className="loading">Yükleniyor</div>}
      <div className="cardTitle">
      <br></br>
        <h1>
          <span>{weather?.city_name } </span> 
          
            Hava Durumu
        </h1>
        <br/>
      </div>
      <div className="weekWeather">
        {weather?.data?.map(item => (
          <div className="weekWeather-card group" key={item?.datetime}>
            <header className="date">
              <span className="day">{item?.datetime?.slice(8, 10)}</span>
              <span className="month">
                {dateFormat(item?.datetime?.slice(5, 7))}
              </span>
            </header>
           
            <div className="icon">
              <img
                alt={item?.weather?.description}
                title={item?.weather?.description}
                src={`https://www.weatherbit.io/static/img/icons/${item?.weather['icon']}.png`}
              />
            </div>
            <div className="maxmin">
              <span className="max">{Math.round(item?.max_temp)}&deg;</span>
              <span className="min">{Math.round(item?.min_temp)}&deg;</span>
            </div>
          </div>
        ))}
      </div>
    </>
}
export default Weather;

