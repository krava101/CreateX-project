const news = [
    {
        id: 1,
        type: 'Industry News',
        img: new URL('/img/news-page-img/news-1.jpg', import.meta.url).href,
        title: 'How to Build Climate Change-Resilient Infrastructure',
        post: [
            {
                type: 'preview-text',
                text: 'Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod.'
            },
            {
                type: 'main-text',
                text: 'At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et sagittis, vitae diam cras dignissim. Varius adipiscing eget diam nisi. Orci, consectetur vulputate metus ornare pharetra, neque, fermentum. Vel nec rhoncus, non nunc, neque in massa. Feugiat leo nam nisl lacinia amet, odio. Mi varius viverra risus vel.'
            },
            {
                type: 'main-text',
                text: 'Amet,morbi sed pharetra, elit eget mi potenti. Condimentum orci interdum feugiat lectus libero duis. Nisl massa, elementum varius sit. Nunc felis, porttitor aliquam urna, accumsan et sed. Aliquet non sed duis diam vehicula rhoncus. In dictum nullam tincidunt semper pellentesque purus morbi sed. Ut aliquet velit pharetra, nisi nunc, non.'
            },
            {
                type: 'quote-text',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in tot euismod vulputate etiam eros. Vel accumsan at elit neque, ipsum.'
            },
            {
                type: 'main-text',
                text: 'Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id ut erat mattis. Vitae mus blandit in neque amet non fringilla blandit:'
            },
            {
                type: 'post-list',
                text: [
                    'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
                    'Vulputate placerat amet pulvinar lorem nisl.',
                    'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
                    'Etiam duis lobortis in fames ultrices commodo nibh.'
                ]
            },
            {
                type: 'main-text',
                text: 'Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id nec sed leo. Nisi in ornare lectus eget. Urna, risus, consectetur volutpat lorem purus. Velit aliquet nibh vitae maecenas. Consectetur neque ut aliquam eros, purus enim dignissim aenean vitae. Ultrices fames augue mattis tortor est justo, pharetra nibh risus. Facilisi at porttitor volutpat natoque proin amet, nulla. Vivamus ut lobortis sagittis curabitur tellus convallis eget netus vitae.'
            }
        ],
        previewText: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
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
        previewText: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
        date: 'June 12, 2020', 
        comments: []
    },
    {
        id: 3,
        type: 'Expert Tips',
        img: new URL('/img/news-page-img/news-3.jpg', import.meta.url).href,
        title: 'The Difference Between a Digger and an Excavator',
        previewText: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
        date: 'May 16, 2020', 
        comments: []
    },
    {
        id: 4,
        type: 'Company News',
        img: new URL('/img/news-page-img/news-4.jpg', import.meta.url).href,
        title: 'Building Construction Hand Tools',
        previewText: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
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
        previewText: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
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
        previewText: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
        date: 'December 1, 2019', 
        comments: []
    },
    {
        id: 7,
        type: 'Company News',
        img: new URL('/img/news-page-img/news-6.jpg', import.meta.url).href,
        title: 'Types of Flooring Materials',
        previewText: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
        date: 'December 1, 2019', 
        comments: []
    },
    {
        id: 8,
        type: 'Industry News',
        img: new URL('/img/news-page-img/news-1.jpg', import.meta.url).href,
        title: 'How to Build Climate Change-Resilient Infrastructure',
        previewText: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
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
        previewText: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
        date: 'June 12, 2020', 
        comments: []
    },
    {
        id: 10,
        type: 'Expert Tips',
        img: new URL('/img/news-page-img/news-3.jpg', import.meta.url).href,
        title: 'The Difference Between a Digger and an Excavator',
        previewText: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
        date: 'May 16, 2020', 
        comments: []
    },
    {
        id: 11,
        type: 'Company News',
        img: new URL('/img/news-page-img/news-4.jpg', import.meta.url).href,
        title: 'Building Construction Hand Tools',
        previewText: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
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
        previewText: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
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
        previewText: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
        date: 'December 1, 2019', 
        comments: []
    },
    {
        id: 14,
        type: 'Industry News',
        img: new URL('/img/news-page-img/news-1.jpg', import.meta.url).href,
        title: 'How to Build Climate Change-Resilient Infrastructure',
        previewText: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
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
        previewText: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
        date: 'June 12, 2020', 
        comments: []
    },
    {
        id: 16,
        type: 'Expert Tips',
        img: new URL('/img/news-page-img/news-3.jpg', import.meta.url).href,
        title: 'The Difference Between a Digger and an Excavator',
        previewText: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
        date: 'May 16, 2020', 
        comments: []
    },
    {
        id: 17,
        type: 'Company News',
        img: new URL('/img/news-page-img/news-4.jpg', import.meta.url).href,
        title: 'Building Construction Hand Tools',
        previewText: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
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
        previewText: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
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
        previewText: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
        date: 'December 1, 2019', 
        comments: []
    },
    {
        id: 20,
        type: 'Industry News',
        img: new URL('/img/news-page-img/news-1.jpg', import.meta.url).href,
        title: 'How to Build Climate Change-Resilient Infrastructure',
        previewText: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
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
        previewText: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
        date: 'June 12, 2020', 
        comments: []
    },
    {
        id: 22,
        type: 'Expert Tips',
        img: new URL('/img/news-page-img/news-3.jpg', import.meta.url).href,
        title: 'The Difference Between a Digger and an Excavator',
        previewText: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
        date: 'May 16, 2020', 
        comments: []
    },
    {
        id: 23,
        type: 'Company News',
        img: new URL('/img/news-page-img/news-4.jpg', import.meta.url).href,
        title: 'Building Construction Hand Tools',
        previewText: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
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
        previewText: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
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
        previewText: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
        date: 'December 1, 2019', 
        comments: []
    },
    {
        id: 26,
        type: 'Industry News',
        img: new URL('/img/news-page-img/news-1.jpg', import.meta.url).href,
        title: 'How to Build Climate Change-Resilient Infrastructure',
        previewText: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
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
        previewText: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
        date: 'June 12, 2020', 
        comments: []
    },
]

export default news;