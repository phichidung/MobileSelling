const TemplateEmail = require('./../mailer/TemplateEmail');

class TwoFactorMail extends TemplateEmail {
    constructor(client, token) {
        super();
        this.client = client;
        this.token    = token;
    }

    from() {
        return 'noreply.champion@gmail.com';
    }

    to() {
        return this.client;
    }

    subject() {
        return 'Code Verify';
    }

    getTemplate() {
        return 'Admin/verify-mail.html'
    }

    getMailData() {
        return {
            client: this.client,
            token: this.token
        }
    }
}

module.exports =  TwoFactorMail;
