import './App.css';
import Search from './Search';

function App() {
  
 return (
    <div className="App">
      <h1>Weather App</h1>
    <Search defaultCity="New York" />
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
