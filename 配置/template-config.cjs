/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: '0001',
    title: '亲爱的, 早上好',
    desc: `
      **{{date.11.29}}**
      
      下个休息日：{{holidaytts.11.30}}
      
      ---
      
      城市：{{city.郑州}}
      
      天气：{{weather.阴}}
      
      气温(最高/最低):{{9度}} / {{-5度}}
      
      风向: {{西北风}}
      
      风级: {{三级}}
      
      {{今天很爱金浩}}
      
      ---
      
      我们相识第{{4个}}月
      
      {{金浩生日7月16日}}
      
      ---
      
      {{距离金浩生日还有229天}}
      
      {{爱金浩}} {{金浩最棒}}
    `
  },
  {
    id: '0002',
    title: '推送完成提醒',
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      
      ---
      
      共推送 {{need_post_num.DATA}} 人
      
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      
      成功用户: {{success_post_ids.DATA}}
      
      失败用户: {{fail_post_ids.DATA}}
    `
  },
]

module.exports = TEMPLATE_CONFIG
