class Multer {
    constructor(transporter) {
        this.transporter = transporter;
    }

    async upload(ctx, next) {
        let upload = ctx.upload({storage:this.transporter});
        upload.single('image');
    }
}
module.exports = Multer;
