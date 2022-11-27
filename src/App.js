import './App.css';
import Search from './Search';

function App() {
  // let days = [
  //   {
  //     name: "Sun",
  //     icon: "rainy",
  //     hi: 99,
  //     lo: 0
  //   },
  //   {
  //     name: "Mon",
  //     icon: "snowy",
  //     hi: 99,
  //     lo: 0
  //   },
  //   {
  //     name: "Tue",
  //     icon: "sun",
  //     hi: 99,
  //     lo: 0
  //   },
  //   {
  //     name: "Wed",
  //     icon: "storm",
  //     hi: 99,
  //     lo: 0
  //   },
  //   {
  //     name: "Thu",
  //     icon: "cloud",
  //     hi: 99,
  //     lo: 0
  //   }
  // ];

  

  return (
    <div className="App">
      <h1>Weather App</h1>
    <Search defaultCity="New York" />
    {/* <Forecast days={days}/>  */}
    <div class="footer"><a href="https://github.com/tcook88/react-weather-app" target="_blank" rel="noreferrer"
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
