import './Home.css'
import Dmy from './Dmy'
import ArrowButton from './ArrowButton'
import Age from './Age'

export default function Home() {
  return (
    <div className='home'>
        <Dmy />
        <ArrowButton />
        <Age />
    </div>
  )
}
