//For some reason, you have to press an extra key to not tokenize for example "Debian" as "Debia" 

let funValue = Math.floor(Math.random() * 100);
if (funValue == 69) {
    document.getElementById("title").innerHTML = "SEA ROAST";
    document.getElementById("query").placeholder = "Contrary to belief, sea cows are not made of beef.";    
    document.title = "Sea Roast";
}
async function search() {
    let query = document.getElementById("query").value;
    const results = document.getElementById("results")
    const response = await fetch("/api/search", {
        method: 'POST',
        headers: {'Content-Type': 'text/plain'},
        body: query,
    });
    const json = await response.json();
    results.innerHTML = "";
    let i = 1;
    for ([path, rank] of json) {
	let fileName = path.split("/").at(-1);
        let item = document.createElement("a");
	if (funValue == 1) {
	    item.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUIcmlja3JvbGw%3D"
	} else {
	    item.href = path;
	}
	item.className += "result";
	let rankElement = document.createElement("h3");
	rankElement.innerHTML = i;
	rankElement.className += "rank";
	item.appendChild(rankElement);
	let content = document.createTextNode(`${fileName} (${path})`);
	content.className = "content";
        item.appendChild(content);
        item.appendChild(document.createElement("br"));
        results.appendChild(item);
	i += 1;
    }
}

Promise.resolve();
//let query = document.getElementById("query");
//query.addEventListener("keypress", () => { currentSearch.then(search()) });
