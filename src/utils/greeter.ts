/**
 * This class greets new customers
 */
export class Greeter {
    public username: string = "Jack"

    /**
     * This function greets the user
     */
    public greet() {
        console.log(`hi ${this.username}`)
    }

    /**
     * This function updates the username
     * @param username new username
     * @returns returns the new username
     */
    public greetNewUser(username: string) {
        this.username = username

        return this.username
    }
}

