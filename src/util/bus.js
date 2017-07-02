function checkFilter(category, title, checked){
	// alert("!");
	if (checked){
		this[category].push(title);
	} else {
		let index = this[category].indexOf(title);
		// console.log(index);
		if (index > -1){
			this[category].splice(index, 1);
		}
	}
}

export { checkFilter };