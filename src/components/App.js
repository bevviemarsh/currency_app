import React, { Component } from "react";
import SetValues from "./SetValues";
import SetConversion from "./SetConversion";
import AddConversion from "./AddConversion";
import TransactionsList from "./TransactionsList";
import Summary from "./Summary";
import "../styles/App.css";
import { connect } from "react-redux";
import * as actions from "../actions/actions";

class App extends Component {
  counter = 0;

  state = {
    transactions: []
  };

  addConversion = conversion => {
    this.props.setConversion(conversion);
  };

  addTransaction = transaction => {
    if (this.props.conversion === "") {
      return;
    }

    transaction.zloty = this.props.conversion * transaction.amountOfEuro;

    transaction.zloty = parseFloat(transaction.zloty).toFixed(2);

    transaction.id = this.counter;
    this.counter++;

    let transactions = [...this.state.transactions, transaction];

    this.setState({
      transactions
    });
  };

  deleteTransaction = id => {
    let transactions = this.state.transactions.filter(transaction => {
      return transaction.id !== id;
    });

    this.setState({
      transactions
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="containerTransactions">
            <h1 className="header">SET ALL VALUES</h1>
            <div className="formContainer">
              <SetConversion add={this.addConversion} />
              <AddConversion conversion={this.props.conversion} />
              <SetValues add={this.addTransaction} />
            </div>
          </div>
          <div className="containerList">
            <h1 className="header">LIST OF TRANSACTIONS</h1>
            <TransactionsList
              transactions={this.state.transactions}
              deleteTransaction={this.deleteTransaction}
              conversion={this.props.conversion}
            />
          </div>
          <div className="containerSummary">
            <h1 className="header">SUMMARY</h1>
            <Summary
              transactions={this.state.transactions}
              conversion={this.props.conversion}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    conversion: state.conversion
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setConversion: conversion => dispatch(actions.setConversion(conversion))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
