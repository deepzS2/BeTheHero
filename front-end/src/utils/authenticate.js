import jwt from "jsonwebtoken";
import authConfig from "../config/auth.json";

export default function authenticate(header) {
  if (!header) {
    return;
  }

  const parts = header.split(' ');

  if (!parts.length === 2) {
    return;
  }

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    return;
  }

  const id = jwt.verify(token, authConfig.secret, (err, decoded) => {
    if (err) return;

    return decoded.id;
  });

  if (!id) {
    return;
  }

  return id;
}