export const rightSideCartConfig = (quantity: number) => [
    {
        label: 'Articles:',
        quantity:quantity,
    },
    {
        label: 'Taxes (20%):',
        quantity:'$' + 20,
    },
    {
        label: 'Total:',
        quantity:'$' + 200,
    },
]