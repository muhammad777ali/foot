    const products = {
    plainBurger: {
        name: 'GAMBURGER',
        price: 10000,
        amount: 0,
        kcall: 200,
        get summ() {
            return this.price * this.amount
        },
        get Kcall() {
            return this.kcall * this.amount
        }
    },
    freshBurger: {
        name: 'GAMBURGER FRESH',
        price: 20500,
        amount: 0,
        kcall: 250,
        get summ() {
            return this.price * this.amount
        },
        get Kcall() {
            return this.kcall * this.amount
        }
    },
    freshCombo: {
        name: 'FRESH COMBO',
        price: 31900,
        amount: 0,
        kcall: 450,
        get summ() {
            return this.price * this.amount
        },
        get Kcall() {
            return this.kcall * this.amount
        }
    },
}

const btn = document.querySelectorAll('.main__product-btn'),
    receipt = document.querySelector('.receipt'),
    addCart = document.querySelector('.addCart'),
    receipt__window = document.querySelector('.receipt__window'),
    receipt__window_out = document.querySelector('.receipt__window-out'),
    receipt__window_btn = document.querySelector('.receipt__window-btn');

    for (let i = 0; i < btn.length; i++) {
        const el = btn[i];
        el.addEventListener('click', function(){
            plusOrMinus(this)
        })
    }
    function plusOrMinus(btn) {
        let elemenData = btn.getAttribute('data-symbol'),
        parent = btn.closest('.main__product'),
        parentId = parent.getAttribute('id'),
        num = parent.querySelector('.main__product-num'),
        price = parent.querySelector('.main__product-price span'),
        kcall = parent.querySelector('.main__product-kcall span');
        if (elemenData == '+') {
            products[parentId].amount < 20 ? products[parentId].amount++ : ''
        }else{
            products[parentId].amount > 0 ? products[parentId].amount-- : ''
        }

        num.innerHTML = products[parentId].amount
        price.innerHTML = products[parentId].summ
        kcall.innerHTML = products[parentId].Kcall
    }
    let arrayProducts = []
    let totalName = ''
    let totalPrice = 0
    let totalKcall = 0
addCart.addEventListener('click', function(){
    arrayProducts = []
    for (const key in products) {
        if (products[key].amount > 0) {
            arrayProducts.push(products[key])
        }
    }
    for (let i = 0; i < arrayProducts.length; i++) {
        const el = arrayProducts[i];
        totalPrice += el.summ
        totalKcall += el.Kcall
        totalName +=`${el.name}\n`
    }
    receipt__window_out.innerHTML = `Sizning buyurtmangiz:\n\n${totalName}\nUmumiy Summa:\n${totalPrice} so'm\nUmumiy Kaloriya:\n${totalKcall   }`
    setTimeout(() => {
        receipt.style.display = 'flex'
    }, 30);
    setTimeout(() => {
        receipt.style.opacity = '1'
        receipt__window.style.top = '30%'
    }, 130);
})
    receipt__window_btn.addEventListener('click',() => location.reload())
        
   
const productInfo = document.querySelector('.main__product-info');
var viewBlock = document.querySelector('.view');
for (let i = 0; i < productInfo.length; i++) {
    const element = productInfo[i];
    element.addEventListener('click', function(){

    })
}
productInfo.addEventListener('click', function() {
    viewBlock.classList.add('active');
    var imgSrc = productInfo.getAttribute('src');
    viewBlock.setAttribute('src', imgSrc);
});
//var closeButton = document.querySelector('X'); 
//closeButton.addEventListener('click', function() {
//    viewBlock.style.display = 'none';
//});
view__close = document.querySelector('.view__close')
view__close.addEventListener('click',() => location.reload())