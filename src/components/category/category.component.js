import React from "react";
import './category.component.scss';

export default function Category(props) {
  const { categoryData } = props;
  const { label, price, rows } = categoryData;
  const seatRows = Object.keys(rows);
  
  return (
    <div className="category">
      <div className='category--name'> {label} - Rs. {price} </div>

      {seatRows &&
        seatRows.map((row, index) => {
          return (
            <div className="theatre-layout__row" key={index}>
              <div className="theatre-layout__row-name"> {row} </div>
              <div className="theatre-layout__row-seats">
                {rows[row] &&
                  rows[row].map((seat) => {
                    if (seat.isAvailable) {
                      return (
                        <div
                          className={`seat ${seat.isBooked ? "disabled" : ""} ${
                            seat.isSelected ? "selected" : ""
                          }`}
                          key={seat.id}
                          onClick={() => props.handleSelect(label, row, seat.id)}
                        >
                          {seat.label}
                        </div>
                      );
                    }
                    return null;
                  })}
              </div>
            </div>
          );
        })}
    </div>
  );
}
