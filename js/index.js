// JavaScript Document
var app = new Vue({
    el: '#app',
    data: {
        shops: [{
                title: '金字塔啟蒙篇',
                subtitle: '內含黑色套裝一組',
                content: '此組合適合學齡前兒童遊玩，幫助兒童認色、了解不同形狀積木之間的搭配，有助於啟發智慧。',
                price: 199,
                amount: 0,
                amountShow: 1,
                img: 'img/shop/220414-1.jpg',
                bgimg: 'img/shop/220414-8.jpg',
            },
            {
                title: '金字塔競賽篇',
                subtitle: '內含黑色及銀色套裝一組',
                content: '此組合適合國小兒童遊玩，與啟蒙篇相較之下難度較強，是家庭日腦力激盪的好選擇。',
                price: 249,
                amount: 0,
                amountShow: 1,
                img: 'img/shop/220414-5.jpg',
                bgimg: 'img/shop/220414-7.jpg',
            },
            {
                title: '金字塔進階篇',
                subtitle: '內含銀色套裝一組',
                content: '此組合適合中年級學童遊玩，難度稍為加強，課間休息時可與同學一同思考。',
                price: 299,
                amount: 0,
                amountShow: 1,
                img: 'img/shop/220414-3.jpg',
                bgimg: 'img/shop/LINE_ALBUM_模具專題網頁修改照片_220414_1.jpg',
            },
            {
                title: '創意排列精熟篇',
                subtitle: '內含2D排列套裝一組',
                content: '此組合適合高年級學童遊玩，難度加強至偏難，全破解並拍照寄送至官方信箱即可獲得精美小禮物呦!',
                price: 349,
                amount: 0,
                amountShow: 1,
                img: 'img/shop/30.jpg',
                bgimg: 'img/shop/220414-10.jpg',
            },
            {
                title: '進階大師篇',
                subtitle: '內含黑色及銀色套裝金字塔一組及2D排列套裝一組',
                content: '此款為開發者特別設計給「大師」級別的使用者遊玩，內有多種不同材質及玩法，歡迎挑戰極限!',
                price: 499,
                amount: 0,
                amountShow: 1,
                img: 'img/shop/32.jpg',
                bgimg: 'img/shop/LINE_ALBUM_模具專題網頁修改照片_220414_2.jpg',
            },
        ],
        choices: [{
                number: '卡號',
                title: '到期日',
                code: '安全碼',
                checked: true
            },
            {
                number: '匯款帳號',
                title: '',
                code: '013(國泰世華) 1234 5678 0910'
            },
        ],
        shopIndex: 0,
        optionIndex: 0,
        choiceIndex: 0
    },
    methods: {
        minus(shop) {
            shop.amountShow--
                shop.amountShow = (shop.amountShow < 1) ? 1 : shop.amountShow
        },
        plus(shop) {
            shop.amountShow++
                shop.amountShow = (shop.amountShow > 10) ? 10 : shop.amountShow
        },
        addToCart(shop) {
            shop.amount += shop.amountShow
        },
        remove(shop) {
            shop.amount = 0
        },
        signin() {
            if (this.account == '' && this.password == '') {
                return false
            } else {
                alert('帳號或密碼輸入錯誤。')
            }

        },
        signup() {
            if (this.account1 == '' && this.password1 == '' && this.name == '' && this.mail == '') {
                return false
            } else {
                alert('您好，會員驗證信已寄送到您的電子郵件，請依信件內容進行驗證。')
            }
        },
        shopcart(shopInCart, choices) {
            if (shopInCart == 0) return alert('購物車尚無商品');
            if (choices[this.choiceIndex].checked) {
                var yes = confirm('正在透過SSL安全機制付款...請勿離開視窗');
                if (yes) {
                    alert('付款成功!我們將會開始撿貨，感謝您的訂購。');
                    shopInCart.forEach(e => e.amount = 0)
                    return false
                } else {
                    alert('付款失敗。')
                    return false
                }
            } else {
                var atmnum = prompt('請輸入您的匯款帳戶後五碼。');
                if (atmnum != null) {
                    alert('您的匯款帳戶後五碼為' + atmnum + '，付款成功!我們將會開始撿貨，感謝您的訂購。');
                    shopInCart.forEach(e => e.amount = 0)
                    return false
                } else {
                    return false
                }
            }
        },
    },
    computed: {
        shopInCart() {
            return this.shops
                .filter(p => p.amount)
                .map(p => {
                    p.sum = p.price * p.amount
                    p.num = p.amount
                    return p
                })
        },
        total() {
            return this.shopInCart
                .reduce((sum, p) => (p.sum + sum), 0)
        },
        num() {
            return this.shopInCart
                .reduce((num, p) => (p.num + num), 0)
        },
        shop() {
            return this.shopss[this.shopsIndex]
        },
        choice() {
            return this.choices[this.choiceIndex]
        }
    }
})