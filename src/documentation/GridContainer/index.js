import React from "react";

const GridContainer = () => {
  return (
    <div className="hub-grid">
      <div className="hub-row">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(i => {
          return (
            <div
              className="hub-column hub-width-sm-1 hub-width-md-1 hub-width-lg-1 hub-width-xlg-1"
              style={{
                backgroundColor: "#2a9ac8",
                color: "white",
                textAlign: "center",
                height: "40px"
              }}
              key={i}
            >
              <span>1</span>
            </div>
          );
        })}
      </div>
      <div className="hub-row">
        {[1, 2, 3, 4, 5, 6].map(i => {
          return (
            <div
              className="hub-column hub-width-sm-2 hub-width-md-2 hub-width-lg-2 hub-width-xlg-2"
              style={{
                backgroundColor: "#2a9ac8",
                color: "white",
                textAlign: "center",
                height: "40px"
              }}
              key={i}
            >
              <span>2</span>
            </div>
          );
        })}
      </div>
      <div className="hub-row">
        {[1, 2, 3, 4].map(i => {
          return (
            <div
              className="hub-column hub-width-sm-3 hub-width-md-3 hub-width-lg-3 hub-width-xlg-3"
              style={{
                backgroundColor: "#2a9ac8",
                color: "white",
                textAlign: "center",
                height: "40px"
              }}
              key={i}
            >
              <span>3</span>
            </div>
          );
        })}
      </div>
      <div className="hub-row">
        {[1, 2, 3].map(i => {
          return (
            <div
              className="hub-column hub-width-sm-4 hub-width-md-4 hub-width-lg-4 hub-width-xlg-4"
              style={{
                backgroundColor: "#2a9ac8",
                color: "white",
                textAlign: "center",
                height: "40px"
              }}
              key={i}
            >
              <span>4</span>
            </div>
          );
        })}
      </div>
      <div className="hub-row">
        {[1, 2].map(i => {
          return (
            <div
              className="hub-column hub-width-sm-6 hub-width-md-6 hub-width-lg-6 hub-width-xlg-6"
              style={{
                backgroundColor: "#2a9ac8",
                color: "white",
                textAlign: "center",
                height: "40px"
              }}
              key={i}
            >
              <span>6</span>
            </div>
          );
        })}
      </div>
      <div className="hub-row">
        <div
          className="hub-column hub-width-sm-12 hub-width-md-12 hub-width-lg-12 hub-width-xlg-12"
          style={{
            backgroundColor: "#2a9ac8",
            color: "white",
            textAlign: "center",
            height: "40px"
          }}
        >
          <span>12</span>
        </div>
      </div>
    </div>
  );
};
export default GridContainer;
