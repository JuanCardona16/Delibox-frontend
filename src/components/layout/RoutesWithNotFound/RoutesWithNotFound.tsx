import { Route, Routes } from "react-router-dom";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

export const RoutesWithNotFound: React.FC<Props> = ({ children }): JSX.Element => {
  return (
    <Routes>
      {children}
      <Route
        path="*"
        element={
          <div>
            <div >
              <h2>Route not found</h2>
            </div>
          </div>
        }
      />
    </Routes>
  )
}