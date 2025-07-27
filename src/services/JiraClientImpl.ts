import {JiraClient} from "../interfaces/JiraClient";

export class JiraClientImpl implements JiraClient {
    constructor(private host: string) {

    }

    getCall(): void {
        console.log(`getCall on ${this.host}`);
    }
}