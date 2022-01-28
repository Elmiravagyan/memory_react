import React, { useEffect } from "react";
import Card from './Card/Card.jsx'
import { useState } from 'react'
import axios from "axios";

const Cards = (props) => {
    const [items, setItems] = useState([])

    const [prev, setPrev] = useState(null)
    const [fliped, setFliped] = useState(false)

    React.useEffect(() => {
        async function fetchData() {
            const cartData = await axios.get('data.json');
            setItems(cartData.data.sort(() => Math.random() - 0.5));
        }
            fetchData();
    }, [])

    function check (current) {
        if(items[current].id == items[prev].id){
            items[current].state = "correct"
            items[prev].state = "correct"
            setPrev(null)
        }else{
            items[current].state = "wrong"
            items[prev].state = "wrong"
            setItems([...items])
            setFliped(true)
            setTimeout(() => {
                items[current].state = ""
                items[prev].state = ""
                setItems([...items])
                setPrev(null)
                setFliped(false)
            }, 1000)
        }
    }
    function flipCard(id){
        if(!fliped && items[id].state !== "correct") {
            if(prev === null) {
                items[id].state = "active"
                setItems([...items])
                setPrev(id)
            } else {
                check(id)
            }
        }
    }

    const cardElement = items.map((item, index) => <Card
        key={index}
        id={index}
        item={item}
        flipCard = {flipCard}
    />)

    return (
        <div className="memory-game">
            {cardElement}
        </div>
    );
}

export default Cards;