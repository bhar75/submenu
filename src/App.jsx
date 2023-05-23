import Navbar from "./Navbar";
import Hero from "./Hero";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";
import { useGlobalContext } from "./context";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Sidebar />
      <Submenu />
    </div>
  );
};
export default App;
