# Qudini
[Svelte](https://svelte.dev) front-end that uses the unofficial Qudini Kiosk API.

## Why

I use [Qudini](https://qudini.com) multiple times a week to check-in and check-out my children to nursery. However there isn't the ability to store my data, so I have to renter the nursery room, my name, my children's names and their room every time I use it. This custom front-end stores the data as a cookie, to save some daily pain.

## How

I'll write an article going in depth at some point, but I just logged the XHR network requests made during check-in, and found the POST request that was made to the Qudini API. I did a quick test in Postman to see if I could make this request manually, and found that it all worked as expected. That was the beginning of this incredible adventure.
