const http = require('http');

const options = {
    //protocol: 'http:',
    hostname: 'cockpit-app.test',
    path: '/webhook',
    //port: 80,
    method: 'POST',
    headers: {
        'X-COCKPIT-TOKEN': '6d5c352b-98d3-4ccb-8bd6-1f192208cff8',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
    }
};

const request = http.request(options, (res) => {

    if (res.statusCode !== 200) {
    //console.error(`Did not get an OK from the server. Code: ${res.statusCode}`);
    res.resume();
    return;
  }

  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('close', () => {
    console.log('Updated data');
    console.log(JSON.parse(data));
  });

  req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
  });
});

const requestData = {
    exception: 'test exception nodejs',
    message: 'test message nodejs',
    file: 'test-node.js',
    type: 'cli',
};

request.write(JSON.stringify(requestData));

request.end();

request.on('error', (err) => {
  console.error(`Encountered an error trying to make a request: ${err.message}`);
});
