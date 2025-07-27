import container from "./ioc/Container";

import {Directory} from "./services/Directory"
import {TYPES} from "./ioc/Types";

import {testAsyncLogging} from "./async";

const directory = container.get<Directory>(TYPES.Directory);

directory.addUser("Ziming")
directory.addUser("David", "example@gmail.com")
console.log(directory.getUsers())

console.log(directory.getUsersUsingFactory())

directory.callJiraClient("softwareteams.atlassian.net")
directory.callJiraClient("hello.atlassian.net")

/**
 * Below is a test for Async local storage
 */

testAsyncLogging();