// 138 ----------------------------------------------

/* 1 */

let arr = [
	['a', 'b', 'c'],
	['d', 'e', 'f'],
	['g', 'h', 'i'],
	['j', 'k', 'l'],
];
console.log(arr[3][2]);
console.log(arr[1][1]);
console.log(arr[2][0]);
console.log(arr[0][0]);

/* 2 */

let arr = [[1, 2], [3, 4], [5, 6]];
let sum = 0;

for(let i = 0; i < 3; i++){
  for(let ii = 0; ii < 2; ii++){
    sum = sum + arr[i][ii];
  }
}

console.log(sum);

/* 3 */

let arr = [
	[
		[1, 2],
		[3, 4],
	],
	[
		[5, 6],
		[7, 8],
	],
];
let sum = 0;


for(let i = 0; i < 2; i++){
  for(let ii = 0; ii < 2; ii++){
    for(let iii = 0; iii < 2; iii++){
    sum = sum + arr[i][ii][iii];
  }
  }
}

console.log(sum);

/* 4 */

let arr = [[1, 2, 3, [4, 5, [6, 7]]], [8, [9, 10]]];
sum = 0;

sum += arr[0][0] + arr[0][1] + arr[0][2];       // [[ 1, 2, 3,
  sum += arr[0][3][0] + arr[0][3][1];           // [ 4, 5, 
    sum += arr[0][3][2][0] + arr[0][3][2][1];   // [ 6, 7 ] ] ]
sum += arr[1][0];                               // [8, 
  sum += arr[1][1][0] + arr[1][1][1];           // [9, 10]]]

console.log(sum);

// 139 ----------------------------------------------

/* 1 */

let arr = [[1, 2, 3], [4, 5], [6]];
sum = 0;

for (let subArr of arr) {
	for (let elem of subArr) {
		sum += elem;
	}
}

console.log(sum);

/* 2 */

let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
sum = 0;

for (let subArr of arr) {
	for (let subArr2 of subArr) {
		for (let elem of subArr2) {
		    sum += elem;
	  }
	}
}

console.log(sum);

/* 3 */

            //1
let arr = [[1, 2, 3], [4, 5], [6]];
sum = 0;

for (let i = 0; i < arr.length; i++) {
	for (let j = 0; j < arr[i].length; j++) {
		sum += arr[i][j];
	}
}

console.log(sum);

           //2
let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
sum = 0;

for (let i = 0; i < arr.length; i++) {
	for (let j = 0; j < arr[i].length; j++) {
		for (let q = 0; q < arr[i][j].length; q++) {
		  sum += arr[i][j][q];
	  }
	}
}

//140 ----------------------------------------------

/* 1 */

let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = []; // создаем подмассив
	
	for (let j = 0; j < 5; j++) {
		arr[i].push(j + 1); // заполняем подмассив числами
	}
}

console.log(arr);

/* 2 */

let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = []; // создаем подмассив
	
	for (let j = 0; j < 4; j++) {
		arr[i].push('x'); // заполняем подмассив числами
	}
}

console.log(arr);

/* 3 */

let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = []; // создаем подмассив
	
	for (let j = 0; j < 2; j++) {
	  arr[i][j] = []; // создаем подмассив подмассива
		
		for (let q = 0; q < 5; q++) {
	    arr[i][j].push(q + 1); // заполняем подмассив подмассива числами
		
	  }
	}
}

console.log(arr);

//141 ----------------------------------------------

/* 1 */

/////Оригинал////
let arr = [];

for (let i = 0; i < 3; i++) {
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);

/////Исправление////
let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 5; j++) {
		arr[i].push(j);
	}
}

/* 2 */

/////Оригинал////
let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = '';
	
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);

/////Исправление////
let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);

/* 3 */

/////Оригинал////
let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i];
	
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);

/////Исправление////
let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);

/* 4 */

/////Оригинал////
let arr = [];

for (let i = 0; i < 3; i++) {
	arr[j] = [];
	
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);

/////Исправление////
let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);

/* 5 */

/////Оригинал////
let arr = [];

for (let i = 0; i < 3; i++) {
	arr = [];
	
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);

/////Исправление////
let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);

/* 6 */

/////Оригинал////
let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 1; j <= 5; j++) {
		arr.push(j);
	}
}

console.log(arr);

/////Исправление////
let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);

//142 ----------------------------------------------

/* 1 */

let arr = [];

for (let i = 0, k = 1; i < 4; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 2; j++) {
		arr[i].push(k++);
	}
}

console.log(arr);

/* 2 */

let arr = [];

for (let i = 0, k = 0; i < 4; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i].push(k+=2);
	}
}

console.log(arr);

/* 3 */

let arr = [];

for (let i = 0, k = 1; i < 2;  i++) {
	arr[i] = []; // создаем подмассив
	
	for (let j = 0; j < 2; j++) {
	  arr[i][j] = []; // создаем подмассив подмассива
		
		for (let q = 0; q < 2; q++) {
	    arr[i][j].push(k++); // заполняем подмассив подмассива числами
		
	  }
	}
}

console.log(arr);

/* 4 */

/////Оригинал////
let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
		k++;
	}
}

console.log(arr);

/////Исправление////
let arr = [];

for (let i = 0, k = 1; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i].push(k++);
	}
}

console.log(arr);

/* 5 */

/////Оригинал////
let arr = [];
let k = 1;

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
	}
}

console.log(arr);

/////Исправление////
let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);

/* 6 */

/////Оригинал////
let arr = [];
let k = 1;

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
		k--;
	}
}

console.log(arr);

/////Исправление////
let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);

/* 7 */

/////Оригинал////
let arr = [];
let k;

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
		k++;
	}
}

console.log(arr);

/////Исправление////
let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);

/* 8 */

/////Оригинал////
let arr = [];

for (let i = 0, k = 1; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
	}
}

console.log(arr);

/////Исправление////
let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);

/* 9 */

/////Оригинал////
let arr = [];

for (let i = 0, k = 1; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0, k++; j < 3; j++) {
		arr[i][j] = k;
	}
}

console.log(arr);

/////Исправление////
let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);

/* 10*/

/////Оригинал////
let arr = [];

for (let i = 0, k = 1; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3; j++; k++) {
		arr[i][j] = k;
	}
}

console.log(arr);

/////Исправление////
let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);

/* 11*/

/////Оригинал////
let arr = [];

for (let i = 0, k = 1; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i][j] = ++k;
	}
}

console.log(arr);

/////Исправление////
let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);

/* 12*/

/////Оригинал////
let arr = [];
let k = 1;

for (let i = 0; i < 3; i++) {
	arr[k] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
		k++;
	}
}

console.log(arr);

/////Исправление////
let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);

/* 13*/

/////Оригинал////
let arr = [];

for (let i = 0, k = 1; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3; k++) {
		arr[i][j] = k;
	}
}

console.log(arr);

/////Исправление////
let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);

//143 ----------------------------------------------

/* 1 */

let obj = {
	key1: {
		key1: 1,
		key2: 2,
		key3: 3,
	},
	key2: {
		key1: 4,
		key2: 5,
		key3: 6,
	},
	key3: {
		key1: 7,
		key2: 8,
		key3: 9,
	},
}
let sum = 0;

sum += obj.key1.key1 + obj.key1.key2 + obj.key1.key2; //{ key1: 1, key2: 2, key3: 3 }
sum += obj.key2.key1 + obj.key2.key2 + obj.key2.key2; //{ key1: 4, key2: 5, key3: 6 }
sum += obj.key3.key1 + obj.key3.key2 + obj.key3.key2; //{ key1: 7, key2: 8, key3: 9 }

console.log(sum);

/* 2 */

let obj = {
	1: {
		1: 'a1',
		2: 'a2',
		3: 'a3',
	},
	2: {
		1: 'b1',
		2: 'b2',
		3: 'b3',
	},
	3: {
		1: 'c1',
		2: 'c2',
		3: 'c3',
	},
}

console.log(obj[2][2]);
console.log(obj[3][1]);

/* 3 */
...
