export default {
	chat: String,
	
	runGPT () {
		var a = "buyer: hallo seller: hi there. buyer: i want a business website seller: sure $100 10 days buyer: great"
		var b="";
		order_chatter.run({ input1: a });
		b=order_chatter.data.data.choices[0].message.content;
		Text1.setText(b);
		return b;
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}