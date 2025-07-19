import {UserService} from '../interfaces/UserService'
import {User} from '../models/User';
import {injectable} from "inversify";

@injectable()
export class UserServiceImpl implements UserService {
    private users: User[];

    constructor() {
        this.users = [];
    }

    public addUser(user: User): void {
        this.users.push(user);
    }

    public getUsers(): User[] {
        return this.users;
    }
}