import { getSession } from "lib/get-session.js";

export default async function handler (req, res) {
    const session = await getSession(req, res);
    await session.destroy();
    res.redirect('/home');
}