import React from 'react';
import { Breadcrumb as AntBreadcrumb } from 'antd';
import { func, string } from 'prop-types';
import { startCase } from 'lodash';
import { ROOT_PATH } from '../../../routing/paths';

const reconstructPath = (path, index) => {
  const newPath = path.split('/');
  const pathArr = newPath.filter((_path, i) => i <= index);
  return pathArr.join('/');
};

/**
 * Breadcrumb component
 * This component handles the breadcrumb given a pathname and a function to
 * go to a specific location
 *
 * @pathname - (redux) the actual pathname from the router
 * @goTo     - (redux) function mapped to react-router-redux "push"
 *
 */
const Breadcrumb = ({ pathname, goTo }) => {
  const locationItems = pathname ? pathname.split('/') : [];

  const handleClick = (path) => () => {
    goTo(path);
  };

  return (
    <AntBreadcrumb>
      <AntBreadcrumb.Item onClick={handleClick(ROOT_PATH)}>
        Home
      </AntBreadcrumb.Item>
      {locationItems.map((item, index) => (
        <AntBreadcrumb.Item
          key={item}
          onClick={handleClick(reconstructPath(pathname, index))}
        >
          {startCase(item)}
        </AntBreadcrumb.Item>
      ))}
    </AntBreadcrumb>
  );
};

Breadcrumb.propTypes = {
  pathname: string.isRequired,
  goTo: func.isRequired,
};

export default Breadcrumb;
