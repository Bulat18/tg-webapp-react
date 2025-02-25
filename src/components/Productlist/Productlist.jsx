import React, {useState} from 'react';
import { useTelegram } from '../hooks/useTelegram';

import   './Productlist.css';
import  ProductItem from '../ProductItem/ProductItem';
import {useCallback, useEffect} from "react";

const products = [
    {id: '1', title:'Куртка', price:12000, description:"Зеленая, теплая"},
    {id: '2', title:'Джинсы', price:7000, description:"Синие, теплая"},
    {id: '3', title:'Футболка', price:3000, description:"Белого цвета, дышащая"},
    {id: '4', title:'Шорты', price:1200, description:"Черного цвета, длинные"},
    {id: '5', title:'Худи', price:2799, description:"Серого цвета, теплая"},
    {id: '6', title:'Водоласка', price:1350, description:"Черная, жарко"},
]

const getTotalPrice = (items=[])=>{
    return items.reduce((acc, item) =>{
        return  acc += item.price
    }, 0)
}


const Productlist = () =>{
    const [addedItems, setAddedItems] = useState([]);
    const {tg, queryId}  = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            products: addedItems,
            totalPrice: getTotalPrice(addedItems),
            queryId
        }
        fetch('http://localhost:8000/web-data', {
            method: 'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify(data)
        })

    }, [addedItems])

    useEffect(() => {
        console.log('Setting up event listener for mainButtonClicked');
        tg.onEvent('mainButtonClicked', onSendData);

        return () => {
            console.log('Removing event listener for mainButtonClicked');
            tg.offEvent('mainButtonClicked', onSendData);
        };
    }, [onSendData]);

    console.log('Telegram WebApp:', tg);
    const onAdd = (product) =>{
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if (alreadyAdded){
            newItems  = addedItems.filter(item => item.id != product.id);
        } else{
            newItems = [...addedItems, product];
        }

        setAddedItems(newItems);

        if (newItems.length === 0){
            tg.MainButton.hide();
        } else{
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Buy ${getTotalPrice(newItems)}`
            })
        }
    }
    return (
        <div class="naming">
            <div className={"list"}>
                {products.map(item =>(
                    <ProductItem
                        product={item}
                        onAdd={onAdd}
                        className={'item'}
                    />
                ))}
            </div>
        </div>
    );
};

export default Productlist;