# ShareBnB 

ShareBnB is a fullstack Airbnb clone where hosts can list their backyard or pool spaces for rent by other users. ShareBnB utilizes a React frontend, a Flask backend, and AWS S3 for photo uploads. For ease of deployment, the backend repository has been separated and can be found [here](https://github.com/ncuenca/shareBnB-backend).

ShareBnB allows users to sign-up or login. Authentication is implemented with Bcrypt and persists with JSON Web Tokens. Once logged in, users have access to the following features: 
- view all current listings
- search for listings by name
- add a listing and upload their own photos
- send and receive private messages with other users

You can view the deployed version of ShareBnB here.

The fake users, user information, and listings are created with Faker and are not real people nor addresses. 

<br>

## React Component Hierarchy

![ShareBnB Frontend Component Hierarchy](/public/sharebnb-component-hierarchy.png)

<br>

## Setup Instructions

1. Clone and install the backend repository [here](https://github.com/ncuenca/shareBnB-backend).
2. Navigate into ShareBnB frontend directory `cd shareBnB-frontend`
3. Install dependencies `npm install`
4. Start the React App `npm start`

## Authors

ShareBnB is authored by [Mike Chang](https://github.com/mykeychain) and [Nate Cuenca](https://github.com/ncuenca).

## Technologies Used
- [React](https://reactjs.org/) - Javascript frontend framework
- [Flask](https://flask.palletsprojects.com/en/2.0.x/) - Python backend framework
- [PostgreSQL](https://www.postgresql.org/) - Relational database system
- [AWS S3](https://aws.amazon.com/s3/) - Cloud storage system