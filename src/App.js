import React, { Component } from "react";
import formatNumber from "format-number";
import photographer from "./images/girl.png";
import "./App.css";
import { withdrawMoneyAction, giveAllToCharityAction } from "./actions";
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    const {
      totalAmount,
      username,
      withdrawMoneyAction,
      giveAllToCharityAction,
    } = this.props;

    return (
      <div className="App">
        <img className="App__userpic" src={photographer} alt="user" />
        <p className="App__username">Hello, {username}! </p>
        <div className="App__amount">
          {formatNumber({ prefix: "$" })(totalAmount)}
          <p className="App__amount--info">Total Amount</p>
        </div>

        <section className="App__buttons">
          <button
            data-amount="10000"
            onClick={(event) =>
              withdrawMoneyAction(event.target.dataset.amount)
            }
          >
            WITHDRAW $10,000
          </button>
          <button
            data-amount="5000"
            onClick={(event) =>
              withdrawMoneyAction(event.target.dataset.amount)
            }
          >
            WITHDRAW $5,000
          </button>
        </section>

        <p className="App__giveaway" onClick={giveAllToCharityAction}>
          Give away all your cash to charity
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, {
  withdrawMoneyAction,
  giveAllToCharityAction,
})(App);
