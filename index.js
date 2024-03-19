const graph_data_visualizer = require('graph-data-visualizer');
const queue_management_system = require('queue-management-system');
const ganache_cli = require('ganache-cli');
const multer = require('multer');
const fs_extra = require('fs-extra');
const web3 = require('web3');
const webpack = require('webpack');
const axios = require('axios');

const os = require('os');
console.log(`Free memory: ${os.freemem()} bytes`);

const spawn = require('child_process').spawn;
const ls = spawn('ls', ['-lh', '/usr']);
ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

// Decrypt an AES-256-CBC encrypted string
const decryptAES = (encryptedText, key, iv) => {
  const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
  let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}
const decryptedText = decryptAES(encryptedText, key, iv);
console.log('Decrypted Text:', decryptedText);