"use server";

import getSession from "./get-session";
import getUserByEmail from "./get-user-by-email";

export default async function getCurrentUser() {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }

    const user = await getUserByEmail(session.user.email);

    return user;
  } catch (error) {
    console.error(`Error getting current user: ${error}`);
    return null;
  }
}
