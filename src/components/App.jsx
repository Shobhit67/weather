import React, { useState, useEffect } from "react";

function App() {
  const [cityName, setCityName] = useState(null);
  const [search, setSearch] = useState("London");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=8af4fb0177da6294b8eac1e5a9bf3860`;
      const response = await fetch(url);
      const resJson = await response.json()
      console.log(resJson);
      setCityName(resJson);
    };
    fetchApi();
  }, [search]);

  return (
    
    <div>
      <div className ="app">
        <main>
          <div className="search-box">
            <input
              type="text"
              className="search-bar"
              placeholder="Search..."
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </div>

          {cityName && (
            <div>
              <div className="location-box">
                <div className="location">{search}</div>
                <div className="date">{}</div>
              </div>
              <div className="weather-box">
                <div className="temp">{cityName.main.temp}</div>
                <div className="weather">{}</div>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}

export default App;
