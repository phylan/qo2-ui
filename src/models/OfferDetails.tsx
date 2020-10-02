import { Player } from './Player'

class OfferDetails {

    constructor(amount: number | null, includedPlayers: Player[], excludedPlayers: Player[]) {
        this.amount = amount
        this.includedPlayers = includedPlayers
        this.excludedPlayers = excludedPlayers
    }

    amount: number | null
    includedPlayers: Player[]
    excludedPlayers: Player[]
}

export default OfferDetails