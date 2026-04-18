'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { X, Image as ImageIcon, Tag, Send, Music, Sparkles } from 'lucide-react'

export default function CreatePage() {
  const [content, setContent] = useState('')
  const [images, setImages] = useState<string[]>([])
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const popularTags = [
    'AI音乐', 'AI绘画', 'AI写作', 'AI视频',
    '赛博朋克', '国风', '科技', '创意',
    '分享', '教程', '日常', '求助'
  ]

  const handleAddImage = () => {
    if (images.length < 9) {
      // Mock adding an image
      const newImage = `https://picsum.photos/400/400?random=${Date.now()}`
      setImages([...images, newImage])
    }
  }

  const handleRemoveImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index))
  }

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag))
    } else if (selectedTags.length < 5) {
      setSelectedTags([...selectedTags, tag])
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Header */}
      <header className="sticky top-0 z-40 glass border-b border-white/10">
        <div className="max-w-lg mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="p-2 -ml-2 rounded-full hover:bg-white/10 transition-colors">
            <X className="w-5 h-5" />
          </Link>
          <h1 className="font-semibold">发布动态</h1>
          <button
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              content.trim()
                ? 'bg-gradient-to-r from-accent-primary to-accent-secondary text-white'
                : 'bg-white/10 text-gray-400'
            }`}
            disabled={!content.trim()}
          >
            发布
          </button>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 py-4">
        {/* Content Input */}
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="分享你的AI创作心得..."
          className="w-full min-h-[200px] bg-transparent text-base placeholder-gray-500 resize-none focus:outline-none"
        />

        {/* Images Grid */}
        {images.length > 0 && (
          <div className={`grid gap-2 mb-4 ${
            images.length === 1 ? 'grid-cols-1' : 'grid-cols-3'
          }`}>
            {images.map((img, idx) => (
              <div key={idx} className="relative aspect-square rounded-xl overflow-hidden bg-dark-100">
                <Image
                  src={img}
                  alt={`Upload ${idx + 1}`}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={() => handleRemoveImage(idx)}
                  className="absolute top-1 right-1 w-6 h-6 rounded-full bg-black/60 flex items-center justify-center hover:bg-black/80 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                {idx === 0 && images.length > 1 && (
                  <span className="absolute bottom-1 left-1 px-2 py-0.5 rounded text-xs bg-black/60">
                    封面
                  </span>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center gap-4 py-4 border-t border-white/10">
          <button
            onClick={handleAddImage}
            className="flex items-center gap-2 px-3 py-2 rounded-lg glass text-sm hover:bg-white/10 transition-colors"
          >
            <ImageIcon className="w-5 h-5 text-accent-primary" />
            <span>图片</span>
          </button>
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg glass text-sm hover:bg-white/10 transition-colors">
            <Music className="w-5 h-5 text-accent-pink" />
            <span>音乐</span>
          </button>
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg glass text-sm hover:bg-white/10 transition-colors">
            <Tag className="w-5 h-5 text-accent-cyan" />
            <span>话题</span>
          </button>
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg glass text-sm hover:bg-white/10 transition-colors">
            <Sparkles className="w-5 h-5 text-accent-secondary" />
            <span>AI增强</span>
          </button>
        </div>

        {/* Popular Tags */}
        <div className="mb-4">
          <h3 className="text-sm font-medium mb-3 text-gray-400">添加话题</h3>
          <div className="flex flex-wrap gap-2">
            {popularTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                  selectedTags.includes(tag)
                    ? 'bg-accent-primary text-white'
                    : 'bg-white/5 text-gray-400 hover:text-white'
                }`}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Tags */}
        {selectedTags.length > 0 && (
          <div className="py-4 border-t border-white/10">
            <p className="text-sm text-gray-500 mb-2">已选择的话题</p>
            <div className="flex flex-wrap gap-2">
              {selectedTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-accent-primary/10 text-accent-primary text-sm flex items-center gap-1"
                >
                  #{tag}
                  <button onClick={() => toggleTag(tag)} className="hover:text-white">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>
        )}

        {/* AI Enhancement Hint */}
        <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/20">
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-accent-primary shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-accent-primary">AI 增强</p>
              <p className="text-xs text-gray-400 mt-1">
                开启AI增强功能，自动优化你的内容文案，让帖子获得更多关注
              </p>
            </div>
          </div>
        </div>
      </main>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={(e) => {
          // Handle file selection
          console.log(e.target.files)
        }}
      />
    </div>
  )
}
