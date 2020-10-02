import Action from "./action.js";

// let dataMain = [
//   {
//     name: "anh",
//     phoneNumber: "1234",
//     locations: [
//       {
//         localName: "Thanh Tri",
//         coordinates: [20, 105],
//       },
//     ],
//   },
//   {
//     name: "lung",
//     phoneNumber: "1214",
//     locations: [
//       {
//         localName: "Me Tri",
//         coordinates: [1, 10],
//       },
//       {
//         localName: "Tai Luy",
//         coordinates: [21, 104],
//       },
//     ],
//   },
//   {
//     name: "siroos",
//     phoneNumber: "123334",
//     locations: [
//       {
//         localName: "Kim Boi",
//         coordinates: [22, 104],
//       },
//     ],
//   },
// ];
let dataMain = [];
let action = new Action(dataMain);
action.add();
action.show();
action.warning();
