import {inject, injectable} from "inversify";
import {UserService} from "../interfaces/UserService";
import {User} from "../models/User";
import {TYPES} from "../ioc/Types";

@injectable()
export class Directory {
    constructor(@inject(TYPES.UserService) private userService: UserService) {
    }

    public addUser(name: string) {
        this.userService.addUser(new User("1", "Ziming"))
    }

    public getUsers(): User[] {
        return this.userService.getUsers()
    }
}