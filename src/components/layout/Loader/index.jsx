import React from 'react';
import './loader.scss';

const Loader = () => {
  return (
    <div className="loader-container">
      <h2 className="logo">
        <div className="loader" />
      </h2>
    </div>
  );
};

Loader.propTypes = {};

export default Loader;
