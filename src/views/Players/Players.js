import React, { Component } from 'react';
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
      sortColumn: 'rank',
      sortDirection: 'asc',
      players: [],
      loading: true,
      filters: ['QB', 'WR'],
      rookieOnly: false
    };
  }
  componentDidMount() {
    fetch('http://localhost:4040/api/player')
      .then(response => response.json())
      .then(players =>
        this.setState({
          players,
          loading: false
        })
      );
  }

  render() {
    if (this.state.loading) return <Loader />;
    const sortedPlayers = this.state.players.slice().sort((a, b) => {
      return (
        a.ranks[this.props.atom.format].rank -
        b.ranks[this.props.atom.format].rank
      );
    });
    const sortedFilteredPlayers =
      this.state.filters.length === 0
        ? sortedPlayers
        : sortedPlayers.filter(player =>
            this.state.filters.includes(player.position)
          );
    // const limitedSortedFilteredPlayers = sortedFilteredPlayers.slice(this.state.;
    console.log(this.props.atom);
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>Players</CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th>
                        Rank <i className="fa fa-sort" />
                      </th>
                      <th>
                        Name <i className="fa fa-sort" />
                      </th>
                      <th>
                        Team <i className="fa fa-sort" />
                      </th>
                      <th>
                        Position <i className="fa fa-sort" />
                      </th>
                      <th>
                        Value <i className="fa fa-sort" />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedFilteredPlayers.map((p, i) => {
                      return (
                        <tr key={i}>
                          <td>{p.ranks.ppr.rank}</td>
                          <td>
                            <Link to={`/players/${p._id}`}>{p.name}</Link>
                          </td>
                          <td>{p.team}</td>
                          <td>{p.position}</td>
                          <td>{p.ranks.ppr.value}</td>
                        </tr>
                      );
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
