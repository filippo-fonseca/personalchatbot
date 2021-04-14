class Core {
  sendWhatsAppMsg(msg: string): void {
    const accountSid = "AC9de7ce335c5571624f00792dc3090d96";
    const authToken = "f39c0d80351116bd45bdd5e5465678d";
    const client = require("twilio")(accountSid, authToken);

    client.messages
      .create({
        from: "whatsapp:+12058962843",
        body: msg,
        to: "whatsapp:+50689973462",
      })
      .then((message) => console.log(message.sid));
  }
}

const core = new Core();

core.sendWhatsAppMsg("Test message");

