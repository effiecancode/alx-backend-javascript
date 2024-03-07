import ClassRoom from './0-classroom';
//  const ClassRoom = require("./0-classroom").default;

function initializeRooms() {
    const obj = [new ClassRoom(19), new ClassRoom(20), new ClassRoom(34)];
    return obj;
}

export default initializeRooms();

// test
// console.log(initializeRooms());
