import React from "react";
import Card from './Card/Card.jsx'
import { useState } from 'react'

const Cards = (props) => {
    const [items, setItems] = useState([
        { id: "1", img: "/img/1.png", state: "" },
        { id: "1", img: "/img/1.png", state: "" },
        { id: "2", img: "/img/2.png", state: "" },
        { id: "2", img: "/img/2.png", state: "" },
        { id: "3", img: "/img/3.png", state: "" },
        { id: "3", img: "/img/3.png", state: "" },
        { id: "4", img: "/img/4.png", state: "" },
        { id: "4", img: "/img/4.png", state: "" },
        { id: "5", img: "/img/5.png", state: "" },
        { id: "5", img: "/img/5.png", state: "" },
        { id: "6", img: "/img/6.png", state: "" },
        { id: "6", img: "/img/6.png", state: "" },
        { id: "7", img: "/img/7.png", state: "" },
        { id: "7", img: "/img/7.png", state: "" },
        { id: "8", img: "/img/8.png", state: "" },
        { id: "8", img: "/img/8.png", state: "" },
        { id: "9", img: "/img/9.png", state: "" },
        { id: "9", img: "/img/9.png", state: "" },
        { id: "10", img: "/img/10.png", state: "" },
        { id: "10", img: "/img/10.png", state: "" },
    ].sort(() => Math.random() - 0.5))

    const [prev, setPrev] = useState(-1)

    const check = (current) => {
        if(items[current].id == items[prev].id){
            items[current].state = "correct"
            items[prev].state = "correct"
            setPrev(-1)
        }else{
            items[current].state = "wrong"
            items[prev].state = "wrong"
            setItems([...items])
            setTimeout(() => {
                items[current].state = ""
                items[prev].state = ""
                setItems([...items])
            }, 1000)
        }
    }
    const flipCard = (id) => {
        if(prev === -1) {
            items[id].state = "active"
            setItems([...items])
            setPrev(id)
        } else {
            check(id)
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