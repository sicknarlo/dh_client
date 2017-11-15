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
import Loader from '../../components/Loader';


class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: null,
      loading: true,
    };
  }
  componentDidMount() {
    console.log(this.props);
    const playerId = this.props.match.params.playerId;
    fetch(`http://localhost:4040/api/player/${playerId}`)
      .then(response => response.json())
      .then(player => this.setState({
        player,
        loading: false,
       }));
  }

  render() {
    if (this.state.loading) return <Loader />;
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>
                {this.state.player && this.state.player.name}
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
