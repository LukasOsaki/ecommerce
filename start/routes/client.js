'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
    /**
    * Product resource routes
    */
    Route.get('product', 'ProductController.index')
    Route.get('product/:id', 'ProductController.show')

    /**
    * Order resource routes
    */
    Route.get('orders', 'OrderController.index')
    Route.get('orders/:id', 'OrderController.show')
    Route.post('orders', 'OrderController.store')
    Route.put('orders/:id', 'OrderController.put')



})
    .prefix('v1')
    .namespace('Client')