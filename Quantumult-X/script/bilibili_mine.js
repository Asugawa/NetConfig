let body = JSON.parse($response.body);
// 删除了“推荐服务”
body['data']['sections_v2'] = [
    {
        "items": [
            {
                "id": 396,
                "title": "离线缓存",
                "uri": "bilibili://user_center/download",
                "icon": "http://i0.hdslb.com/bfs/archive/5fc84565ab73e716d20cd2f65e0e1de9495d56f8.png"
            },
            {
                "id": 397,
                "title": "历史记录",
                "uri": "bilibili://user_center/history",
                "icon": "http://i0.hdslb.com/bfs/archive/8385323c6acde52e9cd52514ae13c8b9481c1a16.png"
            },
            {
                "id": 398,
                "title": "我的收藏",
                "uri": "bilibili://user_center/favourite",
                "icon": "http://i0.hdslb.com/bfs/archive/d79b19d983067a1b91614e830a7100c05204a821.png"
            },
            {
                "id": 399,
                "title": "稍后再看",
                "uri": "bilibili://user_center/watch_later",
                "icon": "http://i0.hdslb.com/bfs/archive/63bb768caa02a68cb566a838f6f2415f0d1d02d6.png",
                "need_login": 1
            }
        ],
        "style": 1,
        "button": {}
    },
    {
        "title": "创作中心",
        "items": [
            {
                "id": 171,
                "title": "创作首页",
                "uri": "bilibili://uper/homevc",
                "icon": "http://i0.hdslb.com/bfs/archive/d3aad2d07538d2d43805f1fa14a412d7a45cc861.png",
                "need_login": 1,
                "global_red_dot": 1,
                "display": 1
            },
            {
                "id": 533,
                "title": "任务中心",
                "uri": "https://member.bilibili.com/studio/bds/redirect?target_source=mission_archive_2&",
                "icon": "http://i0.hdslb.com/bfs/archive/ae18624fd2a7bdda6d95ca606d5e4cf2647bfa4d.png",
                "need_login": 1,
                "global_red_dot": 1,
                "display": 1
            },
        ],
        "style": 1,
        "button": {
            "text": "发布",
            "url": "bilibili://uper/user_center/archive_selection",
            "icon": "http://i0.hdslb.com/bfs/archive/205f47675eaaca7912111e0e9b1ac94cb985901f.png",
            "style": 1
        },
        "type": 1,
        "up_title": "创作中心"
    },
    {
        "title": "更多服务",
        "items": [
            {
                "id": 407,
                "title": "联系客服",
                "uri": "bilibili://user_center/feedback",
                "icon": "http://i0.hdslb.com/bfs/archive/7ca840cf1d887a45ee1ef441ab57845bf26ef5fa.png"
            },
            {
                "id": 410,
                "title": "设置",
                "uri": "bilibili://user_center/setting",
                "icon": "http://i0.hdslb.com/bfs/archive/e932404f2ee62e075a772920019e9fbdb4b5656a.png"
            }
        ],
        "style": 2,
        "button": {}
    }
];
$done({body: JSON.stringify(body)});
