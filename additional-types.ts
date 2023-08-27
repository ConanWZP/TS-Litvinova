// Any

let test: any = 123;
test = '1234'
test.map()


// Unknown

let test2: unknown = 12343
let str2: string = test2
let str3: string = test


// void
function func(arg: string, extra: string): void {
    // return 1
}

const arrowFunc = (arg: string, extra: string): void => {

}