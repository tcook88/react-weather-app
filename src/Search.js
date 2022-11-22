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
        </div>
        </div>
      </form>
      </div>
    );
}