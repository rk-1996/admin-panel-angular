import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id: 'applications',
        title: 'Applications',
        translate: 'NAV.APPLICATIONS',
        type: 'group',
        children: [
            {
                id: 'sample',
                title: 'Sample',
                translate: 'NAV.SAMPLE.TITLE',
                type: 'item',
                icon: 'email',
                url: '/sample',
                badge: {
                    title: '25',
                    translate: 'NAV.SAMPLE.BADGE',
                    bg: '#F44336',
                    fg: '#FFFFFF'
                }
            },
            // {
            //     id: 'user',
            //     title: 'User',
            //     translate: 'NAV.USER.TITLE',
            //     type: 'item',
            //     icon: 'user',
            //     url: '/user',
            //     children: [
            //         {
            //             id: 'products',
            //             title: 'Products',
            //             type: 'item',
            //             url: '/apps/e-commerce/products',
            //             exactMatch: true
            //         },
            //         {
            //             id: 'productDetail',
            //             title: 'Product Detail',
            //             type: 'item',
            //             url: '/apps/e-commerce/products/1/printed-dress',
            //             // exactMatch: true
            //         },
            //         {
            //             id: 'orders',
            //             title: 'Orders',
            //             type: 'item',
            //             url: '/apps/e-commerce/orders',
            //             exactMatch: true
            //         },
            //         {
            //             id: 'orderDetail',
            //             title: 'Order Detail',
            //             type: 'item',
            //             url: '/apps/e-commerce/orders/1',
            //             exactMatch: true
            //         }
            //     ]
            // }
            {
                id: 'e-commerce',
                title: 'E-Commerce',
                translate: 'NAV.ECOMMERCE',
                type: 'collapsable',
                icon: 'shopping_cart',
                children: [
                    {
                        id: 'products',
                        title: 'Products',
                        type: 'item',
                        url: '/apps/e-commerce/products',
                        exactMatch: true
                    },
                    {
                        id: 'productDetail',
                        title: 'Product Detail',
                        type: 'item',
                        url: '/apps/e-commerce/products/1/printed-dress',
                        // exactMatch: true
                    },
                    {
                        id: 'orders',
                        title: 'Orders',
                        type: 'item',
                        url: '/apps/e-commerce/orders',
                        exactMatch: true
                    },
                    {
                        id: 'orderDetail',
                        title: 'Order Detail',
                        type: 'item',
                        url: '/apps/e-commerce/orders/1',
                        exactMatch: true
                    }
                ]
            },
            {
                id: 'user',
                title: 'User',
                translate: 'NAV.USER.TITLE',
                type: 'collapsable',
                icon: 'person',
                children: [
                    {
                        id: 'user',
                        title: 'User',
                        type: 'item',
                        url: '/user/listing',
                        exactMatch: true
                    },
                    {
                        id: 'userAdd',
                        title: 'User Add',
                        type: 'item',
                        url: '/user/add-user',
                        // exactMatch: true
                    },
                ]
            },
        ]
    }
];
