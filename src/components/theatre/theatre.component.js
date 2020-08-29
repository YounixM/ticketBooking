import React, { Component } from "react";
import "./theatre.component.scss";
import Category from "../category/category.component";

export default class Theatre extends Component {
  constructor(props) {
    super(props);

    this.state = {
      layout: this.props.theatreLayout,
      selectedSeatCount: 0,
      totalCheckoutAmount: 0,
      selectedSeats: [],
    };

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(category, row, id) {
    let { layout } = this.state;
    let selectedRow = layout.categories[category].rows[row];
    let selectTicketPrice = 0;
    let selectedTicket;

    if (this.state.selectedSeatCount >= this.props.seatQuantity) {
      let seatToDeselect = this.state.selectedSeats[0];

      this.handleDeselect(seatToDeselect);
    }

    for (let idx = 0; idx < selectedRow.length; idx++) {
      if (selectedRow[idx].id === id) {
        selectedRow[idx].isSelected = true;
        selectTicketPrice = selectedRow[idx].price
          ? selectedRow[idx].price
          : layout.categories[category].price;
        selectedTicket = { category, row, seatID: id, ...selectedRow[idx] };

        break;
      }
    }

    this.setState((prevState) => ({
      selectedSeatCount: prevState.selectedSeatCount + 1,
      totalCheckoutAmount: prevState.totalCheckoutAmount + selectTicketPrice,
      selectedSeats: [...prevState.selectedSeats, selectedTicket],
    }));
  }

  handleDeselect(seat) {
    let { layout } = this.state;
    let { category, row, seatID } = seat;
    let selectedRow = layout.categories[category].rows[row];
    let selectTicketPrice = 0;
    let updatedSelectedSeats = [...this.state.selectedSeats];

    updatedSelectedSeats.shift();

    for (let idx = 0; idx < selectedRow.length; idx++) {
      if (selectedRow[idx].id === seatID) {
        selectedRow[idx].isSelected = false;
        selectTicketPrice = selectedRow[idx].price
          ? selectedRow[idx].price
          : layout.categories[category].price;

        break;
      }
    }

    this.setState((prevState) => ({
      selectedSeatCount: prevState.selectedSeatCount - 1,
      totalCheckoutAmount: prevState.totalCheckoutAmount - selectTicketPrice,
      selectedSeats: updatedSelectedSeats,
    }));
  }

  render() {
    let { layout } = this.state;
    let categories = Object.keys(layout.categories);

    return (
      <div className="theatre">
        <div className="theatre-layout">
          {categories.map((category) => {
            return (
              <Category
                key={category}
                label={category}
                categoryData={layout.categories[category]}
                handleSelect={this.handleSelect}
              />
            );
          })}
        </div>

        {this.state.selectedSeatCount > 0 && (
          <div className="theatre-checkout">
            <div className="amount">
              <label> Total: Rs. {this.state.totalCheckoutAmount}</label>
            </div>

            <button className={`checkoutBtn ${this.state.selectedSeatCount !== this.props.seatQuantity && 'disabled'}`}>CHECKOUT</button>
          </div>
        )}
      </div>
    );
  }
}
