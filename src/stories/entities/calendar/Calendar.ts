export type Calendar = {
    title: String
    classification: String
    fromDate: Date
    toDate: Date
    description: String
    gests: User[]
    onwer: User
}


export type User = {
    name: String
    mail: String
}