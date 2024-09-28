export default {
  common: {
    grid: '网格',
    list: '列表',
    add: '添加',
    added: '已添加',
    more: '更多',
    edit: '编辑',
    clear: '清理',
    update: '更新',
    delete: '删除',
    cancel: '取消',
    save: '保存',
    nextStep: '下一步',
    prevStep: '上一步',
    disabled: '已禁用',
    enabled: '已启用',
    preview: '预览',
    warning: '警告',
    disable: '禁用',
    enable: '启用',
    use: '使用',
    none: '无',
    close: '关闭',
    reset: '重置',
    pause: '暂停',
    resume: '恢复',
    details: '详情',
    updateAll: '更新全部',
    updateTime: '更新时间',
    keywords: '关键词',
    success: '成功',
    copy: '复制',
    copied: '已复制',
    auto: '自动',
    import: '导入',
    install: '安装',
    uninstall: '卸载',
    run: '运行',
    refresh: '刷新',
    confirm: '确定',
    selectAll: '全选',
    http: '远程下载',
    file: '本地文件',
    openFile: '打开文件',
    develop: '开发'
  },
  kernel: {
    port: 'HTTP(s)代理端口',
    mode: '工作模式',
    ipv6: '开启IPv6',
    secret: 'RESTful API密钥',
    'socks-port': 'SOCKS5代理端口',
    'mixed-port': '混合代理端口',
    'allow-lan': '允许局域网访问',
    'log-level': '日志级别',
    'external-controller': 'RESTful Web API监听地址',
    'external-ui': 'Web UI路径',
    'interface-name': '出站接口名称',
    auto: '自动获取',
    info: '信息',
    warning: '警告',
    error: '错误',
    debug: '调试',
    silent: '静默',
    rule: '规则',
    global: '全局',
    direct: '直连',
    ruleDesp: '按照规则文件分流',
    globalDesp: '仅走Global策略组',
    directDesp: '直接连接所有流量',
    'keep-alive-interval': 'TCP Keep Alive 间隔',
    'find-process-mode': '进程匹配模式',
    'external-controller-tls': 'RESTful Web API监听地址(HTTPS)',
    'external-ui-name': '外部用户界面',
    'external-ui-url': '自定义外部用户界面下载地址',
    'unified-delay': '统一延迟',
    'tcp-fast-open': 'TCP快速打开',
    domain_strategy: '域名策略',
    'tcp-multi-path': '多路径TCP',
    'udp-fragment': 'UDP分段',
    sniff: '协议探测',
    'sniff-override-destination': '探测域名覆盖目标地址',
    authentication: 'Http/Socks 验证用户',
    'skip-auth-prefixes': '跳过验证的IP段',
    'store-cache': '持久化缓存',
    'store-fake-ip': '持久化Fake-IP',
    'store-rdrc': '持久化被拒绝的DNS响应',
    'geo-auto-update': 'GEO 自动更新',
    'geo-update-interval': 'GEO 自动更新间隔',
    'lan-allowed-ips': '允许连接的地址段',
    'lan-disallowed-ips': '禁止连接的IP地址段',
    tun: {
      enable: '启用TUN',
      stack: 'TUN模式堆栈',
      'interface-name': 'TUN网卡名称',
      'auto-route': '自动设置全局路由',
      'auto-detect-interface': '自动选择流量出口接口',
      'dns-hijack': 'dns 劫持',
      'strict-route': '严格路由',
      mtu: '最大传输单元',
      'endpoint-independent-nat': '独立于端点的 NAT',
      'inet4-address': 'IPv4前缀',
      'inet6-address': 'IPv6前缀',
      system: 'System',
      gvisor: 'gVisor',
      mixed: 'Mixed',
      lwip: 'LWIP'
    },
    dns: {
      enable: '启用DNS',
      'fake-ip-range-v4': 'Fake-IP范围(IPV4)',
      'fake-ip-range-v6': 'Fake-IP范围(IPV6)',
      'fake-ip-filter': 'Fake-IP排除',
      'fake-ip': 'Fake-IP',
      'local-dns': '本地DNS',
      'remote-dns': '远程DNS',
      'resolver-dns': '本地解析DNS',
      'remote-resolver-dns': '远程解析DNS',
      'local-dns-detour': '本地DNS出站',
      'remote-dns-detour': '远程DNS出站',
      'final-dns': '回退DNS',
      'fakeip-dns': 'Fake-IP DNS',
      'disable-cache': '禁用DNS缓存',
      'disable-expire': '禁用DNS缓存过期',
      'independent-cache': '独立缓存',
      'client-subnet': '客户端子网',
      block: '禁止解析',
      default: '默认',
      strategy: {
        name: '策略',
        default: '默认',
        prefer_ipv4: 'IPV4优先',
        prefer_ipv6: 'IPV6优先',
        ipv4_only: '只使用IPV4',
        ipv6_only: '只使用IPV6'
      }
    },
    tls: {
      certificate: '证书(PEM格式/路径)',
      'private-key': '私钥(PEM格式/路径)'
    },
    'global-client-fingerprint': '全局客户端指纹',
    tracing: '性能分析引擎',
    'sniff-tls-sni': '嗅探TLS SNI',
    'redirect-to-tun': 'eBPF 重定向到 TUN',
    proxyGroups: {
      name: '名称',
      lazy: '懒惰模式',
      'disable-udp': '禁用UDP',
      interval: '间隔',
      tolerance: '容差',
      url: '测速链接',
      filter: '过滤',
      notFound: '部分订阅或节点已丢失，请清理',
      needToAdd: '至少引用一个订阅或节点',
      sort: '查看和排序',
      builtIn: '内建',
      subscriptions: '订阅列表',
      type: {
        name: '类型',
        select: '手动选择',
        'url-test': '自动选择',
        fallback: '自动回退',
        relay: '链式代理',
        'load-balance': '负载均衡',
        Selector: '手动选择',
        UrlTest: '自动选择',
        Fallback: '自动回退'
      },
      strategy: {
        name: '负载均衡策略',
        'consistent-hashing': 'consistent-hashing',
        'round-robin': 'round-robin'
      },
      empty: '该订阅分组内没有可用节点',
      noSubs: '订阅列表为空'
    },
    rules: {
      payload: '载荷',
      proxy: '代理',
      invert: '取反',
      ruleset: '规则集',
      rulesets: '规则集列表',
      'download-detour': '下载方式',
      'disable-cache': '关闭缓存',
      name: '名称',
      needGeodataMode: '请在高级设置中打开"GEO数据模式"',
      notFound: '策略组不存在',
      inlineRuleError: '内联规则语法错误',
      empty: '规则集列表为空',
      type: {
        name: '类型',
        DOMAIN: '域名 (DOMAIN)',
        GEOIP: '国家IP代码规则 (GEOIP)',
        GEOSITE: '域名集合 (GEOSITE)',
        IPSET: 'IP集 (IPSET)',
        SCRIPT: '脚本 (SCRIPT)',
        FALLBACK: 'Fallback',
        'DOMAIN-SUFFIX': '域名后缀 (DOMAIN-SUFFIX)',
        'DOMAIN-KEYWORD': '域名关键词 (DOMAIN-KEYWORD)',
        'DOMAIN-REGEX': '域名正则表达式 (DOMAIN-REGEX)',
        'IP-CIDR': 'IPv4地址段 (IP-CIDR)',
        'IP-CIDR6': 'IPv6地址段 (IP-CIDR6)',
        'SRC-PORT': '源端口 (SRC-PORT)',
        'DST-PORT': '目标端口 (DST-PORT)',
        'PROCESS-NAME': '源进程名 (PROCESS-NAME)',
        'PROCESS-PATH': '源进程路径 (PROCESS-PATH)',
        'RULE-SET': '规则集 (RULE-SET)',
        'REMOTE-RULE-SET': '远程规则集 (REMOTE-RULE-SET)',
        PROTOCOL: '协议 (PROTOCOL)',
        'IP-PRIVATE': '私有IP (IP-PRIVATE)',
        'SRC-IP-PRIVATE': '源私有IP (SRC-IP-PRIVATE)',
        'SRC-IP-CIDR': '源IP段地址 (SRC-IP-CIDR)',
        'CLASH-MODE': 'Clash模式 (CLASH-MODE)',
        NETWORK: '网络协议 (NETWORK)',
        'IP-VERSION': 'IP协议 (IP-VERSION)',
        'QUERY-TYPE': '查询类型 (QUERY-TYPE)',
        INBOUND: '入站 (INBOUND)',
        OUTBOUND: '出站 (OUTBOUND)',
        'FAKE-IP': 'Fake-IP',
        INLINE: '内联规则',
        'RULE-SET-IPCIDR-MATCH-SOURCE': '规则集中的ipcidr匹配源IP (RULE-SET-IPCIDR-MATCH-SOURCE)'
      }
    },
    standard: '标准',
    memconservative: '适用小内存设备',
    chrome: 'Chrome',
    firefox: 'Firefox',
    safari: 'Safari',
    iOS: 'IOS',
    android: 'Android',
    edge: 'Edge',
    '360': '360',
    qq: 'QQ',
    random: '随机',
    always: '开启',
    strict: '自动',
    off: '关闭',
    notFound: '无内核',
    requestFailed: '获取失败',
    local: '本地',
    remote: '远程',
    update: '更新',
    restart: '重启内核'
  },
  router: {
    overview: '概览',
    subscriptions: '订阅',
    rulesets: '规则集',
    plugins: '插件',
    settings: '设置',
    debug: '调试',
    components: '组件预览',
    about: '关于',
    profiles: '配置',
    kernel: '内核',
    scheduledtasks: '计划任务'
  },
  home: {
    mode: '代理模式',
    global: '全局',
    rule: '规则',
    direct: '直连',
    quickStart: '快速开始',
    noProfile: '欢迎使用 {0}，点击按钮开始。',
    initSuccessful: '初始化配置、订阅成功',
    initFailed: '更新订阅时出错，请手动更新订阅',
    overview: {
      expandAll: '展开全部',
      collapseAll: '收缩全部',
      refresh: '刷新',
      delayTest: '延迟测试',
      stop: '停止内核',
      restart: '重启内核',
      viewlog: '查看日志',
      start: '启动内核',
      noLogs: '日志为空',
      systemProxy: '系统代理',
      tunMode: 'TUN模式',
      traffic: '流量',
      realtimeTraffic: '实时流量',
      totalTraffic: '总流量',
      connections: '活动连接',
      memory: '内存',
      transmit: '上行速率',
      receive: '下行速率',
      settings: '内核设置',
      settingsTips: '暂时生效，持久化请修改配置文件',
      updateGEO: '更新 GEO',
      notSupportSocks: '系统不支持socks代理',
      needPort: '请先设置代理端口'
    },
    controller: {
      name: '控制器',
      autoClose: '自动断开连接',
      unAvailable: '展示不可用节点',
      cardMode: '卡片模式',
      sortBy: '按延迟排序',
      delay: '延迟测试URL',
      delayUrl: '请输入延迟测试URL'
    },
    connections: {
      type: '类型',
      process: '进程',
      processPath: '进程路径',
      sniffHost: '嗅探域名',
      sourceIP: '源地址',
      remoteDestination: '目标地址',
      host: '主机',
      inbound: '入站模式',
      rule: '匹配规则',
      chains: '链路',
      upload: '上行流量',
      download: '下行流量',
      uploadSpeed: '上行速度',
      downSpeed: '下行速度',
      time: '连接时间',
      close: '关闭连接',
      addToDirect: '添加到直连',
      addToProxy: '添加到代理',
      addToReject: '添加到拦截',
      active: '活动',
      closed: '已关闭',
      closeAll: '关闭所有连接',
      sort: '排序和设置显示字段',
      details: '连接详情'
    }
  },
  subscribe: {
    manual: '手动管理',
    name: '名称',
    url: '远程链接',
    localPath: '本地路径',
    website: '官网',
    path: '保存路径',
    include: '包括名称',
    exclude: '排除名称',
    includeProtocol: '包括协议',
    excludeProtocol: '排除协议',
    proxyPrefix: '代理前缀',
    updating: '更新中',
    useragent: '用户代理',
    resetUserAgent: '重置用户代理',
    inSecure: '跳过证书验证',
    healthCheck: {
      name: '健康检查',
      interval: '时间间隔(秒)',
      url: '测试链接'
    }
  },
  subscribes: {
    download: '下行流量',
    upload: '上行流量',
    total: '总流量',
    expire: '过期时间',
    subtype: '订阅类型',
    website: '官网',
    empty: '订阅列表为空，请先{action}订阅。',
    enterLink: '输入订阅链接',
    proxyCount: '代理数量',
    editProxies: '编辑节点',
    editSourceFile: '编辑节点(源文件)',
    copySub: '复制订阅链接',
    proxies: {
      type: '协议',
      name: '名称',
      add: '添加代理'
    }
  },
  profile: {
    name: '名称',
    generalSettings: '通用设置',
    advancedSettings: '高级设置',
    step: {
      name: '名称设置',
      general: '通用设置',
      tun: 'TUN 设置',
      dns: 'DNS 设置',
      groups: '策略组设置',
      dnsRules: 'DNS规则设置',
      rules: '路由规则设置',
      'mixin-script': '混入和脚本'
    },
    proxies: '引用节点',
    use: '引用订阅',
    noSubs: '没有可用的订阅',
    group: '策略组详情',
    rule: '规则详情',
    auto: '此配置由订阅接管，更新订阅时会被覆盖！\n如果你想修改此配置，请使用插件系统。',
    mixinSettings: {
      name: '混入配置',
      priority: '优先级',
      mixin: '混入优先',
      gui: 'GUI优先'
    },
    scriptSettings: {
      name: '脚本操作'
    }
  },
  profiles: {
    shouldStop: '当前配置正在使用，无法删除',
    empty: '配置列表为空，请先{action}配置。',
    copytoClipboard: '生成配置到剪切板',
    generateAndView: '生成配置并查看',
    copy: '复制并粘贴',
    start: '使用此配置启动/重启',
    proxyGroups: '策略组',
    rules: '规则'
  },
  ruleset: {
    manual: '手动管理',
    format: {
      name: '文件格式',
      source: '源文件',
      binary: '二进制'
    },
    rulesetType: '规则集类型',
    name: '名称',
    url: '远程链接',
    path: '保存路径',
    interval: '更新间隔',
    updating: '更新中'
  },
  rulesets: {
    hub: '规则集中心',
    total: '规则集数量为',
    noDesc: '无描述信息',
    updating: '更新中',
    fetching: '获取中...',
    empty: '规则集列表为空，请先{action}或从{import}导入。',
    rulesetCount: '规则数量',
    editRuleset: '编辑规则集文件',
    selectRuleType: '选择规则类型'
  },
  plugin: {
    trigger: '触发器',
    'on::manual': '手动触发',
    'on::startup': '启动APP时',
    'on::shutdown': '关闭APP时',
    'on::generate': '生成配置时',
    'on::subscribe': '更新订阅时',
    'on::ready': 'APP就绪后',
    'on::task': '计划任务执行时',
    'on::install': '点击安装时',
    'on::uninstall': '点击卸载时',
    'on::configure': '配置插件时',
    name: '名称',
    description: '描述',
    url: '远程地址',
    install: '需要安装',
    installed: '已安装',
    path: '保存路径',
    type: '类型',
    menus: '菜单',
    configuration: '配置',
    menuKey: '菜单名称',
    menuValue: '触发方法名',
    selectComponent: '请选择一个组件',
    confName: '配置名',
    confDescription: '配置描述',
    confKey: '配置标志',
    confDefault: '默认值',
    options: '选项',
    restore: '恢复为默认值'
  },
  plugins: {
    updating: '更新中',
    empty: '插件列表为空，请先{action}或从{import}导入。',
    source: '源码',
    reload: '重载插件',
    configuration: '配置插件',
    hub: '插件中心',
    update: '更新列表',
    updateSuccess: '列表更新成功',
    total: '插件数量为',
    removeConfiguration: '是否删除插件配置？',
    testRun: '运行测试'
  },
  scheduledtask: {
    name: '名称',
    type: '任务类型',
    script: '脚本代码',
    subscriptions: '订阅列表',
    rulesets: '规则集列表',
    plugins: '插件列表',
    cron: '表达式',
    notification: '任务完成通知',
    cronTips: '秒 分 时 日 月 星期',
    lastTime: '上次执行时间',
    'update::subscription': '更新订阅',
    'update::ruleset': '更新规则集',
    'update::plugin': '更新插件',
    'run::plugin': '运行插件',
    'run::script': '运行脚本'
  },
  scheduledtasks: {
    logs: '日志',
    name: '插件',
    duration: '持续时间',
    startTime: '开始时间',
    endTime: '结束时间',
    time: '执行时间',
    result: '执行结果',
    empty: '计划任务列表为空，请先{action}计划任务。',
    run: '立即运行',
    log: '查看日志'
  },
  settings: {
    general: '通用',
    theme: {
      name: '主题',
      light: '浅色',
      dark: '深色',
      auto: '跟随系统'
    },
    color: {
      name: '颜色',
      default: '默认',
      orange: '橘色',
      pink: '粉色',
      red: '红色',
      skyblue: '天蓝色',
      green: '绿色'
    },
    fontFamily: '字体',
    resetFont: '重置字体',
    appFolder: {
      name: '应用程序文件夹',
      open: '打开应用程序文件夹'
    },
    kernelCache: {
      name: '内核缓存',
      clear: '清除持久化缓存'
    },
    lang: {
      name: '语言',
      zh: '简体中文',
      en: 'English'
    },
    pages: {
      name: '页面可见性'
    },
    windowState: {
      normal: '以普通窗口启动',
      maximised: '最大化',
      minimised: '最小化窗口启动',
      fullscreen: '全屏'
    },
    needRestart: '重启生效',
    needAdmin: '需要管理员权限',
    exitOnClose: '关闭窗口时退出程序',
    closeKernelOnExit: '退出程序时同时关闭内核',
    autoSetSystemProxy: '自动配置/清除系统代理',
    autoStartKernel: '自动启动内核程序',
    admin: '以管理员身份运行',
    addToMenu: '将插件添加到托盘菜单',
    multipleInstance: '允许多APP实例运行',
    rollingRelease: '启用滚动发行',
    startup: {
      name: '开机时启动',
      delay: '延迟(秒)'
    },
    kernel: {
      version: '切换版本',
      stable: '稳定版',
      alpha: '内测版',
      grant: '授予特权'
    },
    userAgent: {
      name: '用户代理(User-Agent)',
      reset: ' 重置用户代理'
    },
    githubapi: {
      name: '向 REST API 进行身份验证',
      tips: '拥有更高的速率限制'
    }
  },
  about: {
    new: '新版本',
    restart: '重启软件',
    noDownloadLink: '没有发现下载链接',
    updateSuccessfulRestart: '更新完成，请重启软件',
    updateSuccessfulReplace: '下载完成，请手动替换软件',
    updateSuccessful: '更新完成',
    newVersion: '发现新版本',
    latestVersion: '已经是最新版本了'
  },
  titlebar: {
    resetSize: '重置窗口',
    reload: '重载界面',
    restart: '重启程序',
    exitApp: '退出程序',
    waiting: '正在等待程序退出...',
    timeout: '程序退出超时，是否强制退出？\n\n原因：插件退出超时。'
  },
  format: {
    seconds: '秒',
    minutes: '分钟',
    hours: '小时',
    days: '天',
    months: '月',
    years: '年',
    second: '秒',
    minute: '分钟',
    hour: '小时',
    day: '天',
    month: '月',
    year: '年',
    ago: '前',
    later: '后'
  },
  outbound: {
    select: '🚀 节点选择',
    urltest: '🎈 自动选择',
    direct: '🎯 全球直连',
    block: '🛑 全球拦截',
    fallback: '🐟 漏网之鱼'
  },
  tray: {
    showMainWindow: '显示主窗口',
    restart: '重启',
    restartTip: '重启程序',
    exit: '退出',
    exitTip: '退出程序',
    proxyGroup: '代理组',
    setSystemProxy: '设置系统代理',
    clearSystemProxy: '清除系统代理',
    tun: 'Tun模式',
    enableTunMode: '启用TUN模式',
    disableTunMode: '禁用TUN模式',
    kernel: '内核管理',
    proxy: '系统代理',
    startKernel: '开启内核',
    stopKernel: '关闭内核',
    restartKernel: '重启内核',
    plugins: '插件'
  },
  commands: {
    noMatching: '没有匹配到命令'
  }
}
