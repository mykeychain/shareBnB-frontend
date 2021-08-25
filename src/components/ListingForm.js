import { useState } from "react"
import { useHistory } from "react-router-dom";
import ShareBnBApi from "../api";

export default function ListingForm() {
    const [formData, setFormData] = useState({host_id: 1});
    const history = useHistory();

    function handleChange(evt) {
        const { name, value } = evt.target;

        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        try{
            const resp = await ShareBnBApi.addListing(formData);
            history.push(`/listings/${resp.id}`)
        } catch(err) {
            console.error(err);
        }
    }

    return (
        <div className="ListingForm container">
            <h4>Add a Listing</h4>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label
                        htmlFor="title"
                        className="form-label">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="form-control">
                    </input>
                </div>
                <div className="form-group">
                    <label
                        htmlFor="price"
                        className="form-label">
                        Price
                    </label>
                    <input
                        type="text"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="form-control">
                    </input>
                </div>
                <div className="form-group">
                    <label
                        htmlFor="address"
                        className="form-label">
                        Address
                    </label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="form-control">
                    </input>
                </div>
                <div className="form-group">
                    <label
                        htmlFor="details"
                        className="form-label">
                        Details
                    </label>
                    <input
                        type="text"
                        id="details"
                        name="details"
                        value={formData.details}
                        onChange={handleChange}
                        className="form-control">
                    </input>
                </div>
                <div className="form-group">
                    <label
                        htmlFor="photos"
                        className="form-label">
                        Photos
                    </label>
                    <input
                        type="file"
                        id="photos"
                        name="photos"
                        value={formData.details}
                        onChange={handleChange}
                        className="form-control"
                        multiple>
                    </input>
                </div>

            </form>
        </div>
    )
}