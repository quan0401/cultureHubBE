const questions = [
  {
    questionText:
      "Which city in Vietnam is known as the 'City of Eternal Spring'?",
    options: ["Da Lat", "Ha Long", "Hanoi", "Hoi An"],
    correctAnswer: "Da Lat",
    point: 12,
    wrongPoint: -3,
    category: "Vietnamese Places",
  },
  {
    questionText:
      "Which famous bay in Vietnam is known for its emerald waters and limestone islands?",
    options: ["Ha Long Bay", "Nha Trang Bay", "Vung Tau Bay", "Can Gio Bay"],
    correctAnswer: "Ha Long Bay",
    point: 15,
    wrongPoint: -4,
    category: "Vietnamese Places",
  },
  {
    questionText:
      "Which city in Central Vietnam is famous for its beautiful beaches?",
    options: ["Da Nang", "Hue", "Quy Nhon", "Phan Thiet"],
    correctAnswer: "Da Nang",
    point: 10,
    wrongPoint: -2,
    category: "Vietnamese Places",
  },
  {
    questionText: "What is the capital city of Vietnam?",
    options: ["Hanoi", "Ho Chi Minh City", "Da Nang", "Hue"],
    correctAnswer: "Hanoi",
    point: 10,
    wrongPoint: -2,
    category: "Vietnamese Places",
  },
  {
    questionText: "Which city in Vietnam is known for its lantern festival?",
    options: ["Hoi An", "Da Nang", "Nha Trang", "Sapa"],
    correctAnswer: "Hoi An",
    point: 15,
    wrongPoint: -3,
    category: "Vietnamese Places",
  },
  {
    questionText: "What is the highest mountain in Vietnam?",
    options: [
      "Fansipan",
      "Ba Den Mountain",
      "Bach Ma Mountain",
      "Cam Mountain",
    ],
    correctAnswer: "Fansipan",
    point: 12,
    wrongPoint: -2,
    category: "Vietnamese Places",
  },
  {
    questionText:
      "Which city in Vietnam is known for its ancient town with well-preserved architecture?",
    options: ["Hoi An", "Ho Chi Minh City", "Hanoi", "Da Nang"],
    correctAnswer: "Hoi An",
    point: 12,
    wrongPoint: -3,
    category: "Vietnamese Places",
  },
  {
    questionText:
      "Which famous mountain range in Vietnam is often referred to as the 'Roof of Indochina'?",
    options: [
      "Hoang Lien Son Range",
      "Annamite Range",
      "Truong Son Range",
      "Ba Vi Range",
    ],
    correctAnswer: "Hoang Lien Son Range",
    point: 15,
    wrongPoint: -4,
    category: "Vietnamese Places",
  },
  {
    questionText:
      "Which city in Vietnam is home to the Imperial City, a UNESCO World Heritage Site?",
    options: ["Hue", "Nha Trang", "Vung Tau", "Can Tho"],
    correctAnswer: "Hue",
    point: 10,
    wrongPoint: -2,
    category: "Vietnamese Places",
  },
  {
    questionText:
      "Which city in Vietnam is known for its beautiful beaches and vibrant nightlife?",
    options: ["Nha Trang", "Hanoi", "Ho Chi Minh City", "Da Nang"],
    correctAnswer: "Nha Trang",
    point: 12,
    wrongPoint: -3,
    category: "Vietnamese Places",
  },
  {
    questionText:
      "Which famous bay in Vietnam is known for its stunning limestone karsts and emerald waters?",
    options: [
      "Ha Long Bay",
      "Ninh Binh",
      "Phong Nha-Ke Bang National Park",
      "Cat Ba Island",
    ],
    correctAnswer: "Ha Long Bay",
    point: 15,
    wrongPoint: -4,
    category: "Vietnamese Places",
  },
  {
    questionText:
      "Which city in Vietnam is famous for its beautiful French colonial architecture?",
    options: ["Hanoi", "Ho Chi Minh City", "Hue", "Dalat"],
    correctAnswer: "Hanoi",
    point: 10,
    wrongPoint: -2,
    category: "Vietnamese Places",
  },
  {
    questionText:
      "Which mountainous region in northern Vietnam is home to many ethnic minority groups?",
    options: ["Sapa", "Dalat", "Mui Ne", "Con Dao"],
    correctAnswer: "Sapa",
    point: 14,
    wrongPoint: -3,
    category: "Vietnamese Places",
  },
  {
    questionText:
      "Which city in Vietnam is known for its beautiful beaches and French colonial landmarks?",
    options: ["Da Nang", "Nha Trang", "Hoi An", "Hue"],
    correctAnswer: "Da Nang",
    point: 11,
    wrongPoint: -3,
    category: "Vietnamese Places",
  },
  {
    questionText: "Which dish is considered the national dish of Vietnam?",
    options: ["Pho", "Banh Mi", "Bun Cha", "Goi Cuon"],
    correctAnswer: "Pho",
    point: 10,
    wrongPoint: -2,
    category: "Vietnamese Food",
  },
  {
    questionText:
      "What is the main ingredient in the popular Vietnamese soup, Bun Rieu?",
    options: ["Crab", "Beef", "Chicken", "Pork"],
    correctAnswer: "Crab",
    point: 12,
    wrongPoint: -3,
    category: "Vietnamese Food",
  },
  {
    questionText:
      "Which Vietnamese dish is made of rice noodles, grilled pork, fresh herbs, and fish sauce?",
    options: ["Bun Cha", "Com Tam", "Banh Xeo", "Mi Quang"],
    correctAnswer: "Bun Cha",
    point: 11,
    wrongPoint: -2,
    category: "Vietnamese Food",
  },
  {
    questionText:
      "What is the main ingredient in the popular Vietnamese sandwich, Banh Mi?",
    options: ["French Baguette", "Rice Noodles", "Pork", "Shrimp"],
    correctAnswer: "French Baguette",
    point: 10,
    wrongPoint: -2,
    category: "Vietnamese Food",
  },
  {
    questionText:
      "Which Vietnamese dish features rice paper wrappers filled with various ingredients and served with dipping sauce?",
    options: ["Goi Cuon", "Bun Bo Hue", "Cao Lau", "Mi Quang"],
    correctAnswer: "Goi Cuon",
    point: 12,
    wrongPoint: -3,
    category: "Vietnamese Food",
  },
  {
    questionText:
      "Which famous Vietnamese dish is made with rice noodles, grilled pork, fresh herbs, peanuts, and a tangy sauce?",
    options: ["Banh Xeo", "Bun Thit Nuong", "Cao Lau", "Goi Du Du"],
    correctAnswer: "Bun Thit Nuong",
    point: 13,
    wrongPoint: -3,
    category: "Vietnamese Food",
  },
  {
    questionText:
      "What is the traditional Vietnamese dessert made from sweet sticky rice and mung bean paste, wrapped in a banana leaf?",
    options: ["Che Ba Mau", "Banh Tet", "Che Chuoi", "Xoi La Cam"],
    correctAnswer: "Banh Tet",
    point: 10,
    wrongPoint: -2,
    category: "Vietnamese Food",
  },
  {
    questionText:
      "Which Vietnamese noodle dish is known for its rich and flavorful broth made from beef bones and various spices?",
    options: ["Bun Bo Hue", "Mi Quang", "Pho", "Hu Tieu"],
    correctAnswer: "Bun Bo Hue",
    point: 12,
    wrongPoint: -3,
    category: "Vietnamese Food",
  },
  {
    questionText:
      "What is the famous Vietnamese soup dish that consists of rice noodles, beef slices, beef balls, and herbs?",
    options: ["Bun Rieu", "Banh Canh", "Bun Bo Hue", "Pho"],
    correctAnswer: "Pho",
    point: 15,
    wrongPoint: -3,
    category: "Vietnamese Food",
  },
  {
    questionText:
      "Which Vietnamese dish is a savory pancake filled with shrimp, pork, bean sprouts, and served with a dipping sauce?",
    options: ["Banh Xeo", "Goi Cuon", "Banh Mi", "Bun Cha"],
    correctAnswer: "Banh Xeo",
    point: 12,
    wrongPoint: -2,
    category: "Vietnamese Food",
  },
  {
    questionText:
      "What is the popular Vietnamese snack made from fried rice paper, topped with shrimp, pork, herbs, and a peanut dipping sauce?",
    options: [
      "Bun Thit Nuong",
      "Banh Trang Tron",
      "Ca Phe Trung",
      "Che Ba Mau",
    ],
    correctAnswer: "Banh Trang Tron",
    point: 10,
    wrongPoint: -2,
    category: "Vietnamese Food",
  },
  {
    questionText:
      "Which Vietnamese dish is a flavorful salad made with green papaya, herbs, peanuts, and a tangy dressing?",
    options: ["Goi Du Du", "Bun Cha", "Mi Quang", "Ca Kho To"],
    correctAnswer: "Goi Du Du",
    point: 11,
    wrongPoint: -2,
    category: "Vietnamese Food",
  },
  {
    questionText:
      "What is the Vietnamese dessert made from mung bean paste, coconut milk, and agar jelly?",
    options: ["Che Ba Mau", "Banh Tet", "Xoi La Cam", "Che Chuoi"],
    correctAnswer: "Che Ba Mau",
    point: 9,
    wrongPoint: -1,
    category: "Vietnamese Food",
  },
  {
    questionText:
      "Which Vietnamese dish is a popular street food made from marinated grilled pork, served with noodles, herbs, and a fish sauce-based dressing?",
    options: ["Bun Bo Hue", "Bun Thit Nuong", "Pho", "Mi Quang"],
    correctAnswer: "Bun Thit Nuong",
    point: 13,
    wrongPoint: -3,
    category: "Vietnamese Food",
  },
  {
    questionText:
      "Who was the Vietnamese military leader who successfully fought against foreign invaders, including the Mongols, in the 13th century?",
    options: ["Tran Hung Dao", "Ho Chi Minh", "Nguyen Hue", "Le Loi"],
    correctAnswer: "Tran Hung Dao",
    point: 15,
    wrongPoint: -3,
    category: "Vietnamese History",
  },
  {
    questionText:
      "Which Vietnamese dynasty successfully defeated the Chinese Ming Dynasty and gained independence in the 15th century?",
    options: ["Ly Dynasty", "Tran Dynasty", "Le Dynasty", "Ho Dynasty"],
    correctAnswer: "Le Dynasty",
    point: 12,
    wrongPoint: -2,
    category: "Vietnamese History",
  },
  {
    questionText:
      "Who was the Vietnamese emperor who established the Tay Son Dynasty and led a successful rebellion against the ruling Nguyen Lords in the late 18th century?",
    options: ["Tran Thanh Tong", "Le Loi", "Nguyen Hue", "Ho Quy Ly"],
    correctAnswer: "Nguyen Hue",
    point: 10,
    wrongPoint: -2,
    category: "Vietnamese History",
  },
  {
    questionText:
      "Which Vietnamese emperor is known for his social and administrative reforms during the Nguyen Dynasty in the 19th century?",
    options: ["Le Thanh Tong", "Gia Long", "Tran Thai Tong", "Bao Dai"],
    correctAnswer: "Gia Long",
    point: 11,
    wrongPoint: -2,
    category: "Vietnamese History",
  },
  {
    questionText:
      "Which event marked the end of French colonial rule in Vietnam and the beginning of Vietnamese independence?",
    options: [
      "Battle of Dien Bien Phu",
      "Tet Offensive",
      "Geneva Accords",
      "Fall of Saigon",
    ],
    correctAnswer: "Battle of Dien Bien Phu",
    point: 9,
    wrongPoint: -1,
    category: "Vietnamese History",
  },
  {
    questionText:
      "Who was the Vietnamese leader who played a key role in the Vietnam War and later became the first president of North Vietnam?",
    options: ["Ngo Dinh Diem", "Vo Nguyen Giap", "Le Duan", "Ho Chi Minh"],
    correctAnswer: "Ho Chi Minh",
    point: 13,
    wrongPoint: -3,
    category: "Vietnamese History",
  },
  {
    questionText:
      "Who was the Vietnamese military leader who successfully fought against foreign invaders, including the Mongols, in the 13th century?",
    options: ["Tran Hung Dao", "Ho Chi Minh", "Nguyen Hue", "Le Loi"],
    correctAnswer: "Tran Hung Dao",
    point: 15,
    wrongPoint: -3,
    category: "Vietnamese History",
  },
  {
    questionText:
      "Which Vietnamese dynasty successfully defeated the Chinese Ming Dynasty and gained independence in the 15th century?",
    options: ["Ly Dynasty", "Tran Dynasty", "Le Dynasty", "Ho Dynasty"],
    correctAnswer: "Le Dynasty",
    point: 12,
    wrongPoint: -2,
    category: "Vietnamese History",
  },
  {
    questionText:
      "Who was the Vietnamese emperor who established the Tay Son Dynasty and led a successful rebellion against the ruling Nguyen Lords in the late 18th century?",
    options: ["Tran Thanh Tong", "Le Loi", "Nguyen Hue", "Ho Quy Ly"],
    correctAnswer: "Nguyen Hue",
    point: 10,
    wrongPoint: -2,
    category: "Vietnamese History",
  },
  {
    questionText:
      "Which Vietnamese emperor is known for his social and administrative reforms during the Nguyen Dynasty in the 19th century?",
    options: ["Le Thanh Tong", "Gia Long", "Tran Thai Tong", "Bao Dai"],
    correctAnswer: "Gia Long",
    point: 11,
    wrongPoint: -2,
    category: "Vietnamese History",
  },
  {
    questionText:
      "Which event marked the end of French colonial rule in Vietnam and the beginning of Vietnamese independence?",
    options: [
      "Battle of Dien Bien Phu",
      "Tet Offensive",
      "Geneva Accords",
      "Fall of Saigon",
    ],
    correctAnswer: "Battle of Dien Bien Phu",
    point: 9,
    wrongPoint: -1,
    category: "Vietnamese History",
  },
  {
    questionText:
      "Who was the Vietnamese leader who played a key role in the Vietnam War and later became the first president of North Vietnam?",
    options: ["Ngo Dinh Diem", "Vo Nguyen Giap", "Le Duan", "Ho Chi Minh"],
    correctAnswer: "Ho Chi Minh",
    point: 13,
    wrongPoint: -3,
    category: "Vietnamese History",
  },
  {
    questionText:
      "Who was the Vietnamese leader who led the Tay Son Rebellion against the ruling Nguyen Lords in the late 18th century?",
    options: ["Le Loi", "Nguyen Hue", "Tran Hung Dao"],
    correctAnswer: "Nguyen Hue",
    point: 12,
    wrongPoint: -2,
    category: "Vietnamese History",
  },
  {
    questionText:
      "Which Vietnamese emperor is known for his cultural reforms and the construction of the Temple of Literature in Hanoi?",
    options: ["Le Thanh Tong", "Tran Thai Tong", "Ly Thai To"],
    correctAnswer: "Ly Thai To",
    point: 10,
    wrongPoint: -2,
    category: "Vietnamese History",
  },
  {
    questionText:
      "Which Vietnamese leader declared Vietnam's independence from French rule on September 2, 1945?",
    options: ["Ho Chi Minh", "Ngo Dinh Diem", "Vo Nguyen Giap"],
    correctAnswer: "Ho Chi Minh",
    point: 15,
    wrongPoint: -3,
    category: "Vietnamese History",
  },
  {
    questionText:
      "Which Vietnamese festival is known as the 'Lantern Festival' and celebrated in Hoi An?",
    options: [
      "Tet Nguyen Dan",
      "Mid-Autumn Festival",
      "Hoi An Lantern Festival",
    ],
    correctAnswer: "Hoi An Lantern Festival",
    point: 12,
    wrongPoint: -2,
    category: "Vietnamese Festivals",
  },
  {
    questionText:
      "Which Vietnamese festival is celebrated on the 15th day of the eighth lunar month and known as the 'Moon Festival'?",
    options: ["Tet Nguyen Dan", "Mid-Autumn Festival", "Lunar New Year"],
    correctAnswer: "Mid-Autumn Festival",
    point: 10,
    wrongPoint: -2,
    category: "Vietnamese Festivals",
  },
  {
    questionText:
      "Which Vietnamese festival marks the arrival of spring and is celebrated with colorful parades, dragon dances, and firecrackers?",
    options: [
      "Tet Nguyen Dan",
      "Hoi An Lantern Festival",
      "Dragon Boat Festival",
    ],
    correctAnswer: "Tet Nguyen Dan",
    point: 15,
    wrongPoint: -3,
    category: "Vietnamese Festivals",
  },
  {
    questionText:
      "Which Vietnamese festival is known for its dragon boat races?",
    options: ["Tet Nguyen Dan", "Mid-Autumn Festival", "Dragon Boat Festival"],
    correctAnswer: "Dragon Boat Festival",
    point: 10,
    wrongPoint: -2,
    category: "Vietnamese Festivals",
  },
  {
    questionText:
      "Which Vietnamese festival celebrates the arrival of spring and is also known as the 'Vietnamese New Year'?",
    options: [
      "Tet Nguyen Dan",
      "Hoi An Lantern Festival",
      "Mid-Autumn Festival",
    ],
    correctAnswer: "Tet Nguyen Dan",
    point: 12,
    wrongPoint: -2,
    category: "Vietnamese Festivals",
  },
  {
    questionText:
      "Which Vietnamese festival is celebrated to honor ancestors and is also called the 'Hung Kings Temple Festival'?",
    options: [
      "Hoi An Lantern Festival",
      "Hung Kings Temple Festival",
      "Dragon Boat Festival",
    ],
    correctAnswer: "Hung Kings Temple Festival",
    point: 15,
    wrongPoint: -3,
    category: "Vietnamese Festivals",
  },
  {
    questionText:
      "Which Vietnamese festival is known as the 'Wandering Souls' or 'Ghost Festival'?",
    options: ["Lunar New Year", "Tet Trung Thu", "Vu Lan"],
    correctAnswer: "Vu Lan",
    point: 10,
    wrongPoint: -2,
    category: "Vietnamese Festivals",
  },
  {
    questionText:
      "Which Vietnamese festival is celebrated on the 15th day of the seventh lunar month and is dedicated to children?",
    options: [
      "Tet Trung Thu",
      "Hoi An Lantern Festival",
      "Dragon Boat Festival",
    ],
    correctAnswer: "Tet Trung Thu",
    point: 12,
    wrongPoint: -2,
    category: "Vietnamese Festivals",
  },
  {
    questionText:
      "Which Vietnamese festival is celebrated to pray for a good harvest and is also known as the 'Rice God Festival'?",
    options: ["Tet Nguyen Tieu", "Doan Ngo Festival", "Cau Ngu Festival"],
    correctAnswer: "Doan Ngo Festival",
    point: 10,
    wrongPoint: -2,
    category: "Vietnamese Festivals",
  },
  {
    questionText:
      "Which Vietnamese festival is celebrated to honor the Whale God and pray for a good fishing season?",
    options: ["Tet Trung Thu", "Cau Ngu Festival", "Vu Lan"],
    correctAnswer: "Cau Ngu Festival",
    point: 12,
    wrongPoint: -2,
    category: "Vietnamese Festivals",
  },
  {
    questionText:
      "Which Vietnamese festival marks the end of the harvest season and is celebrated with various agricultural rituals?",
    options: ["Tet Nguyen Tieu", "Tet Doan Ngo", "Cau Ngu Festival"],
    correctAnswer: "Tet Doan Ngo",
    point: 15,
    wrongPoint: -3,
    category: "Vietnamese Festivals",
  },
  {
    questionText:
      "Which Vietnamese festival is celebrated on the 15th day of the eighth lunar month and is also known as the 'Lantern Festival'?",
    options: ["Tet Trung Thu", "Hoi An Lantern Festival", "Tet Nguyen Tieu"],
    correctAnswer: "Tet Trung Thu",
    point: 10,
    wrongPoint: -2,
    category: "Vietnamese Festivals",
  },
  {
    questionText:
      "Which Vietnamese festival is celebrated to honor the souls of the deceased and is also known as the 'Ghost Festival'?",
    options: ["Vu Lan", "Tet Nguyen Dan", "Cau Ngu Festival"],
    correctAnswer: "Vu Lan",
    point: 12,
    wrongPoint: -2,
    category: "Vietnamese Festivals",
  },
  // Add more questions here...
];
export default questions;
