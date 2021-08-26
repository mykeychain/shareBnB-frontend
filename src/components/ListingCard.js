import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import './ListingCard.css'

export default function ListingCard({ listing }) {
    return (
            <div className="ListingCard col-sm-3 col-6">
                <div className="ListingCardCarousel">
                    <Carousel showThumbs={false} showStatus={false}>
                        {listing.photos.map(photo => (
                            <Link to={`/listings/${listing.id}`}>
                                <div key={photo.id}>
                                    <img src={photo.url} alt=""/>
                                </div>
                            </Link>
                        ))}
                    </Carousel>
                </div>
                <Link to={`/listings/${listing.id}`} className="col-sm-3 col-6">
                    <h5>{listing.title}</h5>
                    <p>${listing.price} /night</p>
                </Link>
            </div>
    )
}