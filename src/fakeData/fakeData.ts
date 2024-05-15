import { OrderType, ProductType} from "./typeData";



export const emptyProduct = {
    id: 0,
    title:"",
    cover: "/new.png",
    price: 0,
    pictures: ["/new.png","/new.png"],
    slug: "",
    capacity: 0,
    width: 0,
    height: 0,
    material: "",
    color: "",
    mugType: "", 
    desc: "",
    detail: "", 
    views:0,
    isFeatured :false,
    quantity:1
}


export const singleProduct: ProductType = {
    id:1,
    title:"The sparkling ice cream",
    slug:"the-sparkling-ice-cream",
    cover:'/m1-d.jpg',
    price: 150,
    isFeatured: false,
    pictures : [
        '/m1-a.jpg','/m1-b.jpg', '/m1-c.jpg','/m1-d.jpg'
    ],
    capacity: 320,
    width: 8,
    height: 9.3,
    material: "ceramic",
    color: 'yellow, orange',
    mugType: "tea", 
    detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lorem libero, feugiat quis scelerisque sit amet, ultrices eu purus. Morbi lacinia neque libero. Vestibulum fringilla metus metus, et vestibulum eros sagittis ac. Aliquam bibendum quam arcu, non convallis ligula iaculis ac. In vitae ipsum et diam commodo tincidunt. Vivamus tincidunt ullamcorper justo. Praesent interdum tempus ipsum at porta. Cras quis auctor erat.",
    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lorem libero, feugiat quis scelerisque sit amet, ultrices eu purus. Morbi lacinia neque libero.",
    quantity: 1,
}


export const featuredProducts: ProductType[] =[ {
    id:2,
    title:"Yellow dots",
    slug:"yellow-dots",
    cover:'/m2-a.jpg',
    price: 134,
    isFeatured: true,
    pictures : [
        '/m2-a.jpg','/m2-b.jpg','/m2-c.jpg','/m2-d.jpg'
    ],
    capacity: 320,
    width: 8,
    height: 9.3,
    material: "ceramic",
    color: 'yellow, orange',
    mugType: "tea", 
    detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lorem libero, feugiat quis scelerisque sit amet, ultrices eu purus. Morbi lacinia neque libero. Vestibulum fringilla metus metus, et vestibulum eros sagittis ac. Aliquam bibendum quam arcu, non convallis ligula iaculis ac. In vitae ipsum et diam commodo tincidunt. Vivamus tincidunt ullamcorper justo. Praesent interdum tempus ipsum at porta. Cras quis auctor erat.",
    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lorem libero, feugiat quis scelerisque sit amet, ultrices eu purus. Morbi lacinia neque libero.",
    quantity: 1,
},{
    id:3,
    title:"The frozen pineapple",
    slug:"the-frozen-pineapple",
    cover:'/m3-a.jpg',
    price: 140,
    isFeatured: true,
    pictures : [
        '/m3-a.jpg','/m3-b.jpg','/m3-c.jpg'
    ],
    capacity: 320,
    width: 8,
    height: 9.3,
    material: "ceramic",
    color: 'yellow, orange',
    mugType: "tea", 
    detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lorem libero, feugiat quis scelerisque sit amet, ultrices eu purus. Morbi lacinia neque libero. Vestibulum fringilla metus metus, et vestibulum eros sagittis ac. Aliquam bibendum quam arcu, non convallis ligula iaculis ac. In vitae ipsum et diam commodo tincidunt. Vivamus tincidunt ullamcorper justo. Praesent interdum tempus ipsum at porta. Cras quis auctor erat.",
    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lorem libero, feugiat quis scelerisque sit amet, ultrices eu purus. Morbi lacinia neque libero.",
    quantity: 1,
}]



export const allProducts: ProductType[] = [
    {
        id:1,
        title:"The sparkling ice cream",
        slug:"the-sparkling-ice-cream",
        cover:'/m1-d.jpg',
        price: 150,
        isFeatured: false,
        pictures : [
            '/m1-a.jpg','/m1-b.jpg', '/m1-c.jpg','/m1-d.jpg'
        ],
        capacity: 320,
        width: 8,
        height: 9.3,
        material: "ceramic",
        color: 'yellow, orange',
        mugType: "tea", 
        detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lorem libero, feugiat quis scelerisque sit amet, ultrices eu purus. Morbi lacinia neque libero. Vestibulum fringilla metus metus, et vestibulum eros sagittis ac. Aliquam bibendum quam arcu, non convallis ligula iaculis ac. In vitae ipsum et diam commodo tincidunt. Vivamus tincidunt ullamcorper justo. Praesent interdum tempus ipsum at porta. Cras quis auctor erat.",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lorem libero, feugiat quis scelerisque sit amet, ultrices eu purus. Morbi lacinia neque libero.",
        quantity: 1,
    },
    {
        id:2,
        title:"Yellow dots",
        slug:"yellow-dots",
        cover:'/m2-a.jpg',
        price: 134,
        isFeatured: false,
        pictures : [
            '/m2-a.jpg','/m2-b.jpg','/m2-c.jpg','/m2-d.jpg'
        ],
        capacity: 320,
        width: 8,
        height: 9.3,
        material: "ceramic",
        color: 'yellow, orange',
        mugType: "tea", 
        detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lorem libero, feugiat quis scelerisque sit amet, ultrices eu purus. Morbi lacinia neque libero. Vestibulum fringilla metus metus, et vestibulum eros sagittis ac. Aliquam bibendum quam arcu, non convallis ligula iaculis ac. In vitae ipsum et diam commodo tincidunt. Vivamus tincidunt ullamcorper justo. Praesent interdum tempus ipsum at porta. Cras quis auctor erat.",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lorem libero, feugiat quis scelerisque sit amet, ultrices eu purus. Morbi lacinia neque libero.",
        quantity: 1,
    },
    {
        id:3,
        title:"The frozen pineapple",
        slug:"the-frozen-pineapple",
        cover:'/m3-a.jpg',
        price: 140,
        isFeatured: false,
        pictures : [
            '/m3-a.jpg','/m3-b.jpg','/m3-c.jpg'
        ],
        capacity: 320,
        width: 8,
        height: 9.3,
        material: "ceramic",
        color: 'yellow, orange',
        mugType: "tea", 
        detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lorem libero, feugiat quis scelerisque sit amet, ultrices eu purus. Morbi lacinia neque libero. Vestibulum fringilla metus metus, et vestibulum eros sagittis ac. Aliquam bibendum quam arcu, non convallis ligula iaculis ac. In vitae ipsum et diam commodo tincidunt. Vivamus tincidunt ullamcorper justo. Praesent interdum tempus ipsum at porta. Cras quis auctor erat.",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lorem libero, feugiat quis scelerisque sit amet, ultrices eu purus. Morbi lacinia neque libero.",
        quantity: 1,
    },
    {
        id:4,
        title:"Green Flower",
        slug:"green-flower",
        cover:'/m4-a.jpg',
        price: 127,
        isFeatured: false,
        pictures : [
            '/m4-a.jpg','/m4-b.jpg','/m4-c.jpg'
        ],
        capacity: 320,
        width: 8,
        height: 9.3,
        material: "ceramic",
        color: 'yellow, orange',
        mugType: "tea", 
        detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lorem libero, feugiat quis scelerisque sit amet, ultrices eu purus. Morbi lacinia neque libero. Vestibulum fringilla metus metus, et vestibulum eros sagittis ac. Aliquam bibendum quam arcu, non convallis ligula iaculis ac. In vitae ipsum et diam commodo tincidunt. Vivamus tincidunt ullamcorper justo. Praesent interdum tempus ipsum at porta. Cras quis auctor erat.",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lorem libero, feugiat quis scelerisque sit amet, ultrices eu purus. Morbi lacinia neque libero.",
        quantity: 1,
    },
    {
        id:5,
        title:"The flower fireworks",
        slug:"the-flower-fireworks",
        cover:'/m5-d.jpg',
        price: 150,
        isFeatured: false,
        pictures : [
            '/m5-a.jpg','/m5-b.jpg','/m5-c.jpg','/m5-d.jpg'
        ],
        capacity: 320,
        width: 8,
        height: 9.3,
        material: "ceramic",
        color: 'yellow, orange',
        mugType: "tea", 
        detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lorem libero, feugiat quis scelerisque sit amet, ultrices eu purus. Morbi lacinia neque libero. Vestibulum fringilla metus metus, et vestibulum eros sagittis ac. Aliquam bibendum quam arcu, non convallis ligula iaculis ac. In vitae ipsum et diam commodo tincidunt. Vivamus tincidunt ullamcorper justo. Praesent interdum tempus ipsum at porta. Cras quis auctor erat.",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lorem libero, feugiat quis scelerisque sit amet, ultrices eu purus. Morbi lacinia neque libero.",
        quantity: 1,
    },
    {
        id:6,
        title:"Rainbow",
        slug:"rainbow",
        cover:'/m6-a.jpg',
        price: 138,
        isFeatured: false,
        pictures : [
            '/m6-a.jpg','/m6-b.jpg','/m6-c.jpg','/m6-d.jpg',
        ],
        capacity: 320,
        width: 8,
        height: 9.3,
        material: "ceramic",
        color: 'yellow, orange',
        mugType: "tea", 
        detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lorem libero, feugiat quis scelerisque sit amet, ultrices eu purus. Morbi lacinia neque libero. Vestibulum fringilla metus metus, et vestibulum eros sagittis ac. Aliquam bibendum quam arcu, non convallis ligula iaculis ac. In vitae ipsum et diam commodo tincidunt. Vivamus tincidunt ullamcorper justo. Praesent interdum tempus ipsum at porta. Cras quis auctor erat.",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lorem libero, feugiat quis scelerisque sit amet, ultrices eu purus. Morbi lacinia neque libero.",
        quantity: 1,
    },
    {
        id:7,
        title:"The blue waves",
        slug:"the-blue-waves",
        cover:'/m7-a.jpg',
        price: 134,
        isFeatured: false,
        pictures : [
            '/m7-a.jpg','/m7-b.jpg','/m7-c.jpg','/m7-d.jpg',
        ],
        capacity: 320,
        width: 8,
        height: 9.3,
        material: "ceramic",
        color: 'yellow, orange',
        mugType: "tea", 
        detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lorem libero, feugiat quis scelerisque sit amet, ultrices eu purus. Morbi lacinia neque libero. Vestibulum fringilla metus metus, et vestibulum eros sagittis ac. Aliquam bibendum quam arcu, non convallis ligula iaculis ac. In vitae ipsum et diam commodo tincidunt. Vivamus tincidunt ullamcorper justo. Praesent interdum tempus ipsum at porta. Cras quis auctor erat.",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lorem libero, feugiat quis scelerisque sit amet, ultrices eu purus. Morbi lacinia neque libero.",
        quantity: 1,
    },
    {
        id:8,
        title:"The red waves",
        slug:"the-red-waves",
        cover:'/m8-a.jpg',
        price: 134,
        isFeatured: false,
        pictures : [
            '/m8-a.jpg','/m8-b.jpg','/m8-c.jpg'
        ],
        capacity: 320,
        width: 8,
        height: 9.3,
        material: "ceramic",
        color: 'yellow, orange',
        mugType: "tea", 
        detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lorem libero, feugiat quis scelerisque sit amet, ultrices eu purus. Morbi lacinia neque libero. Vestibulum fringilla metus metus, et vestibulum eros sagittis ac. Aliquam bibendum quam arcu, non convallis ligula iaculis ac. In vitae ipsum et diam commodo tincidunt. Vivamus tincidunt ullamcorper justo. Praesent interdum tempus ipsum at porta. Cras quis auctor erat.",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lorem libero, feugiat quis scelerisque sit amet, ultrices eu purus. Morbi lacinia neque libero.",
        quantity: 1,
    },
    {
        id:9,
        title:"Christmas Eve",
        slug:"christmas-eve",
        cover:'/m9-a.jpg',
        price: 150,
        isFeatured: false,
        pictures : [
            '/m9-a.jpg','/m9-b.jpg','/m9-c.jpg',
        ],
        capacity: 320,
        width: 8,
        height: 9.3,
        material: "ceramic",
        color: 'yellow, orange',
        mugType: "tea", 
        detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lorem libero, feugiat quis scelerisque sit amet, ultrices eu purus. Morbi lacinia neque libero. Vestibulum fringilla metus metus, et vestibulum eros sagittis ac. Aliquam bibendum quam arcu, non convallis ligula iaculis ac. In vitae ipsum et diam commodo tincidunt. Vivamus tincidunt ullamcorper justo. Praesent interdum tempus ipsum at porta. Cras quis auctor erat.",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lorem libero, feugiat quis scelerisque sit amet, ultrices eu purus. Morbi lacinia neque libero.",
        quantity: 1,
    },
    {
        id:10,
        title:"The monochrome letter",
        slug:"the-monochrome-letter",
        cover:'/m10-a.jpg',
        price: 134,
        isFeatured: false,
        pictures : [
            '/m10-a.jpg','/m10-b.jpg',
        ],
        capacity: 320,
        width: 8,
        height: 9.3,
        material: "ceramic",
        color: 'yellow, orange',
        mugType: "tea", 
        detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lorem libero, feugiat quis scelerisque sit amet, ultrices eu purus. Morbi lacinia neque libero. Vestibulum fringilla metus metus, et vestibulum eros sagittis ac. Aliquam bibendum quam arcu, non convallis ligula iaculis ac. In vitae ipsum et diam commodo tincidunt. Vivamus tincidunt ullamcorper justo. Praesent interdum tempus ipsum at porta. Cras quis auctor erat.",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lorem libero, feugiat quis scelerisque sit amet, ultrices eu purus. Morbi lacinia neque libero.",
        quantity: 1,
    },
    {
        id:11,
        title:"The colored letter",
        slug:"the-colored-letter",
        cover:'/m11-a.jpg',
        price: 134,
        isFeatured: false,
        pictures : [
            '/m11-a.jpg','/m11-b.jpg',
        ],
        capacity: 320,
        width: 8,
        height: 9.3,
        material: "ceramic",
        color: 'yellow, orange',
        mugType: "tea", 
        detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lorem libero, feugiat quis scelerisque sit amet, ultrices eu purus. Morbi lacinia neque libero. Vestibulum fringilla metus metus, et vestibulum eros sagittis ac. Aliquam bibendum quam arcu, non convallis ligula iaculis ac. In vitae ipsum et diam commodo tincidunt. Vivamus tincidunt ullamcorper justo. Praesent interdum tempus ipsum at porta. Cras quis auctor erat.",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lorem libero, feugiat quis scelerisque sit amet, ultrices eu purus. Morbi lacinia neque libero.",
        quantity: 1,
    },
]

export const ordersList: OrderType[] = [
    {
        id: 125480608,
        createdAt: "16 January 2024",
        customer: "John Doe",
        location: "Paris",
        price: "126.60",
        status: "Arrived"
    },
    {
        id: 125480208,
        createdAt: "14 Febuary  2024",
        customer: "John Doe",
        location: "Paris",
        price: "240.30",
        status: "Arrived"
    },
    {
        id: 125480643,
        createdAt: "10 March 2024",
        customer: "John Doe",
        location: "Paris",
        price: "103",
        status: "On Deliver"
    },
    {
        id: 125480297,
        createdAt: "26 April 2024",
        customer: "John Doe",
        location: "Paris",
        price: "126.60",
        status: "Arrived"
    },
    {
        id: 125480854,
        createdAt: "24 May 2024",
        customer: "John Doe",
        location: "Paris",
        price: "126.60",
        status: "On Deliver"
    },
    {
        id: 125480032,
        createdAt: "12 June 2024",
        customer: "John Doe",
        location: "Paris",
        price: "126.60",
        status: "On Deliver"
    },
    {
        id: 125480975,
        createdAt: "14 July 2024",
        customer: "John Doe",
        location: "Paris",
        price: "126.60",
        status: "Arrived"
    },
    {
        id: 125480730,
        createdAt: "15 August 2024",
        customer: "John Doe",
        location: "Paris",
        price: "290",
        status: "Arrived"
    },
    {
        id: 125480218,
        createdAt: "1 September 2024",
        customer: "John Doe",
        location: "Paris",
        price: "107.50",
        status: "On Payment"
    },
    {
        id: 125480208,
        createdAt: "30 October 2024",
        customer: "John Doe",
        location: "Paris",
        price: "450.60",
        status: "Arrived"
    },
    {
        id: 125480651,
        createdAt: "3 November 2024",
        customer: "John Doe",
        location: "Paris",
        price: "115.25",
        status: "On Payment"
    },
]



