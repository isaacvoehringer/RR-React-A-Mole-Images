import { useEffect } from "react";
import moleHill from './molehill.png';

const EmptySlot = (props) => {

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 15000)
        let timer = setTimeout(() => {
            props.toggle(true)
            
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}} src={moleHill} />
        </div>
    )
}

export default EmptySlot