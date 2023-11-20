import { Context } from '~libs/connect.prisma'
import { UserCreated } from './users.model';

export class UsersRepository {
    constructor(private readonly context: Context) {}

    async createUser(user: UserCreated) {
        const newUser = await this.context.prisma.user.create({
            data: user,
          })
        console.log(newUser)
        return newUser;
    }

    async findAllUser() {
        const allUser = await this.context.prisma.user.findMany()
        
        return allUser;
    }
}