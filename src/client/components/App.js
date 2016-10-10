import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TopNavMenu from 'components/common/TopNavMenu';
import SideBar from 'components/common/SideBar';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';

// #TODO: Find Bootstrap components equivalents in Material-UI

function App({ children }) {
  return (
    <MuiThemeProvider>
      <TopNavMenu/>
      <Header />
      <div className="container">
        <div className="row">
          {children}
          <SideBar/>
        </div>
      </div>
      <Footer />
    </MuiThemeProvider>
  );
}

export default App;
