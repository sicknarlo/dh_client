import React, {Component} from 'react';
import {
  Badge,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink
} from 'reactstrap';
import { Link } from 'react-router-dom';


class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: null,
    };
  }
  componentDidMount() {
    console.log(this.props);
    // const playerId = this.props.match
    // fetch(`http://localhost:4040/api/player`)
    //   .then(response => response.json())
    //   .then(players => this.setState({ players }));
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>Players
              </CardHeader>
              <CardBody>
                Merp
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Player;
