const mainURL = "https://scheduleapi.onrender.com/";
let http = new XMLHttpRequest();

http.onreadystatechange = function() {
    if(http.readyState === 4 && http.status === 200) {
        let x = null;
        let res = null;
        res = http.responseText;
        x = JSON.parse(res);
        console.log(x);
        if(length(x)>1){
            parseAll(x);
        }
    }
}

function dataCheck(){
    let start_time = document.getElementById("start_time").value;
    let end_time = document.getElementById("end_time").value;
    let cust_name = document.getElementById("cust_name").value;
    let cust_num = document.getElementById("cust_num").value;
    let table_num = document.getElementById("table_num").value;

    if(start_time=="" || end_time=="" || cust_name=="" || cust_num=="" || table_num==""){
        alert("入力項目が不足しています。");
    };
    let url = mainURL + "add/" + start_time + "/" + end_time + "/" + cust_name + "/" + cust_num + "/" + table_num;
    http.open("GET", url);
    http.send();
}

function getData(){
    let url = mainURL + "getdata";
    http.open("GET",url);
    http.send();
}

function parseAll(mainList){
    let keyNum = Object.keys(mainList).length;
    for(i==0;i<keyNum;i++){
        console.log(mainList[i]);
    }

}