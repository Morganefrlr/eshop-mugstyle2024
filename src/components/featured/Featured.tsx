
import Title from '@/reusableComponents/title/Title';
import FeaturedCardContainer from './FeaturedCardContainer';


const Featured = () => {
    return (
        <div className='featuredMain'>
            <Title label={'Featured Mugs'}/>
            <FeaturedCardContainer />
        </div>
    );
};

export default Featured;