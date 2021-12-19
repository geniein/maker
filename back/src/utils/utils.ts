const randomRange = (n1:number, n2:number) => Math.floor(Math.random() * (n2 -n1 +1)) + n1;

export const randomNumber = (range:number) => {
    var value = "";
    for(var i=0; i<range; i++){
        value += randomRange(0,9);
    }
    return value;
}


// randomNum.random = function(n1, n2) {
//     return parseInt(Math.random() * (n2 -n1 +1)) + n1;
// };
// //인증번호를 뽑을 난수 입력 n 5이면 5자리
// randomNum.authNo= function(n) {
//     var value = "";
//     for(var i=0; i<n; i++){
//         value += randomNum.random(0,9);
//     }
//     return value;
// };