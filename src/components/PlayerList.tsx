import React from 'react'
import PlayerPill from './PlayerPill'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List'
import { Player } from '../models/Player'
import { formatCurrency } from '../utils/Currency'

type PlayerListProps = {
    players: Player[]
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    playerList: {
      backgroundColor: theme.palette.background.paper,
    },
  }),
)

const PlayerList: React.FunctionComponent<PlayerListProps> = (props) => {
    const classes = useStyles()
    return(
        <div className={classes.playerList}>
            <List>
                {props.players.map(player => {
                    return <PlayerPill name={player.name} salary={player.salary} currencyFormatter={formatCurrency}/>
                })}
            </List>
        </div>
    )
}

export default PlayerList