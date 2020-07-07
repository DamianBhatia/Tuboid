import React, { useState } from 'react';
import {
BrowserRouter as Router,
Switch,
Route
} from 'react-router-dom';
import CssBaseline from "@material-ui/core/CssBaseline";
import SwitchButton from '@material-ui/core/Switch';
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
//Pages
import Home from './components/pages/Home.js';

// Material UI Themes
const lightTheme = createMuiTheme({
    palette: {
        background: {
            default: "#f9f9f9"
        },
        primary: {
            main: "#fff"
        },
        seconday: {
            main: "#aaaaaa"
        },
        text: {
            primary: "#000",
        }
    }
});

const darkTheme = createMuiTheme({
    palette: {
        background: {
            default: "#181818"
        },
        primary: {
            main: "#202020"
        },
        seconday: {
            main: "#fff"
        },
        text: {
            primary: "#fff",
        }
    }
});


const App = () => {
    const [light, setLight] = useState(true);

    const changeTheme = (event) => {
        setLight(prev => !prev);
    }

    return (
        <MuiThemeProvider theme={light ? lightTheme : darkTheme}>
            <CssBaseline />

            <Router>
                <div>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                    </Switch>
                </div>
            </Router>

            <SwitchButton onChange={changeTheme}/>
        </MuiThemeProvider> 
    );
}

export default App;