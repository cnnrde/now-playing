# now-playing: A website to show what I'm currently listening to on Spotify [![Run on Repl.it](https://repl.it/badge/github/connordennison/now-playing)](https://repl.it/github/connordennison/now-playing)

## ❓ How does it work?

This project is split into two parts - the frontend and the backend. The backend is built in TypeScript, and communicates with the Spotify api to host a socket.io server, which receives data from the Spotify API, and sends it to the clients every second.

The frontend is built with HTML, CSS and TS and is hosted separately to the backend. It receives the socket data every second and fills the DOM with it.

## 🤔 How can I use it?

The server is easy to deploy, all you need is hardware to run it on, software to run it on.

I'm too lazy to actually write docs on how you can use this, but I deploy it Replit (as I'm too lazy to maintain my linode instance)

## ⚙️ Contributing

Feel free to contribute, just make sure that any commits you make are in correct English, and use [gitmoji](https://gitmoji.dev)

### Demo of frontend (not included in this repo):

![demo](https://i.imgur.com/14OExH6.png)
