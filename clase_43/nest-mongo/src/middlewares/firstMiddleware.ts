import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

export class FirstMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(
      `Peticion con el metodo ${req.method} con la ruta ${req.baseUrl} recibida`,
    );
    next();
  }
}
