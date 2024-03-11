import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCharities, fetchPayments } from './reducer/actions/creator';
import Charity from './pages/Charity';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      totalAmount : 0
    };
  }

  componentDidMount() {
    this.props.fetchCharities();
    this.props.fetchPayments();
  }

  render() {
    const loading = this.props.loading;

    return (
      <>
          {loading && ( 
          <div className='div-loading'>
            <h2 >Loading</h2> 
            <div className="typing-animation">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
          )}
        <Charity totalDonate = { this.props.totalDonate } error = { this.props.error } charities={this.props.charities}/>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  charities  : state.charities,
  payments   : state.payments,
  totalDonate: state.totalDonate,
  loading    : state.loading,
  error      : state.error
});

const mapDispatchToProps = {
  fetchCharities: fetchCharities,
  fetchPayments : fetchPayments
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
