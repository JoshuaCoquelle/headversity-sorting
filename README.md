<p align="center" style="margin: 20px 0">
  <img src="petversity.client/src/assets/petversity.png" width="300"/>
</p>

# Petversity

## Introduction
Petversity is a full stack responsive web application built with TypeScript using React and Adonis.

<br>

## Features

### API:
The Petversity API is able to:
- Login and register users
- Create/Read/Update/Delete (CRUD) pets for the current user
- Create/Read/Update/Delete (CRUD) pet health score journals

All data in Petversity has been seeded using factories and has true model relationships between users, pets and journals. The pets endpoint has been tested using the Adonis Japa testing framework as a demonstration and manually tested with Postman.

Technology:
- TypeScript
- Adonis 5+
- Lucid ORM
- MySQL Database
- Japa

### Client:
The Petversity client is able to:
- Login using a real seeded admin user (registration works but is disabled)
- View all of the authenticated user's pets
- Sort ports via name or age
- Has protected routes only accessible when logged in (/pets)
- Has a custom Petversity logo/favicon

Client note: Although the API is capable of CRUD'ing pets and pet journals, as well as user registration, this was not implemented on the frontend due to time with this being a demo project. These routes and views would otherwise be implemented.

Technology:
- TypeScript
- React 18+
- React Router 6+
- Redux Toolkit (RTK) 
- Material UI (MUI) 5

<br>

## Assignment 
Requirement: I want to be able to sort a list of items.
- Sign up for a GitHub account
- Create a private repo and call it headversity sorting
- Create a backend with AdonisJs (https://adonisjs.com/) where you return a list of items.
- Create a frontend in React and display the list of items.
(https://create-react-app.dev/docs/adding-typescript/)
- Once done share the GitHub repo with tommy@headversity.com and russ@headversity.com

Hint:
- Not looking to see how much you can code
- Feel free to repurpose past work you did to meet the requirement
- Show off your work to us
- This is a chance for you to evaluate our tech to see how you like it
- If you have questions, don’t hesitate to ask.


<br>

### API Setup Instructions:
[https://github.com/JoshuaCoquelle/headversity-sorting/blob/main/petversity.api/README.md](petversity.api/README.md)

<br>

### Client Setup Instructions:
[https://github.com/JoshuaCoquelle/headversity-sorting/blob/main/petversity.client/README.md](petversity.client/README.md)
