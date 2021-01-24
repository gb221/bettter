interface Shot {
    shot_id: string,
    timestamp: string
}

interface Profile {
    profile_id: string,
    hidden_shots: Shot[],
    is_hidden: boolean
}