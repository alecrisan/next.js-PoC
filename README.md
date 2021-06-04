# Proof of Concept application for the Next.js framework

^ All the information in this file can also be found inside the **PoC-NextJS.pdf** file. ^

## What is Next.js?

Next.js is an open-source React front-end development web framework created by Vercel. It enables features such as server-side rendering and generating static websites.

## Setup

Requirements

* Node.js 10.13 or later
* MacOS/Windows/Linux

## Creating a new Next.js app using the terminal 
The easiest way is using “create-next-app” because it sets up everything you need automatically:

`npx create-next-app`
or
`yarn create next-app`

## Running the aplication

Inside the project directory:

```
npm install
npm run dev
```
The application will now be available at http://localhost:3000.
## TVTime

The application created as a proof of concept for this framework is one that displays movies and tv shows along with details about each of them, such as description, score, number of episodes and the cover photo. It allows users to browse through the lists of the most popular movies and tv shows.

<img width="1107" alt="Screenshot 2021-06-04 at 20 23 03" src="https://user-images.githubusercontent.com/48317259/120840661-31106100-c573-11eb-835d-fc11fa8e1e2e.png">

## Pages

In Next.js, a **page** is a React Component exported from a file in the “pages” directory, each one associated with a route based on its filename.

**Index routes** – the router will automatically route files that are named “index” to the root of the directory. So *“pages/index.js”* will always be associated with the *‘/’* (home) route.
And in another example, *“pages/movies/first-movie.js”* is associated with the *'movies/first-movie'* route. **Nested routes** are also supported.
So each desired page should be created inside the pages directory with the name of the route you want it to have.

**Dynamic routes**

Next.js also supports dynamic routing for pages with routes that need external data.
This is done by adding brackets to a page name: for example the page *“pages/movies/[id].js”* will match any route like *'/movies/1', '/movies/12'* – in this case it’s intended for displaying the details of a movie with a given id.

## API routes

You can also build your own API with Next.js, by adding files inside a folder **“pages/api”**. Just like in case of pages, the files will be mapped to routes like *'/api/*'*, but they will be treated as *API endpoints*, instead of pages.

For example, the following API route “pages/api/index.js” returns a json response with the status code 200 that gets all the movies from the database.

<img width="404" alt="Screenshot 2021-06-03 at 18 23 14" src="https://user-images.githubusercontent.com/48317259/120838298-53ed4600-c570-11eb-8fa9-b6f5aee46ed5.png">

The function needs to be exported as default and receives as parameters:
- **req**: an instance of http.IncomingMessage
- **res**: an instance of http.ServerResponse

Moreover, these API routes can also be **dynamic**, for example fetching a movie by its id inside a file called *'pages/api/movie/[id].js'*:

<img width="479" alt="Screenshot 2021-06-03 at 18 30 46" src="https://user-images.githubusercontent.com/48317259/120838382-6d8e8d80-c570-11eb-9366-2061186dcf0d.png">

It’s very similar except that it also uses a query parameter for the id which is passed to the ‘find’ function that searches the db. It also returns a 404 error status if the movie is not found.

## Links

Client-side route transitions are allowed, similar to a single page application, using a React component called **“Link”**.

<img width="393" alt="Screenshot 2021-06-03 at 19 06 39" src="https://user-images.githubusercontent.com/48317259/120838433-7a12e600-c570-11eb-83d9-ac5ada77636f.png">

In this case each element of the movies array has a link to its personal page containing its details. **Dynamic paths** are present here as well, in the value of the href tag with the movie id as a parameter. When clicking on a movie, you should be taken to its details page.

<img width="1120" alt="Screenshot 2021-06-04 at 20 23 26" src="https://user-images.githubusercontent.com/48317259/120840589-1fc75480-c573-11eb-8955-b2490538df20.png">

<img width="1104" alt="Screenshot 2021-06-04 at 20 23 35" src="https://user-images.githubusercontent.com/48317259/120840605-22c24500-c573-11eb-859f-0f621cb81c56.png">


## Pre-rendering

By default, Next.js pre-renders every page, generating HTML in advance for each page, instead of doing it by client-side Javascript. This is one of the features that contributes to this framework’s level of *performance*.

There are 2 forms of pre-rendering in Next.js, the difference between them being **WHEN** it generates the HTML for pages:
* **Static generation**(recommended) – HTML generated at build time & reused on each request
* **Server-side rendering** – HTML generated on each request

A “hybrid” application can be developed by using both types of pre- rendering for different pages, but the Static Generation is recommended because it is much faster. However, if your pages need frequently updated data, server-side rendering might be more appropriate.

### Static Generation without data

This is done by default by the framework if the page does not need any external data to be fetched.

### Static Generation with data

However if fetching external data is required (from a file, an API, a database etc), there are 2 functions that can be used:
* **getStaticProps** – the page content depends on external data

The function needs to be implemented in the same file, and exported as an async function. It gets called at build time and passes the fetched data to the page’s props.

<img width="354" alt="Screenshot 2021-06-03 at 19 54 27" src="https://user-images.githubusercontent.com/48317259/120839059-294fbd00-c571-11eb-8177-36853568f2f4.png">

* **getStaticPaths** – the page paths depend on external data

This is similar to the previous function, it’s still an async exported function but in this case you return the paths that you want to pre- render.

### Server-side rendering

To make sure your page is updated more frequently, another function needs to be implemented instead of getStaticProps – **getServerSideProps** – still an async exported function, but it will be called by the server on each request, not at build time.

![Screenshot 2021-06-03 at 20 10 17 (2)](https://user-images.githubusercontent.com/48317259/120839386-8d728100-c571-11eb-8fe9-7ae00a756894.png)


### Client-side rendering

This strategy is useful if a page contains frequently updating data that doesn’t need to be pre-rendered.
* First, statically pre-render parts of the page that do not require external data (ex: loading states).
* Then fetch external data from the client using JavaScript and display it.

### SWR – stale-while-revalidate

SWR is a React hook for data fetching created by the team behind Next.js with multiple nice features such as caching, revalidation, refetching on interval etc. It is highly recommended for client-side fetching as the updates are done constantly and automatically, keeping the UI fast and reactive.

It does not require any additional setup, just importing the **useSwr** hook and using it inside your component. The function accepts a key string (the API url) and a fetcher function that returns the data. Based on the status, 2 values can be returned: **data** and **error**.

<img width="749" alt="Screenshot 2021-06-03 at 20 47 15" src="https://user-images.githubusercontent.com/48317259/120839822-12f63100-c572-11eb-824b-ec3621114baf.png">

When used together with Static Generation, the pre-fetched data from getStaticProps can be passed as the initial value to the **initialData** option inside the fetcher function – in this case the staticMovies which are actually the props.

So the page can be cached and accessed very fast but the fetched data can be dynamic and update itself over time.

### Fast Refresh

The fast refresh is a very useful feature of Next.js because it gives instant feedback to the programmer regarding the edits performed on the code, without losing component state.

It is also worth mentioning that when making syntax errors, fixing it and saving the file will make the error dissapear automatically without the need of reloading the app.
