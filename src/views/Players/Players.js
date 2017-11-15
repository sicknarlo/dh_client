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


class Players extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortColumn: 'name',
      sortDirection: 'asc',
      players: [],
      loading: true,
    };
  }
  componentDidMount() {
    fetch("http://localhost:4040/api/player")
      .then(response => response.json())
      .then(players => this.setState({
        players,
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
              <CardHeader>Players
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th>Name <i className="fa fa-sort"></i></th>
                      <th>Team <i className="fa fa-sort"></i></th>
                      <th>Position <i className="fa fa-sort"></i></th>
                    </tr>
                  </thead>
                  <tbody>
                  {this.state.players.map(p => {
                    return (
                      <tr>
                        <td><Link to={`/players/${p._id}`}>{p.name}</Link></td>
                        <td>{p.team}</td>
                        <td>{p.position}</td>
                      </tr>
                    )
                  })}
                  </tbody>
                </Table>
                <Pagination>
                  <PaginationItem>
                    <PaginationLink previous href="#" />
                  </PaginationItem>
                  <PaginationItem active>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">4</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink next href="#" />
                  </PaginationItem>
                </Pagination>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Players;
