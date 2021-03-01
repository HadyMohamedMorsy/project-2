let menu = document.querySelector('#menu');
let header = document.querySelector('.header');
let overlay = document.querySelector('.overlay');
let headerhamburger = document.querySelector('.header-hamburger');
let hasFed = document.querySelectorAll('.has-fade');
let featureitem = document.querySelector('.feature__grid');
let gallarygrid = document.querySelector('.gallary-grid');
let gridsystem;
let online = [{
    icon : './images/icon-online.svg',
    title : 'Online Banking',
    decription: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'
    },
    {
    icon : './images/icon-budgeting.svg',
    title : ' Simple Budgeting',
    decription: 'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.'
    },
    {
    icon : './images/icon-onboarding.svg',
    title : '  Fast Onboarding',
    decription: 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.'
    },
    {
    icon : './images/icon-api.svg',
    title : ' Open API',
    decription: '  Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier..'
    }
];

let onligallary = [{
    icon : './images/image-currency.jpg',
    title : 'By Claire Robinson',
    titlehousr : 'Receive money in any currency with no fees',
    decription: 'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …'
    },
    {
    icon : './images/image-restaurant.jpg',
    title : ' By Wilson Hutton',
    titlehousr : 'Treat yourself without worrying about money',
    decription: '  Our simple budgeting feature allows you to separate out your spending and set  realistic limits each month. That means you …'
    },
    {
    icon : './images/image-plane.jpg',
    title : 'By Wilson Hutton',
    titlehousr : 'Take your Easybank card wherever you go',
    decription: '  We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …'
    },
    {
    icon : './images/image-confetti.jpg',
    title : ' By Claire Robinson',
    titlehousr : 'Our invite-only Beta accounts are now live!',
    decription: '   After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...'
    }
]

menu.addEventListener('click',()=>{
if(header.classList.contains('open')){
    header.classList.remove('open');
    hasFed.forEach((element)=>{
        element.classList.remove('fade-in');
        element.classList.add('fade-out');
    });

}else{
    header.classList.add('open');
    hasFed.forEach((element)=>{
        element.classList.remove('fade-out');
        element.classList.add('fade-in');
    });
}
});

(gridsystem = function(online =[], gallary0nline = []){
    let onlineDom = online.map((item)=>{
        return `
                <div class="feature-item">
                    <div class="feature-icon">
                        <img src=${item.icon} alt="" > 
                    </div>
                    <div class="feature-title">
                        ${item.title}
                    </div>
                    <div class="feature-description">
                        ${item.decription}
                    </div>
                </div>
        `;
    });

            let gallaryDom = gallary0nline.map((item)=>{
                return`
                <div class="gallary-item">
                    <img src=${item.icon} alt="" >
                        <div class="all-white">
                        <span style="display: block;">${item.title}</span>
                        <h3>${item.titlehousr}</h3>
                        <p>${item.decription}</p>
                        </div>
                </div>
                `;

            });

    featureitem.innerHTML = onlineDom.join("");
    gallarygrid.innerHTML = gallaryDom.join("");

})(online,onligallary);