document.getElementById("Add").addEventListener ("click",function() {
    const Item = {
        Food: 'DoNat',
        Howexpensive: 13000,
        Time: '34 phút'};

let yourCart = JSON.parse(localStorage.getItem('yourCart')) || [];

yourCart.push(Item);
localStorage.setItem('yourCart', JSON.stringify(yourCart));
alert('Add compelete!');
});