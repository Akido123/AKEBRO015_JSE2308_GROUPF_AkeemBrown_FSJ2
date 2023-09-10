import EventItem from "../components/events/event-item"
import EventList from "../components/events/event-list"

import { getFeaturedEvents } from '../dummy-data'

function MainPage(){
  const featuredEvents = getFeaturedEvents()

  return(
    <div>
      <EventList items={featuredEvents}/>
    </div>
  )
}

export default MainPage