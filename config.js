// 网站配置文件 - 修改这里的内容即可更新网页文字
const CONFIG = {
    // 网站标题
    site: {
        title: "崔小虎 | 屿光 - 36x.ai联合创始人"
    },

    // Logo
    logo: "屿光",

    // 导航链接
    nav: {
        links: [
            { id: "about", text: "关于我" },
            { id: "hobbies", text: "爱好" },
            { id: "works", text: "正在做" },
            { id: "services", text: "能帮你" },
            { id: "contact", text: "联系我" }
        ]
    },

    // Hero 区域
    hero: {
        badge: "AI × 心理学 × 魔术",
        name: "崔小虎",
        alias: "屿光",
        separator: "/",
        subtitle: "用AI探索未来，用魔术治愈心灵",
        tags: [
            { text: "36x.ai联合创始人", primary: true },
            { text: "艺镜探索联合主理人", primary: false },
            { text: "心理咨询师", primary: false },
            { text: "魔术师", primary: false }
        ]
    },

    // 关于我
    about: {
        title: "关于我",
        icon: "👤",
        subtitle: "一些基本信息",
        info: [
            { label: "笔名", value: "屿光" },
            { label: "年龄", value: "27岁" },
            { label: "MBTI", value: "INTJ" },
            { label: "主业", value: "AI公司联合创始人" },
            { label: "家乡", value: "甘肃金昌" },
            { label: "现居", value: "📍 浙江杭州" }
        ]
    },

    // 爱好
    hobbies: {
        title: "我的爱好",
        icon: "💟",
        subtitle: "热爱让生活更有意义",
        items: [
            {
                icon: "🤖",
                title: "AI 人工智能",
                desc: "时刻关注AI最新动态，热衷于体验新AI产品，探索AI的无限可能"
            },
            {
                icon: "❤️",
                title: "心理学",
                desc: "中科院心理所认证心理咨询师，用专业知识帮助自己和他人"
            },
            {
                icon: "🃏",
                title: "魔术",
                desc: "心灵魔术师，JF流派催眠师，用魔术创造奇迹"
            }
        ]
    },

    // 正在做的事
    works: {
        title: "正在做的事",
        icon: "🏃",
        subtitle: "保持前行，永不止步",
        items: [
            {
                number: "01",
                title: "🚀 36x.ai 联合创始人",
                desc: "主营toB的AI决策平台、企业AI化升级咨询、AI编程课程。拥有杭州多个职校资源，开展校企合作项目，负责学生就业教育培训辅导，同时推进世界模型项目。",
                tag: "主业"
            },
            {
                number: "02",
                title: "🎨 艺镜探索联合主理人",
                desc: "专注于AI内容创作与探索，打造AI艺术与设计的新可能。",
                tag: "AI创作"
            },
            {
                number: "03",
                title: "✍️ 个人品牌探索",
                desc: "运营公众号《屿光同行》，记录自己的想法和感悟，与更多人分享成长路上的思考。",
                tag: "创作"
            },
            {
                number: "04",
                title: "🎭 心灵魔术活动",
                desc: "将心理学融入魔术，筹备个人魔术疗愈秀，正在寻找合作方，希望用独特的方式治愈心灵。",
                tag: "创新项目"
            },
            {
                number: "05",
                title: "🤝 社交与连接",
                desc: "积极参加各类活动，广交朋友，不断扩大交际圈和人脉，持续提升社交能力。",
                tag: "成长"
            },
            {
                number: "06",
                title: "🌟 帮助迷茫的年轻人",
                desc: "想要帮助在大城市的迷茫年轻人疗愈内心，找到未来方向，用AI赋能成为超级个体。",
                tag: "使命"
            }
        ]
    },

    // 我能提供
    services: {
        title: "我能提供",
        icon: "🔈",
        subtitle: "也许这些对你有帮助",
        items: [
            {
                icon: "🤖",
                title: "AI 服务",
                desc: "AI相关知识分享、课程培训、企业AI化咨询"
            },
            {
                icon: "🎓",
                title: "学生资源",
                desc: "高职院校学生资源对接，校企合作机会"
            },
            {
                icon: "❤️",
                title: "心理咨询",
                desc: "个人成长、原生家庭方面的心理咨询与疗愈"
            },
            {
                icon: "🃏",
                title: "魔术服务",
                desc: "魔术活动表演、商业演出、魔术教学"
            }
        ]
    },

    // 价值观
    values: {
        title: "我的价值观",
        icon: "💎",
        subtitle: "真诚 · 情绪稳定 · 温柔 · 有亲和力",
        tags: ["真诚待人", "情绪稳定", "温柔细腻", "有亲和力", "全面考虑", "追求自由", "平等尊重", "持续成长"]
    },

    // 联系方式
    contact: {
        title: "联系我",
        icon: "📮",
        subtitle: "欢迎交流与合作",
        items: [
            {
                type: "wechat",
                icon: "💬",
                title: "微信号",
                value: "yug-xh",
                hint: "点击查看二维码",
                qrImage: "image/QR1.png",
                qrTip: "长按二维码识别"
            },
            {
                type: "email",
                icon: "📧",
                title: "邮箱",
                value: "xhcui05292022@163.com",
                hint: "点击复制"
            },
            {
                type: "gzh",
                icon: "📱",
                title: "公众号",
                value: "屿光同行",
                hint: "点击查看二维码",
                qrImage: "image/QR2.jpg",
                qrTip: "长按二维码识别"
            }
        ]
    },

    // Footer
    footer: {
        text: "Made with",
        heart: "❤️",
        author: "by 屿光",
        year: "2025"
    }
};
