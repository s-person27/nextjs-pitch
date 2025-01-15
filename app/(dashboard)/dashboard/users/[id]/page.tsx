import Link from "next/link";
import React from "react";

const UserPage = async ({ params }: { params: { id: string } }) => {
  // WARNING: `params` should be awaited before using its properties. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis
  const { id } = await params;
  return <h1 className="text-3xl">User Profile: {id}</h1>;
};

export default UserPage;
