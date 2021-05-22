# Problem Statement

As a product user, there is a need to get integers that automatically increment so that the user can generate identifiers. User would call a REST endpoint that returns the next available integer.
Why I need to generate identifiers using sequential integers is not important.
Suffice it to say that this challenge is based on a real-world scenario.

> Develop a REST service that:

1. Allows to register as a user. At a minimum, this should be a REST endpoint that accepts an email address and a password and returns an API key.
1. Returns the next integer in the sequence when called. For example, if user's current integer is 12, the service should return 13 when it is called. The endpoint should be secured by an API key. User should not have to provide the previous value of the integer for this to work. Fetching the next integer should cause the current integer to increment by 1 on the server so that if the endpoint is called again, user gets the next integer in the sequence.
1. Allows user to fetch his current integer. For example, if his current integer is 12, the service should return 12. The endpoint should be secured by API key.
1. Allows user to reset his integer to an arbitrary, non-negative value. For example, his integer may be currently 1005. He would like to reset it to 1000. The endpoint should be secured by API key.

# Setup Postman

1. Open Postman
1. Click on *Import*, then click on *Link*
1. Paste [Postman Collection URL] and click on continue
1. Click on *Import*
1. Click on *Manage Environments*, then click on *Import*, then click on *Choose Files*
1. Choose both the JSON files in *PostmanEnvironment* directory inside root directory, and click on *Open*
1. Choose *Heroku* as environment variable
1. Start with Login API in UnAuthed API, on successful response, it'll automatically set *accessToken* environment variable for other authed APIs

# APIs
## UnAuthed
> POST {{host}}/user/signup

>> body

    {
        "firstName": "Vishal",
        "lastName": "Kumar",
        "email": "vishal194kumar@gmail.com",
        "password": "123456",
        "confirmPassword": "123456",
        "gender": "MALE"
    }

> POST {{host}}/user/login

>> body

    {
        "email": "vishal194kumar@gmail.com",
        "password": "123456"
    }

## Authed

> GET {{host}}/user/getCurrentInteger

>> header

    {
        "authorization": "Bearer accessToken",
    }

> GET {{host}}/user/getNextInteger

>> header

    {
        "authorization": "Bearer accessToken",
    }

> PUT {{host}}/user/resetInteger

>> header

    {
        "authorization": "Bearer accessToken",
    }

>> body

    {
        "integer": 420
    }

# License

AGPL-3.0-or-later 

# Meet The Maker
[Vishal Kumar] - Software Engineer 👨‍💻 and an Aspiring Entrepreneur👨‍💼

[Vishal Kumar]: <https://www.linkedin.com/in/the-vishal-kumar/>
[Postman Collection URL]: <https://www.getpostman.com/collections/c72c575620af85491f0d>