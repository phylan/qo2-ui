import { Player } from './Player'

export interface OfferResponse {
    offer_amount: number,
    top_players: Player[],
    excluded_players: Player[]
}