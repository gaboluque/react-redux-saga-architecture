import React from 'react';
import './loader.scss';
import { bool } from 'prop-types';

const Loader = ({ transparent }) => {
  return (
    <div className={`loader-container ${transparent ? 'transparent' : ''}`}>
      <h2 className="logo">
        <div className="loader" />
      </h2>
    </div>
  );
};

Loader.propTypes = {
  transparent: bool,
};

Loader.defaultProps = {
  transparent: false,
};

export default Loader;
