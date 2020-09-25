exports.gettheme = async (ctx) => {
  ctx.body = {
    code: 200,
    data: {
      name: "主题",
      id: 2007,
      categoryType: 6,
      list: [
        {
          id: 20070,
          categoryType: 6,
          name: "暴富主题",
          itemurl:
            "http://127.0.0.1:8080/items/item_cake_topper_rich_sample.png",
          list: [
            {
              isNoSave: false,
              id: 20011,
              categoryType: 0,
              price: 0,
              zIndex: 1,
              name: "纯白",
              displayurl:
                "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4104643572,3235991251&fm=26&gp=0.jpg",
              itemurl:
                "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4104643572,3235991251&fm=26&gp=0.jpg",
            },
            {
              categoryType: 5,
              id: 20051,
              isNoSave: false,
              price: 100,
              zIndex: 6,
              name: "tangzhu2",
              displayurl:
                "http://127.0.0.1:8080/display/display_l10_candy_blue_sample.png",
              itemurl: "http://127.0.0.1:8080/items/item_candy_blue_sample.png",
            },
            {
              id: 20042,
              categoryType: 4,
              isNoSave: false,
              price: 100,
              zIndex: 5,
              name: "暴富",
              displayurl:
                "http://127.0.0.1:8080/display/display_l6_cake_topper_rich_sample.png",
              itemurl:
                "http://127.0.0.1:8080/items/item_cake_topper_rich_sample.png",
            },
            {
              id: 20061,
              categoryType: 1,
              isNoSave: false,
              price: 100,
              zIndex: 3,
              name: "qiqiu2",
              displayurl:
                "http://127.0.0.1:8080/display/display_l2_balloon_blue_sample.png",
              itemurl:
                "http://127.0.0.1:8080/items/item_balloon_blue_sample.png",
            },
            {
              id: 20080,
              isNoSave: false,
              categoryType: 7,
              name: "大款",
              itemurl: "http://127.0.0.1:8080/items/item_theme_poker_mahjong_sample.png",
              list:[
                {
                  id: 200801,
                  isNoSave: false,
                  categoryType: 7,
                  price: 100,
                  zIndex: 4,
                  name: "美元",
                  displayurl:
                    "http://127.0.0.1:8080/display/display_l5_theme_poker_mahjong_back_sample.png",
                },
                {
                  id: 200802,
                  categoryType: 7,
                  isNoSave: false,
                  price: 100,
                  zIndex: 5,
                  name: "金星",
                  displayurl:
                    "http://127.0.0.1:8080/display/display_l9_theme_pink_feather_front_sample.png",
                },
                {
                  id: 200803,
                  categoryType: 7,
                  isNoSave: false,
                  price: 100,
                  zIndex: 6,
                  name: "金币",
                  displayurl:
                    "http://127.0.0.1:8080/display/display_l9_theme_poker_mahjong_front_sample.png",
                },
              ]
            },
          ],
        },
        {
          id: 20071,
          categoryType: 6,
          name: "吃鸡主题",
          itemurl:
            "http://127.0.0.1:8080/display/display_l2_cake_white_sample.png",
          list: [
            {
              isNoSave: false,
              id: 20010,
              categoryType: 0,
              price: 0,
              zIndex: 1,
              name: "简约",
              displayurl:
                "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3769137498,1159068812&fm=26&gp=0.jpg",
              itemurl:
                "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3769137498,1159068812&fm=26&gp=0.jpg",
            },
            {
              id: 20021,
              isNoSave: false,
              price: 100,
              categoryType: 2,
              zIndex: 2,
              name: "momian2",
              displayurl:
                "http://127.0.0.1:8080/display/display_l2_cake_bluegrey_sample.png",
              itemurl:
                "http://127.0.0.1:8080/items/item_cake_bluegrey_sample.png",
            },
            {
              id: 20030,
              isNoSave: false,
              price: 100,
              categoryType: 3,
              zIndex: 4,
              name: "linmian1",
              displayurl:
                "http://127.0.0.1:8080/display/display_l3_cream_black_sample.png",
              itemurl:
                "http://127.0.0.1:8080/items/item_cream_black_sample.png",
            },
            {
              id: 20061,
              categoryType: 1,
              isNoSave: false,
              price: 100,
              zIndex: 3,
              name: "qiqiu2",
              displayurl:
                "http://127.0.0.1:8080/display/display_l2_balloon_blue_sample.png",
              itemurl:
                "http://127.0.0.1:8080/items/item_balloon_blue_sample.png",
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
          categoryType: 0,
          id: 2001,
          list: [
            {
              isNoSave: false,
              id: 20010,
              categoryType: 0,
              price: 0,
              zIndex: 1,
              name: "简约",
              displayurl:
                "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3769137498,1159068812&fm=26&gp=0.jpg",
              itemurl:
                "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3769137498,1159068812&fm=26&gp=0.jpg",
            },
            {
              isNoSave: false,
              id: 20011,
              categoryType: 0,
              price: 0,
              zIndex: 1,
              name: "纯白",
              displayurl:
                "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4104643572,3235991251&fm=26&gp=0.jpg",
              itemurl:
                "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4104643572,3235991251&fm=26&gp=0.jpg",
            },
          ],
        },
        {
          name: "抹面",
          categoryType: 2,
          id: 2002,
          list: [
            {
              id: 20020,
              isNoSave: false,
              price: 100,
              categoryType: 2,
              zIndex: 2,
              name: "momian1",
              displayurl:
                "http://127.0.0.1:8080/display/display_l2_cake_black_sample.png",
              itemurl: "http://127.0.0.1:8080/items/item_cake_black_sample.png",
            },
            {
              id: 20021,
              isNoSave: false,
              price: 100,
              categoryType: 2,
              zIndex: 2,
              name: "momian2",
              displayurl:
                "http://127.0.0.1:8080/display/display_l2_cake_bluegrey_sample.png",
              itemurl:
                "http://127.0.0.1:8080/items/item_cake_bluegrey_sample.png",
            },
            {
              id: 20022,
              isNoSave: false,
              price: 100,
              zIndex: 2,
              categoryType: 2,
              name: "momian3",
              displayurl:
                "http://127.0.0.1:8080/display/display_l2_cake_purple_sample.png",
              itemurl:
                "http://127.0.0.1:8080/items/item_cake_purple_sample.png",
            },
            {
              id: 20023,
              isNoSave: false,
              price: 100,
              categoryType: 2,
              zIndex: 2,
              name: "momian4",
              displayurl:
                "http://127.0.0.1:8080/display/display_l2_cake_white_sample.png",
              itemurl: "http://127.0.0.1:8080/items/item_cake_white_sample.png",
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
          categoryType: 3,
          list: [
            {
              id: 20030,
              isNoSave: false,
              price: 100,
              categoryType: 3,
              zIndex: 4,
              name: "linmian1",
              displayurl:
                "http://127.0.0.1:8080/display/display_l3_cream_black_sample.png",
              itemurl:
                "http://127.0.0.1:8080/items/item_cream_black_sample.png",
            },
            {
              id: 20031,
              isNoSave: false,
              categoryType: 3,
              price: 100,
              zIndex: 4,
              name: "linmian2",
              displayurl:
                "http://127.0.0.1:8080/display/display_l3_cream_blue_half_sample.png",
              itemurl:
                "http://127.0.0.1:8080/items/item_cream_blue_half_sample.png",
            },
            {
              id: 20032,
              isNoSave: false,
              categoryType: 3,
              price: 100,
              zIndex: 4,
              name: "linmian3",
              displayurl:
                "http://127.0.0.1:8080/display/display_l3_cream_glod_sample.png",
              itemurl: "http://127.0.0.1:8080/items/item_cream_glod_sample.png",
            },
            {
              id: 20033,
              isNoSave: false,
              categoryType: 3,
              price: 100,
              zIndex: 4,
              name: "linmian4",
              displayurl:
                "http://127.0.0.1:8080/display/display_l3_cream_gold_half_sample.png",
              itemurl:
                "http://127.0.0.1:8080/items/item_cream_gold_half_sample.png",
            },
          ],
        },
        {
          name: "主题",
          categoryType: 7,
          id: 2008,
          list: [
            {
              id: 20080,
              isNoSave: false,
              categoryType: 7,
              name: "大款",
              itemurl: "http://127.0.0.1:8080/items/item_theme_poker_mahjong_sample.png",
              list:[
                {
                  id: 200801,
                  isNoSave: false,
                  categoryType: 7,
                  price: 100,
                  zIndex: 4,
                  name: "美元",
                  displayurl:
                    "http://127.0.0.1:8080/display/display_l5_theme_poker_mahjong_back_sample.png",
                },
                {
                  id: 200802,
                  categoryType: 7,
                  isNoSave: false,
                  price: 100,
                  zIndex: 5,
                  name: "金星",
                  displayurl:
                    "http://127.0.0.1:8080/display/display_l9_theme_pink_feather_front_sample.png",
                },
                {
                  id: 200803,
                  categoryType: 7,
                  isNoSave: false,
                  price: 100,
                  zIndex: 6,
                  name: "金币",
                  displayurl:
                    "http://127.0.0.1:8080/display/display_l9_theme_poker_mahjong_front_sample.png",
                },
              ]
            },
          ],
        },
        {
          name: "插牌",
          categoryType: 4,
          id: 2004,
          list: [
            {
              id: 20040,
              isNoSave: false,
              categoryType: 4,
              price: 100,
              zIndex: 5,
              name: "chapai1",
              displayurl:
                "http://127.0.0.1:8080/display/display_l5_theme_pubg_back_sample.png",
              itemurl: "http://127.0.0.1:8080/items/item_char_pubg_sample.png",
            },
            {
              id: 20041,
              categoryType: 4,
              isNoSave: false,
              price: 100,
              zIndex: 5,
              name: "chapai2",
              displayurl:
                "http://127.0.0.1:8080/display/display_l5_theme_stars_back_sample.png",
              itemurl:
                "http://127.0.0.1:8080/items/item_theme_stars_sample.png",
            },
            {
              id: 20042,
              categoryType: 4,
              isNoSave: false,
              price: 100,
              zIndex: 5,
              name: "暴富",
              displayurl:
                "http://127.0.0.1:8080/display/display_l6_cake_topper_rich_sample.png",
              itemurl:
                "http://127.0.0.1:8080/items/item_cake_topper_rich_sample.png",
            },
          ],
        },
        {
          name: "糖珠",
          categoryType: 5,
          id: 2005,
          list: [
            {
              id: 20050,
              categoryType: 5,
              isNoSave: true,
              price: 100,
              zIndex: 6,
              name: "黑糖",
              displayurl:
                "http://127.0.0.1:8080/display/display_l10_candy_black_sample.png",
              itemurl:
                "http://127.0.0.1:8080/items/item_candy_black_sample.png",
            },
            {
              categoryType: 5,
              id: 20051,
              isNoSave: false,
              price: 100,
              zIndex: 6,
              name: "tangzhu2",
              displayurl:
                "http://127.0.0.1:8080/display/display_l10_candy_blue_sample.png",
              itemurl: "http://127.0.0.1:8080/items/item_candy_blue_sample.png",
            },
            {
              categoryType: 5,
              id: 20052,
              isNoSave: false,
              price: 100,
              zIndex: 6,
              name: "tangzhu3",
              displayurl:
                "http://127.0.0.1:8080/display/display_l10_candy_gold_sample.png",
              itemurl: "http://127.0.0.1:8080/items/item_candy_gold_sample.png",
            },
          ],
        },
        {
          name: "气球",
          categoryType: 1,
          id: 2006,
          list: [
            {
              categoryType: 1,
              id: 20060,
              isNoSave: false,
              price: 100,
              zIndex: 3,
              name: "qiqiu1",
              displayurl:
                "http://127.0.0.1:8080/display/display_l2_balloon_black_sample.png",
              itemurl:
                "http://127.0.0.1:8080/items/item_balloon_black_sample.png",
            },
            {
              id: 20061,
              categoryType: 1,
              isNoSave: false,
              price: 100,
              zIndex: 3,
              name: "qiqiu2",
              displayurl:
                "http://127.0.0.1:8080/display/display_l2_balloon_blue_sample.png",
              itemurl:
                "http://127.0.0.1:8080/items/item_balloon_blue_sample.png",
            },
            {
              id: 20062,
              categoryType: 1,
              isNoSave: false,
              price: 100,
              zIndex: 3,
              name: "qiqiu3",
              displayurl:
                "http://127.0.0.1:8080/display/display_l2_balloon_gold_sample.png",
              itemurl:
                "http://127.0.0.1:8080/items/item_balloon_gold_sample.png",
            },
            {
              id: 20063,
              isNoSave: false,
              price: 100,
              categoryType: 1,
              zIndex: 3,
              name: "qiqiu4",
              displayurl:
                "http://127.0.0.1:8080/display/display_l2_balloon_pink_sample.png",
              itemurl:
                "http://127.0.0.1:8080/items/item_balloon_pink_sample.png",
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
        name: "推荐主题",
        categoryType: 6,
        id: 2007,
        imgurl: "http://127.0.0.1:8080/icons/ic_tabbar_theme.png",
      },
      {
        name: "抹面",
        categoryType: 2,
        id: 2002,
        imgurl: "http://127.0.0.1:8080/icons/ic_tabbar_cake.png",
      },
      {
        name: "淋面",
        categoryType: 3,
        id: 2003,
        imgurl: "http://127.0.0.1:8080/icons/ic_tabbar_cream.png",
      },
      {
        name: "主题",
        categoryType: 7,
        id: 2008,
        imgurl: "http://127.0.0.1:8080/icons/ic_tabbar_theme.png",
      },
      {
        name: "插牌",
        categoryType: 4,
        id: 2004,
        imgurl: "http://127.0.0.1:8080/icons/ic_tabbar_cake_topper.png",
      },
      {
        name: "气球",
        categoryType: 1,
        id: 2006,
        imgurl: "http://127.0.0.1:8080/icons/ic_tabbar_balloon.png",
      },
      {
        name: "糖珠",
        categoryType: 5,
        id: 2005,
        imgurl: "http://127.0.0.1:8080/icons/ic_tabbar_cake_candy.png",
      },
      {
        name: "背景",
        categoryType: 0,
        id: 2001,
        imgurl: "http://127.0.0.1:8080/icons/ic_tabbar_background.png",
      },
    ],
    message: "获取成功",
  };
};
