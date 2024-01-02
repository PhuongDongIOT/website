type TYPECONSTRUCTOR = {
    SUSCCESS: string,
}

type TYPEFILE = {
    CREATE: TYPECONSTRUCTOR
}

type TYPEHANDLE = {
    FILE: TYPEFILE
}

const CONSTHANDLE: TYPEHANDLE = {
    FILE: {
        CREATE: {
            SUSCCESS: 'Create folder success'
        }
    }
}

export default CONSTHANDLE;