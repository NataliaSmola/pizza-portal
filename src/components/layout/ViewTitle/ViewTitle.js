import React from 'react';
import PropTypes from 'prop-types';

const ViewTitle = ({title}) => (
  <h2>
    {title} view
  </h2>
);

ViewTitle.propTypes = {
  title: PropTypes.string,
};

export default ViewTitle;
