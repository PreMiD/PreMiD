import * as Client from "ssh2-sftp-client";

let sftp = new Client();

sftp
	.connect({
		host: process.env.SSHHOST,
		username: process.env.SSH_USERNAME,
		privateKey: process.env.SSH_KEY
	})
	.then(async () => {
		sftp
			.fastPut(process.argv[2], process.argv[3])
			.then(() => {
				sftp.end();
			})
			.catch(console.error);
	});
