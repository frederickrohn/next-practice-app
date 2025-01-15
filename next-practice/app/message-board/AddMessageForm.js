"use client"; // Mark as a client component

import { useState } from "react";

export default function AddMessageForm() {
  const [content, setContent] = useState("");
  const [username, setUsername] = useState("");
  const [category, setCategory] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content,
          username,
          category: category || undefined, // Optional field
        }),
      });

      if (response.ok) {
        // Reset form fields
        setContent("");
        setUsername("");
        setCategory("");

        // Refresh the page to display the new message
        window.location.reload();
      } else {
        console.error("Failed to add the message.");
      }
    } catch (error) {
      console.error("An error occurred while adding the message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 mb-4 w-full max-w-xl p-4 items-center"
    >
      <textarea
        placeholder="The Message"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        className="border border-[0.5px] border-gray-800 w-full p-2 h-32 bg-transparent text-black dark:text-white placeholder-gray-500 resize-none focus:outline-none rounded"
      />
      <div className="flex gap-2 w-full">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="border border-[0.5px] border-gray-800 rounded w-full p-2 bg-transparent text-black dark:text-white placeholder-gray-500 resize-none focus:outline-none"
        />
        <input
          type="text"
          placeholder="Category (optional)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-[0.5px] border-gray-800 rounded w-full p-2 bg-transparent text-black dark:text-white placeholder-gray-500 resize-none focus:outline-none"
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-auto rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
      >
        {isSubmitting ? "Submitting..." : "Add Message"}
      </button>
    </form>
  );
}
