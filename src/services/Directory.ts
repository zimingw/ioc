import {inject, injectable} from "inversify";
import {UserService} from "../interfaces/UserService";
import {User} from "../models/User";
import {TYPES} from "../ioc/Types";
import {JiraClient} from "../interfaces/JiraClient";

@injectable()
export class Directory {
    constructor(@inject(TYPES.UserService) private userService: UserService,
                @inject("Factory<UserService>") private factory: () => UserService,
                @inject(TYPES.JiraClientFactory) private jiraClientFactory: (host:string) => JiraClient) {
    }

    public addUser(name: string, email: string | undefined = undefined) {
        this.userService.addUser(new User("1", name, email));
    }

    public getUsers(): User[] {
        return this.userService.getUsers();
    }

    public getUsersUsingFactory(): User[] {
        return this.factory().getUsers();
    }

    public callJiraClient(host: string) {
        this.jiraClientFactory(host).getCall()
    }
}