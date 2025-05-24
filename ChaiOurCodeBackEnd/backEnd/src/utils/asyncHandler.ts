import { Request, Response, NextFunction } from "express";

type RequestHandlerType = (req: Request, res: Response, next: NextFunction) => Promise<void> | void;

const asyncHandler = (requestHandler: RequestHandlerType) => {
  (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(requestHandler(req, res, next)).catch((error) =>
      next(error)
    );
  };
};

export { asyncHandler };

// higherOderFun Example
// const higherOrderFn00 = (fn)=> {()=>{}}
// make it short
// const higherOrderFn01 = async(fn)=> ()=>{}
