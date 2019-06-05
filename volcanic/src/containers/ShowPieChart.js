import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import '../style/chart.scss';
import { Container, Row, Col } from 'reactstrap';


var labelStyle = {
  fontSize: 'normal',
  color: '#fff',
  paddingRight: 10,
  cursor: 'pointer'
  };

export default function ShowPieChart(props) {
   console.log(Doughnut)
  return (
    <div className='chart'>
      <h2>Dynamicly refreshed Doughnut Example</h2>
        <Doughnut 
        style = {labelStyle}
          data={props.all} 
          width={110}
          height={50}
          color={'#fff'}
        />

        <Row>
          <Col xs="6">
            <Doughnut 
            data={props.filter} 
            width={70}
            height={50}
            />
          </Col>
          <Col xs="6">
            <Doughnut 
            data={props.search} 
            width={70}
            height={50}
            />
          </Col>
        </Row>

        <Row>
          <Col xs="6">
            <Doughnut 
            data={props.job_application} 
            width={70}
            height={50}
            />
          </Col>
          <Col xs="6">
            <Doughnut 
            data={props.navigation} 
            width={70}
            height={50}
            />
          </Col>
        </Row>

    
        
        
    </div>
  );
}