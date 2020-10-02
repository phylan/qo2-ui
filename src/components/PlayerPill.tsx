import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import PersonIcon from '@material-ui/icons/Person'
import Avatar from '@material-ui/core/Avatar'

type PlayerPillProps = {
    name: string,
    salary?: number,
    currencyFormatter: (amount?: number) => string
}

const PlayerPill: React.FunctionComponent<PlayerPillProps> = (props) => {
    return(
        <ListItem>
            <ListItemAvatar>
                <Avatar>
                    <PersonIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={props.name}
                secondary={props.salary ? props.currencyFormatter(props.salary) : 'No salary data'}
            />
        </ListItem>
    )
}

export default PlayerPill