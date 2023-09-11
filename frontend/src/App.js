import Router from "./router";
import Header from "./component/Layout/Header";
import Footer from "./component/Layout/Footer";
import EditProvider from "./context/editContext";
import AuthProvider from "./context/authContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <EditProvider>
          <Header />
          <Router />
          <Footer />
        </EditProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
