import React from 'react'
import Bar from './components/Bar'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { OfferHero } from './components/OfferHero'
import OfferInfo from './components/OfferInfo'

export class App extends React.Component {
  render() {
    const containerStyle = { marginTop: '2em' }

    return (
      <div>
        <Bar/>
        <div style={containerStyle}>
          <Container maxWidth="lg">
            <Grid container justify="center">
              <Grid container item xs={5}>
                <OfferHero amount={61255394}/>
              </Grid>
              <Grid container item xs={12} style={containerStyle}>
                <OfferInfo includedPlayers={[]} excludedPlayers={[]}/>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    )
  }
}