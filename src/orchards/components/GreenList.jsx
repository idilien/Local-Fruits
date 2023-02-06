import { getGreenByLocation } from "../helpers"
import { GreenCard } from "./"



export const GreenList = ({location}) => {

    const greens = getGreenByLocation(location)

  return (
   <>
        {
          greens.map(e =>(
            <GreenCard key={e.id} {...e}/>
            ))
          }
  </>
   
  )
}
