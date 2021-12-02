import RoutesManager from "./components/Routes";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <RoutesManager />
    </BrowserRouter>
  )
}
