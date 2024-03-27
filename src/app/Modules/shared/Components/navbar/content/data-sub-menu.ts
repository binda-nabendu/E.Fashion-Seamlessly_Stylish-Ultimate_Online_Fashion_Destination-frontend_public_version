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
        name:'Woman\'s Clothing',
        items:[
          {name: 'Tops', id:'women_dress', href:`{woman/clothing/tops}`},
          {name: 'Dresses', id:"Dress", href:`#`},

        ]
      },
      {
        id: 'accessories',
        name: 'Accessories',
        items:[
          {name: 'Wallets(Coming Soon)', id: 'wallet'},
          {name: 'Bags(Coming Soon)', id: 'bag'}
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
        name:'Man\'s Clothing',
        items:[
          {name: 'Kurta', id:"mens_kurta", href:`{man/clothing/panjabi}`},
          {name: 'Shirt', id:"shirt", href:`#`},
          {name: 'Jeans', id:"men_jeans"},

        ]
      }
    ]
  },
  style: {
    id: 'style',
    name: 'Style',
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
        id: 'style',
        name:'Style\'s',
        items:[
          {name: 'Occasion Special', id:"occasion_special", href:`#`},
          {name: 'Party Special', id:"party-special", href:`#`}

        ]
      }
    ]
  }
}
