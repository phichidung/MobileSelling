const Client = require('./Client');

class ClientRepository {
    constructor(knex) {
        this.knex = knex;
    }

    async getAll() {
        let clientList = await this.knex.select('*').from('Client');
        return clientList.map(allClient => this.factoryClient(allClient));
    }

    async findByUsername(username) {
        let rawClient = await this.knex.select('*').from('Client').where('username', username);

        if(rawClient.length) {
            return this.factoryClient(rawClient[0]);
        }

        return null;
    }

    async findByUsernamePassword(username, password) {

        let rawClient = await this.knex.select('*').from('Client').where({'username': username, 'password': password});
        if(rawClient.length) {
            return this.factoryClient(rawClient[0]);
        }

        return null;
    }

    async add(data) {
        let addInfoClient = await this.knex('Client').insert(data);

        return this.factoryClient({
            ...data,
            id: addInfoClient[0].id
        });
    }

    factoryClient(allClientData) {
        return new Client(allClientData.id, allClientData.name, allClientData.username, allClientData.password, allClientData.phone, allClientData.gender, allClientData.age, allClientData.address, allClientData.email, allClientData.secret);
    }
}

module.exports = ClientRepository;
