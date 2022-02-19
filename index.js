function plateGen() {
    let areaCodes = ["MB","KR","KP","KK","GO","CE","LJ","MS","NM","PO","SG"];
    let letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let numbers = ["1","2","3","4","5","6","7","8","9"];
    let areaCode = Math.floor(Math.random() * 11);
    let ltr1 = Math.floor(Math.random() * 26);
    let ltr2 = Math.floor(Math.random() * 26);
    let num1 = Math.floor(Math.random() * 9);
    let num2 = Math.floor(Math.random() * 9);
    let num3 = Math.floor(Math.random() * 9);

    document.getElementById("output").innerHTML = "OUTPUT: " + areaCodes[areaCode] + " " + letters[ltr1] + letters[ltr2] + "-" + numbers[num1] + numbers[num2] + numbers[num3];
}
