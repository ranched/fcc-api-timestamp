const dateParsable = str => {
  const parseResult = Date.parse(str);
  return !isNaN(parseResult);
}

const errorResponse = {
  "error" : "Invalid Date"
}

const makeDateResponseObj = urlDateString => ({
  "unix": urlDateString.getTime() ,
  "utc": urlDateString.toUTCString()
})

exports.returnDateObj = (request, response) => {
  let resObj = {};
  
  if(request.params.date_string){
    let date = request.params.date_string;
    
    if(dateParsable(date)){
      resObj = makeDateResponseObj(new Date(date));
    } else {
      resObj = errorResponse;
    }
  } else {
    resObj = makeDateResponseObj(new Date());
  }
  
  response.send(JSON.stringify(resObj));
}