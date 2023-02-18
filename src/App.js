import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UpdateProfile from "./pages/UpdateProfile";

function App() {
  return (
    <Router>
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/update" element={<UpdateProfile />}></Route>
          </Routes>
        </Container>
      </main>
    </Router>
  );
}

export default App;
