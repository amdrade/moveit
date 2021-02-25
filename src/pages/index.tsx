import { Countdown } from '../components/Countdown'
import { ExperienceBar } from '../components/ExperienceBar'

export default function Home() {
  return (
    <div className="container">
      <ExperienceBar />
      <Countdown />
    </div>
  )
}
