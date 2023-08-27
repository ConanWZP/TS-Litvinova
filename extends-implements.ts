interface Person {
    name: string,
    surname?: string
}

interface PersonExtraInfo {
    birthday: string,
    age: number
}

// Интерфейсы могут расшириться с помощью одного или более интерфейсов

interface UserInfo123 extends Person, PersonExtraInfo {
    height: number
}

const newUser123: UserInfo123 = {
    age: 25,
    height: 170,
    birthday: '1 march',
    name: 'Oracle',
    surname: 'Ach'
}

// Классы могут быть расширены только одним классом

// Имплементация класса с помощью интерфейсов создаёт подсказки, поскольку в любом случае придётся перед конструктором типизировать параметры

class ClassImplements implements Person, PersonExtraInfo {

}

// Классы могут быть имплементированны несколькими классами, но смысл от этой имплементации
// такой же как и от интерфейсов - создание подсказки, что мы должны типизировать перед конструктором

class ClassImpl1 {
    name: string

    constructor(name: string) {
        this.name = name
    }
}

class ClassUsedImplements implements ClassImpl1 {
    name: string; // ide подсказывает, что должно быть использование name: string
    address: string;

    constructor(props: { name: string, address: string }) {
        this.name = props.name;
        this.address = props.address
    }
}