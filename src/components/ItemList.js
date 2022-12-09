import React from 'react';
import ItemCard from './ItemCard';

const ItemList = ({ items }) => {
    // if (true) {  // simulated error for test
    //     throw new Error('NOOOOO!');
    // }
    return (
        <div>
            {
                items.map((item, i) => {
                    return (
                        <ItemCard key={i}
                            Zone={items[i].Zone}
                            Location={items[i].Location}
                            Cabinet={items[i].Cabinet}
                            Box={items[i].Box}
                            ItemName={items[i].ItemName}
                            Activities={items[i].Activities}
                            Keywords={items[i].Keywords}
                            Notes={items[i].Notes}
                        />
                    );
                })
            }
        </div>
    );
}

export default ItemList;