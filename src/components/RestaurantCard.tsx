'use client'
import Image from "next/image"

export default function RestaurantCard({imgSrc,restaurantName,foodtype}:{imgSrc:string,restaurantName:string,foodtype:string}) {
    return(
        <div className="font-sans mx-3 bg-gray-200 text-xl max-w-3xl h-40 flex flex-row rounded-xl w-full hover:bg-gray-300 hover:shadow-xl">
            <div className="relative h-full w-1/3">
                <Image src={imgSrc} alt={restaurantName} fill={true} className='object-cover rounded-xl w-1/3'/>
            </div>
            <div className="flex flex-col m-5">
                <div className="font-bold text-3xl m-2">{restaurantName}</div>
                <div className="font-light text-lg m-2">{foodtype} Food</div>
            </div>
        </div>
    )
}