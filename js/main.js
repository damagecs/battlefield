var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://battlefieldtracker.com/bf1/api/Stats/DetailedStats?platform=3&personaId=&displayName=RED-damaGe-O_O&game=tunguska",
  "method": "GET",
  "headers": {
    "trn-api-key": "77cdb078-68e5-4dcd-8a20-5ef853d92ed2",
    "cache-control": "no-cache",
    "postman-token": "8c3e8034-2cfe-fe16-c6e4-2f752546b22d"
  }
}
console.log("hellooo??");
$.ajax(settings).done(function (response) {
  console.log(response);
});
console.log("huh?");