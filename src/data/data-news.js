const news = [
    {
        id: 1,
        type: 'Industry News',
        img: new URL('/img/news-page-img/news-1.jpg', import.meta.url).href,
        title: 'How to Build Climate Change-Resilient Infrastructure',
        text: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
        date: 'June 24, 2020', 
        comments: [
            {
                id: 1,
                nickname: '',
                date: '',
                comment: ''
            }, 
            {
                id: 2,
                nickname: '',
                date: '',
                comment: ''
            },
            {
                id: 3,
                nickname: '',
                date: '',
                comment: ''
            },
            {
                id: 4,
                nickname: '',
                date: '',
                comment: ''
            },
        ]
    },
    {
        id: 2,
        type: 'Innovation',
        img: new URL('/img/news-page-img/news-2.jpg', import.meta.url).href,
        title: 'How Construction Can Help Itself',
        text: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
        date: 'June 12, 2020', 
        comments: []
    },
    {
        id: 3,
        type: 'Expert Tips',
        img: new URL('/img/news-page-img/news-3.jpg', import.meta.url).href,
        title: 'The Difference Between a Digger and an Excavator',
        text: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
        date: 'May 16, 2020', 
        comments: []
    },
    {
        id: 4,
        type: 'Company News',
        img: new URL('/img/news-page-img/news-4.jpg', import.meta.url).href,
        title: 'Building Construction Hand Tools',
        text: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
        date: 'February 25, 2020', 
        comments: [
            {
                id: 1,
                nickname: '',
                date: '',
                comment: ''
            }, 
        ]
    },
    {
        id: 5,
        type: 'Marketing',
        img: new URL('/img/news-page-img/news-5.jpg', import.meta.url).href,
        title: 'Top 10 Construction Trends',
        text: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
        date: 'January 14, 2020', 
        comments: [
            {
                id: 1,
                nickname: '',
                date: '',
                comment: ''
            }, 
            {
                id: 2,
                nickname: '',
                date: '',
                comment: ''
            },
        ]
    },
    {
        id: 6,
        type: 'Company News',
        img: new URL('/img/news-page-img/news-6.jpg', import.meta.url).href,
        title: 'Types of Flooring Materials',
        text: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
        date: 'December 1, 2019', 
        comments: []
    },
    {
        id: 7,
        type: 'Company News',
        img: new URL('/img/news-page-img/news-6.jpg', import.meta.url).href,
        title: 'Types of Flooring Materials',
        text: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
        date: 'December 1, 2019', 
        comments: []
    },
    {
        id: 8,
        type: 'Industry News',
        img: new URL('/img/news-page-img/news-1.jpg', import.meta.url).href,
        title: 'How to Build Climate Change-Resilient Infrastructure',
        text: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
        date: 'June 24, 2020', 
        comments: [
            {
                id: 1,
                nickname: '',
                date: '',
                comment: ''
            }, 
            {
                id: 2,
                nickname: '',
                date: '',
                comment: ''
            },
            {
                id: 3,
                nickname: '',
                date: '',
                comment: ''
            },
            {
                id: 4,
                nickname: '',
                date: '',
                comment: ''
            },
        ]
    },
    {
        id: 9,
        type: 'Innovation',
        img: new URL('/img/news-page-img/news-2.jpg', import.meta.url).href,
        title: 'How Construction Can Help Itself',
        text: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
        date: 'June 12, 2020', 
        comments: []
    },
    {
        id: 10,
        type: 'Expert Tips',
        img: new URL('/img/news-page-img/news-3.jpg', import.meta.url).href,
        title: 'The Difference Between a Digger and an Excavator',
        text: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
        date: 'May 16, 2020', 
        comments: []
    },
    {
        id: 11,
        type: 'Company News',
        img: new URL('/img/news-page-img/news-4.jpg', import.meta.url).href,
        title: 'Building Construction Hand Tools',
        text: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
        date: 'February 25, 2020', 
        comments: [
            {
                id: 1,
                nickname: '',
                date: '',
                comment: ''
            }, 
        ]
    },
    {
        id: 12,
        type: 'Marketing',
        img: new URL('/img/news-page-img/news-5.jpg', import.meta.url).href,
        title: 'Top 10 Construction Trends',
        text: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
        date: 'January 14, 2020', 
        comments: [
            {
                id: 1,
                nickname: '',
                date: '',
                comment: ''
            }, 
            {
                id: 2,
                nickname: '',
                date: '',
                comment: ''
            },
        ]
    },
    {
        id: 13,
        type: 'Company News',
        img: new URL('/img/news-page-img/news-6.jpg', import.meta.url).href,
        title: 'Types of Flooring Materials',
        text: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
        date: 'December 1, 2019', 
        comments: []
    },
    {
        id: 14,
        type: 'Industry News',
        img: new URL('/img/news-page-img/news-1.jpg', import.meta.url).href,
        title: 'How to Build Climate Change-Resilient Infrastructure',
        text: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
        date: 'June 24, 2020', 
        comments: [
            {
                id: 1,
                nickname: '',
                date: '',
                comment: ''
            }, 
            {
                id: 2,
                nickname: '',
                date: '',
                comment: ''
            },
            {
                id: 3,
                nickname: '',
                date: '',
                comment: ''
            },
            {
                id: 4,
                nickname: '',
                date: '',
                comment: ''
            },
        ]
    },
    {
        id: 15,
        type: 'Innovation',
        img: new URL('/img/news-page-img/news-2.jpg', import.meta.url).href,
        title: 'How Construction Can Help Itself',
        text: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
        date: 'June 12, 2020', 
        comments: []
    },
    {
        id: 16,
        type: 'Expert Tips',
        img: new URL('/img/news-page-img/news-3.jpg', import.meta.url).href,
        title: 'The Difference Between a Digger and an Excavator',
        text: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
        date: 'May 16, 2020', 
        comments: []
    },
    {
        id: 17,
        type: 'Company News',
        img: new URL('/img/news-page-img/news-4.jpg', import.meta.url).href,
        title: 'Building Construction Hand Tools',
        text: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
        date: 'February 25, 2020', 
        comments: [
            {
                id: 1,
                nickname: '',
                date: '',
                comment: ''
            }, 
        ]
    },
    {
        id: 18,
        type: 'Marketing',
        img: new URL('/img/news-page-img/news-5.jpg', import.meta.url).href,
        title: 'Top 10 Construction Trends',
        text: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
        date: 'January 14, 2020', 
        comments: [
            {
                id: 1,
                nickname: '',
                date: '',
                comment: ''
            }, 
            {
                id: 2,
                nickname: '',
                date: '',
                comment: ''
            },
        ]
    },
    {
        id: 19,
        type: 'Company News',
        img: new URL('/img/news-page-img/news-6.jpg', import.meta.url).href,
        title: 'Types of Flooring Materials',
        text: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
        date: 'December 1, 2019', 
        comments: []
    },
    {
        id: 20,
        type: 'Industry News',
        img: new URL('/img/news-page-img/news-1.jpg', import.meta.url).href,
        title: 'How to Build Climate Change-Resilient Infrastructure',
        text: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
        date: 'June 24, 2020', 
        comments: [
            {
                id: 1,
                nickname: '',
                date: '',
                comment: ''
            }, 
            {
                id: 2,
                nickname: '',
                date: '',
                comment: ''
            },
            {
                id: 3,
                nickname: '',
                date: '',
                comment: ''
            },
            {
                id: 4,
                nickname: '',
                date: '',
                comment: ''
            },
        ]
    },
    {
        id: 21,
        type: 'Innovation',
        img: new URL('/img/news-page-img/news-2.jpg', import.meta.url).href,
        title: 'How Construction Can Help Itself',
        text: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
        date: 'June 12, 2020', 
        comments: []
    },
    {
        id: 22,
        type: 'Expert Tips',
        img: new URL('/img/news-page-img/news-3.jpg', import.meta.url).href,
        title: 'The Difference Between a Digger and an Excavator',
        text: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
        date: 'May 16, 2020', 
        comments: []
    },
    {
        id: 23,
        type: 'Company News',
        img: new URL('/img/news-page-img/news-4.jpg', import.meta.url).href,
        title: 'Building Construction Hand Tools',
        text: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
        date: 'February 25, 2020', 
        comments: [
            {
                id: 1,
                nickname: '',
                date: '',
                comment: ''
            }, 
        ]
    },
    {
        id: 24,
        type: 'Marketing',
        img: new URL('/img/news-page-img/news-5.jpg', import.meta.url).href,
        title: 'Top 10 Construction Trends',
        text: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
        date: 'January 14, 2020', 
        comments: [
            {
                id: 1,
                nickname: '',
                date: '',
                comment: ''
            }, 
            {
                id: 2,
                nickname: '',
                date: '',
                comment: ''
            },
        ]
    },
    {
        id: 25,
        type: 'Company News',
        img: new URL('/img/news-page-img/news-6.jpg', import.meta.url).href,
        title: 'Types of Flooring Materials',
        text: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
        date: 'December 1, 2019', 
        comments: []
    },
    {
        id: 26,
        type: 'Industry News',
        img: new URL('/img/news-page-img/news-1.jpg', import.meta.url).href,
        title: 'How to Build Climate Change-Resilient Infrastructure',
        text: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
        date: 'June 24, 2020', 
        comments: [
            {
                id: 1,
                nickname: '',
                date: '',
                comment: ''
            }, 
            {
                id: 2,
                nickname: '',
                date: '',
                comment: ''
            },
            {
                id: 3,
                nickname: '',
                date: '',
                comment: ''
            },
            {
                id: 4,
                nickname: '',
                date: '',
                comment: ''
            },
        ]
    },
    {
        id: 27,
        type: 'Innovation',
        img: new URL('/img/news-page-img/news-2.jpg', import.meta.url).href,
        title: 'How Construction Can Help Itself',
        text: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
        date: 'June 12, 2020', 
        comments: []
    },
]

export default news;