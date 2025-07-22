import { AsyncLocalStorage } from 'async_hooks';


export const asyncLocalStorage = new AsyncLocalStorage();

export async function log(message: string) {
    const context = asyncLocalStorage.getStore();
    console.log(context, message);
}

export async function withMDCScope(mdc: object = {}, lambda: () => any): Promise<any> {
    const currentContext = asyncLocalStorage.getStore() || {};
    return asyncLocalStorage.run({
        ...currentContext,
        ...mdc
    }, lambda);
}