// UI
import { Button } from "../ui/button";
import NavbarBreadcrumb from "./NavbarBreadcrumb";
import NavbarDropdownMenu from "./NavbarDropdownMenu";


interface Navbar {
  breadcrumb: boolean;
  currentPage?: string;
  predictionBtn: boolean;
  dropdownMenu: boolean;
}

export default function Navbar({ breadcrumb, currentPage, predictionBtn, dropdownMenu}: Navbar) {

  return (
    <div className="bg-white h-[50px] shadow-sm px-5 sm:px-0">

      <nav className="container mx-auto flex justify-between items-center bg-while h-[50px]">

        {/* Left-items */}
        <div className="flex items-center space-x-6">
          <a href="#">
            <img src="images/brand/icon.png" alt="logo" className="shadow-md h-[30px]" />
          </a>
          <span className="font-medium capitalize hidden sm:block">{breadcrumb ? (
            <NavbarBreadcrumb currentPage={currentPage} />
          ) :
            <span className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-purple-900">Synapse-Powered Predictions</span>
          }
          </span>
        </div>

        {/* Right-items */}
        <div className="flex space-x-6 items-center">
          {predictionBtn && 
            <Button className="shadow-md glow-on-hover">
              <img src="images/btns/AI-icon.png" width="20" /> New Prediction
            </Button>}
          {dropdownMenu && <NavbarDropdownMenu />}
        </div>
      </nav>
    </div>
  )
}
