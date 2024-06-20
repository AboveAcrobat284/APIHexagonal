import { Request, Response } from 'express';
import userService from '../../application/services/userService';

export const createUser = async (req: Request, res: Response): Promise<void> => {
    const { name, email, password } = req.body;
    try {
        const user = await userService.createUser(name, email, password);
        res.status(201).json(user);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: "An unknown error occurred" });
        }
    }
};

export const getUserById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const user = await userService.getUserById(id);
        res.status(200).json(user);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: "An unknown error occurred" });
        }
    }
};

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: "An unknown error occurred" });
        }
    }
};

export const updateUser = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const { name, email, password } = req.body;
    try {
        const user = await userService.updateUser(id, name, email, password);
        res.status(200).json(user);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: "An unknown error occurred" });
        }
    }
};

export const deleteUserById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        await userService.deleteUserById(id);
        res.status(204).send();
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: "An unknown error occurred" });
        }
    }
};
