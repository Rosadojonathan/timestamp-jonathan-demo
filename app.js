 const express = require('express');
 const bodyParser = require('body-parser');
 const cors = require('cors');
 const port = process.env.PORT;

 const app = module.exports = express();

 app.use(bodyParser.json());
 app.use(cors());

 app.get('/dateValues/:dateVal', function(req, res,next){
	 var dateVal = req.params.dateVal;

	 var dateFormattingOptions = {
		 year: 'numeric',
		 month: 'long',
		 day: 'numeric'
	 }
	 if(isNaN(dateVal)){
		 var  naturalDate = new Date(dateVal);
		 naturalDate = naturalDate.toLocaleDateString("en-us",dateFormattingOptions);
		 var unixDate = new Date(dateVal).getTime()/1000;
	 }
	 else{
		 var unixDate = dateVal;
		 var naturalDate = new Date(dateVal*1000);
		 naturalDate = naturalDate.toLocaleDateString("en-us",dateFormattingOptions);

	 }
	res.json({unix: unixDate, natural: naturalDate});
 });




 app.listen(port, function(){
	 console.log('server listening on port ' + port);
 })
