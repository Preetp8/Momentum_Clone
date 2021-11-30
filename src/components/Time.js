import React from "react";
import moment from "moment";

function Time() {
  let current_time = moment().format("h:mm");
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "evening";
  }

  return (
    <div className="time">
      <h1 style={{ color: "#fff" }}>{current_time}</h1>
      <h5 className="statement" style={{ color: "#fff" }}>
        Good {timeOfDay}.
      </h5>
    </div>
  );
}

export default Time;
