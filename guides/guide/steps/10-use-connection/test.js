MinUnit.module("Adding the message model");

MinUnit.test("message-model component added", function(done){
	F(".btn-primary").exists().click();
	F("chat-messages a").exists().click();
	F("chat-home").exists("Returned back to the home page");
	F(done);
});
