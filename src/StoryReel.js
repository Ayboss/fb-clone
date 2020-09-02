import React from  'react';
import Story from './Story';
import alhaja from './assets/alhaja.webp';
import doggy from './assets/doggy.webp';
import man from './assets/man.webp';
import bunny from './assets/bunny.webp';
import back1 from './assets/back1.webp';
import back2 from './assets/back-2.webp';
import back3 from './assets/back3.webp';
import back4 from './assets/back4.jpg';
import './StoryReel.css';
 
function StoryReel(){
  return(
    <div className="storyReel">
        <Story
        image={back1}
        profileSrc={alhaja}
        title="Neena Aminat"/>

        <Story
        image={back2}
        profileSrc={doggy}
        title="Rusty bark"/>

        <Story
        image={back3}
        profileSrc={man}
        title="John who"/>

        <Story
        image={back4}
        profileSrc={bunny}
        title="bugs bunny"/>

        <Story
        image={back2}
        profileSrc={doggy}
        title="Rusty bark"/>
    </div>
  )
}

export default StoryReel;
