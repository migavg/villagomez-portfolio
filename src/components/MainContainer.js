import React, {useState} from "react";



export default function Container() {
    const [currentPage, setCurrentPage] = useState();

    const renderPage = () => {
        
      };

      const handlePageChange = (page) => setCurrentPage(page);

      return (
        <div>
       
          <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />

          {renderPage()}
    
        </div>
    
      );

    
}

