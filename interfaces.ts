interface User {
    name: string,
    surname: string,
    height?: number
}

interface Customer {
    user: User,
    bill: number
}

const customer: Customer = {
    user: {
        name: 'Oleg',
        surname: 'Pankov',

    },
    bill: 1543
}

// Отличие интерфейса от type, возможно использования extends

interface UserInfo extends User {
    street: string,
    city: string,
   readonly country: string
}

const userInfo: UserInfo = {
    name: 'Jo',
    surname: 'Bo',
    street: 'Baker St.',
    city: 'London',
    country: 'GB'
}

userInfo.country = 'ER'

// Динамический тип
interface FromServer {
    [name: string]: number
}

const objServer: FromServer = {
    count: 123,
    quantity: 215
}