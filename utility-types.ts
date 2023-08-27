interface Accommodation {
    title: string,
    location: string,
    address: string,
    countOfRooms: number
}

// Pick Позволяет из интерфейса взять только необходимые типы
const mySimpleAccommodation: Pick<Accommodation, 'title' | 'address'> = {
    title: 'asdasd',
    address: 'asd124'
}

// Omit Позволяет из интерфейса убрать необходимые типы
const mySimpleAccommodation2: Omit<Accommodation, 'title' | 'address'> = {
    countOfRooms: 5,
    location: 'asd124'
}

const arr123: number[] = [1, 2 ,3]

const arr124: Array<number> = [1, 2 ,3]

const arr1245: ReadonlyArray<number> = [1, 2 ,3]


// Partial, делает все типы необязательными, словно добавили знак вопроса внутри интерфейса
const myUnnecessaryAccommodation: Partial<Accommodation> = {

}


// Все свойства становятся обязательными, там где знак вопроса внутри интерфейса, он игнорируется
const myRequiredAccommodation: Required<Accommodation> = {
    title: '',
    location: '',
    address: '',
    countOfRooms: 0
}


// Record

interface CatInfo {
    age: number,
    breed: string
}

type CatName = 'miffy' | 'boris' | 'mordred'

const cats: Record<CatName, CatInfo> = {
    miffy: {age: 10, breed: 'Persian'},
    boris: {age: 16, breed: 'Persian'},
   // mordred: {age: 5, breed: 'Persian'},
}