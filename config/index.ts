export const NAV_ITEMS = [
    {
        label: 'Categories',
        value: 'categories' as const,
        categories: [

            {
                name: 'chairs',
                href: '/chairs',
                icon: '🪑'
            },
            {
                name: 'couches',
                href: '/couches',
                icon: '🪑'
            },
            {
                name: 'tables',
                href: '/tables',
                icon: '🪑'
            },
        ]

    },
    {
        label: 'Hot Items',
        value: 'hot_items' as const,
        categories:[
            {
                name:'item1',
                href:'item1Href',
                icon:'item1.png'
            },
            {
                name:'item2',
                href:'item2Href',
                icon:'item2.png'
            },
            {
                name:'item3',
                href:'item3Href',
                icon:'item3.png'
            },
        ]
    },
]