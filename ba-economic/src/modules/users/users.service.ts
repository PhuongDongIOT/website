// users.service.ts
// in charge of business logic - generate slug, fetch data from other services, cache something, etc.
import { NotFoundError } from 'elysia';
import { User, UserCreated, UserResponse } from './users.model';
import { UsersRepository } from './users.repository';
import { AuthenticationError, BadRequestError } from '~/errors';

export class UsersService {
    constructor(
        private readonly repository: UsersRepository,
    ) {}

    async findAllUser() {
        const user = await this.repository.findAllUser();
        if (!user) {
          throw new NotFoundError('User not found');
        }
        return await this.generateUserResponse(user);
    }

    async createUser(user: UserCreated) {
        user.password = await Bun.password.hash(user.password);
        const newUser = await this.repository.createUser(user);
        if (!newUser) {
          throw new BadRequestError('Email or username is already taken');
        }
        return await this.generateUserResponse(newUser);
    }

    private getPropertyUserInArray(userArray: UserResponse[]) {
        const result = userArray.map(user => {
            return {
                name: user.name,
                email: user.email,
            }
        });

        return result
    }

    async generateUserResponse(user: UserResponse | UserResponse[]) {
        if(Array.isArray(user)) {
            return this.getPropertyUserInArray(user)
        } else {            
            return {
                user: {
                    name: user.name,
                    email: user.email,
                }
            }
        }
    }
}