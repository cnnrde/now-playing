// this is a teensy weensy middleware that just logs the path and type of request
// probably shouldn't be left in in prod but i cba to remove

import chalk from 'chalk'
import { Request, Response, NextFunction } from 'express'

function loggerMiddleware(req: Request, _res: Response, next: NextFunction) {
  console.log(
    chalk.greenBright(
      `${req.method} ${req.path} ${req.protocol}/${req.httpVersion}`,
    ),
  )
  next()
}

export default loggerMiddleware
