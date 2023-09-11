import { createContext, useState, useContext } from "react";

export const EditContext = createContext(null);

const EditProvider = ({ children }) => {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <EditContext.Provider value={[isEditing, setIsEditing]}>
      {children}
    </EditContext.Provider>
  );
};

export default EditProvider;

export const useEditContext = () => {
  return useContext(EditContext);
};
