'use client'

import Header from './components/Header'
import NavBar from './components/NavBar'
import PostCard from './components/PostCard'
import { currentUser, mockPosts } from './data/mock'
import Image from 'next/image'
import { Settings, Edit3, Heart, MessageCircle, Bookmark, Users, Calendar } from 'lucide-react'

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Header />
      
      <main className="max-w-lg mx-auto pb-24">
        {/* Profile Header */}
        <div className="relative">
          {/* Cover */}
          <div className="h-40 bg-gradient-to-br from-accent-primary via-accent-secondary to-accent-pink" />
          
          {/* Avatar */}
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-12">
            <div className="relative w-24 h-24 rounded-full ring-4 ring-[#0a0a0f] overflow-hidden">
              <Image
                src={currentUser.avatar}
                alt={currentUser.displayName}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Profile Info */}
        <div className="pt-16 px-4 text-center">
          <h1 className="text-xl font-bold">{currentUser.displayName}</h1>
          <p className="text-sm text-gray-500">@{currentUser.username}</p>
          <p className="text-sm text-gray-400 mt-2">{currentUser.bio}</p>

          {/* Stats */}
          <div className="flex justify-center gap-8 mt-4 py-4 border-y border-white/10">
            <div className="text-center">
              <p className="text-lg font-bold">{currentUser.posts}</p>
              <p className="text-xs text-gray-500">动态</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold">{currentUser.followers}</p>
              <p className="text-xs text-gray-500">粉丝</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold">{currentUser.following}</p>
              <p className="text-xs text-gray-500">关注</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-4">
            <button className="flex-1 py-2 rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary text-white text-sm font-medium">
              编辑资料
            </button>
            <button className="w-10 h-10 rounded-xl glass flex items-center justify-center">
              <Settings className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex mt-4 border-b border-white/10">
          {[
            { id: 'posts', label: '动态', icon: Edit3 },
            { id: 'likes', label: '获赞', icon: Heart },
            { id: 'comments', label: '评论', icon: MessageCircle },
            { id: 'collections', label: '收藏', icon: Bookmark },
          ].map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                className="flex-1 flex items-center justify-center gap-1 py-3 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* User's Posts */}
        <div className="px-4 py-4 space-y-4">
          {mockPosts.slice(0, 2).map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {/* Empty State for other tabs */}
        <div className="px-4 py-12 text-center">
          <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-gray-500" />
          </div>
          <p className="text-gray-400 text-sm">暂无更多内容</p>
        </div>
      </main>

      <NavBar />
    </div>
  )
}
