import { ProductType} from "./typeData";






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
    },
]





