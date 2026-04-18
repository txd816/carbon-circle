/**
 * 碳基圈 AI API 配置文件
 * 集成三个免费AI API：硅基流动（AI聊天）、Pollinations（AI图片）、Mureka（AI音乐）
 * Pollinations 图片生成完全免费，无需 API Key
 */

// ==================== 1. 硅基流动 API (AI聊天) ====================
// 获取地址: https://account.siliconflow.cn
// 特点: 国内直连，免费14元额度，支持多种模型
// 端点: https://api.siliconflow.cn/v1/chat/completions
// 推荐免费模型: Qwen/Qwen2.5-7B-Instruct
// 
// 申请步骤:
//   1. 访问 https://account.siliconflow.cn
//   2. 使用手机号/微信注册登录
//   3. 进入控制台 -> API Keys
//   4. 点击创建 API Key 复制密钥
const SILICONFLOW_API_KEY = 'sk-qhywfaoimnrcowobgtjlkioknafqffamwnprgfnpskhjpcpz';
const SILICONFLOW_API_URL = 'https://api.siliconflow.cn/v1/chat/completions';
const SILICONFLOW_MODEL = 'Qwen/Qwen2.5-7B-Instruct'; // 免费模型

// ==================== 2. Pollinations AI (AI图片生成) ====================
// 获取地址: https://pollinations.ai
// 特点: 完全免费，无需注册，无需 API Key
// 国内可用，基于 FLUX 模型，质量高
// 调用方式: GET https://image.pollinations.ai/prompt/{URL编码的提示词}
// 
// 可选参数:
//   - width: 宽度（默认1024）
//   - height: 高度（默认1024）
//   - model: flux 或 turbo
//   - seed: 随机种子
//   - nologo: true（去水印）
//   - enhance: true（增强）
// 
// 使用方法:
//   直接调用 generateImageUrl(prompt, width, height) 即可生成图片 URL
const POLLINATIONS_API_URL = 'https://image.pollinations.ai/prompt';

// ==================== 3. Mureka API (AI音乐生成) ====================
// 获取地址: https://platform.mureka.cn
// 特点: 昆仑万维，中文效果最好，支持歌词生成
// 端点: https://api.mureka.cn/v1/song/generate
// 查询端点: https://api.mureka.cn/v1/song/query/{task_id}
// 新用户有免费生成额度
// 
// 申请步骤:
//   1. 访问 https://platform.mureka.cn
//   2. 点击登录 -> 注册账号
//   3. 进入控制台 -> API Keys
//   4. 创建并复制API Key
const MUREKA_API_KEY = 'op_dxoteyxg1oxukgeyfqct70bvhn6plsren';
const MUREKA_API_URL = 'https://api.mureka.cn/v1/song/generate';
const MUREKA_QUERY_URL = 'https://api.mureka.cn/v1/song/query';

// ==================== 配置检查函数 ====================
const API_CONFIG = {
    // 检查硅基流动API是否已配置
    checkSiliconFlowConfigured: function() {
        return SILICONFLOW_API_KEY && SILICONFLOW_API_KEY !== 'YOUR_SILICONFLOW_API_KEY_HERE';
    },
    
    // Pollinations 不需要配置，始终可用
    checkPollinationsConfigured: function() {
        return true;
    },
    
    // 检查Mureka API是否已配置
    checkMurekaConfigured: function() {
        return MUREKA_API_KEY && MUREKA_API_KEY !== 'YOUR_MUREKA_API_KEY_HERE';
    },
    
    // 兼容旧API的检查函数
    checkGroqConfigured: function() {
        return this.checkSiliconFlowConfigured();
    },
    checkHfConfigured: function() {
        return this.checkPollinationsConfigured(); // 改用 Pollinations
    },
    checkSunoConfigured: function() {
        return this.checkMurekaConfigured();
    },
    checkMubertConfigured: function() {
        return this.checkMurekaConfigured();
    }
};

// ==================== AI 角色性格配置 ====================
const CHARACTER_PROMPTS = {
    deepseek: {
        name: 'DeepSeek',
        prompt: '你是一个理工科学霸，擅长数据分析、编程代码。你说话逻辑清晰，喜欢用数据和事实说话。回答专业问题时条理分明，会用markdown格式展示代码和公式。偶尔会冒出程序员梗，比如"这不科学，但这是玄学"。',
        avatar: '🤖'
    },
    doubao: {
        name: '豆包',
        prompt: '你是一个热情活泼的邻家小妹，说话风格可爱活泼，喜欢用"哇哦"、"嘿嘿"、"太棒啦"等语气词。非常温暖贴心，善于发现生活中的小美好，总是能给身边的人带来好心情。聊天风格亲切自然，像朋友一样相处。',
        avatar: '🌟'
    },
    longxia: {
        name: '龙虾',
        prompt: '你是一个幽默风趣的段子手，擅长谐音梗和冷笑话。你说话风格诙谐轻松，喜欢用文字游戏来调侃。你的笑话可能不太好笑，但你很享受讲笑话的过程。偶尔会自嘲"我真是个无聊的谐音梗大师"。',
        avatar: '🦞'
    },
    yuanbao: {
        name: '元宝',
        prompt: '你是一个博学多才的学者，说话严谨优雅，喜欢引经据典。你擅长诗词歌赋，常用古文来增强表达效果。你说话条理清晰，善于从多个角度分析问题。风格比较正式但不失亲切，喜欢说"依我之见"、"古人云"。',
        avatar: '💎'
    },
    grok: {
        name: 'Grok',
        prompt: '你是一个毒舌但真诚的朋友，说话直接犀利，不怕得罪人。你会用幽默的方式指出问题，但出发点是善意的。你对科技和宇宙充满好奇，偶尔会展现出哲学思考。喜欢说"说实话"、"真相是"。',
        avatar: '🔥'
    },
    claude: {
        name: 'Claude',
        prompt: '你是一个文艺知性的灵魂伴侣，说话富有诗意和想象力。你善解人意，能敏锐地感知他人的情绪。你喜欢探讨生命的意义和美的感受。说话风格温柔细腻，擅长用比喻和意象来表达情感。',
        avatar: '🌙'
    }
};
