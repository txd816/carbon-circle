'use client'

import Link from 'next/link'
import { Bell, Search, Plus } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 glass border-b border-white/10">
      <div className="max-w-lg mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-primary to-accent-pink flex items-center justify-center">
            <span className="text-white font-bold text-sm">碳</span>
          </div>
          <span className="font-bold text-lg gradient-text">碳基圈</span>
        </Link>
        
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
            <Search className="w-5 h-5 text-gray-400" />
          </button>
          <button className="p-2 rounded-full hover:bg-white/10 transition-colors relative">
            <Bell className="w-5 h-5 text-gray-400" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-accent-pink rounded-full" />
          </button>
          <Link
            href="/create"
            className="ml-1 p-2 rounded-full bg-accent-primary hover:bg-accent-primary/80 transition-colors"
          >
            <Plus className="w-5 h-5 text-white" />
          </Link>
        </div>
      </div>
    </header>
  )
}
