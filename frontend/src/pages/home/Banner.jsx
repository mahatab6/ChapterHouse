import React from 'react'
import bannar from '../../assets/bannar-img.png'

function Banner() {
  return (
    <div className='flex items-center flex-col md:flex-row py-16 justify-between'>
        <div className='md:w-1/2 w-full'>
            <h1 className='text-3xl md:text-5xl font-medium mb-7'>New Releases This Week</h1>
            <p className='mb-10'>It's time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone</p>

            <button className='font-bold bg-yellow-300 px-4 py-1 rounded-md'>Subscribe</button>
        </div>

        <div className='md:w-1/2 w-full'>
            <img src={bannar} alt="" />
        </div>
    </div>
  )
}

export default Banner