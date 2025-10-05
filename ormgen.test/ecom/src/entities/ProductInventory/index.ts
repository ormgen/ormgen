import { createEntity } from "ormgen";


export default createEntity({
    name: 'ProductInventory',

    id: 'uid',

    fields: {
        stockQuantity: {type: 'int'},

        lastUpdatedAt: {type: 'datetime'},
        
        product: {
            type: 'relation',

            targetEntityName: 'Product',
            targetEntityFieldName: 'inventory',
            targetMode: 'one',

            onDelete: null,
        }
    }
})