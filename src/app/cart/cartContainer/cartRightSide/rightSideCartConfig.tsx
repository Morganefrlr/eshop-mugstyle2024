export const rightSideCartConfig = (quantity: number, totalPrice: string, taxes: string) => [
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