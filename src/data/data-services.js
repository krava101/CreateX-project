export const services = [
  {
    id: 0,
    type: 'Construction',
    status: 'construction',
    previewImg: new URL(
      '/img/services-page-img/construction.jpg',
      import.meta.url
    ).href,
    offers: ['Construction business centers', 'Construction stores & malls'],
  },
  {
    id: 1,
    type: 'Project Development',
    status: 'development',
    previewImg: new URL(
      '/img/services-page-img/project-development.jpg',
      import.meta.url
    ).href,
    offers: [
      'Project development of private houses',
      'Project development of cottages',
    ],
  },
  {
    id: 2,
    type: 'Interior Design',
    status: 'design',
    previewImg: new URL(
      '/img/services-page-img/interior-design.jpg',
      import.meta.url
    ).href,
    offers: [
      'Interior design of apartments',
      'Interior design of private houses',
    ],
  },
  {
    id: 3,
    type: 'Repairs',
    status: 'repairs',
    previewImg: new URL('/img/services-page-img/repairs.jpg', import.meta.url)
      .href,
    offers: ['Repairs of apartments', 'Repairs of private houses'],
  },
];
