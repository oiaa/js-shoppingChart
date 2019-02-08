//获取各种dom元素
var subBtns = document.querySelectorAll('#sub-btn');
var addBtns = document.querySelectorAll('#add-btn');
var quantityDisplayBoxs = document.querySelectorAll('#quantity-display-box');
var totalPrice = document.querySelectorAll('.total-price');
var amountPayable = document.querySelector('.amount-payable');
var totalQuantity = 0;
var checkboxs = document.querySelectorAll('#checkbox');

//数量变化
function quantityDisplayBoxsChange(index, symbol) {
    if (symbol == "add") {
        quantityDisplayBoxs[index].value++;
    }
    if (symbol == "sub") {
        if (quantityDisplayBoxs[index].value > 1) {
            quantityDisplayBoxs[index].value--;
        }
    }
}

//输入框数量限制
function quantityDisplayBoxsChangeLimit (index) {
    if(quantityDisplayBoxs[index].value < 1) {
        quantityDisplayBoxs[index].value = 1;
        alert("数量不能少于1,要输入数字");
    }
}

//总价变化
function totalPriceChange (index) {
    totalPrice[index].innerText ='￥' + 10 * quantityDisplayBoxs[index].value;
}

//应付金额变化
function amountPayableChange () {
    totalQuantity = 0;
    for (var i = 0 ; i < quantityDisplayBoxs.length ; i++) {
        if (checkboxs[i + 1].checked) {
            totalQuantity += +quantityDisplayBoxs[i].value;
        }   
    }
    amountPayable.innerText = '￥' + 10 * totalQuantity;
}

//是否选中状态
function isChecked (index) {
    return checkboxs[index].checked;
}

//是否全选
function isSelectAll () {
    if (checkboxs[1].checked || checkboxs[2].checked || checkboxs[3].checked || checkboxs[4].checked) {
        checkboxs[0].checked = false;
    }
    if (checkboxs[1].checked && checkboxs[2].checked && checkboxs[3].checked && checkboxs[4].checked) {
        checkboxs[0].checked = true;
    }
}

//全选checkbox事件绑定
checkboxs[0].onchange = function () {
    if (this.checked) {
        checkboxs[1].checked = true;
        checkboxs[2].checked = true;
        checkboxs[3].checked = true;
        checkboxs[4].checked = true;
    } else {
        checkboxs[1].checked = false;
        checkboxs[2].checked = false;
        checkboxs[3].checked = false;
        checkboxs[4].checked = false;
    }
    amountPayableChange();
}

for (var i = 1 ; i <= 4 ; i++) {   
    (function(i){
        checkboxs[i].onchange = function () {
            isSelectAll();
            amountPayableChange();
        }
    })(i)
}

// checkboxs[1].onchange = function () {
//     isSelectAll();
//     amountPayableChange();
// }
// checkboxs[2].onchange = function () {
//     isSelectAll();
//     amountPayableChange();
// }
// checkboxs[3].onchange = function () {
//     isSelectAll();
//     amountPayableChange();
// }
// checkboxs[4].onchange = function () {
//     isSelectAll();
//     amountPayableChange();
// }

//加减按钮事件绑定

for(var i = 0 ; i < 4 ; i++) {
    (function(i){
        subBtns[i].onclick = function () {
            quantityDisplayBoxsChange(i, 'sub');
            totalPriceChange(i);
            if (isChecked(i+1)) {
                amountPayableChange();
            }
            
        }

        addBtns[i].onclick = function () {
            quantityDisplayBoxsChange(i, 'add');
            totalPriceChange(i);
            if (isChecked(i+1)) {
                amountPayableChange();
            }
            
        }
    })(i)
}

// subBtns[0].onclick = function () {
//     quantityDisplayBoxsChange(0, 'sub');
//     totalPriceChange(0);
//     if (isChecked(1)) {
//         amountPayableChange();
//     }
    
// }
// subBtns[1].onclick = function () {
//     quantityDisplayBoxsChange(1, 'sub');
//     totalPriceChange(1);
//     if (isChecked(2)) {
//         amountPayableChange();
//     }
    
// }
// subBtns[2].onclick = function () {
//     quantityDisplayBoxsChange(2, 'sub');
//     totalPriceChange(2);
//     if (isChecked(3)) {
//         amountPayableChange();
//     }
    
// }
// subBtns[3].onclick = function () {
//     quantityDisplayBoxsChange(3, 'sub');
//     totalPriceChange(3);
//     if (isChecked(4)) {
//         amountPayableChange();
//     }
    
// }

// addBtns[0].onclick = function () {
//     quantityDisplayBoxsChange(0, 'add');
//     totalPriceChange(0);
//     if (isChecked(1)) {
//         console.log(isChecked(0));
//         amountPayableChange();
//     }
    
// }
// addBtns[1].onclick = function () {
//     quantityDisplayBoxsChange(1, 'add');
//     totalPriceChange(1);
//     if (isChecked(2)) {
//         amountPayableChange();
//     }
    
// }
// addBtns[2].onclick = function () {
//     quantityDisplayBoxsChange(2, 'add');
//     totalPriceChange(2);
//     if (isChecked(3)) {
//         amountPayableChange();
//     }
    
// }
// addBtns[3].onclick = function () {
//     quantityDisplayBoxsChange(3, 'add');
//     totalPriceChange(3);
//     if (isChecked(4)) {
//         amountPayableChange();
//     }
    
// }

//输入框事件绑定

for(var i = 0 ; i < 4 ; i++) {
    (function(i){
        quantityDisplayBoxs[i].onchange = function () {
            quantityDisplayBoxsChangeLimit(i);
            totalPriceChange(i);
            if (isChecked(i+1)) {
                amountPayableChange();
            }
        }
    })(i)
}

// quantityDisplayBoxs[0].onchange = function () {
//     quantityDisplayBoxsChangeLimit(0);
//     totalPriceChange(0);
//     if (isChecked(1)) {
//         amountPayableChange();
//     }
// }
// quantityDisplayBoxs[1].onchange = function () {
//     quantityDisplayBoxsChangeLimit(1);
//     totalPriceChange(1);
//     if (isChecked(2)) {
//         amountPayableChange();
//     }
    
// }
// quantityDisplayBoxs[2].onchange = function () {
//     quantityDisplayBoxsChangeLimit(2);
//     totalPriceChange(2);
//     if (isChecked(3)) {
//         amountPayableChange();
//     }
    
// }
// quantityDisplayBoxs[3].onchange = function () {
//     quantityDisplayBoxsChangeLimit(3);
//     totalPriceChange(3);
//     if (isChecked(4)) {
//         amountPayableChange();
//     }
    
// }

