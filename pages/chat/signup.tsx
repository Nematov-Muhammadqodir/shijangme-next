// @ts-nocheck
import React, { useEffect } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/router";

const Signup = () => {
  const router = useRouter();

  const { authUser } = useAuthStore();

  useEffect(() => {
    if (authUser) {
      router.push("/chat");
    }
  }, [authUser, router]);

  return <div>Signup</div>;
};

export default Signup;
