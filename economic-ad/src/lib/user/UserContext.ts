import { createContext, Context } from 'react';

const variablesSignIn: TypeUser = {
    signIn: null
} 

type TypeUser = {
    signIn: any
}

const UserContext: Context<TypeUser> = createContext<TypeUser>(variablesSignIn)

export default UserContext  