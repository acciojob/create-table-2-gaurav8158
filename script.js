function createTable() {
    //Write your code here
	const row = prompt(Input number of rows");
	const column = prompt("Input number of columns");

	let table=document.getElementById("myTable");
	for(let i=0;i<row;i++){
		table.insertRow();
		for(let j=0;j<column;j++){
const cell = table.rows[i].insertCell();
				cell.textContent = "Row-"+i+" Column-"+j;
			cell.style.textweight="bold";
		}
	}
}