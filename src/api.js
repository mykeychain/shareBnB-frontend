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
    static token;

    static async request(endpoint, data = {}, method = "get", fileUpload=false) {
        console.debug("API Call:", endpoint, data, method);

        const url = `${BASE_URL}/${endpoint}`;
        const headers = { Authorization: `Bearer ${ShareBnBApi.token}` };
        if (fileUpload) {
            headers['Content-Type'] = 'multipart/form-data';
        }
        
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

    /*************************************************************** Listings */

    /** Get listings by search term */
    static async getListings(term) {
        let res;

        if (term === "") {
            res = await this.request(`listings`);
        } else {
            res = await this.request(`listings`, { term });
        }
        return res.listings
    }

    /** Add listing */
    static async addListing(data) {
        let res = await this.request(`listings`, data, "post", true);
        return res.listing;
    }

    /** Get listing photos */

    static async getListingById(id) {
        let res = await this.request(`listings/${id}`);
        return res.listing;
    }

    /*************************************************************** Users */

    /** Handles user sign up */
    static async signUp(newUser) {
        let res = await this.request(`users`, newUser, "post");
        return res.token;
      }

    /** Handles user log in */
    static async login(username, password) {
        let res = await this.request(`login`, { username, password }, "post");
        return res.token;
    }

    /** Get user */
    static async getUserById(id) {
        let res = await this.request(`users/${id}`);
        return res.user;
    }

    /** Get a user. */

    static async getUser(username) {
        let res = await this.request(`users?q=${username}`);
        return res.user;
    }

    /*************************************************************** Messages */

    /** Handles sending a message */
    static async send(toUserId, message) {
        let res = await this.request(`messages/${toUserId}`, message, "post");
        return res.msg;
      }

    /** Gets all message to or from current user */
    static async getAllMessages() {
        let res = await this.request(`messages`);
        console.log("AFTER REQUEST", res)
        return res.msgs;
    }

    /** Get all messages between users */
    static async getConversation(toUserId) {
        let res = await this.request(`messages/${toUserId}`);
        return res.msgs;
    }

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