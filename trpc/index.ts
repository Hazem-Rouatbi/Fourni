import { authCredValitator } from "../lib/validators/account-cred-validator";
import { publicProcidure, router } from "./trpc";
import { getPayloadClient } from "../backend/get-payload";
import { TRPCError } from "@trpc/server";

export const authRouter = router({
  createUser: publicProcidure
    .input(authCredValitator)
    .mutation(async ({ input }) => {
      const { email, password } = input;
      const payload = await getPayloadClient();
      const { docs: users } = await payload.find({
        collection: "users",
        where: {
          email: {
            equals: email,
          },
        },
      });
      if (users.length !== 0) {
        throw new TRPCError({ code: "CONFLICT" });
      }
      await payload.create({
        collection: "users",
        data: {email,password,role:'user'},
      });
      return {succsess:true,sentToEmail:email};
    }),
});

export type AppRouter = typeof authRouter;
