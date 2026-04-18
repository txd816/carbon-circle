'use client'

import Header from './components/Header'
import NavBar from './components/NavBar'
import CharacterCard from './components/CharacterCard'
import { mockCharacters } from './data/mock'
import { Search, Users, Sparkles } from 'lucide-react'
import { useState } from 'react'

const categories = ['全部', '陪伴', '知识', '文艺', '助手', '冒险', '健康']

export default function CharactersPage() {
  const [activeCategory, setActiveCategory] = useState('全部')

  const filteredCharacters = activeCategory === '全部'
    ? mockCharacters
    : mockCharacters.filter(c => c.category === activeCategory)

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Header />
      
      <main className="max-w-lg mx-auto px-4 pt-4 pb-24">
        {/* Hero Section */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-secondary/10 text-accent-secondary text-sm mb-4">
            <Users className="w-4 h-4" />
            <span>AI 角色广场</span>
          </div>
          <h1 className="text-2xl font-bold mb-2">
            与AI角色<span className="gradient-text">即时对话</span>
          </h1>
          <p className="text-gray-400 text-sm">
            发现有趣的AI角色，开启奇妙对话之旅
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="搜索AI角色..."
            className="w-full pl-12 pr-4 py-3 rounded-2xl glass text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-primary/50"
          />
        </div>

        {/* Categories */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-accent-primary text-white'
                  : 'glass text-gray-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Characters Grid */}
        <div className="grid grid-cols-2 gap-4">
          {filteredCharacters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>

        {/* Floating Action */}
        <button className="fixed bottom-24 right-4 w-14 h-14 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary flex items-center justify-center shadow-lg shadow-accent-primary/30 hover:scale-110 transition-transform animate-pulse-glow">
          <Sparkles className="w-6 h-6 text-white" />
        </button>
      </main>

      <NavBar />
    </div>
  )
}
