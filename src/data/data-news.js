const news = [
  {
    id: '1',
    type: 'Industry News',
    img: new URL('/img/news-page-img/news-1.jpg', import.meta.url).href,
    title: 'How to Build Climate Change-Resilient Infrastructure',
    post: [
      {
        type: 'preview-text',
        text: 'Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod.',
      },
      {
        type: 'main-text',
        text: 'At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et sagittis, vitae diam cras dignissim. Varius adipiscing eget diam nisi. Orci, consectetur vulputate metus ornare pharetra, neque, fermentum. Vel nec rhoncus, non nunc, neque in massa. Feugiat leo nam nisl lacinia amet, odio. Mi varius viverra risus vel.',
      },
      {
        type: 'main-text',
        text: 'Amet,morbi sed pharetra, elit eget mi potenti. Condimentum orci interdum feugiat lectus libero duis. Nisl massa, elementum varius sit. Nunc felis, porttitor aliquam urna, accumsan et sed. Aliquet non sed duis diam vehicula rhoncus. In dictum nullam tincidunt semper pellentesque purus morbi sed. Ut aliquet velit pharetra, nisi nunc, non.',
      },
      {
        type: 'quote-text',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in tot euismod vulputate etiam eros. Vel accumsan at elit neque, ipsum.',
      },
      {
        type: 'main-text',
        text: 'Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id ut erat mattis. Vitae mus blandit in neque amet non fringilla blandit:',
      },
      {
        type: 'post-list',
        text: [
          'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
          'Vulputate placerat amet pulvinar lorem nisl.',
          'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
          'Etiam duis lobortis in fames ultrices commodo nibh.',
        ],
      },
      {
        type: 'main-text',
        text: 'Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id nec sed leo. Nisi in ornare lectus eget. Urna, risus, consectetur volutpat lorem purus. Velit aliquet nibh vitae maecenas. Consectetur neque ut aliquam eros, purus enim dignissim aenean vitae. Ultrices fames augue mattis tortor est justo, pharetra nibh risus. Facilisi at porttitor volutpat natoque proin amet, nulla. Vivamus ut lobortis sagittis curabitur tellus convallis eget netus vitae.',
      },
    ],
    previewText:
      'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis. Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis.',
    date: 'June 24, 2020',
    comments: [
      {
        id: 1,
        nickname: 'Peter Griffin',
        date: 'June 24, 2020',
        comment:
          'Dolor sit amet consectetur adipisicing elit. Error enim quasi corporis quis iste, aliquid ex consequatur nihil debitis dicta quisquam quos voluptatem ratione nobis sit amet consectetur, adipisicing elit. Perspiciatis at aperiam reprehenderit cum dicta. Nesciunt ducimus nam minima placeat voluptatum, dolores mollitia iusto culpa id tempora aut debitis necessitatibus. Maxime?',
      },
      {
        id: 2,
        nickname: 'Nick Dameo',
        date: 'June 30, 2020',
        comment:
          'Ipsum dolor, sit amet consectetur adipisicing elit. Illo nostrum cupiditate libero, porro minus cum tempore et consectetur corporis tenetur rem quo minima quae, repellendus expedita adipisci deleniti, qui atque. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores neque modi cumque.',
      },
      {
        id: 3,
        nickname: 'Dmitry Stock',
        date: 'August 5, 2020',
        comment:
          'Amlet consectetur adipisicing elit. Hic unde atque, error earum saepe magni, alias est numquam exercitationem dolorem, ea voluptas soluta! Aperiam sunt architecto fuga dolorum temporibus natus. Omnis totam nesciunt, molestiae fugit placeat, perferendis illo expedita iusto deserunt similique.',
      },
      {
        id: 4,
        nickname: 'Pumell Diin',
        date: 'Februar 10, 2021',
        comment:
          'Sitquam autem ratione rerum quos nostrum. Quia expedita doloribus fuga dolores labore sapiente, accusamus repellat quas facere eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quibusdam nemo quasi ratione eaque, labore voluptatibus deserunt consectetur. Ratione similique cum voluptate eius cumque inventore consectetur porro quidem officia delectus!',
      },
    ],
  },
  {
    id: '2',
    type: 'Innovation',
    img: new URL('/img/news-page-img/news-2.jpg', import.meta.url).href,
    title: 'How Construction Can Help Itself',
    post: [
      {
        type: 'preview-text',
        text: 'Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio.Interdum  aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis esthendrerit ac   euismod.',
      },
      {
        type: 'quote-text',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in tot euismod vulputate etiam eros. Vel accumsan at elit neque, ipsum.',
      },
      {
        type: 'main-text',
        text: 'Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id nec sed leo. Nisi in ornare lectus eget. Urna, risus, consectetur volutpat lorem purus. Velit aliquet nibh vitae maecenas. Consectetur neque ut aliquam eros, purus enim dignissim aenean vitae. Ultrices fames augue mattis tortor est justo, pharetra nibh risus. Facilisi at porttitor volutpat natoque proin amet, nulla. Vivamus ut lobortis sagittis curabitur tellus convallis eget netus vitae.',
      },
      {
        type: 'main-text',
        text: 'Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id ut erat mattis. Vitae mus blandit in neque amet non fringilla blandit:',
      },
      {
        type: 'post-list',
        text: [
          'Etiam duis lobortis in fames ultrices commodo nibh.',
          'Vulputate placerat amet pulvinar lorem nisl.',
          'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
          'Lorem in morbi pretium aliquam adipiscing donec tempus.',
          'Vulputate placerat amet pulvinar lorem nisl.',
        ],
      },
      {
        type: 'main-text',
        text: 'Amet,morbi sed pharetra, elit eget mi potenti. Condimentum orci interdum feugiat lectus libero duis. Nisl massa, elementum varius sit. Nunc felis, porttitor aliquam urna, accumsan et sed. Aliquet non sed duis diam vehicula rhoncus. In dictum nullam tincidunt semper pellentesque purus morbi sed. Ut aliquet velit pharetra, nisi nunc, non.',
      },
    ],
    previewText:
      'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
    date: 'June 12, 2020',
    comments: [],
  },
  {
    id: '3',
    type: 'Expert Tips',
    img: new URL('/img/news-page-img/news-3.jpg', import.meta.url).href,
    title: 'The Difference Between a Digger and an Excavator',
    post: [
      {
        type: 'preview-text',
        text: 'Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod.',
      },
      {
        type: 'main-text',
        text: 'Amet,morbi sed pharetra, elit eget mi potenti. Condimentum orci interdum feugiat lectus libero duis. Nisl massa, elementum varius sit. Nunc felis, porttitor aliquam urna, accumsan et sed.',
      },
      {
        type: 'quote-text',
        text: 'Amet,morbi sed pharetra, elit eget mi potenti. Condimentum orci interdum feugiat lectus libero duis. Nisl massa, elementum varius sit. Nunc felis, porttitor aliquam urna, accumsan et sed. Aliquet non sed duis diam vehicula rhoncus. In dictum nullam tincidunt semper pellentesque purus morbi sed. Ut aliquet velit pharetra, nisi nunc, non.',
      },
      {
        type: 'main-text',
        text: 'Condimentum orci interdum feugiat lectus libero duis. Nisl massa, elementum varius sit. Nunc felis, porttitor aliquam urna, accumsan et sed.',
      },
      {
        type: 'quote-text',
        text: 'Amet,morbi sed pharetra, elit eget mi potenti. Condimentum orci interdum feugiat lectus libero duis. Nisl massa, elementum varius sit. Nunc felis, porttitor aliquam urna, accumsan et sed. Aliquet non sed duis diam vehicula rhoncus. In dictum nullam tincidunt semper pellentesque purus morbi sed. Ut aliquet velit pharetra, nisi nunc, non.',
      },
      {
        type: 'main-text',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eum ab alias commodi repellendus, voluptate adipisci et soluta ex voluptatem earum veritatis consectetur possimus dolorum sed ut. Eaque, quo vero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum iusto esse, provident quis perspiciatis fugiat sit illo nemo distinctio optio quibusdam autem aliquam corporis voluptatem excepturi! Voluptas maxime asperiores adipisci.',
      },
    ],
    previewText:
      'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
    date: 'May 16, 2020',
    comments: [],
  },
  {
    id: '4',
    type: 'Company News',
    img: new URL('/img/news-page-img/news-4.jpg', import.meta.url).href,
    title: 'Building Construction Hand Tools',
    post: [
      {
        type: 'preview-text',
        text: 'Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod.',
      },
      {
        type: 'post-list',
        text: [
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut quod deleniti nulla molestiae',
          'Ut quod deleniti nulla molestiae, temporibus aliquid illum iusto nobis vitae voluptatum qui sed',
          'Provident, voluptates eveniet illum necessitatibus, esse iste, maiores adipisci obcaecati culpa non similique',
        ],
      },
      {
        type: 'main-text',
        text: 'Atque voluptas pariatur totam beatae, illum possimus! Maxime, numquam laboriosam? Quae voluptate placeat eligendi similique dolore ab consectetur? Mattis pellentesque dui odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod.',
      },
      {
        type: 'main-text',
        text: 'Molestiae, temporibus aliquid illum iusto nobis vitae voluptatum qui sed pariatur quidem quos, nam atque illo quisquam excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, voluptates eveniet illum necessitatibus, esse iste, maiores adipisci obcaecati culpa non similique quidem facere sapiente corrupti. Dolores voluptate voluptates aliquam ea! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt saepe excepturi aperiam...',
      },
      {
        type: 'post-list',
        text: [
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut quod deleniti nulla molestiae',
        ],
      },
    ],
    previewText:
      'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
    date: 'February 25, 2020',
    comments: [
      {
        id: 1,
        nickname: 'Anna Maley',
        date: 'February 28, 2020',
        comment:
          'Tempora et quas. Veritatis libero est nam modi distinctio dolores, tenetur molestiae soluta cum, nisi ducimus inventore veniam dignissimos? Perspiciatis, quis earum nemo pariatur beatae excepturi harum deleniti ducimus suscipit assumenda. Incidunt amet pariatur, nesciunt iure totam aliquam! Commodi explicabo perferendis sed iusto ipsum laborum architecto repellendus voluptatum vero!',
      },
    ],
  },
  {
    id: '5',
    type: 'Marketing',
    img: new URL('/img/news-page-img/news-5.jpg', import.meta.url).href,
    title: 'Top 10 Construction Trends',
    post: [
      {
        type: 'preview-text',
        text: 'Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod.',
      },
      {
        type: 'main-text',
        text: 'Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut quod deleniti nulla molestiae, temporibus aliquid illum iusto nobis vitae voluptatum qui sed pariatur quidem quos, nam atque illo quisquam excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, voluptates eveniet illum necessitatibus.',
      },
      {
        type: 'main-text',
        text: 'Esse iste, maiores adipisci obcaecati culpa non similique quidem facere sapiente corrupti. Dolores voluptate voluptates aliquam ea! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt saepe excepturi aperiam Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, consectetur repellat? Neque consequuntur sequi, laboriosam inventore sit velit at aperiam dolore omnis ipsa, accusantium ex mollitia eos quaerat illum. Hic?Lorem ipsum dolor sit amet consectetur, adipisicing elit. At beatae accusamus odit ab maiores. Praesentium et cupiditate id maxime in optio laboriosam consequuntur saepe deleniti, esse voluptatem corrupti pariatur laudantium!',
      },
      {
        type: 'quote-text',
        text: 'Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut quod deleniti nulla molestiae, temporibus aliquid illum iusto nobis vitae voluptatum qui sed pariatur quidem quos, nam atque illo quisquam excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, voluptates eveniet illum necessitatibus.',
      },
      {
        type: 'main-text',
        text: 'Opellentesque dui odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut quod deleniti nulla molestiae',
      },
      {
        type: 'quote-text',
        text: 'Quisquam excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, voluptates eveniet illum necessitatibus.',
      },
    ],
    previewText:
      'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
    date: 'January 14, 2020',
    comments: [
      {
        id: 1,
        nickname: 'Kick Nuelo',
        date: 'January 15, 2020',
        comment:
          'sit amet consectetur adipisicing elit. Cumque recusandae iusto voluptates sapiente. Perspiciatis, alias quibusdam nesciunt minima quia magnam fugit sed? Ab quae doloremque qui reiciendis. Deleniti, itaque eveniet? Assumenda aspernatur...',
      },
      {
        id: 2,
        nickname: 'Sandy Cheacks',
        date: 'January 20, 2020',
        comment:
          'Amet consectetur adipisicing elit. Quasi suscipit perferendis ipsa officiis quam accusamus, sunt vero hic. Voluptate aut maxime debitis ex sint sit pariatur. Excepturi est dolore obcaecati. Aperiam pariatur, earum fugiat.',
      },
    ],
  },
  {
    id: '6',
    type: 'Company News',
    img: new URL('/img/news-page-img/news-6.jpg', import.meta.url).href,
    title: 'Types of Flooring Materials',
    post: [
      {
        type: 'preview-text',
        text: 'Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod.',
      },
      {
        type: 'main-text',
        text: 'Bulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod.',
      },
      {
        type: 'post-list',
        text: [
          'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus.',
          'Nincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis',
          'Goore aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus.',
          'Pincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis',
        ],
      },
      {
        type: 'preview-text',
        text: 'Bulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod.',
      },
      {
        type: 'main-text',
        text: 'Kulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod.Bulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod.',
      },
      {
        type: 'quote-text',
        text: 'Dolor sit amet, consectetur adipisicing elit. Nesciunt rerum dignissimos a sequi eum odio rem fugiat, accusantium doloremque tempore, in culpa, eveniet cupiditate. Porro delectus molestias numquam dolor vero?Lorem ipsum dolor sit amet consectetur adipisicing elit. At recusandae quos exercitationem minus eius nostrum veniam temporibus necessitatibus distinctio repellendus? Quia ipsum facilis aperiam quam, quaerat suscipit omnis enim reprehenderit.',
      },
      {
        type: 'main-text',
        text: 'Sit amet consectetur adipisicing elit. Consectetur vero iure dolorum eos cumque, eum aliquam placeat qui facere nemo aperiam architecto veniam? Non totam doloribus placeat quod pariatur molestias. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae saepe voluptate ipsa amet neque laboriosam atque, non, ad voluptates rem officiis ea ipsum, labore maxime sint earum? Aut, animi dolore? Lorem ipsum dolor sit, amet consectetur adipisicing elit. At dolore perferendis corrupti nulla corporis ut iusto quia, mollitia repellendus voluptas facere, reprehenderit dolorem? Maxime repudiandae nihil eligendi id placeat quos.',
      },
      {
        type: 'main-text',
        text: 'Labore maxime sint earum? Aut, animi dolore? Lorem ipsum dolor sit, amet consectetur adipisicing elit. At dolore perferendis corrupti nulla corporis ut iusto quia, mollitia repellendus voluptas facere, reprehenderit dolorem? Maxime repudiandae nihil eligendi id placeat quos.',
      },
    ],
    previewText:
      'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
    date: 'December 1, 2019',
    comments: [],
  },
];

export default news;
