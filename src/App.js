import React, { Component } from "react";
import "./App.scss";
import Header from "./components/header/header.component";
import Theatre from "./components/theatre/theatre.component";

const defaultLayout = {
  categories: {
    club: {
      price: 350,
      label: "club",
      rows: {
        A: [
          {
            id: 1,
            label: 1,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 2,
            label: 2,
            isBooked: true,
            isAvailable: true,
          },
          {
            id: 3,
            label: 3,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 4,
            label: 4,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 5,
            label: 5,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 6,
            label: 6,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 7,
            label: 7,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 8,
            label: 8,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 9,
            label: 9,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 10,
            label: 10,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 11,
            label: 11,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 12,
            label: 12,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 13,
            label: 13,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 14,
            label: 14,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 15,
            label: 15,
            isBooked: false,
            isAvailable: true,
          },
        ],
        B: [
          {
            id: 1,
            label: 1,
            isBooked: false,
            isAvailable: false,
          },
          {
            id: 2,
            label: 2,
            isBooked: false,
            isAvailable: false,
          },
          {
            id: 3,
            label: 3,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 4,
            label: 4,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 5,
            label: 5,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 6,
            label: 6,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 7,
            label: 7,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 8,
            label: 8,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 9,
            label: 9,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 10,
            label: 10,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 11,
            label: 11,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 12,
            label: 12,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 13,
            label: 13,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 14,
            label: 14,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 15,
            label: 15,
            isBooked: false,
            isAvailable: true,
          },
        ],
      },
    },
    executive: {
      price: 250,
      label: "executive",
      rows: {
        C: [
          {
            id: 1,
            label: 1,
            isBooked: false,
            isAvailable: false,
          },
          {
            id: 2,
            label: 2,
            isBooked: false,
            isAvailable: false,
          },
          {
            id: 3,
            label: 3,
            isBooked: false,
            isAvailable: false,
          },
          {
            id: 4,
            label: 4,
            isBooked: false,
            isAvailable: false,
          },
          {
            id: 5,
            label: 5,
            isBooked: false,
            isAvailable: false,
          },
          {
            id: 6,
            label: 6,
            isBooked: false,
            isAvailable: false,
          },
          {
            id: 7,
            label: 7,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 8,
            label: 8,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 9,
            label: 9,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 10,
            label: 10,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 11,
            label: 11,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 12,
            label: 12,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 13,
            label: 13,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 14,
            label: 14,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 15,
            label: 15,
            isBooked: false,
            isAvailable: true,
          },
        ],
        D: [
          {
            id: 1,
            label: 1,
            isBooked: false,
            isAvailable: false,
          },
          {
            id: 2,
            label: 2,
            isBooked: false,
            isAvailable: false,
          },
          {
            id: 3,
            label: 3,
            isBooked: false,
            isAvailable: false,
          },
          {
            id: 4,
            label: 4,
            isBooked: false,
            isAvailable: false,
          },
          {
            id: 5,
            label: 5,
            isBooked: false,
            isAvailable: false,
          },
          {
            id: 6,
            label: 6,
            isBooked: false,
            isAvailable: false,
          },
          {
            id: 7,
            label: 7,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 8,
            label: 8,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 9,
            label: 9,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 10,
            label: 10,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 11,
            label: 11,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 12,
            label: 12,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 13,
            label: 13,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 14,
            label: 14,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 15,
            label: 15,
            isBooked: false,
            isAvailable: true,
          },
        ],
        E: [
          {
            id: 1,
            label: 1,
            isBooked: false,
            isAvailable: false,
          },
          {
            id: 2,
            label: 2,
            isBooked: false,
            isAvailable: false,
          },
          {
            id: 3,
            label: 3,
            isBooked: false,
            isAvailable: false,
          },
          {
            id: 4,
            label: 4,
            isBooked: false,
            isAvailable: false,
          },
          {
            id: 5,
            label: 5,
            isBooked: false,
            isAvailable: false,
          },
          {
            id: 6,
            label: 6,
            isBooked: false,
            isAvailable: false,
          },
          {
            id: 7,
            label: 7,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 8,
            label: 8,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 9,
            label: 9,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 10,
            label: 10,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 11,
            label: 11,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 12,
            label: 12,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 13,
            label: 13,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 14,
            label: 14,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 15,
            label: 15,
            isBooked: false,
            isAvailable: true,
          },
        ],
        F: [
          {
            id: 1,
            label: 1,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 2,
            label: 2,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 3,
            label: 3,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 4,
            label: 4,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 5,
            label: 5,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 6,
            label: 6,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 7,
            label: 7,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 8,
            label: 8,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 9,
            label: 9,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 10,
            label: 10,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 11,
            label: 11,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 12,
            label: 12,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 13,
            label: 13,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 14,
            label: 14,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 15,
            label: 15,
            isBooked: false,
            isAvailable: true,
          },
        ],
        G: [
          {
            id: 1,
            label: 1,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 2,
            label: 2,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 3,
            label: 3,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 4,
            label: 4,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 5,
            label: 5,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 6,
            label: 6,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 7,
            label: 7,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 8,
            label: 8,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 9,
            label: 9,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 10,
            label: 10,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 11,
            label: 11,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 12,
            label: 12,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 13,
            label: 13,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 14,
            label: 14,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 15,
            label: 15,
            isBooked: false,
            isAvailable: true,
          },
        ],
        H: [
          {
            id: 1,
            label: 1,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 2,
            label: 2,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 3,
            label: 3,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 4,
            label: 4,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 5,
            label: 5,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 6,
            label: 6,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 7,
            label: 7,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 8,
            label: 8,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 9,
            label: 9,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 10,
            label: 10,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 11,
            label: 11,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 12,
            label: 12,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 13,
            label: 13,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 14,
            label: 14,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 15,
            label: 15,
            isBooked: false,
            isAvailable: true,
          },
        ],
        I: [
          {
            id: 1,
            label: 1,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 2,
            label: 2,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 3,
            label: 3,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 4,
            label: 4,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 5,
            label: 5,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 6,
            label: 6,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 7,
            label: 7,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 8,
            label: 8,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 9,
            label: 9,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 10,
            label: 10,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 11,
            label: 11,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 12,
            label: 12,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 13,
            label: 13,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 14,
            label: 14,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 15,
            label: 15,
            isBooked: false,
            isAvailable: true,
          },
        ],
        J: [
          {
            id: 1,
            label: 1,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 2,
            label: 2,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 3,
            label: 3,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 4,
            label: 4,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 5,
            label: 5,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 6,
            label: 6,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 7,
            label: 7,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 8,
            label: 8,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 9,
            label: 9,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 10,
            label: 10,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 11,
            label: 11,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 12,
            label: 12,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 13,
            label: 13,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 14,
            label: 14,
            isBooked: false,
            isAvailable: true,
          },
          {
            id: 15,
            label: 15,
            isBooked: false,
            isAvailable: true,
          },
        ],
      },
    },
  },
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seatQuantity: 1,
    };

    this.handleSeatQuantityUpdate = this.handleSeatQuantityUpdate.bind(this);
  }

  handleSeatQuantityUpdate(quantity) {
    this.setState({ seatQuantity: +quantity });
  }

  render() {
    return (
      <div className="App">
        <Header onSeatQuantityUpdate={this.handleSeatQuantityUpdate} />
        <Theatre
          seatQuantity={this.state.seatQuantity}
          theatreLayout={defaultLayout}
        />
      </div>
    );
  }
}

export default App;
