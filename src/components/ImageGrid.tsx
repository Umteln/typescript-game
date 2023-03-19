
import image1 from '../assets/mario1.webp';
import image2 from '../assets/mario2.webp';
import image3 from '../assets/mario3.webp';
import image4 from '../assets/mario4.webp';
import image5 from '../assets/mario5.webp';
import image6 from '../assets/mario6.webp';
import questionMark from '../assets/questionMark.jpeg'


const ImageGridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr 1fr'
}


const guessImg =(
  <div> 
     <img style={{width:'100%', height:'100%'}} src={questionMark} alt='' />
  </div>

)

const sectionOne = (
  <div> 
    <img style={{width:'100%', height:'100%'}} src={image1} alt='' />
  </div>

)
const sectionTwo = (
  <div>
    <img style={{width:'100%', height:'100%'}} src={image2} alt='' />
  </div>

)
const sectionThree = (
  <div> 
    <img style={{width:'100%', height:'100%'}} src={image3} alt='' />
  </div>

)
const sectionFour = (
  <div>
    <img style={{width:'100%', height:'100%'}} src={image4} alt='' />
  </div>

)
const sectionFive = (
  <div>
    <img style={{width:'100%', height:'100%'}} src={image5} alt='' />
  </div>

)
const sectionSix = (
  <div>
    <img style={{width:'100%'}} src={image6} alt='' />
  </div>

)
const completeImage = [ sectionOne, sectionTwo, sectionThree, sectionFour, sectionFive, sectionSix ]
const blankImage = [guessImg, guessImg, guessImg, guessImg, guessImg, guessImg]

type ImageGridProps = {
  numberOfGuesses: number
}



const ImageGrid = ({numberOfGuesses}: ImageGridProps) => {
  return (
    <div style={ImageGridStyle}>

    
       {numberOfGuesses <= 0 
       ?   blankImage
       :   completeImage.slice(0, numberOfGuesses)}
  
    </div>
  )
}

export default ImageGrid