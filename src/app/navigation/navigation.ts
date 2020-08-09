import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id: 'applications',
        title: 'Applications',
        translate: 'NAV.APPLICATIONS',
        type: 'group',
        children: [
            // {
            //     id: 'sample',
            //     title: 'Sample',
            //     translate: 'NAV.SAMPLE.TITLE',
            //     type: 'item',
            //     icon: 'email',
            //     url: '/sample',
            //     badge: {
            //         title: '25',
            //         translate: 'NAV.SAMPLE.BADGE',
            //         bg: '#F44336',
            //         fg: '#FFFFFF'
            //     }
            // },
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
            // {
            //     id: 'roles',
            //     title: 'Roles',
            //     translate: 'NAV.USER.TITLE',
            //     type: 'collapsable',
            //     icon: 'person',
            //     children: [
            //         {
            //             id: 'customers',
            //             title: 'Customers',
            //             type: 'item',
            //             url: '/apps/roles/customers',
            //             exactMatch: true
            //         },
            //         // {
            //         //     id: 'userAdd',
            //         //     title: 'User Add',
            //         //     type: 'item',
            //         //     url: '/apps/roles/user/add-user',
            //         //     // exactMatch: true
            //         // },
            //     ]
            // },
            {
                id: 'customer',
                title: 'Customer',
                translate: 'NAV.CUSTOMER.TITLE',
                type: 'collapsable',
                icon: 'person',
                children: [
                    {
                        id: 'customers',
                        title: 'View Customers',
                        type: 'item',
                        url: '/customer',
                        exactMatch: true
                    },
                    {
                        id: 'add',
                        title: 'Add Customer',
                        type: 'item',
                        url: '/customer/add',
                        exactMatch: true
                    },
                ]
            },
            {
                id: 'admin',
                title: 'Admin',
                translate: 'NAV.ADMIN.TITLE',
                type: 'collapsable',
                icon: 'person',
                children: [
                    {
                        id: 'admins',
                        title: 'View Admins',
                        type: 'item',
                        url: '/admin',
                        exactMatch: true
                    },
                    {
                        id: 'add',
                        title: 'Add Admin',
                        type: 'item',
                        url: '/admin/add',
                        exactMatch: true
                    },
                ]
            },
            {
                id: 'photographer',
                title: 'Photographer',
                translate: 'NAV.PHOTOGRAPHER.TITLE',
                type: 'collapsable',
                icon: 'person',
                children: [
                    {
                        id: 'photographers',
                        title: 'View Photographers',
                        type: 'item',
                        url: '/photographer',
                        exactMatch: true
                    },
                    {
                        id: 'add',
                        title: 'Add Photographer',
                        type: 'item',
                        url: '/photographer/add',
                        exactMatch: true
                    },
                ]
            },
            {
                id: 'salesRepresentative',
                title: 'Sales Representative',
                translate: 'NAV.SALES_RE_PRESENTATIVE.TITLE',
                type: 'collapsable',
                icon: 'person',
                children: [
                    {
                        id: 'salesRepresentative',
                        title: 'View Sales Representative',
                        type: 'item',
                        url: '/sales-representative',
                        exactMatch: true
                    },
                    {
                        id: 'add',
                        title: 'Add Sales Representative',
                        type: 'item',
                        url: '/sales-representative/add',
                        exactMatch: true
                    },
                ]
            },
            {
                id: 'editor',
                title: 'Editor',
                translate: 'NAV.EDITOR.TITLE',
                type: 'collapsable',
                icon: 'person',
                children: [
                    {
                        id: 'editor',
                        title: 'View Editors',
                        type: 'item',
                        url: '/editor',
                        exactMatch: true
                    }
                ]
            }
        ]
    },
];
