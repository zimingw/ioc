import { AsyncLocalStorage } from 'async_hooks';


export const asyncLocalStorage = new AsyncLocalStorage();

export async function logWithContext(message: string) {
    const context = asyncLocalStorage.getStore();
    console.log(context, message);
}

