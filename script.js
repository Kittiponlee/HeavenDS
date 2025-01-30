const upperNumbers = [
    { id: 'U1', name: 'วังชะตา(เหมี่ยเก็ง)' },
    { id: 'U2', name: 'วังลาภะ(ไฉ่แป๊ะ)' },
    { id: 'U3', name: 'วังญาติ(เฮียตี๋)' },
    { id: 'U4', name: 'วังอสังหา(ฉั่งแทะ)' },
    { id: 'U5', name: 'วังบุตร(หน่ำนึ่ง)' },
    { id: 'U6', name: 'วังบริวาร(หน่งป๊ก)' },
    { id: 'U7', name: 'วังสมรส(ซีเฉียบ)' },
    { id: 'U8', name: 'วังสุขภาพ(จิบแอะ)' },
    { id: 'U9', name: 'วังเดินทาง(เซียงอี๊)' },
    { id: 'U10', name: 'วังอำนาจ(กัวลก)' },
    { id: 'U11', name: 'วังวาสนา (ฮกเต็ก)' },
    { id: 'U12', name: 'วังคุณค่า(เซี่ยงเหมา)' }
];

const lowerNumbers = [
    { id: 'L1', name: 'พัฒนา(เชี่ยงแซ)' },
    { id: 'L2', name: 'เสน่หา(หมกยก)' },
    { id: 'L3', name: 'บัณฑิต(กวงตั่ว)' },
    { id: 'L4', name: 'ตำแหน่ง(ลิ่มกัว)' },
    { id: 'L5', name: 'ศักดิ์ศรี(ตี้อ๋วง)' },
    { id: 'L6', name: 'เสื่อม(ซวย)' },
    { id: 'L7', name: 'เจ็บป่วย(แป่)' },
    { id: 'L8', name: 'มรณะ(ซี่)' },
    { id: 'L9', name: 'กองคลัง(หมอ)' },
    { id: 'L10', name: 'สูญสิ้น(เจ๊าะ)' },
    { id: 'L11', name: 'ครรภ์(ทอ)' },
    { id: 'L12', name: 'ทารก(เอี๊ยง)' }
];

const doors = [
    { id: 'D1', name: 'ประตูไค' },
    { id: 'D2', name: 'ประตูฮิว' },
    { id: 'D3', name: 'ประตูแซ' },
    { id: 'D4', name: 'ประตูเซีย' },
    { id: 'D5', name: 'ประตูโต๋ว' },
    { id: 'D6', name: 'ประตูเก้ง' },
    { id: 'D7', name: 'ประตูซี่' },
    { id: 'D8', name: 'ประตูเกีย' }
];

const pieces = [
    { id: 'I1', type: 'น้ำ', color: 'blue' },
    { id: 'I2', type: 'ไฟ', color: 'red' },
    { id: 'I3', type: 'ไม้', color: 'green' },
    { id: 'I4', type: 'ทอง', color: 'white' },
    { id: 'I5', type: 'ดิน', color: 'yellow' },
    { id: 'I6', type: 'น้ำ', color: 'blue' },
    { id: 'I7', type: 'ไฟ', color: 'red' },
    { id: 'I8', type: 'ไม้', color: 'green' },
    { id: 'I9', type: 'ทอง', color: 'white' },
    { id: 'I10', type: 'ดิน', color: 'yellow' }
];

const gridOrder = ['A1', 'B1', 'C1', 'C2', 'C3', 'B3', 'A3', 'A2'];

function getRandomIndex(arr) {
    return Math.floor(Math.random() * arr.length);
}

function shuffleArray(arr) {
    let shuffled = arr.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function getRandomDoors() {
    const startIndex = getRandomIndex(gridOrder);
    const orderedDoors = [];
    for (let i = 0; i < doors.length; i++) {
        const index = (startIndex + i) % gridOrder.length;
        orderedDoors.push({ ...doors[i], position: gridOrder[index] });
    }
    return orderedDoors;
}

function randomizeGrid() {
    const shuffledUpper = shuffleArray([...upperNumbers]);
    const shuffledLower = shuffleArray([...lowerNumbers]);
    const shuffledPieces = shuffleArray([...pieces]);
    const orderedDoors = getRandomDoors();

    gridOrder.forEach((id, index) => {
        const upper = shuffledUpper[index];
        const lower = shuffledLower[index];
        const door = orderedDoors.find(d => d.position === id);
        const piece = shuffledPieces[index];

        document.getElementById(id).innerHTML = `
            <div>${upper.name} (${upper.id})</div>
            <div>${lower.name} (${lower.id})</div>
            <div>${door.name} (${door.id})</div>
            <div>หมาก: ${piece.type} (${piece.id})</div>
        `;
    });
}

document.getElementById('randomize-btn').addEventListener('click', () => {
    randomizeGrid();
});
