import React from 'react';
import { Button, Row } from 'reactstrap';

const Logout = props => (
  <Row className="justify-content-center my-4">
    <Button color="primary" size="lg" onClick={props.logout}>Logout</Button>
  </Row>
);

export default Logout;
