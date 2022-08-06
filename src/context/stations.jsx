import React, { createContext, useState } from "react";

const StationContext = React.createContext({
  state: { stationName: [] },
  actions: {
    setStationName: () => {},
  },
});

const StationProvider = ({ children }) => {
  const [stationName, setStationName] = useState([]);

  const value = {
    state: { stationName },
    actions: { setStationName },
  };
  return (
    <StationContext.Provider value={value}>{children}</StationContext.Provider>
  );
};

const { Consumer: StationConsumer } = StationContext;

export { StationProvider, StationConsumer };
export default StationContext;
