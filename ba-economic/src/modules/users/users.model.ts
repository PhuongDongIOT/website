type User = {
    id: number,
    email: string,
    name : string,
}

type UserResponse = {
    email: string,
    name : string | null,
}

type PassHash = {
    password: string,
}

type UserCreated = Omit<User, "id"> & PassHash

export {
    User,
    UserResponse,
    UserCreated,
}