import 'reflect-metadata';
import {Container} from "inversify";

import {Directory} from "../services/Directory"
import {UserService} from "../interfaces/UserService";
import {UserServiceImpl } from "../services/UserServiceImpl";
import {TYPES} from "./Types";


const container = new Container();

container.bind<UserService>(TYPES.UserService).to(UserServiceImpl);
container.bind<Directory>(TYPES.Directory).to(Directory);

export default container;
