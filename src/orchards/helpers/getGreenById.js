import { green } from "../data/green"


export const getGreenById = (id) =>{

  return  green.find( e => e.id === id)

}