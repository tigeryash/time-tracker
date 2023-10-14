import { useState } from 'react'
import './App.css'
import pfp from './assets/image-jeremy.png'
import data from './data.json'
import ellipsis from './assets/icon-ellipsis.svg'
import Exercise from './assets/icon-exercise.svg'
import Play from './assets/icon-play.svg'
import SelfCare from './assets/icon-self-care.svg'
import Social from './assets/icon-social.svg'
import Study from './assets/icon-study.svg'
import Work from './assets/icon-work.svg'


type Times = "daily" | "weekly" | "monthly"

type Data = {
  title: string;
  timeframes: {
    daily: {
      current: number;
      previous: number;
    },
    weekly: {
      current: number;
      previous: number;
    },
    monthly: {
      current: number;
      previous: number;
    }
  }
}

function App() {
  const [time, setTime] = useState<Times>("weekly")
  const spentTime:Data[] = data

  console.log(time)
  return (
    <div className='wrapper'>
      <div className='user'>
        <div className='intro'>
          <img src={pfp} className='pfp' />

          <div className='info'>
            <p>Report for</p>
            <h1 className='name'>
              Jeremy Robson
            </h1>
          </div>
        </div>

          <div className='buttons'>
            <button className={time === "daily" ? 'choice active' : 'choice'} onClick={() => setTime("daily")}>Daily</button>
            <button className={time === "weekly" ? 'choice active' : 'choice'} onClick={() => setTime("weekly")}>Weekly</button>
            <button className={time === "monthly" ? 'choice active' : 'choice'} onClick={() => setTime("monthly")}>Monthly</button>
          </div>
      </div>

        {spentTime.map((spent, idx) => (
          <div key={idx} className='container'>
           
            
            {spent.title === "Self Care" ? (
               <div className='design self-care'>
                <img src={`./icon-self-care.svg`} className='icon'  alt={spent.title}/>

                <div className='details'>
                  <div className='top'>
                     <p className='section'>{spent.title}</p>
                      <img src={ellipsis} />
                    </div>

                    <div className='bot'>
                      <p className='current'>{spent.timeframes[time].current}hrs</p>
                     <p className='previous'>Last Week - {spent.timeframes[time].previous}hrs</p>
                    </div>
                  </div>
                </div>
              ): (
                <div className={`design  ${spent.title.charAt(0).toLowerCase() + spent.title.slice(1)} `}>
                  <img className='icon' src={`./icon-${spent.title.charAt(0).toLowerCase() + spent.title.slice(1)}.svg`} alt={spent.title}/>
                  <div className='details'>
                <div className='top'>
                  <p className='section'>{spent.title}</p>
                  <img src={ellipsis} />
                </div>

                <div className='bot'>
                  <p className='current'>{spent.timeframes[time].current}hrs</p>
                  <p className='previous'>Last Week - {spent.timeframes[time].previous}hrs</p>
                </div>
              </div>
                </div>
              )}
        </div>
        ))}
    </div>
      
    
  )
}

export default App
