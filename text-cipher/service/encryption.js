


const crypto = require('crypto');

// a random 256 bits hex value of len 32 characters
const ENCRYPTION_KEY = crypto.randomBytes(32);

//iv length constant 16 for AES
const iv_length = 16;
console.log(ENCRYPTION_KEY)


//function to encrypt the text
function encrypt(text) {

    let iv = crypto.randomBytes(iv_length);
    let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), iv);
    let encrypted = cipher.update(text);

    encrypted = Buffer.concat([encrypted, cipher.final()]);

    return iv.toString('hex') + ':' + encrypted.toString('hex');
}


//function to decrypt the text

function decrypt(text) {
    let textParts = text.split(':');
    let iv = Buffer.from(textParts.shift(), 'hex');
    let encryptedText = Buffer.from(textParts.join(':'), 'hex');
    let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), iv);
    let decrypted = decipher.update(encryptedText);

    decrypted = Buffer.concat([decrypted, decipher.final()]);

    return decrypted.toString();

}

module.exports = { decrypt, encrypt };








