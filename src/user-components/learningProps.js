import React from 'react';

const learningProps = (props) => (
  <div>
    <h4>
      Subject =
      {props.subject}
      version =
      {props.version}
    </h4>
    {props.children}
  </div>

);
export default learningProps;
