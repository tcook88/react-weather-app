import React from "react";
import './Search.css';


export default function Search(props) { 
    
    function handleSubmit(e) {
      e.preventDefault();
      props.onSubmit(e);
    }

    return (
      <div className="Search">
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
      
        <input
          type="search"
          placeholder="Enter a city..."
          className="city-search"
        />
        <div className="button-wrapper">
        <button type="submit"className="submit-button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></button>
        <button className="location-button"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-crosshair"><circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line></svg></button>
        </div>
        </div>
      </form>
      </div>
    );
}