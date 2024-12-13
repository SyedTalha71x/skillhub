import jwt from "jsonwebtoken";
import { FailureResponse } from "../Helper/helper.js";

export const auth = async (req, res, next) => {
  try {
    const authHeader = req.header("Authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ message: "Access denied. No token provided." });
    }

    const token = authHeader.split(" ")[1];
    console.log("parsed token -------------", token);

    if (!token) {
      return res
        .status(401)
        .json({ message: "Access denied. Malformed token." });
    }
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error);
    return FailureResponse(res, "Internal Server Error", null, 500);
  }
};
