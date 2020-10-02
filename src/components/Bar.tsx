import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { LocalAtm } from '@material-ui/icons'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    brand: {
      marginRight: theme.spacing(2),
    },
    brandText: {
        fontWeight: 300
    }
  }),
);

export default function Bar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <LocalAtm style={{ fontSize: 64 }} className={classes.brand}/>
          <Typography variant="h3" className={classes.brandText}>
            Qualifying Offer
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}