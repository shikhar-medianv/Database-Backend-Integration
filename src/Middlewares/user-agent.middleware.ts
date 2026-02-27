import { NextFunction, Request, Response } from "express";

export function userAgent(req: Request, res: Response, next: NextFunction) {
    const ua = req.headers["user-agent"]
    console.log(ua)

    req["ua"] = ua
    next()
}