//Random Billy Mays meme
//Script based off of 8ball randomizer
exports.run = (client, message, args) => {
    var sayings = [ 'https://i.ibb.co/7KcPCV7/billymays1.jpg',
                    'https://i.ibb.co/KzHPdR1/billymays2.png',
                    'https://i.ibb.co/9bVryJJ/billymays3.png',
                    'https://i.ibb.co/nDbvZ76/billymays4.jpg',
                    'https://i.ibb.co/bb4hzvX/billymays5.gif',
                    'https://i.ibb.co/T097w6Z/billymays6.gif',
                    'https://i.ibb.co/kcPBK9F/billymays7.gif',
                    'https://i.ibb.co/DbFpzHB/billymays8.jpg',
                    'https://i.ibb.co/7k2Hz9B/billymays9.png',
                    'https://i.ibb.co/Y8LwP2p/billymays10.jpg',
                    'https://i.ibb.co/2sgWRLX/billymays11.jpg',
                    'https://i.ibb.co/6rCfmGc/billymays12.jpg',
                    'https://i.ibb.co/Cm6txP3/billymays13.jpg',
                    'https://i.ibb.co/T08xg8k/billymays14.png',
                    'https://i.ibb.co/1s0t15W/billymays15.jpg',
                    'https://i.ibb.co/ZcbmL5c/billymays16.jpg',
                    'https://i.ibb.co/jT4Gbs4/billymays17.jpg'
        ];

        var result = Math.floor((Math.random() * sayings.length) + 0);
        message.channel.send(sayings[result]);
}
