import { User } from '../models/User'

export interface UserService {
    addUser(user: User): void;
    getUsers(): User[];
}