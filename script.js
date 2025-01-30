const upperNumbers = ['วังชะตา(เหมี่ยเก็ง)', 'วังลาภะ(ไฉ่แป๊ะ)', 'วังญาติ(เฮียตี๋)', 'วังอสังหา(ฉั่งแทะ)', 'วังบุตร(หน่ำนึ่ง)', 
                      'วังบริวาร(หน่งป๊ก)', 'วังสมรส(ซีเฉียบ)', 'วังสุขภาพ(จิบแอะ)', 'วังเดินทาง(เซียงอี๊)', 'วังอำนาจ(กัวลก)', 
                      'วังวาสนา (ฮกเต็ก)', 'วังคุณค่า(เซี่ยงเหมา)'];

const lowerNumbers = ['พัฒนา(เชี่ยงแซ)', 'เสน่หา(หมกยก)', 'บัณฑิต(กวงตั่ว)', 'ตำแหน่ง(ลิ่มกัว)', 'ศักดิ์ศรี(ตี้อ๋วง)', 
                      'เสื่อม(ซวย)', 'เจ็บป่วย(แป่)', 'มรณะ(ซี่)', 'กองคลัง(หมอ)', 'สูญสิ้น(เจ๊าะ)', 
                      'ครรภ์(ทอ)', 'ทารก(เอี๊ยง)'];

const doors = ['ประตูไค', 'ประตูฮิว', 'ประตูแซ', 'ประตูเซีย', 'ประตูโต๋ว', 'ประตูเก้ง', 'ประตูซี่', 'ประตูเกีย'];

const pieces = [
    { id: 'I1', type: 'น้ำ', color: 'blue' }, { id: 'I2', type: 'ไฟ', color: 'red' }, { id: 'I3', type: 'ไม้', color: 'green' }, 
    { id: 'I4', type: 'ทอง', color: 'white' }, { id: 'I5', type: 'ดิน', color: 'yellow' },
    { id: 'I6', type: 'น้ำ', color: 'blue' }, { id: 'I7', type: 'ไฟ', color: 'red' }, { id: 'I8', type: 'ไม้', color: 'green' }, 
    { id: 'I9', type: 'ทอง', color: 'white' }, { id: 'I10', type: 'ดิน', color: 'yellow' }
];

const grid = ['A1', 'B1', 'C1', 'A2', 'B2', 'C2', 'A3', 'B3', 'C3'];
let currentDoors = [];
let currentPieces = [];

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
    const startIndex = getRandomIndex(doors);
    currentDoors = [...doors.slice(startIndex), ...doors.slice(0, startIndex)];
    return currentDoors;
}

function randomizeGrid() {
    const shuffledUpper = shuffleArray([...upperNumbers]);
    const shuffledLower = shuffleArray([...lowerNumbers]);
    const shuffledPieces = shuffleArray([...pieces]);

    grid.forEach((id, index) => {
        const upper = shuffledUpper[index];
        const lower = shuffledLower[index];
        const door = currentDoors[index];
        const piece = shuffledPieces[index];

        document.getElementById(id).innerHTML = `
            <div>${upper} (${upperNumbers.indexOf(upper) + 1})</div>
            <div>${lower} (${lowerNumbers.indexOf(lower) + 1})</div>
            <div>${door}</div>
            <div>หมาก: ${piece.type} (${piece.id})</div>
        `;
    });
}

document.getElementById('randomize-btn').addEventListener('click', () => {
    getRandomDoors();
    randomizeGrid();
});
