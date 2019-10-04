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
					Authorization: process.env.DEVLIDS_TOKEN
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
