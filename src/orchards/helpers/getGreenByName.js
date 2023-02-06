import { green } from "../data/green"


export const getGreenByName = (name = '') => {
    name = name.toLocaleLowerCase().trim()
    if(name.length === 0) return []
  return  green.filter( e => e.name.toLocaleLowerCase().includes(name))

}
