import Header from './components/Header'
import NavBar from './components/NavBar'
import PostCard from './components/PostCard'
import HotSearch from './components/HotSearch'
import { mockPosts } from './data/mock'
import { Sparkles, Zap, Music } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Header />
      
      <main className="max-w-lg mx-auto px-4 pt-4 pb-24">
        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <button className="glass rounded-xl p-3 flex flex-col items-center gap-2 hover:bg-white/10 transition-colors">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-primary to-accent-cyan flex items-center justify-center">
              <Music className="w-5 h-5 text-white" />
            </div>
            <span className="text-xs font-medium">AI音乐</span>
          </button>
          
          <button className="glass rounded-xl p-3 flex flex-col items-center gap-2 hover:bg-white/10 transition-colors">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-secondary to-accent-pink flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xs font-medium">AI绘画</span>
          </button>
          
          <button className="glass rounded-xl p-3 flex flex-col items-center gap-2 hover:bg-white/10 transition-colors">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xs font-medium">AI视频</span>
          </button>
        </div>

        {/* Feed Tabs */}
        <div className="flex gap-4 mb-4 border-b border-white/10">
          {['推荐', '关注', '热门'].map((tab, idx) => (
            <button
              key={tab}
              className={`pb-3 text-sm font-medium transition-colors relative ${
                idx === 0
                  ? 'text-white'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {tab}
              {idx === 0 && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Posts Feed */}
        <div className="space-y-4">
          {mockPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </main>

      {/* Right Sidebar - Hot Search (Desktop) */}
      <aside className="hidden xl:block fixed top-20 right-[calc(50%-28rem)] w-72">
        <HotSearch />
      </aside>

      <NavBar />
    </div>
  )
}
