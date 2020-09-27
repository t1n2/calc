'use strict';

const inputArea = document.querySelector('.calc__input');
const result = document.querySelector('.calc__result');
const btn = document.querySelectorAll('button');
let arr = [];
let temp = 0;

btn.forEach(item => {
	item.addEventListener('click', (e) => {
		if (e.target.value === 'c') {
			inputArea.value = '';
			result.innerHTML = '&nbsp;';
	        arr = [];
		 } else if (e.target.value === '+') {
			result.innerHTML += e.target.value;
			for (var i = 0; i < arr.length; i++) {
				if (arr.length >= 2) {
					temp += arr[i];
					inputArea.value = temp;
				}
			};
			temp = 0;
		} else if (e.target.value === '=') {
			result.innerHTML += e.target.value;
			for (var i = 0; i < arr.length; i++) {
				if (arr.length >= 2) {
					temp += arr[i];
					inputArea.value = temp;
				}
			};
			arr.push(+(inputArea.value));
			arr.splice(0, arr.length - 1);
			result.innerHTML = '&nbsp;';
			temp = 0;
			console.log(arr);
		} else {
			arr.push(+(e.target.value));
			inputArea.value = e.target.value;
			result.innerHTML += e.target.value;
			console.log(arr);
	};
	});
});
