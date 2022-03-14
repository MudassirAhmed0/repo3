import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import commitment2business from '../../assets/images/home/images/commitment-to-business.jpg'
import AnnounceMajorInvestment from '../../assets/images/home/images/announce-major-investmeny.jpg'
import commitmenttobusiness from '../../assets/images/home/images/commitment to business.jpg'
import globalCapacity from '../../assets/images/home/images/global-capacity.jpg'
import CarouselCard from "./CarouselCard";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
 

const HomeCarousel = () => {
 
    const content =[
        {
            para:'Zajil CARE, a commitment to business values that highlight KSA competitive… ',
            date:'8 June 2020',
            img:commitment2business,
            alt:'Image Name'
        },
        {
            para:'Zajil announces major investment in global shipping network capacity …',
            date:'8 June 2020',
            img:AnnounceMajorInvestment,
            alt:'Image Name'
        },
        {
            para:'Zajil mobile app to simplify user experience in managing global …',
            date:'8 June 2020',
            img:globalCapacity,
            alt:'Image Name'
        },
        {
            para:'Zajil CARE, a commitment to business values that highlight KSA competitive…',
            date:'8 June 2020',
            img:commitmenttobusiness,
            alt:'Image Name'
        },
        {
            para:'Zajil announces major investment in global shipping network capacity …',
            date:'8 June 2020',
            img:AnnounceMajorInvestment,
            alt:'Image Name'
        },
        {
            para:'Zajil mobile app to simplify user experience in managing global …',
            date:'8 June 2020',
            img:globalCapacity,
            alt:'Image Name'
        },
        {
            para:'Zajil CARE, a commitment to business values that highlight KSA competitive…',
            date:'8 June 2020',
            img:commitmenttobusiness,
            alt:'Image Name'
        },
        {
            para:'Zajil CARE, a commitment to business values that highlight KSA competitive… ',
            date:'8 June 2020',
            img:commitment2business,
            alt:'Image Name'
        },
    ]
    return (
    
        <Carousel  renderArrowsWhenDisabled={true} responsive={responsive}>
            {content.map((item,index)=><CarouselCard  key={item.para+index}content={item}/>)}
        </Carousel>
 
  )
}

export default HomeCarousel
