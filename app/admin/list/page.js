import React from "react";
import Link from "next/link";
import TopicsList from "../../components/TopicsList";
// import { authOptions } from '../../api/auth/[...nextauth]/route'
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

import { getServerSession } from "next-auth";

export default async function page() {
  let session = await getServerSession(authOptions);
  if (!session) {
    redirect("/signin?callbackUrl=/admin/list");
  }
  console.log("session:", session);

  return (
    <div className="flex">
      <div className="w-64"></div>
      <div className="flex-1 bg-white">
        {session.user.name === "이중재" ? (
          <div>
            <TopicsList></TopicsList>
            <nav aria-label="Page navigation example">
              <div className="flex">
                <div className="w-64"></div>
                <div className="flex mx-auto bg-white"></div>
              </div>
            </nav>
          </div>
        ) : (
          <div className="flex w-full h-screen items-center justify-center text-center text-5xl">
            <div>관리자로 로그인하세요</div>
          </div>
        )}
      </div>
    </div>
  );
}
