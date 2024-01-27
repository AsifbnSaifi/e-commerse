import Navbar from "./componenets/Navbar";
import { Provider } from "react-redux";
import store from "./store/store";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
         <Outlet/>
      </Provider>
    </>
  );
}

export default App;
