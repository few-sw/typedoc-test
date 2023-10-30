export class Greeter {
    public username: string = "Jack"

    public greet() {
        console.log(`hi ${this.username}`)
    }

    public greetNewUser(username: string) {
        this.username = username

        return this.username
    }
}

