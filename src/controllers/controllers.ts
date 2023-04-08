import { Request, Response } from "npm:express";
import Task from "../models/Task.ts";

export const __init__ = async (_req: Request, res: Response) => {
  const tasks = await Task.find();
  return res.json(tasks);
};

export const create_task = async (req: Request, res: Response) => {
  const task = await Task.create(req.body);
  return res.json(task);
};

export const update_task = async (req: Request, res: Response) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  return res.json(task);
};

export const delete_task = async (req: Response, res: Response) => {
  const task = await Task.findByIdAndDelete(req.params.id);
  return res.json(task);
};
