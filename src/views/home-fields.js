// 文档列表
const documents = [
  {
    name: 'ES6标准入门.pdf',
    url: 'D:/myDocument/ES6标准入门.pdf',
    size: 62445,
    time: '2022-05-02 12:13',
  },
  {
    name: '你不知道的JavaScript.pdf',
    url: 'D:/myDocument/你不知道的JavaScript.pdf',
    size: 45257,
    time: '2022-05-02 12:13',
  },
  {
    name: '会议纪要001.docx',
    url: 'D:/myDocument/会议纪要001.docx',
    size: 76422,
    time: '2022-05-02 12:13',
  },
  {
    name: '园区营销方案.pptx',
    url: 'D:/myDocument/园区营销方案.pptx',
    size: 1345,
    time: '2022-05-02 12:13',
  },
  {
    name: '物品清单.xlsx',
    url: 'D:/myDocument/物品清单.xlsx',
    size: 4327,
    time: '2022-05-02 12:13',
  },
];

// 音频列表
const voices = [
  {
    name: '清脆的小鸟叫声.mp3',
    url: 'D:/myVoice/清脆的小鸟叫声.mp3',
    size: 3674,
    time: '2022-05-02 12:13',
  },
  {
    name: '雨声音效.mp3',
    url: 'D:/myVoice/雨声音效.mp3',
    size: 2456,
    time: '2022-05-02 12:13',
  },
  {
    name: '古典温馨音乐主题.wav',
    url: 'D:/myVoice/古典温馨音乐主题.wav',
    size: 4523,
    time: '2022-05-02 12:13',
  },
  {
    name: '大气悲伤厚重配乐.wav',
    url: 'D:/myVoice/大气悲伤厚重配乐.wav',
    size: 2367,
    time: '2022-05-02 12:13',
  },
  {
    name: '舒缓宁静激励人心的背景乐.wav',
    url: 'D:/myVoice/舒缓宁静激励人心的背景乐.wav',
    size: 4222,
    time: '2022-05-02 12:13',
  },
];

// 视频列表
const videos = [
  {
    name: '2001年：太空漫游.mp4',
    url: 'D:/myVideo/2001年：太空漫游.mp4',
    size: 632445,
    time: '2022-05-02 12:13',
  },
  {
    name: '银翼杀手2049.mp4',
    url: 'D:/myVideo/银翼杀手2049.mp4',
    size: 1343564,
    time: '2022-05-02 12:13',
  },
  {
    name: '攻壳机动队.mp4',
    url: 'D:/myVideo/攻壳机动队.mp4',
    size: 1425463,
    time: '2022-05-02 12:13',
  },
  {
    name: '第四公民.mp4',
    url: 'D:/myVideo/第四公民.mp4',
    size: 1047854,
    time: '2022-05-02 12:13',
  },
  {
    name: '互联网自己的男孩：亚伦·斯沃茨的故事.mp4',
    url: 'D:/myVideo/互联网自己的男孩：亚伦·斯沃茨的故事.mp4',
    size: 984367,
    time: '2022-05-02 12:13',
  },
];

// 图片列表
const pictures = [
  {
    name: '春.png',
    url: 'D:/myPicture/春.png',
    size: 3145,
    time: '2022-05-02 12:13',
  },
  {
    name: '夏.png',
    url: 'D:/myPicture/夏.png',
    size: 4632,
    time: '2022-05-02 12:13',
  },
  {
    name: '秋.png',
    url: 'D:/myPicture/秋.png',
    size: 8643,
    time: '2022-05-02 12:13',
  },
  {
    name: '冬.png',
    url: 'D:/myPicture/冬.png',
    size: 8864,
    time: '2022-05-02 12:13',
  },
  {
    name: '截图001.jpg',
    url: 'D:/myPicture/截图001.jpg',
    size: 5225,
    time: '2022-05-02 12:13',
  },
];

// 下载列表
const downs = [
  {
    name: 'JavaScript忍者秘籍.pdf',
    url: 'D:/myVoice/JavaScript忍者秘籍.pdf',
    size: 62445,
    time: '2022-05-02 12:13',
  },
  {
    name: 'Understanding ecmascript.pdf',
    url: 'D:/myVoice/Understanding ecmascript.pdf',
    size: 45257,
    time: '2022-05-02 12:13',
  },
  {
    name: '数据结构与算法 JavaScript 描述.pdf',
    url: 'D:/myVoice/数据结构与算法 JavaScript 描述.pdf',
    size: 76422,
    time: '2022-05-02 12:13',
  },
  {
    name: 'CSS 揭秘.pdf',
    url: 'D:/myVoice/CSS 揭秘.pdf',
    size: 1345,
    time: '2022-05-02 12:13',
  },
  {
    name: 'JavaScript 函数式编程.pdf',
    url: 'D:/myVoice/JavaScript 函数式编程.pdf',
    size: 4327,
    time: '2022-05-02 12:13',
  },
];

// 本地目录
const localList = [
  {
    name: '文件夹1',
    url: 'D:/文件夹1/',
    time: '2022-05-02 12:13',
    child: [
      {
        name: 'child1',
        url: 'D:/文件夹1/child1/',
        time: '2022-05-02 12:13',
        child: [
          {
            name: 'test33',
            url: 'D:/文件夹1/child1/test33/',
            time: '2022-05-02 12:13',
            child: [
              {
                name: 'aadde.txt',
                url: 'D:/文件夹1/child1/test33/aadde.txt',
                size: 6435,
                time: '2022-05-02 12:13',
              },
            ],
          },
          {
            name: '新建文件1.txt',
            url: 'D:/文件夹1/child1/新建文件1.txt',
            size: 1454,
            time: '2022-05-02 12:13',
          },
          {
            name: 'test1.docx',
            url: 'D:/文件夹1/child1/test1.docx',
            size: 5245,
            time: '2022-05-02 12:13',
          },
        ],
      },
      {
        name: 'child2',
        url: 'D:/文件夹1/child2/',
        child: [],
        time: '2022-05-02 12:13',
      },
      {
        name: 'aaa.pptx',
        url: 'D:/文件夹1/aaa.pptx',
        size: 5245,
        time: '2022-05-02 12:13',
      },
    ],
  },
  { name: '文件夹2', url: 'D:/文件夹2/', child: [], time: '2022-05-03 13:25' },
  {
    name: '数据结构.pdf',
    url: 'D:/数据结构.pdf',
    size: 76422,
    time: '2022-05-02 12:13',
  },
  {
    name: 'CSS世界.pdf',
    url: 'D:/CSS世界.pdf',
    size: 1345,
    time: '2022-05-02 12:13',
  },
  {
    name: '函数式编程.pdf',
    url: 'D:/函数式编程.pdf',
    size: 4327,
    time: '2022-05-02 12:13',
  },
  {
    name: '练习.zip',
    url: 'D:/练习.zip',
    size: 4327,
    time: '2022-05-02 12:13',
  },
  {
    name: '工具箱.exe',
    url: 'D:/工具箱.exe',
    size: 4327,
    time: '2022-05-02 12:13',
  },
  {
    name: '编码规范.md',
    url: 'D:/编码规范.md',
    size: 4327,
    time: '2022-05-02 12:13',
  },
];

// U盘目录
const uDiskList = [
  {
    name: '目录1',
    url: 'U:/目录1/',
    time: '2022-05-02 12:13',
    child: [
      {
        name: '文件1.docx',
        url: 'U:/目录1/文件1.docx',
        size: 24532,
        time: '2022-05-02 12:13',
      },
      {
        name: '文件2.pdf',
        url: 'U:/目录1/文件2.pdf',
        size: 5432,
        time: '2022-05-02 12:13',
      },
    ],
  },
  {
    name: '111.pdf',
    url: 'U:/111.pdf',
    size: 53453,
    time: '2022-05-02 12:13',
  },
];

export const fileList = [
  {
    name: '本地',
    url: 'D:/',
    child: localList,
    typeList: [
      // { name: '本地', icon: 'el-icon-folder', child: localList },
      { name: '文档', svg: '#icon-file1', child: documents },
      { name: '音频', svg: '#icon-file_music', child: voices },
      { name: '视频', svg: '#icon-file_video', child: videos },
      { name: '图片', svg: '#icon-file_img', child: pictures },
      { name: '下载', svg: '#icon-file_download', child: downs },
    ],
  },
  {
    name: 'U盘',
    url: 'U:/',
    child: uDiskList,
  },
];
