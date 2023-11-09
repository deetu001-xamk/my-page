import photo from '../assets/coding-lofi.jpg'
import '../styles/Home.css'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'

function Home() {
  
 // const [time, setTime] = useState(new Date())
  const [date, setDate] = useState(dayjs().format('DD.MM.YYYY HH:mm:ss')) 
// Test

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(dayjs().format('DD.MM.YYYY HH:mm:ss'))
    }, 1000)
    return () => clearInterval(interval)
    }, [])

  return (
    <>
     <table className='lang'>
        <tr>
            <td className='chosen'>FI</td>
            <td>EN</td>
        </tr>
     </table>
     <div>
        <p className='time'>{date}</p>
        <img src={photo} alt="taustakuva" />
        <h3>Eetu Turtiainen</h3>
        
        <p>
            <a> Tietoja minusta  </a> 
            / 
            <a>  Projektini  </a> 
            / 
            <a> Yhteystiedot</a>

        </p>
     </div>
    </>
  )
}

export default Home

