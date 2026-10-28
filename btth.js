
const orderSizes = "MSLXTMM";
const priceS = 30000;
const priceM = 36000;
const priceL = 40000;
const priceT = 8000;
const isGoldMember = true;

let totalBill = 0;
let validCount = 0;
let acceptedOrders = "";

for (let i = 0; i < orderSizes.length; i++) {
    const currentItem = orderSizes[i];

    if (currentItem === "X") {
        continue;
    }

    if (validCount >= 4) {
        break;
    }

    if (currentItem === "S") {
        totalBill += priceS;
    } else if (currentItem === "M") {
        totalBill += priceM;
    } else if (currentItem === "L") {
        totalBill += priceL;
    } else if (currentItem === "T") {
        totalBill += priceT;
    } else {
        continue;
    }

    validCount++;
    acceptedOrders += currentItem;
}

const discount = isGoldMember ? totalBill * 0.1 : 0;
const finalBill = totalBill - discount;

console.log("===== HOA DON HIGHLANDS COFFEE =====");
console.log("Chuỗi gọi món:", orderSizes);
console.log("Món được nhận:", acceptedOrders);
console.log("Số món hợp lệ:", validCount);
console.log("Tiền trước giảm:", totalBill, "VNĐ");
console.log("Giảm giá:", discount, "VNĐ");
console.log("Tổng thanh toán:", finalBill, "VNĐ");
// Loi 1: Gap X phai dung continue de bo qua mon huy
// Loi 2: Du 4 mon hop le phai dung break de ngat vong lap
// Loi 3: Chi giam 10% mot lan tren tong tien hoa don