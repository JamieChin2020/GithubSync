//TALK
1.提现问题可以直接加QQ官方群822736041,周一到周五群发自己的邀请码找管理员打钱
2.为了防止视频请求过于频繁,自动看视频模块只在三个时段运作（早上8点,中午12点,晚上11点）,只要定时cron跑到这些时段就会执行
3.由于时段奖励有上限,同上原因...时段奖励，分享奖励从“凌晨零点一直到下午5点”才运行,只要按照定时的cron（*/20 0-23 * * *）设置,时段奖励不会少的
4.助力请求设置在”晚上8点执行”...避开其他执行时段
5.关于刷视频body要不要50个的问题,目前测试三个时段执行三次,通常执行两次就到上限了,最后的晚上11点是为了一些特殊状况的最后补救机会。
6.一般全拿奖励在4毛5左右...如果少于这个数字相差太大,一定是那些环节错误或者奖励没有获取,按照说明在排查看看吧！
7.自动提现还没有测试成功...大家可以先自行测试

//信息

【BOXJS】: https://cdn.jsdelivr.net/gh/JamieChin2020/GithubSync@main/cenbomin.box.json
【邀请码】: 347770
【定时cron】: */20 0-23 * * *
【脚本JS】:https://cdn.jsdelivr.net/gh/JamieChin2020/GithubSync@main/CONGHUA/chonghua.js
【重写引用conf】:https://cdn.jsdelivr.net/gh/JamieChin2020/GithubSync@main/CONGHUA/GetBody.conf

//食用方法

1.到[重写]-[引用],！！！启动Getbody_CONGHUA重写引用！！！

【任务中心请求】：首页-右下角-点击现金红包-弹出任务中心

【视频奖励请求】：看视频到获取金币奖励,通知提示“添加🥦阅读请求，当前共有X个”,获取50个body请求左右

【时段奖励请求】：每天领金币任务,倒计时结束之后,点击"领取"

【分享请求】：首页任一个视频,点击视频右下角微信分享,跳转微信等待下,通知提示
!备注：没有跳转,换别的视频试试...警告必须只获取2-3个即可,超出根据提示重新获取）

【分享奖励请求】：分享过后,回到app跳出红包,点击分享任务-领取

【助力奖励请求】：随便分享一个视频到微信（建议发到文件传输助手）,成功之后点击加载视频,观看并且等待通知弹出助力奖励通知

【提现奖励请求】：账户金额满5元,打开重写提现5元...弹出提现请求。

2.手动执行一次定时脚本-”葱花视频”,是不是运行正常

获取完cookie,务必关闭重写引用conf!
