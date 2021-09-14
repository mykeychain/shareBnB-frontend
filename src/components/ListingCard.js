import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import './ListingCard.css'

/** ListingCard
 * 
 *  ListingCard that makes up display of listings in ListingContainer
 * 
 *  Props:
 *      - listing
 *  
 *  ListingList -> ListingCard
 */
export default function ListingCard({ listing }) {
    return (
            <div className="ListingCard col-lg-3 col-sm-4 col-6 mb-4">
                <div className="ListingCardCarousel">
                    <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} dynamicHeight={false}>
                        {listing.photos.map(photo => (
                            <Link to={`/listings/${listing.id}`} key={photo.id}>
                                <div className="ListingCardCarousel-div" key={photo.id}>
                                    <img src={photo.url} alt=""/>
                                </div>
                            </Link>
                        ))}
                    </Carousel>
                </div>
                <Link to={`/listings/${listing.id}`} className="col-sm-3 col-6">
                    <h5>{listing.title}</h5>
                    <p>{listing.address}</p>
                    <p>${listing.price} /night</p>
                </Link>
            </div>
    )
}