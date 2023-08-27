interface IUserR {
    name: string;
    surname: string
}

interface Articles {
    title: string,
    author: string,
    content: string
}

interface Params {
    query: {

    }
}
//  | Дженерик, может использоваться как для входных параметров так и для вывода и их может быть несколько, например один для одного параметра, а другой для вывода
function makeRequest<RequestTypeeee, AnyName>(url: string, typeRequest?: RequestTypeeee, params?: Params): AnyName {
    let obj = {} as AnyName
    return obj
}

/*const user5: IUserR = {
    name: 'Jo',
    surname: 'das'
}*/

const myUserR = makeRequest<{}, IUserR>('/getUsers')

/*const article: Articles = {
    title: 'title',
    author: 'Conan Doil',
    content: 'asdasdasdasd'
}*/


const myArticles = makeRequest<{}, Articles>('/getArticles')





// Дженерики в интерфесах

// вместо T все что угодно, это как аргумент у функции let abc = (sd) => {}   abc('asddgsdfgsdfghg)
interface UserInt<T, I> {
    specialType: T,
    name: string,
    surname: I
}

const aJ: UserInt<number, string> = {
    name: 'AjAy',
    specialType: 5,
    surname: 'Klem'
}




type CustomerTypes = 'new' | 'impulse' | 'angry' | 'happy';

class WorkWithCustomer<T> {
    customType: T;
    name: string;

    constructor(customType: T, name: string) {
        this.name = name;
        this.customType = customType
    }

}

const workWithCustomer = new WorkWithCustomer<CustomerTypes>('new', 'Jork')




// Расширение с помощью Дженериков

interface MinPersonInfo {
    name: string
}

interface DefaultCustomer {
    name: 'Unknown',
    type: 'usual'
}

function workWithPerson<T extends MinPersonInfo = DefaultCustomer> (args:T):string {
    return args.name
}

const  person1 =  workWithPerson({
    name: 'Erick',
    age: 30
})

const person2 = workWithPerson({
    type: 'usual',
    name: 'Unknown'
})

