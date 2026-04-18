'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MusicItem } from '../data/mock'
import { Play, Pause, ShoppingCart, Heart } from 'lucide-react'

interface MusicCardProps {
  music: MusicItem
}

export default function MusicCard({ music }: MusicCardProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  return (
    <div className="glass rounded-2xl p-4 cursor-pointer transition-all duration-300 hover:scale-[1.02] group">
      <div className="relative mb-3">
        <div className="relative aspect-square rounded-xl overflow-hidden">
          <Image
            src={music.cover}
            alt={music.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-12 h-12 rounded-full bg-accent-primary flex items-center justify-center hover:scale-110 transition-transform"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-white" />
              ) : (
                <Play className="w-5 h-5 text-white ml-0.5" />
              )}
            </button>
          </div>
        </div>
        <span className="absolute bottom-2 right-2 px-2 py-0.5 text-xs rounded-full bg-black/60 text-white">
          {music.duration}
        </span>
      </div>

      <h3 className="font-bold text-sm mb-1 truncate">{music.title}</h3>
      <p className="text-xs text-gray-400 mb-2">@{music.artist.username}</p>

      <div className="flex items-center gap-1 mb-3">
        {music.tags.slice(0, 2).map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-[10px] rounded-full bg-accent-primary/10 text-accent-primary"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`p-1.5 rounded-full transition-colors ${
              isLiked ? 'text-accent-pink bg-accent-pink/10' : 'text-gray-400 hover:text-accent-pink'
            }`}
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
          </button>
          <span className="text-xs text-gray-500">{music.plays.toLocaleString()} 播放</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-accent-primary">¥{music.price}</span>
          <button className="p-1.5 rounded-full bg-accent-primary hover:bg-accent-primary/80 transition-colors">
            <ShoppingCart className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}
