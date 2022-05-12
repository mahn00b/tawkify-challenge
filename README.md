## Getting Started

First, install the dependencies:
```bash
$ npm install
# or
$ yarn install
```

Then, run the development server:

```bash
$ npm run dev
# or
$ yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## API

### GET `/api/v1/list`

Returns an array of strings based on previously recorded list items

### POST `/api/v1/list`

Accepts a string value in the body and adds an item to the list, then returns the resulting new list.

Returns with an error if the list is at maximum capacity (3).

### DELETE `/api/v1/list`

Accepts a string value in the body and removes that item from the list. It then returns the resulting new list.

Returns with an error if the specified value is not in the list or if there isn't a string in the request body.

## Live Example

Deployed this app using Vercel. [You can check it out here](https://tawkify-challenge.vercel.app/).


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

