/* Copyright 2026 上海如静知华信息科技有限公司 · https://www.zhuatech.cn/ */
export const domain={
  "code": "Report Agent",
  "systemName": "企业经营报告智能体平台",
  "englishName": "MANAGEMENT REPORT AGENT",
  "theme": {
    "primary": "#4c5d4a",
    "dark": "#273426",
    "accent": "#bb7c45"
  },
  "workspace": "经营管理中心 / 管理报告",
  "fieldWorkspace": "经营分析工作台 · 总部",
  "period": "2026-08-08 · 第 32 周经营例会",
  "liveText": "经营指标于 10:34 完成快照",
  "fieldContextLabel": "报告范围",
  "fieldContext": "销售 · 交付 · 财务",
  "fieldUser": "叶舟",
  "fieldRole": "经营分析师",
  "adminUser": "程砚",
  "adminRole": "经营管理负责人",
  "adminTitle": "报告智能体运营中心",
  "adminBreadcrumb": "经营报告 / 智能协同",
  "adminSubtitle": "基于认证经营指标生成管理摘要、差异解释和行动建议，敏感财务信息与正式结论由负责人签发。",
  "exportAction": "导出经营报告",
  "createAction": "新建报告任务",
  "chartTitle": "报告完成率",
  "chartSubtitle": "周报、月报与专题报告交付进度",
  "chartLabels": [
    "周一",
    "周二",
    "周三",
    "周四",
    "周五",
    "周六",
    "周日",
    "下周一",
    "下周二"
  ],
  "loadTitle": "经营指标就绪度",
  "loadSubtitle": "定义、负责人、刷新时间与异常状态",
  "recordsTitle": "经营报告协同队列",
  "recordsSubtitle": "按会议时间、经营影响与指标风险排序",
  "issueTitle": "指标与发布提醒",
  "issueSubtitle": "过期指标、财务敏感信息和关键结论必须人工复核",
  "recordName": "报告任务",
  "itemName": "报告 / 议题",
  "unitName": "报告团队",
  "batchName": "编制阶段",
  "planName": "计划步骤",
  "doneName": "已完成",
  "exceptionName": "指标异常",
  "unitLabel": "项",
  "listBreadcrumb": "经营管理 / 报告队列",
  "listSubtitle": "统一管理指标快照、差异解释、管理摘要、行动项、人工审阅和版本发布。",
  "listSummary": [
    [
      "在途分析",
      "47"
    ],
    [
      "本周交付",
      "32"
    ],
    [
      "业务待确认",
      "9"
    ],
    [
      "敏感待审",
      "6",
      true
    ]
  ],
  "tabs": [
    "全部",
    "理解中",
    "报表数据汇总中",
    "待确认",
    "已交付"
  ],
  "fieldBreadcrumb": "分析工作台 / 我的任务",
  "fieldTitle": "经营分析师协同工作台",
  "fieldSubtitle": "5 份待编报告 · 3 项指标异常 · 经营分析师叶舟",
  "fieldSecondary": "查看经营指标地图",
  "reportAction": "确认分析结论",
  "fieldNoticeTitle": "智能体已匹配已经营指标和只读报表数据集",
  "fieldNotice": "禁止执行写操作；敏感字段、外发报告与关键结论必须确认",
  "steps": [
    "问题澄清",
    "经营指标匹配",
    "只读报表数据汇总",
    "结论解释",
    "人工确认"
  ],
  "documentAction": "打开分析底稿",
  "printAction": "查看报表数据来源链路",
  "resourceCardTitle": "经营指标覆盖",
  "resourceValueLabel": "可用经营指标",
  "resourceHealthLabel": "报表数据可信度",
  "quickSubtitle": "经营分析师常用协同入口",
  "quickActions": [
    [
      "自然语言分析",
      "/shopfloor/report",
      "问题、范围与报告口径"
    ],
    [
      "经营指标目录",
      "/shopfloor/material",
      "定义、负责人和版本"
    ],
    [
      "报表数据来源链路",
      "/shopfloor/resources",
      "来源、转换与质量"
    ],
    [
      "风险升级",
      "/shopfloor/andon",
      "敏感、越权与低置信度"
    ]
  ],
  "reportDefaults": [
    1,
    0
  ],
  "reportTitle": "确认报告智能体分析结论",
  "reportSubtitle": "记录问题报告口径、报表数据范围、关键发现、限制条件和业务行动。",
  "reportSuccess": "分析结论已进入经营洞察目录",
  "reportPlaceholder": "填写业务问题、经营指标报告口径、结论限制、行动建议或修正意见",
  "reportFootnote": "智能体只执行只读分析，不得修改生产报表数据或绕过报表数据权限",
  "ruleTitle": "报告智能体报表数据汇总策略",
  "ruleSubtitle": "DATA-QUERY-GUARD · V1.0",
  "rules": [
    [
      "报表数据汇总方式",
      "只读"
    ],
    [
      "经营指标报告口径",
      "认证优先"
    ],
    [
      "敏感字段",
      "自动脱敏"
    ],
    [
      "报告外发",
      "人工确认",
      true
    ]
  ],
  "fieldTotals": [
    [
      "5",
      "重点问题"
    ],
    [
      "3",
      "今日报告"
    ],
    [
      "96%",
      "经营指标匹配"
    ],
    [
      "7",
      "分析建议"
    ]
  ],
  "adminMenus": [
    [
      "/admin",
      "home",
      "分析驾驶舱"
    ],
    [
      "/admin/work-orders",
      "order",
      "分析队列"
    ],
    [
      "/admin/samples",
      "box",
      "经营指标目录"
    ],
    [
      "/admin/schedule",
      "calendar",
      "报告日历"
    ],
    [
      "/admin/methods",
      "process",
      "分析模板"
    ],
    [
      "/admin/reviews",
      "quality",
      "结论评测"
    ],
    [
      "/admin/resources",
      "machine",
      "报表数据与权限"
    ],
    [
      "/admin/report",
      "chart",
      "服务分析"
    ]
  ],
  "fieldMenus": [
    [
      "/shopfloor",
      "home",
      "我的工作台"
    ],
    [
      "/shopfloor/report",
      "report",
      "结论确认"
    ],
    [
      "/shopfloor/tasks",
      "order",
      "报告任务"
    ],
    [
      "/shopfloor/material",
      "box",
      "经营指标目录"
    ],
    [
      "/shopfloor/resources",
      "machine",
      "报表数据来源链路"
    ],
    [
      "/shopfloor/andon",
      "risk",
      "风险升级",
      6
    ]
  ],
  "moduleTitles": {
    "tasks": [
      "报告任务",
      "跟踪问题、报告口径、报表数据汇总、结论与交付"
    ],
    "material": [
      "经营指标目录",
      "查看经营指标的定义、负责人和版本"
    ],
    "resources": [
      "报表数据来源链路",
      "了解报表数据来源、加工逻辑、质量和刷新状态"
    ],
    "andon": [
      "报表数据风险升级",
      "上报敏感、越权、报告口径冲突和低置信度结果"
    ],
    "samples": [
      "经营指标目录",
      "统一维护经营指标与报表数据产品"
    ],
    "schedule": [
      "报告日历",
      "管理周期报告、订阅与交付时点"
    ],
    "methods": [
      "分析模板",
      "沉淀问题框架、报表规则 模板和解释规范"
    ],
    "reviews": [
      "结论评测",
      "评估报表数据汇总正确、报告口径一致和解释可靠"
    ],
    "report": [
      "服务分析",
      "分析请求量、交付效率与业务采纳"
    ]
  },
  "tagline": "让管理报告更及时，让每个数字都能追溯到负责人",
  "storyTitle": "先锁定指标，<br/>再解释变化。",
  "storyText": "智能体负责检索、报表数据汇总和形成分析草稿；报表数据团队负责验证与发布。",
  "pattern": [
    2,
    4,
    7,
    9,
    12,
    16,
    19,
    21,
    25,
    28,
    31,
    34
  ],
  "loginStats": [
    [
      "47",
      "在途分析"
    ],
    [
      "96%",
      "经营指标匹配"
    ],
    [
      "6",
      "敏感待审"
    ]
  ],
  "loginTitle": "经营报告智能体平台",
  "adminDemo": "经营指标 / 报表数据汇总 / 评测",
  "fieldDemo": "问题 / 报告口径 / 结论"
}
export const records=[
  {
    "no": "RPT-260808-018",
    "name": "第 32 周经营例会报告",
    "code": "REPORT-WEEKLY",
    "unit": "经营报告组",
    "group": "经营管理中心",
    "plan": 10,
    "done": 6,
    "exception": 2,
    "due": "11:50",
    "batch": "结论解释",
    "status": "待审核",
    "progress": 60,
    "priority": "关注"
  },
  {
    "no": "RPT-260808-012",
    "name": "七月管理层经营报告",
    "code": "REPORT-MONTHLY",
    "unit": "经营指标治理组",
    "group": "经营管理中心",
    "plan": 8,
    "done": 8,
    "exception": 0,
    "due": "10:10",
    "batch": "报告发布",
    "status": "已完成",
    "progress": 100,
    "priority": "正常"
  },
  {
    "no": "RPT-260808-021",
    "name": "华东区域销售复盘",
    "code": "REPORT-REGION",
    "unit": "运营分析组",
    "group": "运营中心",
    "plan": 9,
    "done": 4,
    "exception": 1,
    "due": "14:20",
    "batch": "只读报表数据汇总",
    "status": "进行中",
    "progress": 44,
    "priority": "正常"
  },
  {
    "no": "RPT-260808-027",
    "name": "重点客户毛利专题报告",
    "code": "REPORT-MARGIN",
    "unit": "经营报告组",
    "group": "经营管理中心",
    "plan": 11,
    "done": 3,
    "exception": 4,
    "due": "16:10",
    "batch": "权限审核",
    "status": "风险跟进",
    "progress": 27,
    "priority": "加急"
  }
]
export const resources=[
  {
    "code": "RPT-METRIC-01",
    "name": "认证经营指标目录",
    "unit": "经营指标治理组",
    "status": "运行中",
    "health": 97,
    "value": "286",
    "valueUnit": "个",
    "note": "经营指标定义与负责人均已登记"
  },
  {
    "code": "RPT-SNAPSHOT-02",
    "name": "经营数据快照服务",
    "unit": "报表平台组",
    "status": "运行中",
    "health": 94,
    "value": "42",
    "valueUnit": "个",
    "note": "10:30 完成报表数据新鲜度检查"
  },
  {
    "code": "RPT-GUARD-03",
    "name": "敏感信息发布审查器",
    "unit": "报告合规组",
    "status": "复核",
    "health": 79,
    "value": "6",
    "valueUnit": "项",
    "note": "6 个敏感报表数据汇总等待确认"
  }
]
export const reviews=[
  {
    "no": "REV-RPT-028",
    "title": "周度经营差异解释复核",
    "type": "结论表述",
    "detail": "18 个切片 · 程砚",
    "result": "待确认"
  },
  {
    "no": "REV-RPT-017",
    "title": "第 32 周经营例会报告口径一致性核验",
    "type": "经营指标准确性",
    "detail": "32 个经营指标 · 叶舟",
    "result": "通过"
  },
  {
    "no": "REV-RPT-039",
    "title": "重点客户毛利发布复核",
    "type": "报表数据合规",
    "detail": "发现 4 个敏感字段",
    "result": "异常"
  }
]
export const adminMetrics=[
  [
    "本周报告任务",
    "16",
    "8 份已进入部门复核",
    "blue"
  ],
  [
    "按期签发率",
    "93.8%",
    "平均提前 4.2 小时",
    "green"
  ],
  [
    "管理结论采纳率",
    "84.6%",
    "部门修订 6 条",
    "orange"
  ],
  [
    "指标待复核",
    "6",
    "2 项今日到期",
    "red"
  ]
]
export const fieldMetrics=[
  [
    "我的编制任务",
    "5",
    "首份 11:50 截止",
    "blue"
  ],
  [
    "指标引用完整率",
    "96%",
    "已引用 32 个认证指标",
    "green"
  ],
  [
    "差异待解释",
    "7",
    "2 项超过波动阈值",
    "orange"
  ],
  [
    "指标新鲜度",
    "良好",
    "核心指标 8 分钟前刷新",
    "slate"
  ]
]
export const chartActual=[
  68,
  72,
  75,
  79,
  81,
  84,
  88,
  90,
  92
]
export const chartTarget=[
  72,
  75,
  78,
  81,
  84,
  87,
  90,
  92,
  94
]
export const loads=[
  [
    "收入与订单指标",
    97,
    "82 个认证指标 · 6 分钟前刷新"
  ],
  [
    "交付与供应链指标",
    94,
    "64 个认证指标 · 9 分钟前刷新"
  ],
  [
    "成本与利润指标",
    89,
    "58 个指标 · 2 项待复核"
  ],
  [
    "客户与合同明细",
    74,
    "敏感数据 · 6 项待授权"
  ]
]
export const issues=[
  {
    "type": "报告口径",
    "title": "CRM 与财务系统的签约收入存在 1.8% 差异",
    "detail": "需由指标负责人确认含税口径与确认时点",
    "status": "待确认"
  },
  {
    "type": "权限",
    "title": "客户毛利分析包含合同价格明细",
    "detail": "客户级明细汇总已暂停，等待财务负责人审批",
    "status": "复核中"
  },
  {
    "type": "解释",
    "title": "采购周期上升可能受季节因素影响",
    "detail": "当前证据不足以形成因果结论，需补充采购计划",
    "status": "补充中"
  }
]
