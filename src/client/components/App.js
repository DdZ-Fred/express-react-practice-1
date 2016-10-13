import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Brand from 'components/common/Brand';
import TopNavMenu from 'components/common/TopNavMenu';
import SideBar from 'components/common/SideBar';
import Footer from 'components/common/Footer';
import tabs from 'data/tabs';

// #IN-PROGRESS:10 Find Bootstrap components equivalents in Material-UI
// #TODO: Update muiTheme with new accent1Color(selectedItemColor)
const muiTheme = getMuiTheme({
  palette: {
    accent1Color: 'blue',
  },
});

function App({ children }) {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <Brand />
        <TopNavMenu tabs={tabs}/>
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
