import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import ShowPieChart from '../containers/ShowPieChart'
import PieChart from '../containers/PieChart'



export default class Home extends Component {

  render(){
    return (
      <div className="App">
        
              <PieChart/>
           
      
       
      </div>
    );
  }
}