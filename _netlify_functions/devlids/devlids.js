/* eslint-disable */

const fetch = require("node-fetch");
const API_ENDPOINT = 'https://devlids.com/api/';

exports.handler = async function(event, context) {
  let response;
	let data;

	console.log("Function Debug" );
	console.log("Secret:", process.env.DEVLIDS_TOKEN );
	console.log("Path:", event.queryStringParameters.path );

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
