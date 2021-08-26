import { Link } from 'react-router-dom';
import "./Homepage.css";

const HOMEPAGE_PHOTO_URL = "https://images.squarespace-cdn.com/content/v1/53a5cdfbe4b0e026bea35263/1560616232322-FQZBFZH5OFRK5ICP0XFD/SouthC+%2852%29.jpg?format=1000w"
// const HOMEPAGE_PHOTO_URL = "https://images.squarespace-cdn.com/content/v1/53a5cdfbe4b0e026bea35263/1403375472038-HRNIRYG4HFE5HEZ1TIJ2/mackinnon03.jpg?format=1500w"
// const HOMEPAGE_PHOTO_URL = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/small-backyard-ideas-1589908146.jpg"
// const HOMEPAGE_PHOTO_URL = "https://www.houselogic.com/wp-content/uploads/2018/03/backyard-before-and-after-standard_a1ef8b1bf55a9acd18f14686d2fc6a00.jpg?crop&resize=2560%2C1706"
// const HOMEPAGE_PHOTO_URL = "https://cdn.mos.cms.futurecdn.net/EVWssJbH5AyYxFhwGSpB8d-1024-80.jpg.webp"

export default function Homepage() {
    return (
        <div className="Homepage container">
            <div className="row mt-3">
                <div className="Homepage-photo-div col-sm-10 ms-sm-4 ps-sm-3">
                    <img
                        className="Homepage-photo img-fluid"
                        src={HOMEPAGE_PHOTO_URL} alt="Homepage" />
                </div>
                <div className="Homepage-search-div">
                    <h1 className="card-title mt-4 mb-3 mx-2">
                        Find a backyard just for you
                    </h1>
                    <p className="text-muted mx-2">
                        Discover our beautiful selection of spaces and wonderful hosts
                    </p>
                    <div className="mx-2 mb-4">
                        <div className="d-grid mt-2">
                            <Link to='/listings'>
                                <button className="btn btn-primary">
                                    <i className="bi bi-search"></i> Go to Listings
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}