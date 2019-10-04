const fetch = require('./node-fetch.js');

let API_ENDPOINT = 'https://devlids.com/api/';

exports.handler = async (event, context) => {
	let response;
	let data;

	try {
		response = await fetch(
			API_ENDPOINT + event.queryStringParameters.path,
			{
				headers: {
					Authorization: 'Basic YXBpQGV4YW1wbGUuY29tOjFxYXkhUUFZ'
				}
			}
		);

		data = await response.json();
	} catch (err) {
		return {
			statusCode: err.statusCode || 500,
			body: JSON.stringify({
				error: err.message
			})
		};
	}

	return {
		statusCode: 200,
		body: JSON.stringify({
			data
		})
	};
};
