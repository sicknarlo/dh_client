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


class Players extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortColumn: 'name',
      sortDirection: 'asc',
      players: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:4040/api/player")
      .then(response => response.json())
      .then(players => this.setState({ players }));
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
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th>Name <i class="fa fa-sort"></i></th>
                      <th>Team <i class="fa fa-sort"></i></th>
                      <th>Position <i class="fa fa-sort"></i></th>
                    </tr>
                  </thead>
                  <tbody>
                  {this.state.players.map(p => {
                    return (
                      <tr>
                        <td>{p.name}</td>
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
