import { green } from "../data/green";

export const getGreenByLocation = (location) =>{

    const validLocation = ['Madrid', 'Barcelona']
    if(!validLocation.includes(location)){
        throw new Error(`No se encuentra la huerta ${location}`)
    }

    return green.filter(e => e.location === location)

}