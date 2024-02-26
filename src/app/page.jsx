"use client";

import React from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import awsExports from "@/aws-exports";
Amplify.configure(awsExports);
import TodoPage from "./to_do/TodoPage";

export default function App() {
  return (
    <Authenticator>
      {({ signOut }) => <TodoPage signOut={signOut} />}
    </Authenticator>
  );
}
