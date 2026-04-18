'use client'

import { mockHotSearch } from '../data/mock'
import { TrendingUp, TrendingDown, Sparkles, Search } from 'lucide-react'

export default function HotSearch() {
  return (
    <div className="glass rounded-2xl p-4 mb-4">
      <div className="flex items-center gap-2 mb-4">
        <FireIcon className="w-5 h-5 text-accent-pink" />
        <h2 className="font-bold text-sm">热搜榜</h2>
      </div>
      
      <div className="space-y-3">
        {mockHotSearch.map((item, index) => (
          <div
            key={item.id}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <span className={`w-5 text-center text-sm font-bold ${
              index < 3 ? 'text-accent-pink' : 'text-gray-500'
            }`}>
              {index + 1}
            </span>
            
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate group-hover:text-accent-primary transition-colors">
                {item.keyword}
              </p>
              <p className="text-xs text-gray-500">
                {item.hot.toLocaleString()} 热度
              </p>
            </div>

            <div className="flex items-center gap-1">
              {item.trend === 'up' && (
                <TrendingUp className="w-3 h-3 text-accent-primary" />
              )}
              {item.trend === 'down' && (
                <TrendingDown className="w-3 h-3 text-gray-500" />
              )}
              {item.trend === 'new' && (
                <Sparkles className="w-3 h-3 text-accent-cyan" />
              )}
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 py-2 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors">
        查看完整热搜
      </button>
    </div>
  )
}

function FireIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 23c-3.866 0-7-3.134-7-7 0-2.5 1.5-4.5 3-6 .5-.5 1-1 1-2 0-.5-.5-1-1-1-2.5 0-5 2-5 5 0 4.5 3.5 8 8 8s8-3.5 8-8c0-1-.5-2-1-3l-1-1c-.5.5-1 1-1 2 0 1 .5 1.5 1 2 1.5 1.5 3 3.5 3 6 0 3.866-3.134 7-7 7z" />
    </svg>
  )
}
