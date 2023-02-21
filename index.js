//doHttpPost('localhost', 8000, '/TestPost', 'string' , 'TestTestTestTest', false);
//doHttpPost('localhost', 8000, '/TestPost', 'file' , '/Users/chengwei/Downloads/grid1.png', true);

var querystring = require('querystring')

function doHttpPost(_host, _port, _path, value) {
	var http = require('http'),
	    postData,
        postOptions,
        postRequest;

    postData = value
    postOptions = {
        'host': _host,
        'port': _port,
        'path': _path,
        'method': 'POST',
        'headers' : {
            'X-COCKPIT-TOKEN': '6d5c352b-98d3-4ccb-8bd6-1f192208cff8',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
            'Content-Length' : postData.length
        }
    };
    postRequest = http.request(postOptions, function(response){
        console.log('Status Code:', response.statusCode);

        response.on('end', function() {
            console.log('sent ' + value);
        });
    });
    postRequest.write(postData);
    postRequest.end();
}

var postData = querystring.stringify({
    'exception': 'some-exception',
    'message': 'some-message',
    'file': 'some-file',
    'type': 'cli',
});

doHttpPost('cockpit-app.test', 80, '/webhook', postData);
