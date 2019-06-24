class Client {
    constructor(id, name, username, password, phone, gender, age, address, email, secret) {
        this.id       = id;
        this.name     = name;
        this.username = username;
        this.password = password;
        this.phone    = phone;
        this.gender   = gender;
        this.age      = age;
        this.address  = address;
        this.email    = email;
        this.secret   = secret;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getUsername() {
        return this.username;
    }

    getPassword() {
        return this.password;
    }

    getPhone() {
        return this.phone;
    }

    getGender() {
        return this.gender;
    }

    getAge() {
        return this.age;
    }

    getAddress() {
        return this.address;
    }

    getEmail() {
        return this.email;
    }

    getSecret() {
        return this.secret;
    }
}

module.exports = Client;
