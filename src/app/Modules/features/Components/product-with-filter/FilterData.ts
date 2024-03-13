export const color = [
  "white",
  "Black",
  "Red",
  "Marun",
  "Being",
  "Green",
  "Yellow",
]
export const cloth_filter = [
  {
    id: "color",
    name:"Color",
    option: [
      { value: "white", label:"White"},
      { value: "black", label: "Black"},
      { value: "green", label: "Green"}
    ]
  },
  {
    id: "size",
    name: "Size",
    option: [
      {value: "S", label: "S"},
      {value: "M", label: "M"},
      {value: "L", label: "L"},
    ]
  }
  ]
export const price_filter = [
  {
    id: "price",
    name: "Price",
    option: [
      {value: "0-1000", label: "0 - 1000 taka"},
      {value: "1000-9000", label: "1000 - 9000 taka"},
      {value: "10000-100000", label: "10000 - 100000 taka"},
    ]
  },
  {
    id: "discount",
    name: "Discount",
    option: [
      {value: "30", label: "30% And Above"},
      {value: "40", label: "40% And Above"},
      {value: "50", label: "50% And Above"},
      {value: "70", label: "70% And Above"},
    ]
  },
  {
    id: "stock",
    name: "Availability",
    option:[
      {value: "in_stock", label: "In Stock"},
      {value: "out_of_stock", label: "Out of Stock"}
    ]
  }
];
export const sortOptions = [
  {name:"Price Low to High", query: "price_low", current: false},
  {name:"Price High to Low", query: "price_high", current: false},
];
