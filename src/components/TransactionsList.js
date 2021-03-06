import React from "react";
import "../styles/TransactionsList.css";

const TransactionsList = ({ transactions, deleteTransaction, conversion }) => {
  const listOfTransactions = transactions.map(transaction => {
    return (
      <li className="transactions" key={transaction.id}>
        {transaction.name}:
        <span className="numberOnList">{transaction.amountOfEuro}</span> EURO =
        <span className="numberOnList">
          {(transaction.amountOfEuro * conversion).toFixed(2)}
        </span>
        PLN
        <button
          className="deleteButton"
          onClick={() => {
            deleteTransaction(transaction.id);
          }}
        >
          Delete
        </button>
      </li>
    );
  });
  return (
    <div>
      <ul className="list">{listOfTransactions}</ul>
    </div>
  );
};

export default TransactionsList;
