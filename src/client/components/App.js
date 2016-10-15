import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  blue400,
  blue300,
  blue600,
  white,
  lightWhite,
  darkWhite,
  minBlack,
} from 'material-ui/styles/colors';
import Brand from 'components/common/Brand';
import TopNavMenu from 'components/common/TopNavMenu';
import SideBar from 'components/common/SideBar';
import Footer from 'components/common/Footer';
import tabs from 'data/tabs';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blue400,
    primary2Color: blue300,
    primary3Color: blue600,
    accent1Color: white,
    // textColor: lightWhite,
    // alternateTextColor: darkWhite,
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
            {/* <SideBar/> */}
          </div>
        </div>
        <Footer />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
