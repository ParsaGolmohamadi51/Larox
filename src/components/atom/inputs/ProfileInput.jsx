"use client";
import React from "react";

export default function Input({
  label,
  value,
  onChange,
  type = "text",
  className,
}) {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && <label className="text-sm font-medium mb-1">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
