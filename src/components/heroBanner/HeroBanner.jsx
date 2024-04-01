import { useState } from 'react';
import './HeroBanner.scss';
import { useNavigate } from 'react-router-dom';

const HeroBanner = () => {
    const [backgroundImg, setBackgroundImg] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        if(e.key === 'Enter' && searchQuery.length > 0) {
            navigate(`/search/${searchQuery}`);
        }
    }
    
    return ( 
        <div className="heroBanner">
            <div className="wrapper">
                <div className="heroBannerContent">
                    <span className='title'>Moviez.</span>
                    <span className='subTitle'>Find your favorite movie</span>
                    <div className="searchInput">
                        <input onKeyDown={handleSearch} onChange={(e) => setSearchQuery(e.target.value)} type="text" placeholder="Search for a movie"/>
                        <button>Search</button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default HeroBanner;