import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './ListingCard.css'

export default function ListingCard({ listing }) {
    return (
        <div className="ListingCard col-3">
            <div className="ListingCardCarousel">
                <Carousel showThumbs={false} showStatus={false}>
                    {listing.photos.map(photo => (
                        <div key={photo.id}>
                            <img src={photo.url} alt=""/>
                        </div>
                    ))}
                </Carousel>
            </div>
            <h5>{listing.title}</h5>
            <p>${listing.price} /night</p>
        </div>
    )
}