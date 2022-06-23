//Btvidu tren lop

function convertToUpperCase(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function reverse (str = "" ) {
    const splitStr = str.split("_");
    let newStr = "";
    for (let i = 0; i < splitStr.length; i++) {
        newStr += convertToUpperCase(splitStr[i]);
    }
    console.log(newStr);
}

// Bai tap ve nha
// Bài 1: 
// -	Input: Cho vào chuỗi bất kì
// -	Output: Đếm xem chuỗi đó có bao nhiêu nguyên âm (Nguyên âm là a, e, I, o, u)
console.log('Bài 1:')
var button = document.getElementById('vowels');
vowels.onclick = function () {
    var str1 = document.getElementById('str1').value;
    if (str1 == ""){
        alert("Vui lòng nhập chuỗi");
    } else {
        str1 = String(str1)
        vowel_count(str1)
    }

    function vowel_count(str1) {
        let vowel_list = "a,e,i,o,u";
        let number = 0;
        for (let i = 0; i < str1.length; i++) {
            if (vowel_list.indexOf(str1[i]) !== -1) {
                number += 1;
            }
        }
        console.log(number);
        document.getElementById("result").innerHTML = number
    }
}

/**
 *Bài 2: 
-	Input: Cho 1 object
-	Output: Viết hàm kiểm tra xem object đó rỗng không

 */

console.log('Bai 2')
const a = ["ab"];

// function isEmpty(obj) {
//     for(var key in obj) {
//         if(obj.hasOwnProperty(key))
//             console.log('false');
//     }
//     console.log('true');
// }
//output: 
// console.log(isEmpty(a))
console.log(Object.getOwnPropertyNames(a).length === 0); // true;

/**
 * Bài 3: 
-	Input: Cho 1 mảng
-	Tính tổng mảng đó (dùng for, reduce …. Tất cả các cách để tính tổng mảng đó)

 */

console.log('Bài 3');
var array = [1 , 2, 3, 4];
let sum = 0;
    for (let i in array){
        sum += array[i];
    }
    console.log(sum)

    /**
     * for (let i = 0; i < array.length; i++) {
     *      sum += array[i];
     * }
     * 
     * const array1 = [1, 2, 3, 4];
        const initialValue = 0;
        const sumWithInitial = array1.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue
        );

        console.log(sumWithInitial);

     */


/**
 *  Bài 4: 
-	Input: Cho 1 mảng
-	Output: Tìm số lần xuất hiện của các phần tử trong mảng
*/        
console.log('Bài 4');
let number = [1, 2, 3, 2, 2, 3, 4, 3, 5, 5, 1, 7, 7, 8, 9];
// /*Xóa phần tử trùng nhau và lấy các phần tử duy nhất*/
// let removeDuplicates = number.reduce(function (accumulator, element) {
//     if (accumulator.indexOf(element) === -1) {
//       accumulator.push(element)
//     }
//     return accumulator;
//   }, [])
//   console.log(removeDuplicates);

// Xóa phần tử trùng nhau và lấy các phần tử duy nhất
function removeDuplicates(number){
    var newNumber = []
    for (var i = 0; i < number.length; i++) {
        if (newNumber.indexOf(number[i]) === -1) {
            newNumber.push(number[i])
        }
    }
    return newNumber
}
result = removeDuplicates(number)
console.log(result);

/*đếm số lần xuất hiện của các phần tử duy nhất*/
for (let i = 0; i < result.length; i++) 
    number_array(number, result[i]);

/*Tạo hàm đếm số lần xuất hiện của một phần tử trong mảng JavaScript*/
function number_array(array, x){
    let count = 0;
    for(let i = 0; i< array.length; i++){
      if(array[i]==x) //Tìm thấy phần tử giống x trong mảng thì cộng biến đếm
        count ++;
    }
    console.log( "Phan tu " +  x  + " xuat hien " + count +  " lan");
}




