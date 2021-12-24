var num;
var book;
var bk;
for (num = 1; num < 20; num++) {
    console.log(num);
}
while (num < 20) {
    console.log(num);
    num++;
}
do {
    console.log(num);
    num++;
} while (num < 20);
for (bk in book) {
    console.log(bk + ": " +
        book[bk]);
}
