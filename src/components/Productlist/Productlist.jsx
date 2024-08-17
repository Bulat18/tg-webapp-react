import React from 'react';
import './Productlist.css';
import  ProductItem from '../ProductItem/ProductItem';


const products = [
    {id: '1', title:'Куртка', price:12000, description:"Зеленого цвета, теплая"},
    {id: '2', title:'Джинсы', price:7000, description:"Синие, теплая"},
    {id: '3', title:'Футболка', price:3000, description:"Белого цвета, дышащая"},
    {id: '4', title:'Шорты', price:1200, description:"Черного цвета, длинные"},
    {id: '5', title:'Худи', price:2799, description:"Серого цвета, теплая"},
    {id: '6', title:'Водоласка', price:1350, description:"Черного цвета, "},
]


const Productlist = () =>{
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