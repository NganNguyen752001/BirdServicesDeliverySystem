import React from 'react'
import { renderRatingStars } from '../../../Utils'

const ServiceCardItem = (props) => {

    const { item, width } = props

    return (
        <div key={item.id} className={`${width} mx-2 max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 single-card`}>
            <a href="#">
                <img className="p-8 rounded-t-lg" src={item.image} alt="services image" />
            </a>
            <div className="px-5 pb-5">
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                </a>

                <p className="text-gray-500 text-sm">{item.description}</p>

                {/* rating */}
                <div className="flex items-center mt-2.5 mb-5">
                    {renderRatingStars(item.rating)}
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{item.rating.toFixed(1)}</span>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">${item.price}</span>
                    <a href="#" className="text-white bg-emerald-500 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                </div>
            </div>
        </div>
    )
}

export default ServiceCardItem