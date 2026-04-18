// Mock Data Types
export interface User {
  id: string
  username: string
  displayName: string
  avatar: string
  bio: string
  followers: number
  following: number
  posts: number
  isFollowing?: boolean
}

export interface Post {
  id: string
  user: User
  content: string
  images: string[]
  likes: number
  comments: number
  collects: number
  isLiked?: boolean
  isCollected?: boolean
  createdAt: string
  tags: string[]
}

export interface AICharacter {
  id: string
  name: string
  avatar: string
  description: string
  category: string
  likes: number
  chats: number
}

export interface MusicItem {
  id: string
  title: string
  artist: User
  cover: string
  duration: string
  price: number
  plays: number
  tags: string[]
}

export interface HotSearch {
  id: string
  keyword: string
  hot: number
  trend: 'up' | 'down' | 'new'
}

// Mock Users
export const mockUsers: User[] = [
  {
    id: '1',
    username: 'ai_creator',
    displayName: 'AI创作者小王',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop',
    bio: '专注于AI音乐创作，探索未来之声 🎵',
    followers: 12580,
    following: 328,
    posts: 256,
  },
  {
    id: '2',
    username: 'digital_artist',
    displayName: '数字艺术家',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    bio: '用AI描绘想象中的世界 🎨',
    followers: 8920,
    following: 156,
    posts: 189,
  },
  {
    id: '3',
    username: 'tech_geek',
    displayName: '科技极客',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    bio: '分享最前沿的AI技术和工具 ⚡',
    followers: 15600,
    following: 89,
    posts: 412,
  },
  {
    id: '4',
    username: 'music_producer',
    displayName: '独立音乐人',
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop',
    bio: '融合电子与AI的跨界音乐人 🎹',
    followers: 6780,
    following: 234,
    posts: 98,
  },
]

// Mock Posts
export const mockPosts: Post[] = [
  {
    id: '1',
    user: mockUsers[0],
    content: '🎉 新作发布！「星际漫游」 - 一首融合赛博朋克与东方元素的AI电子音乐。想象在2049年的上海霓虹灯下穿梭...',
    images: ['https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=600'],
    likes: 1234,
    comments: 89,
    collects: 256,
    isLiked: false,
    isCollected: false,
    createdAt: '2小时前',
    tags: ['AI音乐', '电子音乐', '赛博朋克'],
  },
  {
    id: '2',
    user: mockUsers[1],
    content: '🖼️ 今日AI画作：「云端城市」- 描绘了一座漂浮在云层之上的未来都市，阳光穿透云隙洒下金色的光芒。',
    images: [
      'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600',
      'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600',
    ],
    likes: 2567,
    comments: 156,
    collects: 489,
    isLiked: true,
    isCollected: false,
    createdAt: '4小时前',
    tags: ['AI绘画', '未来城市', '风景'],
  },
  {
    id: '3',
    user: mockUsers[2],
    content: '💡 深度测评：对比了5款主流AI音乐生成工具，最后一款让我惊艳！想知道是哪款吗？评论区告诉我~',
    images: ['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600'],
    likes: 892,
    comments: 234,
    collects: 178,
    isLiked: false,
    isCollected: true,
    createdAt: '6小时前',
    tags: ['AI工具', '测评', '音乐生成'],
  },
  {
    id: '4',
    user: mockUsers[3],
    content: '🎧 深夜创作分享：刚才用AI生成了一段 ambient 音乐，非常适合冥想和入睡。分享给大家~',
    images: ['https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600'],
    likes: 567,
    comments: 45,
    collects: 123,
    isLiked: false,
    isCollected: false,
    createdAt: '8小时前',
    tags: ['AI音乐', '氛围音乐', '深夜分享'],
  },
]

// Mock AI Characters
export const mockCharacters: AICharacter[] = [
  {
    id: '1',
    name: '小梦',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop',
    description: '温柔治愈系的AI少女，擅长倾听与陪伴',
    category: '陪伴',
    likes: 15600,
    chats: 89000,
  },
  {
    id: '2',
    name: '星辰',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop',
    description: '神秘星际旅者，带你探索宇宙奥秘',
    category: '知识',
    likes: 12300,
    chats: 67000,
  },
  {
    id: '3',
    name: '墨白',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop',
    description: '古典诗人灵魂，诗词歌赋样样精通',
    category: '文艺',
    likes: 9800,
    chats: 45000,
  },
  {
    id: '4',
    name: '小智',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    description: '全能AI助手，编程、写作、学习样样在行',
    category: '助手',
    likes: 23400,
    chats: 156000,
  },
  {
    id: '5',
    name: '夜羽',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=200&fit=crop',
    description: '暗黑系御姐，解谜探险的最佳搭档',
    category: '冒险',
    likes: 11200,
    chats: 56000,
  },
  {
    id: '6',
    name: '阳阳',
    avatar: 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=200&h=200&fit=crop',
    description: '阳光开朗大男孩，运动健身指导专家',
    category: '健康',
    likes: 8900,
    chats: 34000,
  },
]

// Mock Music Marketplace
export const mockMusicItems: MusicItem[] = [
  {
    id: '1',
    title: '赛博朋克2077',
    artist: mockUsers[0],
    cover: 'https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=300',
    duration: '3:45',
    price: 29,
    plays: 125600,
    tags: ['电子', '赛博朋克', '未来感'],
  },
  {
    id: '2',
    title: '星际穿越',
    artist: mockUsers[3],
    cover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300',
    duration: '4:20',
    price: 39,
    plays: 89600,
    tags: ['ambient', '太空', '冥想'],
  },
  {
    id: '3',
    title: '竹林深处',
    artist: mockUsers[1],
    cover: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300',
    duration: '3:15',
    price: 19,
    plays: 67800,
    tags: ['国风', '民乐', '自然'],
  },
  {
    id: '4',
    title: '数字狂想曲',
    artist: mockUsers[2],
    cover: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300',
    duration: '5:02',
    price: 49,
    plays: 45600,
    tags: ['古典融合', '电子', '实验'],
  },
]

// Mock Hot Search
export const mockHotSearch: HotSearch[] = [
  { id: '1', keyword: 'AI音乐生成教程', hot: 986000, trend: 'up' },
  { id: '2', keyword: 'Sora视频创作', hot: 875000, trend: 'up' },
  { id: '3', keyword: 'ChatGPT写作技巧', hot: 765000, trend: 'down' },
  { id: '4', keyword: 'Midjourney咒语大全', hot: 654000, trend: 'new' },
  { id: '5', keyword: 'AI数字人直播', hot: 543000, trend: 'up' },
  { id: '6', keyword: 'Stable Diffusion进阶', hot: 432000, trend: 'down' },
  { id: '7', keyword: 'AI作曲实战', hot: 321000, trend: 'new' },
  { id: '8', keyword: '虚拟偶像推荐', hot: 210000, trend: 'up' },
]

// Current logged in user (mock)
export const currentUser: User = {
  id: '0',
  username: 'me',
  displayName: '我',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
  bio: '探索AI的无限可能 🚀',
  followers: 520,
  following: 128,
  posts: 23,
}
