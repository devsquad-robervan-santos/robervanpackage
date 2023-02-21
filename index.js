
const queryString = require('querystring');
const http = require('http');

const data = queryString.stringify({
    exception: 'test exception nodejs',
    message: 'test message nodejs',
    file: 'test-node.js',
    type: 'cli',
});

const options = {
    hostname: 'cockpit-app.test',
    path: '/webhook',
    port: 80,
    method: 'POST',
    headers: {
        'X-COCKPIT-TOKEN': '6d5c352b-98d3-4ccb-8bd6-1f192208cff8',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
    }
};

const req = http.request(options, (res) => {
    console.log('Status Code:', res.statusCode);

})

req.on("error", (err) => {
    console.log("Error: ", err.message);
});

req.write( data);
req.end();

/* function robervanpackage(){

}

module.exports.robervanpackage = robervanpackage; */
