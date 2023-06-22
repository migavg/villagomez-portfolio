import React from "react";


const Navbar = ({currentPage, handlePageChange}) => {

return(
   <header>
        <nav>
            <div>
                <a className="navitems">Miguel Villagomez</a> 
            </div>

            <div>
                <a className="navitems">Home</a>
                <a className="navitems">About Me</a>
                <a className="navitems">Contact</a>
                <a className="navitems">Portfolio</a>

            </div>
        </nav>

   </header>
)


}

export default Navbar;