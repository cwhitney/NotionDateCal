
console.log("start");

function parseQueryString(queryString) {
	const params = new URLSearchParams(queryString);
	const parsedParams = {};
	for (const [key, value] of params.entries()) {
		parsedParams[key] = value;
	}

	return parsedParams;
}

function createElements(queryObj){
	
	for (const key in queryObj) {
		const element = document.createElement("div");
		element.innerHTML = `${key}: ${queryObj[key]}`;
		document.body.appendChild(element);
	}
}

const qs = parseQueryString(window.location.search);
createElements(qs);


console.log(qs);