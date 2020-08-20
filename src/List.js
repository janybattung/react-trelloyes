import React from 'react';
import Card from './Card';
import './List.css';

// function List(props) {
export default function List(props) {
    return (
            <section className='List'>
                <header className='List-header'>
                    <h2>{props.header}</h2>
                </header>
                <div className='List-cards'>
                    {props.cards.map((card) =>
                        <Card
                            key={card.id}
                            title={card.title}
                            content={card.content}
                    />
                )}
                <button
                    type='button'
                    className='List-add-button'
                >
                    + Add Random Card
                </button>
                  {/* {props.cards.map((value,index)=> {
                      return <Card title={value.title} content={value.content}></Card>
                  }
                  
                  )} */}
                </div>
            </section>
    )
}
