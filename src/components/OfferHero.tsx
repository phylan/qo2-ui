import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

interface OfferHeroProps {
    amount?: number
    currencyFormatter: (amount?: number) => string
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    amountText: {
        color: theme.palette.secondary.main
    }
}))

const OfferAmount: React.FunctionComponent<{ amount: string }> = ({amount}) => {
    const classes = useStyles()
    
    return(
        <Typography variant="h2" className={classes.amountText}>
            {amount}
        </Typography>
    )
}

export class OfferHero extends React.Component<OfferHeroProps> {
    cardStyle: object = {
        flexGrow: 1
    }
    
    render() {
        return(
            <Card style={this.cardStyle}>
                <CardContent>
                    <Typography color="primary" variant="h4" gutterBottom>
                        2017 Qualifying Offer
                    </Typography>
                    <OfferAmount amount={this.props.currencyFormatter(this.props.amount)}/>
                </CardContent>
            </Card>
        )
    }
}