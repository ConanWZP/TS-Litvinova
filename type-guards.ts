interface IUserInt {
    name: string
}

interface Human extends IUserInt {
    speak: () => void
}

interface Animal extends IUserInt {
    color: string
}

const serverInfo: IUserInt = {
    name: 'Ashley',
    speak: () => {
        console.log('hellp')
    }
}


function isHuman(data: IUserInt): data is Human {
    return typeof (data as Human).speak === 'function'
}

if (isHuman(serverInfo)) {
    serverInfo.speak()
}