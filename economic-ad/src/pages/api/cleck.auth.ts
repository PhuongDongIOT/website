import { clerkClient, getAuth, buildClerkProps } from "@clerk/nextjs/server";
import { GetServerSideProps } from "next";
 
const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  const { userId } = getAuth(ctx.req);
 
  const user = userId ? await clerkClient.users.getUser(userId) : undefined;
 
  return { props: { ...buildClerkProps(ctx.req, { user }) } };
};

export {
    getServerSideProps
};