import React from 'react';
import TopNavMenu from 'components/common/TopNavMenu';
import SideBar from 'components/common/SideBar';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';

function App({ children }) {
  return (
    <div>
      <TopNavMenu/>
      <Header />
      <div className="container">
          <div className="row">
              {children}
              <SideBar/>
          </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
