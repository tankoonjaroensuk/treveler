// app/Components/EmailLink.tsx
import React, { ReactNode } from "react";

interface EmailLinkProps {
  email: string;
  children?: ReactNode;
}

export default function EmailLink({ email, children }: EmailLinkProps) {
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

  return (
    <a
      href={gmailUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-red-600"
    >
      {children || email}
    </a>
  );
}
