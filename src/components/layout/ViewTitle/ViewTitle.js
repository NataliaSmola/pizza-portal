import React from 'react';
import PropTypes from 'prop-types';

class ViewTitle extends React.Component {
  render() {
    return (
      <h2> {this.props.children} view</h2>
    );
  }
}

ViewTitle.propTypes = {
  children: PropTypes.string,
};

export default ViewTitle;
