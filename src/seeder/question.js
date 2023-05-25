const questions = [
  {
    questionText: "What is the traditional Vietnamese dress called?",
    options: ["Ao dai", "Cheongsam", "Hanbok", "Sari"],
    correctAnswer: "Ao dai",
    time: 30,
    author: "John Doe",
    point: 10,
    wrongPoint: -2,
    category: "Traditional Vietnamese Clothing",
    image: {
      url: "https://res.cloudinary.com/dg3fsapzu/image/upload/v1684997117/iStock-641930392-1_khpkqi.jpg",
    },
  },
  {
    questionText: "Which Vietnamese city is famous for its lantern festival?",
    options: ["Hoi An", "Da Nang", "Hanoi", "Ho Chi Minh City"],
    correctAnswer: "Hoi An",
    time: 45,
    author: "Jane Smith",
    point: 15,
    wrongPoint: -3,
    category: "Vietnamese Festivals",
    image: {
      url: "https://res.cloudinary.com/dg3fsapzu/image/upload/v1684997117/iStock-641930392-1_khpkqi.jpg",
    },
  },
  {
    questionText: "What is the traditional Vietnamese music called?",
    options: ["Nhạc Cổ", "Nhạc Trịnh", "Nhạc Vàng", "Nhạc Tài Tử"],
    correctAnswer: "Nhạc Cổ",
    time: 30,
    author: "Nguyen Tran",
    point: 10,
    wrongPoint: -2,
    category: "Vietnamese Culture",
    image: {
      url: "https://res.cloudinary.com/dg3fsapzu/image/upload/v1684997117/iStock-641930392-1_khpkqi.jpg",
    },
  },
  {
    questionText: "Which Vietnamese festival celebrates the harvest season?",
    options: [
      "Tet Trung Thu",
      "Tet Nguyen Dan",
      "Tet Doan Ngo",
      "Tet Trung Nguyen",
    ],
    correctAnswer: "Tet Trung Thu",
    time: 45,
    author: "Linh Nguyen",
    point: 15,
    wrongPoint: -3,
    category: "Vietnamese Culture",
    image: {
      url: "https://res.cloudinary.com/dg3fsapzu/image/upload/v1684997117/iStock-641930392-1_khpkqi.jpg",
    },
  },
  {
    questionText: "What is the traditional Vietnamese martial art called?",
    options: ["Vovinam", "Muay Thai", "Taekwondo", "Karate"],
    correctAnswer: "Vovinam",
    time: 60,
    author: "Trung Le",
    point: 20,
    wrongPoint: -4,
    category: "Vietnamese Culture",
    image: {
      url: "https://res.cloudinary.com/dg3fsapzu/image/upload/v1684997117/iStock-641930392-1_khpkqi.jpg",
    },
  },
  {
    questionText: "Which Vietnamese city is famous for its water puppetry?",
    options: ["Hanoi", "Ho Chi Minh City", "Da Nang", "Hoi An"],
    correctAnswer: "Hanoi",
    time: 45,
    author: "Phuong Nguyen",
    point: 12,
    wrongPoint: -2,
    category: "Vietnamese Culture",
    image: {
      url: "https://res.cloudinary.com/dg3fsapzu/image/upload/v1684997117/iStock-641930392-1_khpkqi.jpg",
    },
  },
  {
    questionText:
      "What is the traditional Vietnamese game similar to badminton called?",
    options: ["Da Cau", "Vovinam", "Bai Choi", "Co Tuong"],
    correctAnswer: "Da Cau",
    time: 30,
    author: "Duc Truong",
    point: 8,
    wrongPoint: -1,
    category: "Vietnamese Culture",
    image: {
      url: "https://res.cloudinary.com/dg3fsapzu/image/upload/v1684997117/iStock-641930392-1_khpkqi.jpg",
    },
  },
  {
    questionText: "Which Vietnamese dish is made from fermented shrimp paste?",
    options: ["Banh Mi", "Bun Cha", "Nem Ran", "Nuoc Mam"],
    correctAnswer: "Nuoc Mam",
    time: 60,
    author: "Anh Nguyen",
    point: 18,
    wrongPoint: -3,
    category: "Vietnamese Culture",
    image: {
      url: "https://res.cloudinary.com/dg3fsapzu/image/upload/v1684997117/iStock-641930392-1_khpkqi.jpg",
    },
  },
  {
    questionText: "What is the traditional Vietnamese lunar calendar called?",
    options: ["Am Duong Lich", "Am Tuc Lich", "Am Tinh Lich", "Am Hanh Lich"],
    correctAnswer: "Am Duong Lich",
    time: 45,
    author: "Kim Nguyen",
    point: 12,
    wrongPoint: -2,
    category: "Vietnamese Culture",
    image: {
      url: "https://res.cloudinary.com/dg3fsapzu/image/upload/v1684997117/iStock-641930392-1_khpkqi.jpg",
    },
  },
  {
    questionText:
      "Which Vietnamese folk art form uses watercolor paintings on silk?",
    options: ["Trong Dong", "Trong Com", "Trong Thuy", "Trong Tranh"],
    correctAnswer: "Trong Thuy",
    time: 30,
    author: "Huong Le",
    point: 8,
    wrongPoint: -1,
    category: "Vietnamese Culture",
    image: {
      url: "https://res.cloudinary.com/dg3fsapzu/image/upload/v1684997117/iStock-641930392-1_khpkqi.jpg",
    },
  },
  {
    questionText: "What is the traditional Vietnamese footwear called?",
    options: ["Ao Dai", "Non La", "Ao Ba Ba", "Ao Tu Than"],
    correctAnswer: "Non La",
    time: 30,
    author: "Minh Tran",
    point: 10,
    wrongPoint: -2,
    category: "Vietnamese Culture",
    image: {
      url: "https://res.cloudinary.com/dg3fsapzu/image/upload/v1684997117/iStock-641930392-1_khpkqi.jpg",
    },
  },
  {
    questionText: "Which Vietnamese dish is a type of rice noodle soup?",
    options: ["Pho", "Bun Bo Hue", "Mi Quang", "Com Tam"],
    correctAnswer: "Pho",
    time: 45,
    author: "Nam Nguyen",
    point: 15,
    wrongPoint: -3,
    category: "Vietnamese Culture",
    image: {
      url: "https://res.cloudinary.com/dg3fsapzu/image/upload/v1684997117/iStock-641930392-1_khpkqi.jpg",
    },
  },
  {
    questionText:
      "Which traditional Vietnamese garment is commonly worn on special occasions?",
    options: ["Ao Dai", "Non La", "Conical Hat", "Turban"],
    correctAnswer: "Ao Dai",
    time: 30,
    author: "Huyen Nguyen",
    point: 10,
    wrongPoint: -2,
    category: "Vietnamese Culture",
    image: {
      url: "https://res.cloudinary.com/dg3fsapzu/image/upload/v1684997117/iStock-641930392-1_khpkqi.jpg",
    },
  },
  {
    questionText: "Which Vietnamese city is famous for its lantern festival?",
    options: ["Hoi An", "Ho Chi Minh City", "Nha Trang", "Hue"],
    correctAnswer: "Hoi An",
    time: 45,
    author: "Quang Tran",
    point: 15,
    wrongPoint: -3,
    category: "Vietnamese Culture",
    image: {
      url: "https://res.cloudinary.com/dg3fsapzu/image/upload/v1684997117/iStock-641930392-1_khpkqi.jpg",
    },
  },
  {
    questionText:
      "What is the traditional Vietnamese art of silk painting called?",
    options: [
      "Tranh Son Mai",
      "Tranh Treo Tuong",
      "Tranh Dan Gian",
      "Tranh Sơn Dầu",
    ],
    correctAnswer: "Tranh Sơn Dầu",
    time: 60,
    author: "Thu Pham",
    point: 20,
    wrongPoint: -4,
    category: "Vietnamese Culture",
    image: {
      url: "https://res.cloudinary.com/dg3fsapzu/image/upload/v1684997117/iStock-641930392-1_khpkqi.jpg",
    },
  },
  {
    questionText:
      "Which Vietnamese musical instrument is shaped like a coconut?",
    options: ["Dan Bau", "Dan Tranh", "Dan Nguyet", "Dan Tam"],
    correctAnswer: "Dan Bau",
    time: 45,
    author: "Long Nguyen",
    point: 12,
    wrongPoint: -2,
    category: "Vietnamese Culture",
    image: {
      url: "https://res.cloudinary.com/dg3fsapzu/image/upload/v1684997117/iStock-641930392-1_khpkqi.jpg",
    },
  },
  {
    questionText:
      "What is the traditional Vietnamese noodle dish with grilled pork called?",
    options: ["Bun Bo Hue", "Pho", "Bun Cha", "Banh Canh"],
    correctAnswer: "Bun Cha",
    time: 30,
    author: "Lan Hoang",
    point: 8,
    wrongPoint: -1,
    category: "Vietnamese Culture",
    image: {
      url: "https://res.cloudinary.com/dg3fsapzu/image/upload/v1684997117/iStock-641930392-1_khpkqi.jpg",
    },
  },
  {
    questionText:
      "Which Vietnamese festival celebrates the spirits of deceased ancestors?",
    options: [
      "Tet Nguyen Dan",
      "Tet Trung Thu",
      "Tet Han Thuc",
      "Tet Trung Nguyen",
    ],
    correctAnswer: "Tet Trung Nguyen",
    time: 60,
    author: "Tuan Nguyen",
    point: 18,
    wrongPoint: -3,
    category: "Vietnamese Culture",
    image: {
      url: "https://res.cloudinary.com/dg3fsapzu/image/upload/v1684997117/iStock-641930392-1_khpkqi.jpg",
    },
  },
  {
    questionText:
      "What is the traditional Vietnamese puppetry art form called?",
    options: ["Mua Roi Nuoc", "Mua Ba La", "Mua Le Hoi", "Mua Miet Vuon"],
    correctAnswer: "Mua Roi Nuoc",
    time: 45,
    author: "Thanh Le",
    point: 12,
    wrongPoint: -2,
    category: "Vietnamese Culture",
    image: {
      url: "https://res.cloudinary.com/dg3fsapzu/image/upload/v1684997117/iStock-641930392-1_khpkqi.jpg",
    },
  },
  {
    questionText:
      "Which Vietnamese folk game involves throwing a shuttlecock with your feet?",
    options: ["Bai Choi", "Da Cau", "O An Quan", "Boi"],
    correctAnswer: "Da Cau",
    time: 30,
    author: "Quyen Phan",
    point: 8,
    wrongPoint: -1,
    category: "Vietnamese Culture",
    image: {
      url: "https://res.cloudinary.com/dg3fsapzu/image/upload/v1684997117/iStock-641930392-1_khpkqi.jpg",
    },
  },
  {
    questionText: "What is the traditional Vietnamese rice paper roll called?",
    options: ["Banh Mi", "Goi Cuon", "Banh Xeo", "Nem Ran"],
    correctAnswer: "Goi Cuon",
    time: 30,
    author: "Hoa Nguyen",
    point: 10,
    wrongPoint: -2,
    category: "Vietnamese Culture",
    image: {
      url: "https://res.cloudinary.com/dg3fsapzu/image/upload/v1684997117/iStock-641930392-1_khpkqi.jpg",
    },
  },
  {
    questionText:
      "Which Vietnamese city is famous for its water puppetry shows?",
    options: ["Hanoi", "Da Nang", "Can Tho", "Hai Phong"],
    correctAnswer: "Hanoi",
    time: 45,
    author: "Minh Vo",
    point: 12,
    wrongPoint: -2,
    category: "Vietnamese Culture",
    image: {
      url: "https://res.cloudinary.com/dg3fsapzu/image/upload/v1684997117/iStock-641930392-1_khpkqi.jpg",
    },
  },
  {
    questionText: "What is the traditional Vietnamese hat called?",
    options: ["Non La", "Ao Dai", "Conical Hat", "Turban"],
    correctAnswer: "Non La",
    time: 30,
    author: "Huyen Nguyen",
    point: 10,
    wrongPoint: -2,
    category: "Vietnamese Culture",
    image: {
      url: "https://res.cloudinary.com/dg3fsapzu/image/upload/v1684997117/iStock-641930392-1_khpkqi.jpg",
    },
  },
  {
    questionText: "Which Vietnamese city is famous for its coffee culture?",
    options: ["Hanoi", "Ho Chi Minh City", "Da Nang", "Hoi An"],
    correctAnswer: "Hanoi",
    time: 45,
    author: "Quang Tran",
    point: 15,
    wrongPoint: -3,
    category: "Vietnamese Culture",
    image: {
      url: "https://res.cloudinary.com/dg3fsapzu/image/upload/v1684997117/iStock-641930392-1_khpkqi.jpg",
    },
  },
  {
    questionText: "What is the traditional Vietnamese martial art called?",
    options: ["Vovinam", "Muay Thai", "Taekwondo", "Judo"],
    correctAnswer: "Vovinam",
    time: 60,
    author: "Thu Pham",
    point: 20,
    wrongPoint: -4,
    category: "Vietnamese Culture",
    image: {
      url: "https://res.cloudinary.com/dg3fsapzu/image/upload/v1684997117/iStock-641930392-1_khpkqi.jpg",
    },
  },
  {
    questionText:
      "Which Vietnamese dish is a rice noodle soup with beef and herbs?",
    options: ["Bun Bo Hue", "Pho", "Banh Xeo", "Com Tam"],
    correctAnswer: "Pho",
    time: 45,
    author: "Long Nguyen",
    point: 12,
    wrongPoint: -2,
    category: "Vietnamese Culture",
    image: {
      url: "https://res.cloudinary.com/dg3fsapzu/image/upload/v1684997117/iStock-641930392-1_khpkqi.jpg",
    },
  },
  {
    questionText: "Which Vietnamese festival celebrates the arrival of spring?",
    options: [
      "Tet Nguyen Dan",
      "Tet Trung Thu",
      "Tet Han Thuc",
      "Tet Doan Ngo",
    ],
    correctAnswer: "Tet Nguyen Dan",
    time: 30,
    author: "Lan Hoang",
    point: 8,
    wrongPoint: -1,
    category: "Vietnamese Culture",
    image: {
      url: "https://res.cloudinary.com/dg3fsapzu/image/upload/v1684997117/iStock-641930392-1_khpkqi.jpg",
    },
  },
  {
    questionText:
      "What is the traditional Vietnamese musical instrument with three strings?",
    options: ["Dan Bau", "Dan Tranh", "Dan Nguyet", "Dan Tam"],
    correctAnswer: "Dan Tranh",
    time: 60,
    author: "Tuan Nguyen",
    point: 18,
    wrongPoint: -3,
    category: "Vietnamese Culture",
    image: {
      url: "https://res.cloudinary.com/dg3fsapzu/image/upload/v1684997117/iStock-641930392-1_khpkqi.jpg",
    },
  },
  {
    questionText: "Which Vietnamese city is known for its lantern festival?",
    options: ["Hoi An", "Hue", "Nha Trang", "Vung Tau"],
    correctAnswer: "Hoi An",
    time: 45,
    author: "Thanh Le",
    point: 12,
    wrongPoint: -2,
    category: "Vietnamese Culture",
    image: {
      url: "https://res.cloudinary.com/dg3fsapzu/image/upload/v1684997117/iStock-641930392-1_khpkqi.jpg",
    },
  },
  {
    questionText:
      "What is the traditional Vietnamese art of folding paper called?",
    options: ["Origami", "Tranh Son Mai", "Tranh Dan Gian", "Tranh Treo Tuong"],
    correctAnswer: "Tranh Treo Tuong",
    time: 30,
    author: "Quyen Phan",
    point: 8,
    wrongPoint: -1,
    category: "Vietnamese Culture",
    image: {
      url: "https://res.cloudinary.com/dg3fsapzu/image/upload/v1684997117/iStock-641930392-1_khpkqi.jpg",
    },
  },
  {
    questionText:
      "Which Vietnamese dish is a savory pancake with shrimp and pork?",
    options: ["Bun Bo Hue", "Pho", "Banh Xeo", "Banh Mi"],
    correctAnswer: "Banh Xeo",
    time: 45,
    author: "Huong Do",
    point: 12,
    wrongPoint: -2,
    category: "Vietnamese Culture",
    image: {
      url: "https://res.cloudinary.com/dg3fsapzu/image/upload/v1684997117/iStock-641930392-1_khpkqi.jpg",
    },
  },
  {
    questionText: "Which Vietnamese city is famous for its Imperial Citadel?",
    options: ["Hue", "Hoi An", "Da Nang", "Ho Chi Minh City"],
    correctAnswer: "Hue",
    time: 60,
    author: "Minh Nguyen",
    point: 15,
    wrongPoint: -3,
    category: "Vietnamese Culture",
    image: {
      url: "https://res.cloudinary.com/dg3fsapzu/image/upload/v1684997117/iStock-641930392-1_khpkqi.jpg",
    },
  },
  {
    questionText: "What is the traditional Vietnamese dress called?",
    options: ["Ao Dai", "Non La", "Cheongsam", "Hanbok"],
    correctAnswer: "Ao Dai",
    time: 30,
    author: "Linh Tran",
    point: 10,
    wrongPoint: -2,
    category: "Vietnamese Culture",
    image: {
      url: "https://res.cloudinary.com/dg3fsapzu/image/upload/v1684997117/iStock-641930392-1_khpkqi.jpg",
    },
  },
  {
    questionText: "Which Vietnamese city is famous for its lantern festival?",
    options: ["Hoi An", "Hanoi", "Da Nang", "Ho Chi Minh City"],
    correctAnswer: "Hoi An",
    time: 45,
    author: "Phuong Nguyen",
    point: 15,
    wrongPoint: -3,
    category: "Vietnamese Culture",
    image: {
      url: "https://res.cloudinary.com/dg3fsapzu/image/upload/v1684997117/iStock-641930392-1_khpkqi.jpg",
    },
  },
  {
    questionText: "What is the traditional Vietnamese puppetry called?",
    options: ["Water Puppetry", "Shadow Puppetry", "Marionette", "Hand Puppet"],
    correctAnswer: "Water Puppetry",
    time: 60,
    author: "Anh Nguyen",
    point: 20,
    wrongPoint: -4,
    category: "Vietnamese Culture",
    image: {
      url: "https://res.cloudinary.com/dg3fsapzu/image/upload/v1684997117/iStock-641930392-1_khpkqi.jpg",
    },
  },
  {
    questionText: "Which Vietnamese dish is a traditional sticky rice cake?",
    options: ["Banh Chung", "Pho", "Bun Cha", "Goi Cuon"],
    correctAnswer: "Banh Chung",
    time: 45,
    author: "Quoc Le",
    point: 12,
    wrongPoint: -2,
    category: "Vietnamese Culture",
    image: {
      url: "https://res.cloudinary.com/dg3fsapzu/image/upload/v1684997117/iStock-641930392-1_khpkqi.jpg",
    },
  },
  {
    questionText:
      "What is the traditional Vietnamese musical instrument with two strings?",
    options: ["Dan Bau", "Dan Tranh", "Dan Ty Ba", "Dan Nguyet"],
    correctAnswer: "Dan Bau",
    time: 30,
    author: "Nam Hoang",
    point: 8,
    wrongPoint: -1,
    category: "Vietnamese Culture",
    image: {
      url: "https://res.cloudinary.com/dg3fsapzu/image/upload/v1684997117/iStock-641930392-1_khpkqi.jpg",
    },
  },
  {
    questionText: "Which Vietnamese city is famous for its ceramic products?",
    options: ["Bat Trang", "Hue", "Da Lat", "Sapa"],
    correctAnswer: "Bat Trang",
    time: 60,
    author: "Thao Nguyen",
    point: 18,
    wrongPoint: -3,
    category: "Vietnamese Culture",
    image: {
      url: "https://res.cloudinary.com/dg3fsapzu/image/upload/v1684997117/iStock-641930392-1_khpkqi.jpg",
    },
  },
  {
    questionText:
      "What is the traditional Vietnamese cake made from mung bean and sticky rice?",
    options: ["Banh Com", "Banh Xeo", "Banh Mi", "Banh Canh"],
    correctAnswer: "Banh Com",
    time: 45,
    author: "Duc Pham",
    point: 12,
    wrongPoint: -2,
    category: "Vietnamese Culture",
    image: {
      url: "https://res.cloudinary.com/dg3fsapzu/image/upload/v1684997117/iStock-641930392-1_khpkqi.jpg",
    },
  },
  {
    questionText: "Which Vietnamese city is famous for its silk production?",
    options: ["Hoi An", "Nha Trang", "Hanoi", "Hue"],
    correctAnswer: "Hue",
    time: 30,
    author: "Trang Nguyen",
    point: 8,
    wrongPoint: -1,
    category: "Vietnamese Culture",
    image: {
      url: "https://res.cloudinary.com/dg3fsapzu/image/upload/v1684997117/iStock-641930392-1_khpkqi.jpg",
    },
  },
  {
    questionText:
      "What is the traditional Vietnamese martial art that uses fan as a weapon?",
    options: ["Vo Co Truyen", "Vovinam", "Viet Vo Dao", "Vietnamese Boxing"],
    correctAnswer: "Vo Co Truyen",
    time: 45,
    author: "Minh Phan",
    point: 14,
    wrongPoint: -3,
    category: "Vietnamese Culture",
    image: {
      url: "https://res.cloudinary.com/dg3fsapzu/image/upload/v1684997117/iStock-641930392-1_khpkqi.jpg",
    },
  },
  {
    questionText: "Which Vietnamese festival celebrates the arrival of spring?",
    options: [
      "Tet Nguyen Dan",
      "Mid-Autumn Festival",
      "Lantern Festival",
      "Hue Festival",
    ],
    correctAnswer: "Tet Nguyen Dan",
    time: 60,
    author: "Hien Nguyen",
    point: 16,
    wrongPoint: -3,
    category: "Vietnamese Culture",
    image: {
      url: "https://res.cloudinary.com/dg3fsapzu/image/upload/v1684997117/iStock-641930392-1_khpkqi.jpg",
    },
  },
  // Add more questions here...
];
export default questions;