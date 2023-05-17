import usersActions from "./usersActions";
import usersGetters from "./usersGetters";
import usersMutations from "./usersMutations";

export default {
  namespaced: true,
  state: () => ({
    Users: [
      {
        avatarSrc:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwbNHiF_XxGvXEHSxauB0PAAONKpY8QR7p2w&usqp=CAU",
        name: "Nhi Hàn",
        id: "nhihan113",
        sex: "Nữ",
        date: "01/01/2002",
        phone: "0909090909",
        country: "việt nam",
        description: "Da trắng như tuyết, tóc đen như mun, bồ phú tuấn",
        countReminded: 0,
        banned: false,
      },
      {
        avatarSrc:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwbNHiF_XxGvXEHSxauB0PAAONKpY8QR7p2w&usqp=CAU",
        name: "Nhi Hàn",
        id: "nhihan113",
        sex: "Nữ",
        date: "01/01/2002",
        phone: "0909090909",
        country: "việt nam",
        description: "Da trắng như tuyết, tóc đen như mun, bồ phú tuấn bồ?????",
        countReminded: 0,
        banned: false,
      },
      {
        avatarSrc:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwbNHiF_XxGvXEHSxauB0PAAONKpY8QR7p2w&usqp=CAU",
        name: "Nhi Hàn",
        id: "nhihan113",
        sex: "Nữ",
        date: "01/01/2002",
        phone: "0909090909",
        country: "việt nam",
        description: "Da trắng như tuyết, tóc đen như mun, bồ phú tuấn",
        countReminded: 0,
        banned: false,
      },
      {
        avatarSrc:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwbNHiF_XxGvXEHSxauB0PAAONKpY8QR7p2w&usqp=CAU",
        name: "Nhi Hàn",
        id: "nhihan113",
        sex: "Nữ",
        date: "01/01/2002",
        phone: "0909090909",
        country: "việt nam",
        description: "Da trắng như tuyết, tóc đen như mun, bồ phú tuấn",
        countReminded: 0,
        banned: true,
      },
    ],
  }),
  getters: usersGetters,
  mutations: usersMutations,
  actions: usersActions,
};
