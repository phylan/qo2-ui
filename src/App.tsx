import React from 'react'
import Bar from './components/Bar'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { OfferHero } from './components/OfferHero'
import OfferInfo from './components/OfferInfo'
import OfferDetails from './models/OfferDetails'
import CircularProgress from '@material-ui/core/CircularProgress'
import { OfferResponse } from './models/OfferResponse'
import axios from 'axios'
import { formatCurrency } from './utils/Currency'

type AppState = {
  offerInfo: OfferDetails,
  loading: boolean
}

export class App extends React.Component<{}, AppState> {

  state: AppState = {
    offerInfo: new OfferDetails(null, [], []),
    loading: false
  }

  async componentDidMount() {
     this.setState({ loading: true })
     try {
        let resp = await axios.get(`${process.env.REACT_APP_API_BASE_URL}qualifying-offer`)
        let data: OfferResponse = resp.data
        this.setState({ offerInfo: new OfferDetails(data.offer_amount, data.top_players, data.excluded_players) })
     }
     catch(err) {
        console.log(err)
     }
     finally {
      this.setState({ loading: false })
     }
  }

  render() {
    const containerStyle = { marginTop: '2em' }

    return (
      <div>
        <Bar/>
        <div style={containerStyle}>
          <Container maxWidth="lg">
            {this.state.loading
              ? <Grid container justify="center" alignItems="stretch">
                  <Grid container item xs={4} justify="center" alignItems="center">
                    <CircularProgress color="secondary"/><h2 style={{marginLeft: '1em'}}>Loading salary data...</h2>
                  </Grid>
                </Grid>
              : <Grid container justify="center">
                  <Grid container item xs={5}>
                    <OfferHero amount={this.state.offerInfo.amount ?? undefined} currencyFormatter={formatCurrency}/>
                  </Grid>
                  <Grid container item xs={12} style={containerStyle}>
                    <OfferInfo includedPlayers={this.state.offerInfo.includedPlayers} excludedPlayers={this.state.offerInfo.excludedPlayers}/>
                  </Grid>
                </Grid>}
          </Container>
        </div>
      </div>
    )
  }
}