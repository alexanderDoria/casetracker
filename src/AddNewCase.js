import React, { Component } from 'react';
import { Button, Modal, ButtonToolbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import Autocomplete from 'react-google-autocomplete';

export const MySmallModal = React.createClass({
  render() {
    return (
      <Modal {...this.props} bsSize="small" aria-labelledby="contained-modal-title-sm">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-sm">Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Wrapped Text</h4>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
});

export const MyLargeModal = React.createClass({
  render() {
    return (
      <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Enter case information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Wrapped Text</h4>
            <div class="form-group">
            <Autocomplete
              style={{width: '90%'}}
              onPlaceSelected={(place) => {
                console.log(place);
              }}
              types={['(regions)']}
              componentRestrictions={{country: "us"}}
            />
            <label>Case Number: </label>
            <input type="text" class="form-control" placeholder="Enter Case #" name="caseNumber"/>
            </div>
            <div class="form-group">
            <label>Crime: </label>
            <input type="text" class="form-control" placeholder="Enter Crime" name="crime"/>
            </div>
            <div class="form-group">
            <label>Location: </label>
            <input type="text" class="form-control" placeholder="Enter Location" id="location"/>
            </div>
            <div class="form-group">
            <label>Reporting Party: </label>
            <input type="text" class="form-control" placeholder="Enter Reporting Party" name="reportingParty"/>
            </div>
            <div class="form-group">
            <label>Victim: </label>
            <input type="text" class="form-control" placeholder="Enter Victim" name="victim"/>
            </div>
            <div class="form-group">
            <label>Suspect: </label>
            <input type="text" class="form-control" placeholder="Enter Suspect" name="suspect"/>
            </div>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
          <Button onClick={this.props.onHide}>Save</Button>
        </Modal.Footer>
      </Modal>
    );
  }
});

export const ModalApp = React.createClass({
  getInitialState() {
    return { smShow: false, lgShow: false };
  },
  render() {
    let smClose = () => this.setState({ smShow: false });
    let lgClose = () => this.setState({ lgShow: false });

    return (
      <ButtonToolbar id="addCase">
        <OverlayTrigger placement="left" overlay={
            <Tooltip id="tooltip"><strong>Add new case</strong></Tooltip>}>
          <Button bsStyle="success" onClick={()=>this.setState({ lgShow: true })}>
        
           <span className="glyphicon glyphicon-plus"></span>
        </Button>
        </OverlayTrigger>

        <MySmallModal show={this.state.smShow} onHide={smClose} />
        <MyLargeModal show={this.state.lgShow} onHide={lgClose} />
      </ButtonToolbar>
    );
  }
});

export const SearchBox = React.createClass({
  buttonClick: function() {
    alert(this.refs.searchField.getDOMNode().value);
  },
  render: function() {
    return (
      <div>     
        <label htmlFor="searchTextField">
          Please Insert an address:
        </label>
        <br/>
        <input ref='searchField' id="searchTextField" type="text" size="50"/>
        <br/>
        <button onClick={this.buttonClick}>Submit</button>
      </div>
    );
  }
});

//ReactDOM.render(<ModalApp/>, document.getElementById('mountNode'));
