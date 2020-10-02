import React from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Player } from '../models/Player'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    heading: {
      fontWeight: theme.typography.fontWeightLight,
      color: theme.palette.grey[100]
    },
    accordionSummary: {
        backgroundColor: theme.palette.secondary.light
    }
  }),
);

type OfferInfoProps = {
    includedPlayers: Player[],
    excludedPlayers: Player[]
}

const OfferInfo: React.FunctionComponent<OfferInfoProps> = (props) => {
    const classes = useStyles();
    const expandIcon = <ExpandMoreIcon className={classes.heading}/>

    return (
      <div className={classes.root}>
        <Accordion>
          <AccordionSummary
              className={classes.accordionSummary}
              expandIcon={expandIcon}
          >
            <Typography variant="h5" className={classes.heading}>Calculation Information</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle1" >
                The qualifying offer is a one-year contract, the value of which is calculated by averaging the highest 125 
                player salaries from the prior season. { props.excludedPlayers.length } players could not be considered in this calculation due to missing 
                salary data for the previous season.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
           <AccordionSummary
              className={classes.accordionSummary}
              expandIcon={expandIcon}
          >
            <Typography variant="h5" className={classes.heading}>Included Players</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
              className={classes.accordionSummary}
              expandIcon={expandIcon}
          >
            <Typography variant="h5" className={classes.heading}>Excluded Players</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
  );
}

export default OfferInfo