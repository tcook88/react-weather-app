import logo from './logo.svg';
import './App.css';
import Search from './Search';
import Forecast from './Forecast';
import Weather from './Weather';

function App() {
  let days = [
    {
      name: "Sun",
      icon: "sunny",
      hi: 99,
      lo: 0
    },
    {
      name: "Mon",
      icon: "sunny",
      hi: 99,
      lo: 0
    },
    {
      name: "Tue",
      icon: "sunny",
      hi: 99,
      lo: 0
    },
    {
      name: "Wed",
      icon: "sunny",
      hi: 99,
      lo: 0
    },
    {
      name: "Thu",
      icon: "sunny",
      hi: 99,
      lo: 0
    }
  ];

  function handleSearch() {
    console.log('this runs when our search gets submitted');
  }

  return (
    <div className="App">
      <h1>Weather App</h1>
    <Search onSubmit={handleSearch} />
    <Weather />
    
    <Forecast days={days}/>
    <div class="footer"><a href="https://github.com/tcook88/react-weather-app" target="_blank"
                class="github-link">Open-source
                code</a><span>, by Tara Cook </span>
            <div><a href="https://www.flaticon.com/free-icons/weather" target="_blank" rel="noreferrer" title="weather icons">Weather
                    icons created
                    by iconixar - Flaticon</a></div>
        </div>
    </div>
  );
}

export default App;
