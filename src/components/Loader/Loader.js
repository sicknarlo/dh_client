import React from 'react';
import { Row, Col } from 'reactstrap';

const Loader = () => (
  <div className="animated fadeIn">
    <Row>
      <Col xs="12">
        <div class="sk-double-bounce">
          <div class="sk-child sk-double-bounce1"></div>
          <div class="sk-child sk-double-bounce2"></div>
        </div>
      </Col>
    </Row>
  </div>
);

export default Loader;
