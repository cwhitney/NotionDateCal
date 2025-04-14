
console.log("start");

function parseQueryString(queryString) {
	const params = new URLSearchParams(queryString);
	const parsedParams = {};
	for (const [key, value] of params.entries()) {
		parsedParams[key] = value;
	}

	return parsedParams;
}

function is_numeric(str){
    return /^\d+$/.test(str);
}

function createElements(queryObj){
	
	const numCont = document.getElementById("numCont");

	for (const key in queryObj) {
		const element = document.createElement("div");

		let val = queryObj[key];
		if(is_numeric(val)){
			if(val < 10){
				val = "0" + val;
			}
		}

		element.innerHTML = val;
		element.classList.add("digit");
		numCont.appendChild(element);
	}
}

const qs = parseQueryString(window.location.search);
createElements(qs);


console.log(qs);