import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  blue400,
  blue300,
  blue200,
  white,
} from 'material-ui/styles/colors';
import Brand from 'components/common/Brand';
import TopNavMenu from 'components/common/TopNavMenu';
import SideBar from 'components/common/SideBar';
import Footer from 'components/common/Footer';
import tabs from 'data/tabs';

// #IN-PROGRESS:10 Find Bootstrap components equivalents in Material-UI
// #TODO: Update muiTheme with new accent1Color(selectedItemColor)
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blue400,
    primary2Color: blue300,
    primary3Color: blue200,
    accent1Color: 'blue',
    // accent2Color: '',
    // accent3Color: '',
    textColor: white,
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
