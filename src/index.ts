import container from "./ioc/Container";

import {Directory} from "./services/Directory"
import {TYPES} from "./ioc/Types";

const directory = container.get<Directory>(TYPES.Directory);

directory.addUser("ziming")
console.log(directory.getUsers())


