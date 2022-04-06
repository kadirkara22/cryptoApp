import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./content.css"
const Content = ({ name, image, symbol, volume, price, priceChange, marketCap }) => {

    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="coin"></img>
                    <span>{name}</span>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">${price}</p>
                    <p>${volume.toLocaleString()}</p>
                    {
                        priceChange < 0 ? (
                            <p className="coin-percent-red">{priceChange.toFixed(2)}%</p>
                        )
                            :
                            (
                                <p className="coin-percent-green">{priceChange.toFixed(2)}%</p>
                            )
                    }

                    <p className="coin-marketcap">Mkt Cap: ${marketCap.toLocaleString()}</p>
                </div>

            </div>
            <hr></hr>

        </div>
    )
}

export default Content
