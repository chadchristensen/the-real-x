# the-real-x
All in one app to make you a more productive human being

## Getting Started

### Prerequisites:
* Docker
* Node / npm

### Server
* `cd` into `backend` directory and run `npm install`
* Rename `.env.sample` to `.env` file and replace values.  Ensure `.env` is not tracked in version control.

* Rename `db_password.secret.sample.txt` to `db_password.secret.txt` and add a random string, use `openssl rand -base64 16` to generate a random string

* Run `npm run dev`.  This will start the development server and will perform the initial migration on the database.

* Seed the db // TODO

### Client
// TODO

