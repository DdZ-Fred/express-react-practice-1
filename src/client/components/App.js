import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Brand from 'components/common/Brand';
import TopNavMenu from 'components/common/TopNavMenu';
import SideBar from 'components/common/SideBar';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';

// #IN-PROGRESS:10 Find Bootstrap components equivalents in Material-UI

function App({ children }) {
  return (
    <MuiThemeProvider>
      <div>
        <Brand />
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
    </MuiThemeProvider>
  );
}

export default App;
