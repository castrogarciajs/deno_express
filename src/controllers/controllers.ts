import { Request, Response } from "npm:express";

export const __init__ = (_req: Request, res: Response) => {
  res.send("hello");
};

export const create_task = (_req: Request, res: Response) => {
  res.send("creando tarea");
};

export const update_task = (_req: Request, res: Response) => {
  res.send("update tarea");
};

export const delete_task = (_req: Response, res: Response) => {
  res.send("eliminando tarea");
};
