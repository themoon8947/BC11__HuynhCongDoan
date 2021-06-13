function getEle(id) {
    return document.getElementById(id);
}

//start bài 1
function inSoChanLe() {
    var soChan = "";
    var soLe = "";
    for (var i = 0; i <= 100; i++) {
        if (i % 2 == 0) {
            soChan += i + " ";
        } else {
            soLe += i + " ";
        }
    }
    getEle("XuatChan").innerHTML = "Số chẵn là: " + soChan
    getEle("XuatLe").innerHTML = "Số lẻ là: " + soLe


}

//end bài 1


//start bài 2 
function tongChan() {

    var n = getEle("txtSoNguyenN").value;
    var i = 0;
    var tongChan = 0;
    for (i = 0; i < n; i++) {
        if (i % 2 == 0) {
            tongChan += i;
        }
    }
    getEle("XuatBai2").innerHTML = "Tổng các số chẳn từ 1 đến N là: " + tongChan;




}


//end bài 2

//start bài 3
function dem() {
    var n = getEle("txtSoNguyen").value;
    var dem = 0;
    for (var i = 0; i < n; i++) {
        if (i % 3 == 0) {
            dem++;
        }
    }
    getEle("XuatBai3").innerHTML = "Các số chia hết cho 3 từ 1 đến n là: " + dem;



}
//end bài 3




//start bài 4

function timSo() {
    var s = 0;
    var n = 0;
    // sử dụng vòng lặp while với điều kiện tong < 10000
    while (s < 10000) {
        //bước nhảy của vòng lặp là n++
        n++;
        //cứ sau mỗi vòng lặp thì tổng S sẽ được cộng dồn với n cho đến khi S > 10000 thì thoát khỏi vòng lặp
        s = s + n;
    }
    getEle("XuatBai4").innerHTML = "Số nhỏ nhất để tổng từ 1 đến nó lớn hơn 10000 là: " + n
}

//end bài 4



//start bài 5

function tinhTong() {
    var x = getEle("txtSoX").value
    var n = getEle("txtSoN").value
    var lt=1;
    var s=0;
    for(var i=1;i<=n;i++){
        lt = lt * x;
        s += lt;
    }
    getEle("XuatBai5").innerHTML = "Tổng S(n) = x^1 + x^2 + x^3 + … + x^n là: " + s
}
//end bài 5


//start bài 6
function tinhGiaiThua(){
    var n = getEle("txtSo").value;
    var giaiThua=1;
    for(var i=1;i<=n;i++){
        giaiThua=giaiThua*i;

    }
    getEle("XuatBai6").innerHTML="Giai thừa của "+n+" là: "+giaiThua
}
//end bài 6

// for (int i=2; i<100; i++) 
//         for (int j=2; j*j<=i; j++)
//         {
//             if (i % j == 0) 
//                 break;
//             else if (j+1 > sqrt(i)) {
//                 cout << i << " ";

//             }

//         }   

//     return 0;