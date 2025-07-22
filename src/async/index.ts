import {log, withMDCScope} from "./mdcLogger";

export function testAsyncLogging() {
    for (let i = 0; i < 2; i++) {
        withMDCScope(
            {
                traceId: i,
                startedAt: new Date(),
            },
            async () => {
                log("Hello World");
                withMDCScope(
                    {
                        logId: Date.now()
                    }, async () =>
                        log("Hello Sydney")
                )
            }
        )
    }
}