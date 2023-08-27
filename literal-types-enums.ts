
// Литеральный тип
let env: 'development' | 'staging' | 'production' = 'development'

function setEnv (env: 'development' | 'staging' | 'production'): 'development' | 'staging' | 'production' {
    return env
}

setEnv('development')

// Types

type Env = 'development' | 'staging' | 'production'

let env2: Env = 'staging'

function setEnv2 (env: Env): Env {
    return env
}

setEnv2('development')


// Enums

const enum Env3 {
    Development = 'development',
    Staging = 'staging',
    Production = 'production'
}

let env3: Env3 = Env3.Staging

function setEnv3 (env: Env3): Env3 {
    return env
}

setEnv3(Env3.Development)
