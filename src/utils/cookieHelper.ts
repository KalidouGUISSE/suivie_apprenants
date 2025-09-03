import type { Response } from "express";

export class CookieHelper {
  static setRefreshToken(res: Response, token: string) {
    res.cookie("refreshToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // ⚠️ pas de dépendance directe à KEY ici
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000, // 24h
    });
  }

  static clearRefreshToken(res: Response) {
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });
  }
}
