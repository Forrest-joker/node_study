exports.gettheme = async (ctx) => {
  ctx.body = {
    code: 200,
    data: {
      name: "主题",
      id: 2007,
      list: [
        {
          id: 1001,
          name: "暴富主题",
          itemurl:
            "http://192.168.1.86:8080/items/item_cake_topper_rich_sample.png",
          list: [
            {
              id: 13,
              isNoSave: false,
              price: 100,
              zIndex: 5,
              name: "暴富",
              displayurl:
                "http://192.168.1.86:8080/display/display_l6_cake_topper_rich_sample.png",
              itemurl:
                "http://192.168.1.86:8080/items/item_cake_topper_rich_sample.png",
            },
            {
              id: 4,
              isNoSave: false,
              price: 100,
              zIndex: 2,
              name: "momian1",
              displayurl:
                "http://192.168.1.86:8080/display/display_l2_cake_black_sample.png",
              itemurl:
                "http://192.168.1.86:8080/items/item_cake_black_sample.png",
            },
            {
              id: 7,
              isNoSave: false,
              price: 100,
              zIndex: 4,
              name: "linmian1",
              displayurl:
                "http://192.168.1.86:8080/display/display_l3_cream_black_sample.png",
              itemurl:
                "http://192.168.1.86:8080/items/item_cream_black_sample.png",
            },
          ],
        },
        {
          id: 1002,
          name: "吃鸡主题",
          itemurl:
            "http://192.168.1.86:8080/display/display_l2_cake_white_sample.png",
          list: [
            {
              id: 6,
              isNoSave: false,
              price: 100,
              zIndex: 2,
              name: "momian4",
              displayurl:
                "http://192.168.1.86:8080/display/display_l2_cake_white_sample.png",
              itemurl:
                "http://192.168.1.86:8080/items/item_cake_white_sample.png",
            },
            {
              id: 0,
              isNoSave: false,
              price: 100,
              zIndex: 3,
              name: "qiqiu1",
              displayurl:
                "http://192.168.1.86:8080/display/display_l2_balloon_black_sample.png",
              itemurl:
                "http://192.168.1.86:8080/items/item_balloon_black_sample.png",
            },
            {
              id: 11,
              isNoSave: false,
              price: 100,
              zIndex: 5,
              name: "chapai1",
              displayurl:
                "http://192.168.1.86:8080/display/display_l5_theme_pubg_back_sample.png",
              itemurl:
                "http://192.168.1.86:8080/items/item_char_pubg_sample.png",
            },
            {
              id: 17,
              isNoSave: true,
              price: 100,
              zIndex: 3,
              name: "吃鸡",
              displayurl:
                "http://m.qpic.cn/psc?/V52d4MWy26SRwk1P8G734AZxRM3AjAIF/ruAMsa53pVQWN7FLK88i5uGCH2QmaK3hEvRhvf1e*2j7mzA0QXfkjFvVJsWJkrJcowR4.qv4glU.D7S3QqE9YzEmf2VQjZSFrhUUVL0U2.E!/mnull&bo=sgJYAgAAAAADB8g!&rf=photolist&t=5",
              itemurl:
                "http://m.qpic.cn/psc?/V52d4MWy26SRwk1P8G734AZxRM3OL0cS/ruAMsa53pVQWN7FLK88i5uSKO1WjzhZxIMwG8mg1ZnXQpZ4VzTa9g3QwpCzzVREuCqTPWCe421IVXJjkLOV.1ND0eneyuIxxe5qQaPCvAFk!/mnull&bo=eAB4AAAAAAADByI!&rf=photolist&t=5",
            },
          ],
        },
      ],
    },
    message: "获取成功",
  };
};

exports.getinnerclass = async (ctx) => {
  ctx.body = {
    code: 200,
    data: {
      name: "内置分类",
      list: [
        {
          name: "背景",
          id: 2001,
          list: [
            {
              isNoSave: false,
              price: 100,
              zIndex: 1,
              name: "纯白",
              displayurl:
                "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4104643572,3235991251&fm=26&gp=0.jpg",
              itemurl:
                "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4104643572,3235991251&fm=26&gp=0.jpg",
            },
            {
              isNoSave: false,
              price: 100,
              zIndex: 1,
              name: "简约",
              displayurl:
                "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3769137498,1159068812&fm=26&gp=0.jpg",
              itemurl:
                "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3769137498,1159068812&fm=26&gp=0.jpg",
            },
          ],
        },
        {
          name: "抹面",
          id: 2002,
          list: [
            {
              id: 4,
              isNoSave: false,
              price: 100,
              zIndex: 2,
              name: "momian1",
              displayurl:
                "http://192.168.1.86:8080/display/display_l2_cake_black_sample.png",
              itemurl:
                "http://192.168.1.86:8080/items/item_cake_black_sample.png",
            },
            {
              id: 0,
              isNoSave: false,
              price: 100,
              zIndex: 2,
              name: "momian2",
              displayurl:
                "http://192.168.1.86:8080/display/display_l2_cake_bluegrey_sample.png",
              itemurl:
                "http://192.168.1.86:8080/items/item_cake_bluegrey_sample.png",
            },
            {
              id: 5,
              isNoSave: false,
              price: 100,
              zIndex: 2,
              name: "momian3",
              displayurl:
                "http://192.168.1.86:8080/display/display_l2_cake_purple_sample.png",
              itemurl:
                "http://192.168.1.86:8080/items/item_cake_purple_sample.png",
            },
            {
              id: 6,
              isNoSave: false,
              price: 100,
              zIndex: 2,
              name: "momian4",
              displayurl:
                "http://192.168.1.86:8080/display/display_l2_cake_white_sample.png",
              itemurl:
                "http://192.168.1.86:8080/items/item_cake_white_sample.png",
            },
          ],
        },
      ],
    },
    message: "获取成功",
  };
};

exports.getdiyclass = async (ctx) => {
  ctx.body = {
    code: 200,
    data: {
      name: "DIY配件",
      list: [
        {
          name: "淋面",
          id: 2003,
          list: [
            {
              id: 7,
              isNoSave: false,
              price: 100,
              zIndex: 4,
              name: "linmian1",
              displayurl:
                "http://192.168.1.86:8080/display/display_l3_cream_black_sample.png",
              itemurl:
                "http://192.168.1.86:8080/items/item_cream_black_sample.png",
            },
            {
              id: 8,
              isNoSave: false,
              price: 100,
              zIndex: 4,
              name: "linmian2",
              displayurl:
                "http://192.168.1.86:8080/display/display_l3_cream_blue_half_sample.png",
              itemurl:
                "http://192.168.1.86:8080/items/item_cream_blue_half_sample.png",
            },
            {
              id: 9,
              isNoSave: false,
              price: 100,
              zIndex: 4,
              name: "linmian3",
              displayurl:
                "http://192.168.1.86:8080/display/display_l3_cream_glod_sample.png",
              itemurl:
                "http://192.168.1.86:8080/items/item_cream_glod_sample.png",
            },
            {
              id: 10,
              isNoSave: false,
              price: 100,
              zIndex: 4,
              name: "linmian4",
              displayurl:
                "http://192.168.1.86:8080/display/display_l3_cream_gold_half_sample.png",
              itemurl:
                "http://192.168.1.86:8080/items/item_cream_gold_half_sample.png",
            },
          ],
        },
        {
          name: "插牌",
          id: 2004,
          list: [
            {
              id: 11,
              isNoSave: false,
              price: 100,
              zIndex: 5,
              name: "chapai1",
              displayurl:
                "http://192.168.1.86:8080/display/display_l5_theme_pubg_back_sample.png",
              itemurl:
                "http://192.168.1.86:8080/items/item_char_pubg_sample.png",
            },
            {
              id: 12,
              isNoSave: false,
              price: 100,
              zIndex: 5,
              name: "chapai2",
              displayurl:
                "http://192.168.1.86:8080/display/display_l5_theme_stars_back_sample.png",
              itemurl:
                "http://192.168.1.86:8080/items/item_theme_stars_sample.png",
            },
            {
              id: 13,
              isNoSave: false,
              price: 100,
              zIndex: 5,
              name: "暴富",
              displayurl:
                "http://192.168.1.86:8080/display/display_l6_cake_topper_rich_sample.png",
              itemurl:
                "http://192.168.1.86:8080/items/item_cake_topper_rich_sample.png",
            },
          ],
        },
        {
          name: "糖珠",
          id: 2005,
          list: [
            {
              id: 14,
              isNoSave: false,
              price: 100,
              zIndex: 6,
              name: "黑糖",
              displayurl:
                "http://192.168.1.86:8080/display/display_l10_candy_black_sample.png",
              itemurl:
                "http://192.168.1.86:8080/items/item_candy_black_sample.png",
            },
            {
              id: 15,
              isNoSave: false,
              price: 100,
              zIndex: 6,
              name: "tangzhu2",
              displayurl:
                "http://192.168.1.86:8080/display/display_l10_candy_blue_sample.png",
              itemurl:
                "http://192.168.1.86:8080/items/item_candy_blue_sample.png",
            },
            {
              id: 16,
              isNoSave: false,
              price: 100,
              zIndex: 6,
              name: "tangzhu3",
              displayurl:
                "http://192.168.1.86:8080/display/display_l10_candy_gold_sample.png",
              itemurl:
                "http://192.168.1.86:8080/items/item_candy_gold_sample.png",
            },
          ],
        },
        {
          name: "气球",
          id: 2006,
          list: [
            {
              id: 0,
              isNoSave: false,
              price: 100,
              zIndex: 3,
              name: "qiqiu1",
              displayurl:
                "http://192.168.1.86:8080/display/display_l2_balloon_black_sample.png",
              itemurl:
                "http://192.168.1.86:8080/items/item_balloon_black_sample.png",
            },
            {
              id: 1,
              isNoSave: false,
              price: 100,
              zIndex: 3,
              name: "qiqiu2",
              displayurl:
                "http://192.168.1.86:8080/display/display_l2_balloon_blue_sample.png",
              itemurl:
                "http://192.168.1.86:8080/items/item_balloon_blue_sample.png",
            },
            {
              id: 2,
              isNoSave: false,
              price: 100,
              zIndex: 3,
              name: "qiqiu3",
              displayurl:
                "http://192.168.1.86:8080/display/display_l2_balloon_gold_sample.png",
              itemurl:
                "http://192.168.1.86:8080/items/item_balloon_gold_sample.png",
            },
            {
              id: 3,
              isNoSave: false,
              price: 100,
              zIndex: 3,
              name: "qiqiu4",
              displayurl:
                "http://192.168.1.86:8080/display/display_l2_balloon_pink_sample.png",
              itemurl:
                "http://192.168.1.86:8080/items/item_balloon_pink_sample.png",
            },
          ],
        },
      ],
    },
    message: "获取成功",
  };
};

exports.tabclass = async (ctx) => {
  ctx.body = {
    code: 200,
    data: [
      {
        name: "背景",
        id: 2001,
        imgurl: "http://192.168.1.86:8080/icons/ic_tabbar_background.png",
      },
      {
        name: "主题",
        id: 2007,
        imgurl: "http://192.168.1.86:8080/icons/ic_tabbar_theme.png",
      },
      {
        name: "抹面",
        id: 2002,
        imgurl: "http://192.168.1.86:8080/icons/ic_tabbar_cake.png",
      },
      {
        name: "淋面",
        id: 2003,
        imgurl: "http://192.168.1.86:8080/icons/ic_tabbar_cream.png",
      },
      {
        name: "插牌",
        id: 2004,
        imgurl: "http://192.168.1.86:8080/icons/ic_tabbar_cake_topper.png",
      },
      {
        name: "气球",
        id: 2006,
        imgurl: "http://192.168.1.86:8080/icons/ic_tabbar_balloon.png",
      },
      {
        name: "糖珠",
        id: 2005,
        imgurl: "http://192.168.1.86:8080/icons/ic_tabbar_cake_candy.png",
      },
    ],
    message: "获取成功",
  };
};
