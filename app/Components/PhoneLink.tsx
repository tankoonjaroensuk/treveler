// app/Components/PhoneLink.tsx
import React, { ReactNode } from "react";

interface PhoneLinkProps {
  phone: string;
  children?: ReactNode;
}

export default function PhoneLink({ phone, children }: PhoneLinkProps) {
  const telUrl = `tel:${phone}`;

  return (
    <a
      href={telUrl}
      className="hover:text-red-600">
      {children || phone}
    </a>
  );
}
