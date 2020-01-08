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
Using this app is really simple since it is designed to do things automatically. All the user has to do is input a song with the title, artist and album. They then rate the song's energy level and weight on a scale from 1 to 10. Once the song is submitted it automatically gets added to the playlists based on the song's energy and weight.

## Problems / Solutions
Once my original problems of figuring out how I was going to build the app I wanted to build were over I continued to run into many more. One of the more complex problems I ran into was when I was trying to update the music data and then have them automatically re-sort into the new arrays. I spent about a day restructuring my functions in order to get it to do what I was trying to. React gave me a few problems with this but luckily I was able to accomplish it right before I reverted back to a not so concrete way of doing it.

## Stretch Goals / Improvements
Since this app is based off of someone's personal music I wanted to implement authentication but ran out of time. I plan on implementing that ASAP. I also wanted to implement a more complex function for determining what playlist the song goes to instead of only using energy level and song weight. It's a good challenge trying to rate songs on something that is completely subjective on both ends of the app. I am pleased with how the design looks being that I used standard CSS and Skeleton to do it. I would've liked to take the time to use some React tools to help the process but that's just not how this app went for me. Another stretch goal I plan on implementing is being able to sort your music list depending on title, artist or album as well as being able to click on the playlist from the music table and have that modal pop up.

## Recap
All-in-all I am happy how this app came out. It took a lot of coming up with ideas and figuring out how to make it happen, which is my favorite part of coding, but in this case it almost became the death of me. There were plenty of ideas originally planned that where thwarted so figuring out a solution when I ran into problems came to be the story of this app. I could've definitely spent a week doing functionality and a week on design alone but am happy how it ended up looking and feeling. There are plenty of things I wish I could've done with this app but due to the obstacles I wasn't able to build it out the way I originally planned. I definitely plan on coming back to this app and implementing my original goals and perhaps rebuilding it with with some more React tools.
