export const rightSideCartConfig = (quantity: number, totalPrice: number, taxes: number) => [
    {
        label: 'Articles:',
        quantity:quantity,
    },
    {
        label: 'Taxes (20%):',
        quantity:'$' + taxes,
    },
    {
        label: 'Total:',
        quantity:'$' + totalPrice,
    },
]