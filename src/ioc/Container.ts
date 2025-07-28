import 'reflect-metadata';
import {Container, Factory} from "inversify";

import {Directory} from "../services/Directory"
import {UserService} from "../interfaces/UserService";
import {UserServiceImpl} from "../services/UserServiceImpl";
import {TYPES} from "./Types";

import {JiraClient} from "../interfaces/JiraClient";
import {JiraClientImpl} from "../services/JiraClientImpl";


const container = new Container();

container.bind<UserService>(TYPES.UserService).to(UserServiceImpl).inSingletonScope();
container.bind<Directory>(TYPES.Directory).to(Directory);

// bind in a factory
container.bind<Factory<UserService>>("Factory<UserService>").toFactory(
    context => () => context.get<UserService>(TYPES.UserService)
)

//bind in a factory with parameter
container.bind<Factory<JiraClient>>(TYPES.JiraClientFactory).toFactory(
    (context) => host => new JiraClientImpl(host)
)

export default container;
