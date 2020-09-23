exports.gettheme = async (ctx) => {
  ctx.body = {
    code: 200,
    data: {
      name: "主题",
      id: 2007,
      type: 6,
      list: [
        {
          id: 1001,
          type: 6,
          name: "暴富主题",
          itemurl:
            "http://127.0.0.1:8080/items/item_cake_topper_rich_sample.png",
          list: [
            {
              type: 4,
              id: 13,
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
              type: 2,
              id: 4,
              price: 100,
              isNoSave: false,
              zIndex: 2,
              name: "momian1",
              displayurl:
                "http://127.0.0.1:8080/display/display_l2_cake_black_sample.png",
              itemurl:
                "http://127.0.0.1:8080/items/item_cake_black_sample.png",
            },
            {
              type: 3,
              id: 7,
              isNoSave: false,
              price: 100,
              zIndex: 4,
              name: "linmian1",
              displayurl:
                "http://127.0.0.1:8080/display/display_l3_cream_black_sample.png",
              itemurl:
                "http://127.0.0.1:8080/items/item_cream_black_sample.png",
            },
          ],
        },
        {
          id: 1002,
          type: 6,
          name: "吃鸡主题",
          itemurl:
            "http://127.0.0.1:8080/display/display_l2_cake_white_sample.png",
          list: [
            {
              type: 2,
              id: 6,
              isNoSave: false,
              zIndex: 2,
              price: 100,
              name: "momian4",
              displayurl:
                "http://127.0.0.1:8080/display/display_l2_cake_white_sample.png",
              itemurl:
                "http://127.0.0.1:8080/items/item_cake_white_sample.png",
            },
            {
              type: 1,
              id: 0,
              price: 100,
              isNoSave: false,
              zIndex: 3,
              name: "qiqiu1",
              displayurl:
                "http://127.0.0.1:8080/display/display_l2_balloon_black_sample.png",
              itemurl:
                "http://127.0.0.1:8080/items/item_balloon_black_sample.png",
            },
            {
              type: 4,
              id: 11,
              price: 100,
              isNoSave: false,
              zIndex: 5,
              name: "chapai1",
              displayurl:
                "http://127.0.0.1:8080/display/display_l5_theme_pubg_back_sample.png",
              itemurl: "http://127.0.0.1:8080/items/item_char_pubg_sample.png",
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
          type: 0,
          id: 2001,
          list: [
            {
              isNoSave: false,
              type: 0,
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
              type: 0,
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
          type: 2,
          id: 2002,
          list: [
            {
              id: 4,
              isNoSave: false,
              price: 100,
              type: 2,
              zIndex: 2,
              name: "momian1",
              displayurl:
                "http://127.0.0.1:8080/display/display_l2_cake_black_sample.png",
              itemurl:
                "http://127.0.0.1:8080/items/item_cake_black_sample.png",
            },
            {
              id: 0,
              isNoSave: false,
              price: 100,
              type: 2,
              zIndex: 2,
              name: "momian2",
              displayurl:
                "http://127.0.0.1:8080/display/display_l2_cake_bluegrey_sample.png",
              itemurl:
                "http://127.0.0.1:8080/items/item_cake_bluegrey_sample.png",
            },
            {
              id: 5,
              isNoSave: false,
              price: 100,
              zIndex: 2,
              type: 2,
              name: "momian3",
              displayurl:
                "http://127.0.0.1:8080/display/display_l2_cake_purple_sample.png",
              itemurl:
                "http://127.0.0.1:8080/items/item_cake_purple_sample.png",
            },
            {
              id: 6,
              isNoSave: false,
              price: 100,
              type: 2,
              zIndex: 2,
              name: "momian4",
              displayurl:
                "http://127.0.0.1:8080/display/display_l2_cake_white_sample.png",
              itemurl:
                "http://127.0.0.1:8080/items/item_cake_white_sample.png",
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
          type: 3,
          list: [
            {
              id: 7,
              isNoSave: false,
              price: 100,
              type: 3,
              zIndex: 4,
              name: "linmian1",
              displayurl:
                "http://127.0.0.1:8080/display/display_l3_cream_black_sample.png",
              itemurl:
                "http://127.0.0.1:8080/items/item_cream_black_sample.png",
            },
            {
              id: 8,
              isNoSave: false,
              type: 3,
              price: 100,
              zIndex: 4,
              name: "linmian2",
              displayurl:
                "http://127.0.0.1:8080/display/display_l3_cream_blue_half_sample.png",
              itemurl:
                "http://127.0.0.1:8080/items/item_cream_blue_half_sample.png",
            },
            {
              id: 9,
              isNoSave: false,
              type: 3,
              price: 100,
              zIndex: 4,
              name: "linmian3",
              displayurl:
                "http://127.0.0.1:8080/display/display_l3_cream_glod_sample.png",
              itemurl:
                "http://127.0.0.1:8080/items/item_cream_glod_sample.png",
            },
            {
              id: 10,
              isNoSave: false,
              type: 3,
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
          name: "插牌",
          type: 4,
          id: 2004,
          list: [
            {
              id: 11,
              isNoSave: false,
              type: 4,
              price: 100,
              zIndex: 5,
              name: "chapai1",
              displayurl:
                "http://127.0.0.1:8080/display/display_l5_theme_pubg_back_sample.png",
              itemurl: "http://127.0.0.1:8080/items/item_char_pubg_sample.png",
            },
            {
              id: 12,
              type: 4,
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
              id: 13,
              type: 4,
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
          type: 5,
          id: 2005,
          list: [
            {
              id: 14,
              type: 5,
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
              type: 5,
              id: 15,
              isNoSave: false,
              price: 100,
              zIndex: 6,
              name: "tangzhu2",
              displayurl:
                "http://127.0.0.1:8080/display/display_l10_candy_blue_sample.png",
              itemurl:
                "http://127.0.0.1:8080/items/item_candy_blue_sample.png",
            },
            {
              type: 5,
              id: 16,
              isNoSave: false,
              price: 100,
              zIndex: 6,
              name: "tangzhu3",
              displayurl:
                "http://127.0.0.1:8080/display/display_l10_candy_gold_sample.png",
              itemurl:
                "http://127.0.0.1:8080/items/item_candy_gold_sample.png",
            },
          ],
        },
        {
          name: "气球",
          type: 1,
          id: 2006,
          list: [
            {
              type: 1,
              id: 0,
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
              id: 1,
              type: 1,
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
              id: 2,
              type: 1,
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
              id: 3,
              isNoSave: false,
              price: 100,
              type: 1,
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
        name: "背景",
        type: 0,
        id: 2001,
        imgurl: "http://127.0.0.1:8080/icons/ic_tabbar_background.png",
      },
      {
        name: "主题",
        type: 6,
        id: 2007,
        imgurl: "http://127.0.0.1:8080/icons/ic_tabbar_theme.png",
      },
      {
        name: "抹面",
        type: 2,
        id: 2002,
        imgurl: "http://127.0.0.1:8080/icons/ic_tabbar_cake.png",
      },
      {
        name: "淋面",
        type: 3,
        id: 2003,
        imgurl: "http://127.0.0.1:8080/icons/ic_tabbar_cream.png",
      },
      {
        name: "插牌",
        type: 4,
        id: 2004,
        imgurl: "http://127.0.0.1:8080/icons/ic_tabbar_cake_topper.png",
      },
      {
        name: "气球",
        type: 1,
        id: 2006,
        imgurl: "http://127.0.0.1:8080/icons/ic_tabbar_balloon.png",
      },
      {
        name: "糖珠",
        type: 5,
        id: 2005,
        imgurl: "http://127.0.0.1:8080/icons/ic_tabbar_cake_candy.png",
      },
    ],
    message: "获取成功",
  };
};
