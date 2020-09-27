'use strict';

const inputArea = document.querySelector('.calc__input');
const result = document.querySelector('.calc__result');
const btn = document.querySelectorAll('button');
let num = [];
let temp = 0;

addEventListener('click', (e) => {
	if (e.target.value === 'c') {
		inputArea.value = '';
		result.innerHTML = '&nbsp;';
        num = [];
	 } else if (e.target.value === '+') {
		result.innerHTML += e.target.value;
		for (var i = 0; i < num.length; i++) {
			if (num.length >= 2) {
				temp += num[i];
				inputArea.value = temp;
			}
		};
		temp = 0;
	} else if (e.target.value === '=') {
		result.innerHTML += e.target.value;
	} else {
		num.push(+(e.target.value));
		inputArea.value = e.target.value;
		result.innerHTML += e.target.value;
	};

	

    
	// 	for (var i = 0; i < inputArea.value.length; i++) {
	// 		console.log(typeof(inputArea.value[i]));
	// 		if (typeof(inputArea.value[i]) === Number) {
	// 			arr.push(inputArea.value[i]);	
	// 	}
	// };
});
