import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '碳基圈 - AI内容社交平台',
  description: '探索AI生成的音乐、图片和角色，与创意社区互动',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="antialiased min-h-screen bg-[#0a0a0f]">
        {children}
      </body>
    </html>
  )
}
