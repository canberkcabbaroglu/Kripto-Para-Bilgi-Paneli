import React from 'react';
import PropTypes from 'prop-types';
import './ExchangeList.css';

const ExchangeList = ({ name, url, country, year, image, price }) => (
  <div className="list-container">
    <div className="list-row">
      <div className="list">
        <img src={image} alt="crypto" />
        <h1>{name}</h1>
      </div>
      <div className="list-data">
        <p className="list-country">{country}</p>
        <p className="list-url">{url}</p>
        <p className="list-year">{year}</p>
        <p className="list-price">${price.toFixed(2)}</p>
      </div>
    </div>
  </div>
);

ExchangeList.propTypes = {
  name: PropTypes.isRequired,
  url: PropTypes.isRequired,
  country: PropTypes.isRequired,
  year: PropTypes.isRequired,
  image: PropTypes.isRequired,
  price: PropTypes.isRequired
};

export default ExchangeList;
