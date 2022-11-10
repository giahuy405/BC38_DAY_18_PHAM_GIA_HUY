function domID(id) {
    return document.getElementById(id);
}

var arr = [];
var btnAddArray = document.querySelector('.btnAddArray');
var inputArr = document.querySelector('.inputArr');



btnAddArray.addEventListener("click", () => {
    /* dùng để làm rỗng nội dung trong thẻ input khi click 
    -> click ở đây là (click chuột/nhấn Enter) nút button */
    inputArr.value = "";
    /* hàm này dùng để con trỏ tiếp tục focus vào trong ô input */
    inputArr.focus();
});

inputArr.addEventListener("keypress", (event) => {
    //event nhấn phím
    // nếu nút Enter được ấn thì 
    if (event.key === "Enter") {
        // bỏ mặc định nên thêm vào
        event.preventDefault();
        // thì nút button cũng dc click
        btnAddArray.click();
    }
});

// input số vào mảng
function addArr(input, display) {
    let inputArr = parseFloat(document.querySelector(input).value);
    if (isNaN(inputArr)) {
        alert('Xin vui lòng nhập dữ liệu');
        return;
    } else {
        arr.push(inputArr);
    }
    document.querySelector(display).innerHTML = arr;
}

// kiểm tra xem ô Input ' Nhập số n ' đã nhập hay chưa ? 
function checkInput() {
    // LƯU Ý : vì là mảng nên ta so sánh 2 dấu bằng thay vì 3 dấu
    if (arr == '') {
        alert('Hãy nhập số n để tạo mảng');
        return false;
    }
    else return true;
}



// Bài 1 
domID('ex1').onclick = function () {
    // nếu hàm này trả về false thì return ở hàm ex1() này, ngắt các lệnh phía sau
    if (checkInput() === false) return;
    var total = 0;
    for (var i = 0; i <= arr.length; i++) {
        if (arr[i] > 0) {
            total += arr[i];
        }
    }
    domID('displayEx1').innerHTML = 'Tổng số dương : ' + total;
}

// Bài 2
domID('ex2').onclick = function () {
    // nếu hàm này trả về false thì return ở hàm ex2() này, ngắt các lệnh phía sau
    if (checkInput() === false) return;
    var count = 0;
    for (var i = 0; i <= arr.length; i++) {
        if (arr[i] > 0) {
            count++;
        }
    }
    domID('displayEx2').innerHTML = 'Số dương có : ' + count + ' số ';
}

// Bài 3 
domID('ex3').onclick = function () {
    // nếu hàm này trả về false thì return ở hàm ex3() này, ngắt các lệnh phía sau
    if (checkInput() === false) return;
    //gán biến min = giá trị đầu tiên của mảng
    var min = arr[0];
    // dùng for duyệt mảng
    for (var i = 0; i <= arr.length; i++) {
        // nếu trong lúc tìm có số a[i] nào bé hơn biến min ở trên
        // thì ta gán biến min này cho giá trị a[i] mới đó. 
        // Ta lại có biến min mới, tiếp tục lặp đến hết mảng
        if (arr[i] < min) {
            // gán biến min = arr[i] không được ghi ngược lại :))
            min = arr[i];
        }
    }
    domID('displayEx3').innerHTML = 'Số nhỏ nhất : ' + min;
}


//Bài 4 
domID('ex4').onclick = function () {
    // nếu hàm này trả về false thì return ở hàm ex3() này, ngắt các lệnh phía sau
    if (checkInput() === false) return;
    //gán biến min = giá trị đầu tiên của mảng
    var min = arr[0];
    // dùng for duyệt mảng
    for (var i = 0; i <= arr.length; i++) {
        // nếu trong lúc tìm có số a[i] nào bé hơn biến min ở trên
        // thì ta gán biến min này cho giá trị a[i] mới đó. 
        // Ta lại có biến min mới, tiếp tục lặp đến hết mảng
        if (arr[i] < min && arr[i] > 0) {
            // gán biến min = arr[i] không được ghi ngược lại :))
            min = arr[i];
        }
    }
    domID('displayEx4').innerHTML = 'Số dương nhỏ nhất : ' + min;
}

//Bài 5
domID('ex5').onclick = function () {
    // nếu hàm này trả về false thì return ở hàm ex3() này, ngắt các lệnh phía sau
    if (checkInput() === false) return;
    var finalEven = 0;
    for (var i = 0; i <= arr.length; i++) {
        if (arr[i] % 2 === 0) {
            finalEven = arr[i];
        }
    }
    domID('displayEx5').innerHTML = 'Số chẵn cuối cùng : ' + finalEven;
}

//Bài 6
domID('ex6').onclick = function () {
    var index1 = domID('indexOneEx6').value * 1;
    var index2 = domID('indexTwoEx6').value * 1;

    // nếu hàm này trả về false thì return ở hàm ex3() này, ngắt các lệnh phía sau
    if (checkInput() === false) return;

    // dùng đổi vị trí giữa 1 và 2
    var swap = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = swap;
    console.log(arr)

    domID('displayEx6').innerHTML = 'Mảng sau khi đổi chỗ : ' + arr;
}


//Bài 7
domID('ex7').onclick = function () {

    // nếu hàm này trả về false thì return ở hàm ex3() này, ngắt các lệnh phía sau
    if (checkInput() === false) return;

    for (var i = 0; i <= arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                // Hoan vi 2 so a[i] va a[j]
                var tg = arr[i];
                arr[i] = arr[j];
                arr[j] = tg;
            }
        }
    }

    domID('displayEx7').innerHTML = 'Mảng sau khi sắp xếp : ' + arr;
}


//Bài 8
function isPrime(number) {
    if (number < 2) return false;
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
        else return true;
    }
}
domID('ex8').onclick = function () {
    // nếu hàm này trả về false thì return ở hàm ex3() này, ngắt các lệnh phía sau
    if (checkInput() === false) return;
    var count = 0;

    for (var i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            domID('displayEx8').innerHTML = 'Số nguyên tố đầu tiên trong mảng : ' + arr[i];
            break;
        } else {
            domID('displayEx8').innerHTML = 'Không có số nguyên tố trong mảng';
        }
    }
}

// bài 9
var arrEx9 = [];
var inputArrEx9 = domID('inputArrEx9');
var btnAddArray1 = domID('btnAddArray1');


btnAddArray1.addEventListener("click", () => {
    /* dùng để làm rỗng nội dung trong thẻ input khi click 
    -> click ở đây là (click chuột/nhấn Enter) nút button */
    inputArrEx9.value = "";
    /* hàm này dùng để con trỏ tiếp tục focus vào trong ô input */
    inputArrEx9.focus();
});

inputArrEx9.addEventListener("keypress", (event) => {
    //event nhấn phím
    // nếu nút Enter được ấn thì 
    if (event.key === "Enter") {
        // bỏ mặc định nên thêm vào
        event.preventDefault();
        // thì nút button cũng dc click
        btnAddArray1.click();
    }
});
// hàm nối chuỗi
function addArr9() {
    let inputArrEx9 = parseFloat(domID('inputArrEx9').value);
    if (isNaN(inputArrEx9)) {
        alert('Xin vui lòng nhập dữ liệu');
        return;
    } else {
        arrEx9.push(inputArrEx9);
    }
    domID('displayArrEx9').innerHTML = arrEx9;
}

domID('btncountNumberInt').onclick = function () {
    var count = 0;
    for (var i = 0; i < arrEx9.length; i++) {
        if (Number.isInteger(arrEx9[i])) {
            count++;
        }
    }
    domID('displayCountNumberInt').innerHTML = 'Có : ' + count + ' số nguyên';
}


// bài 10 
domID('btnCompare').onclick = function () {
    var countNegative = 0;
    var countPositive = 0;
    var displayCompareResult=domID('displayCompareResult');
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            countPositive++;
        }
        else if (arr[i] < 0) {
            countNegative++;
        }
    }
    if(countNegative > countPositive){
        displayCompareResult.innerHTML=' Số âm ('+ countNegative + ') >  số dương ('+countPositive+')';
    }else if(countNegative === countPositive){
        displayCompareResult.innerHTML=' Số âm ('+ countNegative + ') =  số dương ('+countPositive+')';
    }else{
        displayCompareResult.innerHTML=' Số âm ('+ countNegative + ') <  số dương ('+countPositive+')';
    }
}