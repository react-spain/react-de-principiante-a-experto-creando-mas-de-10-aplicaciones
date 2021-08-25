const cron = require("node-cron");
let shell = require("shelljs");
const dateFormat = require('dateformat');

cron.schedule("* * * * * *", function(){
	try {
		const day=dateFormat(new Date(), "yyyy-mm-dd h:MM:ss");
		console.log("Cron", day);
	} catch (error) {
		console.error(error);
	}
	
});