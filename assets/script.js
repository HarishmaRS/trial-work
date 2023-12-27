class restaurantManager{
    restaurantList = [
        {
            id: 1,
            restaurantName: 'KFC',
            address: 'Anand Vihar',
            city:'Delhi',
        },
        {
            id: 2,
            restaurantName: 'Domino',
            address: 'Savita Vihar',
            city:'Delhi',
        },
        {
            id: 3,
            restaurantName: 'burger King',
            address: 'City Lines',
            city:'Pune',
        },
        {
            id: 4,
            restaurantName: 'Subway',
            address: 'Cantonment',
            city:'Mumbai',
        },
    ];
    // printAllRestaurantNames = function(){
    //     var x = this.restaurantList.map((rest)=>rest.restaurantName);
    //     return x;
    // }
    printAllRestaurantNames = () =>{
        return this.restaurantList.map((restaurant)=>restaurant.restaurantName);
    }

    // filterRestaurantByCity=function(cityname){
    //     var y=this.restaurantList.filter((one)=>one.city==cityname)
    //     return y;
    // }
    filterRestaurantByCity=(cityname) =>{
        return this.restaurantList.filter((name)=>name.city==cityname);
    }
}

const restaurantObj=new restaurantManager();
console.log(restaurantObj.printAllRestaurantNames());
console.log(restaurantObj.filterRestaurantByCity("Delhi"));
//Date
var d=new Date();
console.log(d);
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getFullYear());
console.log(d.getTime());
console.log(d.getHours());

//Math
console.log("//Math");
var f=23.45;
console.log(Math.floor(f));
var ce=45.13
console.log(Math.ceil(ce));
var n=-95;
console.log(Math.abs(n));
console.log(Math.PI);
var sq=16;
console.log(Math.sqrt(sq));
console.log(Math.random());
console.log(Math.SQRT2);
console.log(Math.SQRT1_2);

// Math.abs
// Math.imul
