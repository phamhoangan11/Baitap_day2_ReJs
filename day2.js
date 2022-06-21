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