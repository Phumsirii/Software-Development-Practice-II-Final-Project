interface RestaurantItem{
    _id: string,
    name: string,
    address: string,
    foodtype: string,
    province: string,
    postalcode: string,
    tel: string,
    picture: string,
    __v: number,
    id: string
}

interface RestaurantJSON {
    success: boolean,
    count: number,
    pagination: Object,
    data: RestaurantItem[]
  }