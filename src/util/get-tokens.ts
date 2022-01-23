require('dotenv').config()
import SpotifyWebApi from 'spotify-web-api-node'
import chalk from 'chalk'

const args = process.argv
if (args.length > 3) {
  console.log(chalk.red('Too many arguments'))
  console.log(chalk.yellow('Usage: yarn get-tokens <auth-code>'))
  process.exit(1)
} else if (args.length < 3) {
  console.log(chalk.red('Not enough arguments'))
  console.log(chalk.yellow('Usage: yarn get-tokens <auth-code>'))
  process.exit(1)
}

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: process.env.SPOTIFY_REDIRECT_URI,
})

type SuccessfulCodeExchangeResponse = {
  access_token: string
  refresh_token: string
}

const exchangeCodeForAccessAndRefreshToken = async (
  code: string,
): Promise<SuccessfulCodeExchangeResponse> => {
  const data = await spotifyApi.authorizationCodeGrant(code)
  return {
    access_token: data.body['access_token'],
    refresh_token: data.body['refresh_token'],
  }
}

const getTokens = async (code: string): Promise<void> => {
  exchangeCodeForAccessAndRefreshToken(code).then((data) => {
    console.log(chalk.greenBright(`SPOTIFY_ACCESS_TOKEN=${data.access_token}`))
    console.log(
      chalk.greenBright(`SPOTIFY_REFRESH_TOKEN=${data.refresh_token}`),
    )
  })
}

getTokens(args[2])
