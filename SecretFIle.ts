(() => {
    class SecretFile {
        secretMessage() {
            console.log("SHHH....");
        }
    }
    const secretFile = new SecretFile();
    secretFile.secretMessage();
})();