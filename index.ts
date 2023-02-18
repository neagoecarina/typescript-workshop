interface ICars{
    brand: string,
    cost: number,
    registrationNumber?: string,
    size?: string,
    numberOfSeats: number
 
}
let cars: ICars[] = [
    {
        brand: 'Audi',
        cost: 100,
        numberOfSeats: 4
    },
    {
        brand: 'Opel',
        cost:100,
        numberOfSeats: 7,
 
    },
    {
        brand:'BMW',
        cost:100,
        size:'big',
        numberOfSeats:4
 
 
    },
    {
        brand:'Mercedes',
        cost:100,
        size:'big',
        registrationNumber:'TM-68-XDX',
        numberOfSeats:4
    }
]
function meetCriterias(cars: ICars[]):void{
    cars.forEach((car: ICars) =>{
        if(car.registrationNumber===undefined){
            car.registrationNumber='unregistered';
        }
 
        if(car.numberOfSeats>5){
            car.size='big';
 
        }else if(car.numberOfSeats<=5){
            car.size='small';
        }
        if(car.brand==='Mercedes'||car.brand==='BMW'||car.brand==='Audi'){
            car.cost+=25000;
        }
    });
    }
    meetCriterias(cars);
    function display(cars: ICars[]):ICars[]{
        return cars;
    }
console.log(display(cars));
