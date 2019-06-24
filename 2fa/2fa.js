class  TwoFactor {
    constructor(speakeasy) {
        this.speakeasy = speakeasy;
    }

    async totpSecret(ctx, next) {
        let secret = this.speakeasy.generateSecret({length: 20});
        let base32 = secret.base32;
        return base32;
    }

    async totpGenerate(secret) {
        let token = this.speakeasy.totp({
                secret: secret,
                encoding: "base32",
                step: 60,
            });
        return token;
    }

    async totpValidate(secret, token) {
        let valid = this.speakeasy.totp.verify({
            secret: secret,
            encoding: "base32",
            token: token,
            step: 60,
        });
        return valid;
    }
}

module.exports = TwoFactor;