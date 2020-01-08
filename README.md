# MERN_Music
[MERN_Music](https://mern-music.herokuapp.com/)

## Author
Gianni Nola

## Technologies Used
M - MongodDB / Mongoose

E - Express

R - React

N - Node.js

## User Stories / Approach Taken
As an avid music listener I make playlists for just about every occasion. I am VERY particular to what music fits in certain instances such as the time of day, the weather outside and the time of year, so I wanted to create an app that created those playlists for me according to real time data on my app. My original plan was to connect my own Apple Music Library and use that data to automatically generate playlists that could then be rendered in my library. Unfortunately, the only way for that to be possible was to build an actual Apple app. Since that wasn't plausible I tried a different approach where I would request my data from Apple (specifically music data) and would then be able to input that into my app and still make playlists but this time based off of my listening history. Another idea that got tossed out due to Apple not being able to get me the data but third time is the charm! My third and final idea was to just manually input songs and have them automatically be rendered in playlists.

## Navigating the App
Using this app is really simple. All the user has to do is input a song with the title, artist and album. They then rate the song's energy level and weight on a scale from 1 to 10. Once the song is submitted it automatically gets added to the playlists based on the song's energy and weight.


## Unsolved Problems
Since I am not creating an App to be deployed as an app within Apple's App Store I was unable to access the Apple Music API needed to reach my original goals.
