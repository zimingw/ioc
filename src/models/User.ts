export class User {
    constructor(public id: string,
                public name: string,
                public email: string | undefined = undefined,
                public role: string|undefined = undefined) {
    }
}