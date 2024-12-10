import { BrowserRouter as Router  , Routes , Route} from "react-router"
import AllFormation from "./pages/allFormations/AllFormation"
import AddFormation from "./pages/addFormation/AddFormation"
import Navigation from "./components/navigation/Navigation"
// import DeleteFormation from "./pages/deleteFormation/DeleteFormation"
export default function App() {
  return (
    <div>
      <Router>
        <Navigation/>
        <Routes>
        <Route path="/" element={<AllFormation />} />
        <Route path="/addformation" element={<AddFormation />} />
        {/* <Route path="/deleteformation" element={<DeleteFormation />} /> */}
        </Routes>
      </Router>
    </div>
  )
}
