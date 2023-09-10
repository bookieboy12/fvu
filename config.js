const CONFIG = {
    // Site name.
    siteName: "Baddie Lovers", 
    // DCMA RULES, FEEL FREE TO CHANGE THEM AND ADD YOUR EMAIL
    dcma: {
        email: 'message on twitter',
        subject: 'DMCA Notice',
        message: 'This website provides access to various resources, such as text, images, and multimedia content, which are publicly available on the internet. We do not store or host any of these files on our servers. Our service is designed solely to facilitate access to publicly accessible materials from external sources. <br><br>We make every effort to ensure that the content provided through our website complies with copyright laws and other applicable regulations. However, we cannot guarantee the accuracy, legality, or appropriateness of the content displayed, as it is derived from external sources beyond our control. <br><br>Users of this website are responsible for their own actions and must adhere to all relevant copyright and usage rights when accessing and using the resources provided. Any reliance on the information and materials found on this website is at the user\'s own risk. <br><br>We do not endorse, support, or claim ownership of the content displayed through this website. If you believe that any content infringes upon your copyright or violates any applicable laws or regulations, please contact us promptly, and we will take appropriate action to address the issue. <br><br>By using this website, you acknowledge and accept that all content is sourced from publicly available resources, and we bear no responsibility for the content\'s origin or legality. <br><b>Please contact us if you have any concerns or questions about this disclaimer or the content displayed on our website.</b><br><br> This website, <b>{siteName}</b>, respects the intellectual property rights of others. <br>If you believe that your copyrighted work has been infringed upon on our website, please contact us immediately. All posts are free available and are not uploaded by us, no content is hosted on our servers.<br>Please send your DMCA takedown notice to: <b>{email}</b>',
    },
    // API
    api: {
        // API url.
        url: 'https://api.porn-leaks.club/v1/links',
        // API key. Buy premium api key from telegram: https://t.me/Thenasty1337 or discord: nasty_1337
        key: '457ca1e9-c1b7-43b6-957b-53957d810012',
    },
    // THIS AD WILL SHOW ON RANDOMLY IN THE LEAKS 
    ads: [{
        imageUrl: 'assets/images/adverts/ad1.png',
        url: 'https://www.google.com',
        title: 'Ad Title 1',
        description: 'This is a short description for ad 1.'
    },
    {
        imageUrl: 'assets/images/adverts/ad2.png',
        url: 'https://www.google.com',
        title: 'Ad Title 2',
        description: 'This is a short description for ad 2.'
    },
    {
        imageUrl: 'assets/images/adverts/ad3.png',
        url: 'https://www.google.com',
        title: 'Ad Title 3',
        description: 'This is a short description for ad 3.'
    },
    {
        imageUrl: 'assets/images/adverts/ad4.png',
        url: 'https://www.google.com',
        title: 'Ad Title 4',
        description: 'This is a short description for ad 4.'
    }
],
// THIS AD WILL SHOW ON TOP RIGHT OF THE PAGE
    bannerAds: [
        {
            image: '/assets/images/adverts/banner1.png',
            link: 'https://link-to-advertiser1.com'
        },
        {
            image: '/assets/images/adverts/banner2.png',
            link: 'https://link-to-advertiser2.com'
        },
    ],


};

export default CONFIG;
