'use client'

import Header from './components/Header'
import NavBar from './components/NavBar'
import { Wand2, Music, Image as ImageIcon, Video, FileText } from 'lucide-react'

const tools = [
  {
    id: 'music',
    name: 'AI音乐生成',
    description: '输入歌词或描述，AI为您创作专属音乐',
    icon: Music,
    gradient: 'from-violet-500 to-purple-500',
    bgGradient: 'from-violet-500/20 to-purple-500/20',
  },
  {
    id: 'image',
    name: 'AI图片生成',
    description: '输入prompt，生成精美图片作品',
    icon: ImageIcon,
    gradient: 'from-pink-500 to-rose-500',
    bgGradient: 'from-pink-500/20 to-rose-500/20',
  },
  {
    id: 'video',
    name: 'AI视频生成',
    description: '将图片或文字转换为动态视频',
    icon: Video,
    gradient: 'from-cyan-500 to-blue-500',
    bgGradient: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    id: 'writing',
    name: 'AI写作助手',
    description: '文章、脚本、文案一键生成',
    icon: FileText,
    gradient: 'from-amber-500 to-orange-500',
    bgGradient: 'from-amber-500/20 to-orange-500/20',
  },
]

export default function AIToolsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Header />
      
      <main className="max-w-lg mx-auto px-4 pt-4 pb-24">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-primary/10 text-accent-primary text-sm mb-4">
            <Wand2 className="w-4 h-4" />
            <span>AI 创作中心</span>
          </div>
          <h1 className="text-2xl font-bold mb-2">
            释放创意<span className="gradient-text">无限可能</span>
          </h1>
          <p className="text-gray-400 text-sm">
            选择工具，开启你的AI创作之旅
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid gap-4">
          {tools.map((tool) => {
            const Icon = tool.icon
            return (
              <button
                key={tool.id}
                className="glass rounded-2xl p-5 text-left group hover:scale-[1.02] transition-all duration-300 animate-slide-up"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tool.gradient} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg mb-1">{tool.name}</h3>
                    <p className="text-sm text-gray-400">{tool.description}</p>
                    <div className={`mt-3 inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${tool.bgGradient} text-white opacity-0 group-hover:opacity-100 transition-opacity`}>
                      立即体验
                      <span className="ml-1">→</span>
                    </div>
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        {/* Featured Section */}
        <div className="mt-8">
          <h2 className="font-bold text-lg mb-4">热门模板</h2>
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
            {['赛博朋克风格', '国风水墨', '未来科技', '梦幻童话', '复古胶片'].map((template) => (
              <button
                key={template}
                className="shrink-0 px-4 py-2 rounded-full glass text-sm hover:bg-white/10 transition-colors"
              >
                {template}
              </button>
            ))}
          </div>
        </div>

        {/* Recent Works */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-lg">最近创作</h2>
            <button className="text-sm text-accent-primary">查看全部</button>
          </div>
          <div className="glass rounded-2xl p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-3">
              <Wand2 className="w-8 h-8 text-gray-500" />
            </div>
            <p className="text-gray-400 text-sm">还没有创作记录</p>
            <p className="text-gray-500 text-xs mt-1">开始你的第一次AI创作吧</p>
          </div>
        </div>
      </main>

      <NavBar />
    </div>
  )
}
