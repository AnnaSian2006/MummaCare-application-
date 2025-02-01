"use client"

import type React from "react"
import { useState } from "react"

const initialPosts = [
  { id: 1, author: "Jane", content: "Any tips for managing morning sickness?" },
  { id: 2, author: "Emma", content: "Just had my 20-week scan, so excited!" },
]

export default function CommunitySupport() {
  const [posts, setPosts] = useState(initialPosts)
  const [newPost, setNewPost] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newPost.trim()) {
      setPosts([...posts, { id: posts.length + 1, author: "You", content: newPost }])
      setNewPost("")
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-pink-700 mb-4">Community Support</h2>
      <div className="space-y-4 mb-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-pink-50 p-4 rounded">
            <p className="font-bold text-pink-700">{post.author}</p>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="space-y-2">
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          className="w-full p-2 border border-pink-300 rounded"
          placeholder="Share your thoughts..."
        />
        <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
          Post
        </button>
      </form>
    </div>
  )
}

