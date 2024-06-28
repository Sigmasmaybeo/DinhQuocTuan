

document.addEventListener("DOMContentLoaded", (event) => {
    let yourCart = JSON.parse(localStorage.getItem('yourCart')) || [];


document.getElementById("Add").addEventListener ("click",function() {
    const Item = {
        Food: 'DoNat',
        Howexpensive: 13000,
        Time: '34 phút'};


  

yourCart.push(Item);
localStorage.setItem('yourCart', JSON.stringify(yourCart));
alert('Add compelete!');
window.location.href = "Giohang.html";
document.write(yourCart)



});
})
