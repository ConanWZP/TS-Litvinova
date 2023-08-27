interface IClassUser {
    name: string,
    surname: string
}

class ClassUser {
    // относится к this
    name: string;
    surname: string;
    // private не даёт вызвать метод вне класса
    // По умолчанию все методы/параметры - public
    private secret: string;

    // protected позволяет использовать данный параметр внутри этого класса и в классах, которые имеют extends этого класса
    protected protectedMessage: string;

    constructor(props: IClassUser) {
        this.name = props.name;
        this.surname = props.surname
        this.secret = `${this.name} Секретное сообщение`
        this.protectedMessage = `${this.surname} защищенное сообщение`
    }


    printFullName(): string {
        return `${this.name} ${this.surname}`
    }
    printSecret(password: number): string | null {
        if (password === 123) {
            return this.secret
        }
        return null
    }


}

const newClassUser = new ClassUser({
    name: 'Jordg',
    surname: 'Smith'
})

newClassUser.printFullName()

newClassUser.secret

newClassUser.printSecret(123)






interface IClassCustomer extends IClassUser{
    bill: number
}

// Классы могут быть расширены только одним классом

class ClassCustomer extends ClassUser {
    bill: number;

    constructor(props: IClassCustomer) {
        // super необходим, т.к. ClassCustomer имеет extends
       super({
           name: props.name,
           surname: props.surname
       })
        this.bill = props.bill
    }


    getProtectedMessage(): string {
        // использование protected параметра
        return `${super.protectedMessage}`
    }

}


const newCustomer = new ClassCustomer({
    name: 'Arishe',
    surname: 'Cila',
    bill: 12345
})