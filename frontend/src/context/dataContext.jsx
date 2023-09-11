import { createContext, useContext, useReducer, useEffect } from "react";

const DataContext = createContext(null);

const DataDispatchContext = createContext(null);

const initialState = JSON.parse(localStorage.getItem("profile-data")) || [];

export function DataProvider({ children }) {
  const [Data, dispatch] = useReducer(DataReducer, initialState);

  //save Data in local storage
  useEffect(() => {
    localStorage.setItem("profile-data", JSON.stringify(Data));
  }, [Data]);

  return (
    <DataContext.Provider value={Data}>
      <DataDispatchContext.Provider value={dispatch}>
        {children}
      </DataDispatchContext.Provider>
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}

export function useDataDispatch() {
  return useContext(DataDispatchContext);
}

function DataReducer(Data, action) {
  switch (action.type) {
    case "changed": {
      return Data.map((data) => {
        if (data.id === action.Data.id) {
          return action.Data;
        } else {
          return data;
        }
      });
    }
    case "cancel": {
      return Data;
    }
    default:
      return Data;
  }
}
