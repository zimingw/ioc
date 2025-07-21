import {asyncLocalStorage, logWithContext} from "./storage";

export function testAsyncLogging() {
    for (let i = 0; i < 2; i++) {
        asyncLocalStorage.run(
            {
                id: i,
                startedAt: new Date(),
            },
            async () => {
                logWithContext("Hello World");
                logWithContext("Hello Sydney");
            }
        )
    }
}