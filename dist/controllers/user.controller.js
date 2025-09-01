import { UserService } from "../services/user.service.js";
export class UserController {
    static async create(req, res) {
        try {
            const user = await UserService.create(req.body);
            res.status(201).json(user);
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
    static async getAll(req, res) {
        try {
            const users = await UserService.getAll();
            res.json(users);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    static async getOne(req, res) {
        try {
            const user = await UserService.getOne(Number(req.params.id));
            if (!user)
                return res.status(404).json({ message: "User not found" });
            res.json(user);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    static async update(req, res) {
        try {
            const user = await UserService.update(Number(req.params.id), req.body);
            res.json(user);
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
    static async delete(req, res) {
        try {
            await UserService.delete(Number(req.params.id));
            res.status(204).send();
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}
//# sourceMappingURL=user.controller.js.map