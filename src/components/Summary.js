import React from "react";
import "../styles/Summary.css";

const Summary = ({ transactions }) => {
  if (transactions.length === 0) {
    return (
      <div>
        <div className="summaryBox">
          <span className="nameOfResult">Sum of transcations</span>
          <span className="result">0 PLN</span>
          <span className="nameOfResult">The highest transaction</span>
          <span className="result">--</span>
        </div>
      </div>
    );
  } else if (transactions.length === 1) {
    const result = transactions.map(transaction => transaction.zloty);

    const uniqueTransaction = transactions.map(transaction => {
      return (
        <div className="theHighestBox" key={transaction.id}>
          {transaction.name}:
          <span className="numberOnList">{transaction.amountOfEuro}</span>
          EURO =<span className="numberOnList">{transaction.zloty}</span>PLN
        </div>
      );
    });

    return (
      <div>
        <div className="summaryBox">
          <span className="nameOfResult">Sum of transcations</span>
          <span className="result">{result} PLN</span>
          <span className="nameOfResult">The highest transaction</span>
          <span className="result">{uniqueTransaction}</span>
        </div>
      </div>
    );
  } else {
    const result = transactions.map(transaction => transaction.zloty);
    const sum = result.reduce((a, b) => {
      const sumResult = parseFloat(a) + parseFloat(b);
      const newSumResult = sumResult.toFixed(2);
      return newSumResult;
    });

    const order = result.sort((a, b) => b - a).splice(0, result.length);
    const index = order.splice(0, 1).join("");
    const numIndex = parseFloat(index).toFixed(2);

    const theHighest = transactions
      .filter(transaction => transaction.zloty === numIndex)
      .map(transaction => {
        return (
          <div className="theHighestBox" key={transaction.id}>
            {transaction.name}:
            <span className="numberOnList">{transaction.amountOfEuro}</span>
            EURO =<span className="numberOnList">{transaction.zloty}</span>PLN
          </div>
        );
      });

    return (
      <div>
        <div className="summaryBox">
          <span className="nameOfResult">Sum of transcations</span>
          <span className="result">{sum} PLN</span>
          <span className="nameOfResult">The highest transaction</span>
          <span className="result">{theHighest}</span>
        </div>
      </div>
    );
  }
};

export default Summary;
