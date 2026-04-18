'use client'

import { Heart, MessageCircle, Bookmark, Share2 } from 'lucide-react'
import Image from 'next/image'
import { Post } from '../data/mock'
import { useState } from 'react'

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  const [isLiked, setIsLiked] = useState(post.isLiked || false)
  const [isCollected, setIsCollected] = useState(post.isCollected || false)
  const [likeCount, setLikeCount] = useState(post.likes)
  const [collectCount, setCollectCount] = useState(post.collects)

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1)
  }

  const handleCollect = () => {
    setIsCollected(!isCollected)
    setCollectCount(isCollected ? collectCount - 1 : collectCount + 1)
  }

  return (
    <article className="glass rounded-2xl p-4 mb-4 animate-fade-in">
      {/* User Info */}
      <div className="flex items-center gap-3 mb-3">
        <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-accent-primary/30">
          <Image
            src={post.user.avatar}
            alt={post.user.displayName}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-sm">{post.user.displayName}</h3>
          <p className="text-xs text-gray-500">@{post.user.username} · {post.createdAt}</p>
        </div>
        <button className="px-3 py-1 text-xs font-medium rounded-full border border-accent-primary/50 text-accent-primary hover:bg-accent-primary/10 transition-colors">
          + 关注
        </button>
      </div>

      {/* Content */}
      <p className="text-sm leading-relaxed mb-3">{post.content}</p>

      {/* Images */}
      {post.images.length > 0 && (
        <div className={`grid gap-2 mb-3 ${
          post.images.length === 1 ? 'grid-cols-1' : 'grid-cols-2'
        }`}>
          {post.images.map((img, idx) => (
            <div
              key={idx}
              className="relative aspect-square rounded-xl overflow-hidden bg-dark-100"
            >
              <Image
                src={img}
                alt={`Post image ${idx + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      )}

      {/* Tags */}
      {post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs rounded-full bg-accent-primary/10 text-accent-primary"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center justify-between pt-2 border-t border-white/5">
        <button
          onClick={handleLike}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all ${
            isLiked
              ? 'text-accent-pink bg-accent-pink/10'
              : 'text-gray-400 hover:text-accent-pink hover:bg-accent-pink/10'
          }`}
        >
          <Heart className={`w-4 h-4 ${isLiked ? 'fill-current animate-pulse' : ''}`} />
          <span className="text-xs">{likeCount}</span>
        </button>

        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-gray-400 hover:text-accent-cyan hover:bg-accent-cyan/10 transition-colors">
          <MessageCircle className="w-4 h-4" />
          <span className="text-xs">{post.comments}</span>
        </button>

        <button
          onClick={handleCollect}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all ${
            isCollected
              ? 'text-accent-secondary bg-accent-secondary/10'
              : 'text-gray-400 hover:text-accent-secondary hover:bg-accent-secondary/10'
          }`}
        >
          <Bookmark className={`w-4 h-4 ${isCollected ? 'fill-current' : ''}`} />
          <span className="text-xs">{collectCount}</span>
        </button>

        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
          <Share2 className="w-4 h-4" />
        </button>
      </div>
    </article>
  )
}
