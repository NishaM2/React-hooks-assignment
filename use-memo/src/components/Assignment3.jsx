import React, { useState, useMemo } from 'react';
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

export const Assignment3 = () => {
    // eslint-disable-next-line no-unused-vars
    const [items, setItems] = useState([
        { name: 'Chocolates', value: 10 },
        { name: 'Chips',  value: 20 },
        { name: 'Onion',  value: 30 },
        { name: 'Tomato', value: 30 },
        { name: 'Potato', value: 20 },
        { name: 'apple',  value: 50 }
    ]);

    const totalValue = useMemo(() => {
        let value = 0;
        items.forEach(item => {
            value += item.value;
        });
        return value;
    },[items])

    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.name} - Price: ${item.value}</li>
                ))}
            </ul>
            <p>Total Value: {totalValue}</p>
        </div>
    );
};