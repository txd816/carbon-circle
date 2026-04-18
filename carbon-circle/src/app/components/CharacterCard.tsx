'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AICharacter } from '../data/mock'
import { MessageCircle, Heart } from 'lucide-react'

interface CharacterCardProps {
  character: AICharacter
}

export default function CharacterCard({ character }: CharacterCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="glass rounded-2xl p-4 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent-primary/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative mb-3">
        <div className="relative w-full aspect-square rounded-xl overflow-hidden">
          <Image
            src={character.avatar}
            alt={character.name}
            fill
            className="object-cover transition-transform duration-500"
            style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
          />
        </div>
        <span className="absolute top-2 right-2 px-2 py-0.5 text-xs rounded-full bg-accent-primary/80 text-white">
          {character.category}
        </span>
      </div>

      <h3 className="font-bold text-sm mb-1">{character.name}</h3>
      <p className="text-xs text-gray-400 mb-3 line-clamp-2">{character.description}</p>

      <div className="flex items-center justify-between text-xs text-gray-500">
        <div className="flex items-center gap-1">
          <Heart className="w-3 h-3" />
          <span>{character.likes.toLocaleString()}</span>
        </div>
        <div className="flex items-center gap-1">
          <MessageCircle className="w-3 h-3" />
          <span>{character.chats.toLocaleString()}</span>
        </div>
      </div>

      <button className="w-full mt-3 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-accent-primary to-accent-secondary text-white hover:opacity-90 transition-opacity">
        开始对话
      </button>
    </div>
  )
}
