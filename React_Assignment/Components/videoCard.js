import button1 from '../utils/images/next.png'
import button2 from '../utils/images/pause-circle.png'
import button3 from '../utils/images/play-circle.png'
import button4 from '../utils/images/prev.png'
import cardImage from '../utils/images/movieHomePage.jpg'

const videoCard=()=>{

   return(
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-gray-900 m-4">
    {/* Video Thumbnail */}
    <img
      className="w-full h-40 object-cover object-center"
      src={cardImage} /* Replace with your image URL */
      alt="Video Thumbnail"
    />
   
    {/* Video Information */}
    <div className="px-4 py-2 ">
      <ul className="flex mb-4 px-9 text-white">
        <li><img className='w-20 px-2' src={button1} /></li>
        <li><img className='w-20 px-2' src={button2} /></li>
        <li><img className='w-20 px-2' src={button3} /></li>
        <li><img className='w-20 px-2' src={button4} /></li>
      </ul>
      <div className='flex'>
      <p className="mr-2 text-green-500">97% Match</p>
      <p className="text-gray-300 text-base">2h 35m</p>
      </div>
      <div>
      <ol className='flex'>
          <li className="text-gray-300 text-base mr-2">Horror</li>
          <li className="text-gray-300 text-base mr-2">Adventure</li>
          <li className="text-gray-300 text-base">Mystery</li>
      </ol>
      </div>
    </div>

 
  </div>
   )

}

export default videoCard;
