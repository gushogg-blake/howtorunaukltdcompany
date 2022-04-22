import {marked} from "marked";

export default function(str, options={}) {
	let lines = str.split("\n");
	let minNonZeroIndent = Math.min(...lines.map(line => line.match(/^\t+/)?.[0]?.length || 0).filter(n => n > 0));
	let re = new RegExp("^\t{" + minNonZeroIndent + "}", "gm");
	
	str = str.replace(re, "");
	
	return new Promise(function(resolve, reject) {
		marked(str, options, function(e, result) {
			if (e) {
				reject(e);
			} else {
				resolve(result);
			}
		});
	});
}
