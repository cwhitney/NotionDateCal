
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

function createMonth(digit) {
	const elem = document.createElement("h2")

	let dex = parseInt(digit) - 1;
	let months = [
		"January","February","March","April","May","June","July",
		"August","September","October","November","December"];

	if (dex < 0 || dex > 11) {
		console.error("Invalid month index");
		return null;
	}

	elem.innerHTML = months[dex];
	elem.classList.add("month");
	return elem;
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

		if(key == "month"){
			const v = createMonth(val);
			if(v){
				element.appendChild( v );
			}
		}

		numCont.appendChild(element);
	}
}

const qs = parseQueryString(window.location.search);
createElements(qs);


console.log(qs);