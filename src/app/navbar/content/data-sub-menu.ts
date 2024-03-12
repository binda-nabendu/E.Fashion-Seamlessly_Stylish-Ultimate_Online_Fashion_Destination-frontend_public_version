export const navigation_data = {
  woman: {
    id: 'woman',
    name: 'Woman',
    featured: [
      {
        name: 'new Arrivals',
        href: '/',
        imageSrc: 'https://lllll',
        imageAlt: 'info'
      },
      {
        name: 'Basic Tees',
        href: '/',
        imageSrc: 'https://lllll',
        imageAlt: 'Close up of Basic Tee fall bundle with off-white,...'
      }
    ],
    sections: [
      {
        id: 'clothing',
        name:'Clothing',
        items:[
          {name: 'Tops', id:"top", href:`{woman/clothing/tops}`},
          {name: 'Dresses', id:"women_dress", href:`#`},
          {name: 'Pants', id:"women_jeans"},

        ]
      },
      {
        id: 'accessories',
        name: 'Accessories',
        items:[
          {name: 'Watches', id: 'watch'},
          {name: 'Wallets', id: 'wallet'},
          {name: 'Bags', id: 'bag'},
          {name: 'Sunglasses', id: 'sunglasse'}
        ]
      }
    ]
  },
  man: {
    id: 'man',
    name: 'Man',
    featured: [
      {
        name: 'new Arrivals',
        href: '/',
        imageSrc: 'https://lllll',
        imageAlt: 'info'
      },
      {
        name: 'Basic Tees',
        href: '/',
        imageSrc: 'https://lllll',
        imageAlt: 'Close up of Basic Tee fall bundle with off-white,...'
      }
    ],
    sections: [
      {
        id: 'clothing',
        name:'Clothing',
        items:[
          {name: 'Tops', id:"top", href:`{woman/clothing/tops}`},
          {name: 'Dresses', id:"women_dress", href:`#`},
          {name: 'Pants', id:"women_jeans"},

        ]
      }
    ]
  }
}
