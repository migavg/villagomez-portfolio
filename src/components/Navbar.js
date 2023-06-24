import React from "react";


const Navbar = ({currentPage, handlePageChange}) => {

return(
   <header>
        <nav>
            <div>
                <a className="navItems">Miguel Villagomez</a> 
            </div>

            <div>
                <a className="navItems">Home</a>
                <a className="navItems">About Me</a>
                <a className="navItems">Contact</a>
                <a className="navItems">Portfolio</a>
            </div>

            <div>
                <a className="navItems"> Contact Me</a>
            </div>
        </nav>

   </header>
)


}

export default Navbar;