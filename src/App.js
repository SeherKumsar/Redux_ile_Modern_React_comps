// import Link from './components/Link';
import Sidebar from './components/Sidebar';
import Route from './components/Route';
import AccordionPage from './pages/AccordionPage';
import DropdownPage from './pages/DropDownPage';
import ButtonPage from './pages/ButtonPage';

function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      {/* <Link to="/accordion">Go to accordion</Link>
      <Link to="/dropdown">Go to dropdown</Link> */}
      <Sidebar />
      <div className="col-span-5">
      <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/">
          <DropdownPage />
        </Route>
        <Route path="/buttons">
          <ButtonPage />
        </Route>
      </div>
    </div>
  );
}
export default App;
