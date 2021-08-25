import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class ShareBnBApi {
    // the token for interaction with the API will be stored here.
    static token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Im5jdWVuY2EiLCJpc19hZG1pbiI6ZmFsc2V9.FEfbmwLONMepcS6mXDubimUJNpFRu1ZS3C3Ppo3gnuQ';

    static async request(endpoint, data = {}, method = "get") {
        console.debug("API Call:", endpoint, data, method);

        const url = `${BASE_URL}/${endpoint}`;
        const headers = { Authorization: `Bearer ${ShareBnBApi.token}` };
        const params = (method === "get")
            ? data
            : {};
        
        try {
            return (await axios({ url, method, data, params, headers })).data;
        } catch (err) {
            console.error("API Error:", err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }

    // Individual API routes

    /** Get listings */

    static async getListings(term) {
        let res;

        if (term === "") {
            res = await this.request(`listings`);
        } else {
            res = await this.request(`listings`, { term });
        }
        return res.listings
    }

    static async addListing(newListing) {
        let res = await this.request(`listings`, newListing, "post");
        return res.listing;
    }

    /** Get token after login */

    //   static async login(username, password) {
    //     let res = await this.request(`auth/token`, { username, password }, "post");
    //     return res.token;
    //   }

    /** Get a user. */

    //   static async getUser(username) {
    //     let res = await this.request(`users/${username}`);
    //     return res.user;
    //   }

    /** Update user profile.
     * 
     *  formData like: { firstName, lastName, email, password}
     */
    //   static async updateUser(username, formData) {
    //     let res = await this.request(`users/${username}`, formData, "patch");
    //     return res.user
    //   }

    /** Get details on a company by handle. */

    //   static async getCompany(handle) {
    //     let res = await this.request(`companies/${handle}`);
    //     return res.company;
    //   }

    /** Get all companies (optional search term of company name) */

    //   static async getCompanies(name) {
    //     let res;

    //     if(name === "") {
    //       res = await this.request(`companies`);
    //     } else {
    //       res = await this.request(`companies`, { name });
    //     }
    //     return res.companies
    //   }

    /** Get all jobs (optional search term of job title) */

    //   static async getJobs(title) {
    //     let res;

    //     if(title === "") {
    //       res = await this.request(`jobs`);
    //     } else {
    //       res = await this.request(`jobs`, { title });
    //     }
    //     return res.jobs
    //   }

    /** Apply to a job
     * 
     */

    //   static async apply(username, jobId) {
    //     let res = await this.request(`users/${username}/jobs/${jobId}`, {}, "post");
    //     return res;
    //   }

}

export default ShareBnBApi;