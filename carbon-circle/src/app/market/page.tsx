'use client'

import Header from './components/Header'
import NavBar from './components/NavBar'
import MusicCard from './components/MusicCard'
import { mockMusicItems } from './data/mock'
import { Music2, TrendingUp, Clock, Filter } from 'lucide-react'
import { useState } from 'react'

const sortOptions = [
  { id: 'hot', label: '热门', icon: TrendingUp },
  { id: 'new', label: '最新', icon: Clock },
  { id: 'price-low', label: '价格低', icon: Filter },
  { id: 'price-high', label: '价格高', icon: Filter },
]

export default function MarketPage() {
  const [activeSort, setActiveSort] = useState('hot')
  const [selectedCategory, setSelectedCategory] = useState('全部')

  const categories = ['全部', '电子', '国风', 'ambient', '古典融合']

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Header />
      
      <main className="max-w-lg mx-auto px-4 pt-4 pb-24">
        {/* Hero Section */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-cyan/10 text-accent-cyan text-sm mb-4">
            <Music2 className="w-4 h-4" />
            <span>AI 音乐交易</span>
          </div>
          <h1 className="text-2xl font-bold mb-2">
            发现<span className="gradient-text">独特音乐</span>
          </h1>
          <p className="text-gray-400 text-sm">
            探索AI创作的原创音乐，支持创作者
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="glass rounded-xl p-3 text-center">
            <p className="text-xl font-bold gradient-text">1.2K</p>
            <p className="text-xs text-gray-500">在售音乐</p>
          </div>
          <div className="glass rounded-xl p-3 text-center">
            <p className="text-xl font-bold gradient-text">580</p>
            <p className="text-xs text-gray-500">创作者</p>
          </div>
          <div className="glass rounded-xl p-3 text-center">
            <p className="text-xl font-bold gradient-text">56K</p>
            <p className="text-xs text-gray-500">总播放</p>
          </div>
        </div>

        {/* Sort Options */}
        <div className="flex gap-2 mb-4 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
          {sortOptions.map((option) => {
            const Icon = option.icon
            return (
              <button
                key={option.id}
                onClick={() => setActiveSort(option.id)}
                className={`shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeSort === option.id
                    ? 'bg-accent-primary text-white'
                    : 'glass text-gray-400 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                {option.label}
              </button>
            )
          })}
        </div>

        {/* Category Pills */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-accent-cyan text-white'
                  : 'bg-white/5 text-gray-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Music Grid */}
        <div className="grid grid-cols-2 gap-4">
          {mockMusicItems.map((music) => (
            <MusicCard key={music.id} music={music} />
          ))}
        </div>

        {/* Load More */}
        <button className="w-full mt-6 py-3 rounded-xl glass text-sm text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
          加载更多
        </button>
      </main>

      <NavBar />
    </div>
  )
}
