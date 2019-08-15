import React from 'react';
import ReactDOM from 'react-dom';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './index.css';


class DayCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      weekday:    "null",
      minTemp:     "null",
      maxTemp:     "null",
      weatherIcon: "null"
    };
  }
  render() {
    return(
      <Button variant="outline-secondary" 
              style={{paddingTop: '0px', paddingBottom: '0px', paddingRight: '0px', paddingLeft: '0px'}}
              onClick={()=>{alert("Funcionou!")}}
              >
        <Card style={{ width: '9rem' }} className="justify-content-md-center">
          <Col className="text-center">{this.state.weekday}</Col>
          <Col className="text-center">
            <img 
              width={64}
              height={64}
              className="mr-3"
              src={this.state.weatherIcon}
              alt="Null"
            />
          </Col>
          <Row>
            <Col className="text-center">{this.state.minTemp}</Col>
            <Col className="text-center">{this.state.maxTemp}</Col>
          </Row>
        </Card>
      </Button>
      );
  }
}


class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>Teste</h1>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <DayCard/ >
          </Col>
          <Col md="auto">
            <DayCard/ >
          </Col>
          <Col md="auto">
            <DayCard/ >
          </Col>
          <Col md="auto">
            <DayCard/ >
          </Col>
          <Col md="auto">
            <DayCard/ >
          </Col>

        </Row>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
