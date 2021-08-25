import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function ListingCard({ listing }) {
    console.log("LISTING HERE", listing);
    return (
        <div className="ListingCard col">
            <h1>ListingCards</h1>
            <div className="ListingCard">
                <Carousel showThumbs={false}>
                    {listing.photos.map(photo => (
                        <div>
                            <img src={photo.url} alt=""/>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}