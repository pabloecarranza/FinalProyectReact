import "./NavBar.css";
import AppBar from "@mui/material/AppBar";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function NavBar() {
  return (
    <AppBar position="static">
      <nav>
        <MobileNav />

        <Link className="link" to="/">
          <div className="container-logo">
            <h3>Woman Care</h3>
          </div>
        </Link>
        <DesktopNav />
        <CartWidget />
      </nav>
    </AppBar>
  );
}
