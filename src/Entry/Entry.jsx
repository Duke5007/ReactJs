import React from 'react';
import { Button } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Style from './Entry.module.css'


function Entry() {
    const theme = createMuiTheme(
        {
            palette: {
                primary: {
                    main: '#f44336',
                },
            },
        }
    )
    return (<div className={Style.Main}>
        <p><input type="text" placeholder="Login"></input></p>
        <p> <input type="text" placeholder="Password"></input> </p>
        <div className={Style.butt}>
            <p >
                <ThemeProvider theme={theme}>
                    <Button variant="contained" color="primary">
                        Войти
                    </Button>
                </ThemeProvider>
            </p>
        </div>
    </div>
    )
}

export default Entry;