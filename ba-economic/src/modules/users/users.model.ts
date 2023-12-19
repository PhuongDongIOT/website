type User = {
    id: number,
    email: string,
    name : string,
}

type UserResponse = {
    email: string,
    name : string | null,
}

interface PassHash {
    password: string;
}

type UserCreate = Omit<User, "id"> & PassHash

type TypeChangeUserCreate<T extends Object> = {
    [K in keyof T]: T[K]
} & {}

type UserCreated = TypeChangeUserCreate<UserCreate>

export {
    User,
    UserResponse,
    UserCreated,        
}