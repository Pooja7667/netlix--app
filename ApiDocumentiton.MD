# Entertainment App API Documentation

Welcome to the Entertainment App (Netflix Clone) API documentation. This API provides endpoints to access a wide range of movies, TV shows, trending content, user authentication, and user watchlists.

## Authentication

Authentication is required for certain endpoints to access user-specific features such as watchlists. The authentication process involves registering a new user, logging in.


### User

Endpoints related to user management enable users to register, login, logout, and manage their watchlists.
 ## endpoins
- /register`: Register a new user.
- `/login`: Login as an existing user.

## Error Handling

The API returns appropriate HTTP status codes along with error messages .

# Entertainment App Database Schema Documentation

## Overview

This document outlines the database schemas used in the Entertainment App for managing movies, TV shows, and user data.

## Schemas

### Movie Schema

Purpose: Defines the structure for storing movie data.
Collection: Movies

#### Required Fields:

- title: String
- genre: Array of Strings
- rating: Numbar
- posterUrl: String
- trailerUrl: String

### TV Show Schema

Purpose: Defines the structure for storing TV show data.
Collection: TV Shows

#### Required Fields:

- title: String
- rating: Number
- genres: Array of Strings
- bannerUrl: String
- posterUrl: String

### User Schema

Purpose: Manages user authentication and stores user-specific data.
Collection: Users

#### Fields:

- email: String (required)
- password: String (required)
- watchlist: Array of ObjectIds (references Movies and TV Shows)

#### Features:

- timestamps: Automatically manages creation and update timestamps.


## Model Creation

Function: `mongoose.model()` is used to create models based on the defined userSchemas and user which interact with the database.