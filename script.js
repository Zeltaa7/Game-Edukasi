let currentCategory = '';
let currentQuestionIndex = 0;
let currentScore = 0;
let timer;
let timeLeft = 15;
let answerResults = []; // 1. Array untuk menyimpan hasil jawaban

const questions = {
  kimia: [
  {
    question: "Apa simbol kimia dari unsur Oksigen?",
    choices: ["O", "Ox", "Og", "Os"],
    correct: 0
  },
  {
    question: "Zat yang tidak dapat diuraikan menjadi zat yang lebih sederhana disebut?",
    choices: ["Campuran", "Unsur", "Larutan", "Gas"],
    correct: 1
  },
  {
    question: "Air merupakan contoh dari?",
    choices: ["Unsur", "Campuran", "Senyawa", "Gas mulia"],
    correct: 2
  },
  {
    question: "Manakah berikut ini yang termasuk perubahan kimia?",
    choices: ["Es mencair", "Air menguap", "Kertas dibakar", "Logam dipotong"],
    correct: 2
  },
  {
    question: "Berikut ini adalah contoh zat campuran, kecuali?",
    choices: ["Udara", "Air garam", "Air murni", "Minuman soda"],
    correct: 2
  },
  {
    question: "Jumlah unsur dalam air (H₂O) adalah?",
    choices: ["1", "2", "3", "4"],
    correct: 1
  },
  {
    question: "Unsur logam di bawah ini adalah?",
    choices: ["Oksigen", "Hidrogen", "Besi", "Karbon"],
    correct: 2
  },
  {
    question: "Zat yang dapat menghantarkan listrik disebut?",
    choices: ["Isolator", "Konduktor", "Elektroda", "Katalis"],
    correct: 1
  },
  {
    question: "Proses perubahan zat dari cair menjadi gas disebut?",
    choices: ["Membeku", "Menguap", "Mengembun", "Mencair"],
    correct: 1
  },
  {
    question: "Gas yang kita hirup untuk bernapas adalah?",
    choices: ["Karbon dioksida", "Nitrogen", "Oksigen", "Helium"],
    correct: 2
  },
  {
    question: "Contoh senyawa adalah?",
    choices: ["Oksigen", "Karbon", "Garam dapur", "Emas"],
    correct: 2
  },
  {
    question: "Zat tunggal terdiri dari?",
    choices: ["Senyawa dan larutan", "Unsur dan senyawa", "Campuran dan senyawa", "Campuran dan unsur"],
    correct: 1
  },
  {
    question: "Air laut tergolong sebagai?",
    choices: ["Unsur", "Senyawa", "Campuran homogen", "Campuran heterogen"],
    correct: 2
  },
  {
    question: "Apa nama unsur dengan simbol Fe?",
    choices: ["Fluorin", "Ferum", "Fosfor", "Fransium"],
    correct: 1
  },
  {
    question: "Pencampuran zat tanpa reaksi kimia disebut?",
    choices: ["Senyawa", "Peluruhan", "Campuran", "Perubahan kimia"],
    correct: 2
  }
],
  biologi: [
    {
      question: "Apa yang dimaksud dengan fotosintesis?",
      choices: ["Proses pembentukan sel darah", "Proses pembuatan makanan oleh tumbuhan", "Proses pembelahan sel", "Proses penguraian zat organik"],
      correct: 1
    },
    {
      question: "Bagian tumbuhan tempat terjadinya fotosintesis adalah?",
      choices: ["Batang", "Akar", "Daun", "Bunga"],
      correct: 2
    },
    {
      question: "Apa fungsi stomata pada daun?",
      choices: ["Menyerap cahaya", "Menyerap air", "Pertukaran gas", "Menarik serangga"],
      correct: 2
    },
    {
      question: "Klorofil terdapat pada organel?",
      choices: ["Nukleus", "Vakuola", "Kloroplas", "Mitokondria"],
      correct: 2
    },
    {
      question: "Tumbuhan menyerap air dari tanah melalui?",
      choices: ["Daun", "Batang", "Akar", "Stomata"],
      correct: 2
    }
    [
  {
    question: "Fungsi utama akar pada tumbuhan adalah?",
    choices: ["Fotosintesis", "Menyerap air dan mineral", "Membawa oksigen", "Menarik serangga"],
    correct: 1
  },
  {
    question: "Hewan herbivora adalah hewan yang memakan?",
    choices: ["Daging", "Tumbuhan", "Segala jenis makanan", "Serangga"],
    correct: 1
  },
  {
    question: "Organ pernapasan pada ikan adalah?",
    choices: ["Paru-paru", "Kulit", "Insang", "Trakea"],
    correct: 2
  },
  {
    question: "Hewan yang berkembang biak dengan cara bertelur disebut?",
    choices: ["Vivipar", "Ovipar", "Ovovivipar", "Herbivora"],
    correct: 1
  },
  {
    question: "Sel hewan tidak memiliki bagian?",
    choices: ["Membran sel", "Nukleus", "Kloroplas", "Sitoplasma"],
    correct: 2
  },
  {
    question: "Fotosintesis membutuhkan cahaya dari?",
    choices: ["Bulan", "Api", "Matahari", "Lampu"],
    correct: 2
  },
  {
    question: "Jaringan pengangkut pada tumbuhan terdiri dari?",
    choices: ["Xilem dan floem", "Epidermis dan mesofil", "Palisa dan spons", "Kutikula dan stomata"],
    correct: 0
  },
  {
    question: "Tumbuhan hijau menghasilkan makanan melalui proses?",
    choices: ["Respirasi", "Transpirasi", "Fotosintesis", "Difusi"],
    correct: 2
  },
  {
    question: "Ciri makhluk hidup yang menunjukkan dapat bergerak adalah?",
    choices: ["Bernafas", "Berpindah tempat", "Berkembang biak", "Peka terhadap rangsang"],
    correct: 1
  },
  {
    question: "Organ yang berfungsi memompa darah ke seluruh tubuh adalah?",
    choices: ["Paru-paru", "Jantung", "Lambung", "Ginjal"],
    correct: 1
  }
]
  ],
  fisika: [
    {
      question: "Siapa yang menemukan hukum gravitasi?",
      choices: ["Albert Einstein", "Isaac Newton", "Nikola Tesla", "Galileo Galilei"],
      correct: 1
    },
    {
      question: "Apa satuan untuk gaya dalam SI?",
      choices: ["Newton", "Joule", "Watt", "Meter"],
      correct: 0
    },
    {
      question: "Cahaya merambat dengan kecepatan?",
      choices: ["3x10^8 m/s", "1.5x10^8 m/s", "3x10^6 m/s", "1x10^9 m/s"],
      correct: 0
    },
    {
      question: "Benda akan tetap diam atau bergerak lurus beraturan jika?",
      choices: ["Tidak ada gaya luar", "Gaya luar konstan", "Bentuk berubah", "Suhu naik"],
      correct: 0
    },
    {
      question: "Alat untuk mengukur kuat arus listrik adalah?",
      choices: ["Amperemeter", "Voltmeter", "Ohmmeter", "Barometer"],
      correct: 0
    },
    {
    question: "Apa alat yang digunakan untuk mengukur suhu?",
    choices: ["Termometer", "Voltmeter", "Barometer", "Amperemeter"],
    correct: 0
   },
   {
    question: "Gaya gesek terjadi karena?",
    choices: ["Gravitasi", "Hambatan udara", "Kontak antar permukaan", "Medan magnet"],
    correct: 2
  },
  {
    question: "Contoh energi potensial terdapat pada?",
    choices: ["Air terjun", "Baterai", "Bola di atas meja", "Lampu menyala"],
    correct: 2
  },
  {
    question: "Perubahan wujud dari padat ke cair disebut?",
    choices: ["Membeku", "Menguap", "Mencair", "Menyublim"],
    correct: 2
  },
  {
    question: "Apa nama alat optik yang digunakan untuk melihat benda jauh?",
    choices: ["Lensa cembung", "Mikroskop", "Teleskop", "Kaca pembesar"],
    correct: 2
  },
  {
    question: "Benda dikatakan bermassa jika memiliki?",
    choices: ["Gaya", "Berat", "Isi", "Materi"],
    correct: 3
  },
  {
    question: "Energi tidak dapat diciptakan atau dimusnahkan, hanya dapat?",
    choices: ["Dibuang", "Dipercepat", "Diubah bentuknya", "Dihilangkan"],
    correct: 2
  },

  // Soal perhitungan
  {
    question: "Jika sebuah benda bermassa 2 kg mengalami percepatan 3 m/s², berapakah gaya yang bekerja padanya?",
    choices: ["5 N", "6 N", "3 N", "9 N"],
    correct: 1 // F = m * a = 2 * 3 = 6
  },
  {
    question: "Sebuah mobil menempuh jarak 100 meter dalam waktu 20 detik. Berapakah kecepatan mobil tersebut?",
    choices: ["2 m/s", "5 m/s", "10 m/s", "20 m/s"],
    correct: 1 // v = s / t = 100 / 20 = 5
  },
  {
    question: "Jika sebuah bola memiliki massa 0,5 kg dan berada pada ketinggian 10 m, berapa energi potensialnya? (g = 10 m/s²)",
    choices: ["5 Joule", "10 Joule", "50 Joule", "100 Joule"],
    correct: 2 // Ep = mgh = 0.5 * 10 * 10 = 50
  }
  ]
};

function startQuiz(category) {
  currentCategory = category;
  currentQuestionIndex = 0;
  currentScore = 0;
  timeLeft = 15;
  answerResults = []; // Reset jawaban saat mulai kuiz

  document.getElementById('quizTitle').innerText = `Kuiz ${category.charAt(0).toUpperCase() + category.slice(1)}`;

  document.getElementById('startScreen').style.display = 'none';
  document.getElementById('quizBox').style.display = 'block';

  document.getElementById('scoreBox').innerText = `Skor: 0`;

  startTimer();
  loadQuestion();
}

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById('time').innerText = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      showCorrectAnswer("Waktu habis!");
      disableChoices();
      answerResults.push('Salah'); // Jika waktu habis dianggap salah
      setTimeout(nextQuestion, 1500);
    }
  }, 1000);
}

function loadQuestion() {
  const questionData = questions[currentCategory][currentQuestionIndex];
  document.getElementById('questionBox').innerText = questionData.question;
  const choicesBox = document.getElementById('choicesBox');
  choicesBox.innerHTML = '';
  document.getElementById('result').innerText = '';
  questionData.choices.forEach((choice, index) => {
    const button = document.createElement('button');
    button.innerText = choice;
    button.onclick = () => checkAnswer(index);
    choicesBox.appendChild(button);
  });
}

function checkAnswer(selectedIndex) {
  const questionData = questions[currentCategory][currentQuestionIndex];
  const correctIndex = questionData.correct;
  clearInterval(timer);

  if (selectedIndex === correctIndex) {
    currentScore++;
    document.getElementById('result').innerText = 'Jawaban Benar!';
    document.getElementById('result').style.color = 'green';
    document.getElementById('scoreBox').innerText = `Skor: ${currentScore}`;
    answerResults.push('Benar'); // 2. Simpan jawaban benar
  } else {
    document.getElementById('result').innerText = `Jawaban Salah! Jawaban yang benar: ${questionData.choices[correctIndex]}`;
    document.getElementById('result').style.color = 'red';
    answerResults.push('Salah'); // 2. Simpan jawaban salah
  }

  disableChoices();
  setTimeout(nextQuestion, 1500);
}

function showCorrectAnswer(message) {
  const questionData = questions[currentCategory][currentQuestionIndex];
  const correctText = questionData.choices[questionData.correct];
  document.getElementById('result').innerText = `${message} Jawaban yang benar: ${correctText}`;
  document.getElementById('result').style.color = 'blue';
}

function disableChoices() {
  const buttons = document.querySelectorAll('#choicesBox button');
  buttons.forEach(button => button.disabled = true);
}

  function nextQuestion() {
    timeLeft = 15;
    if (currentQuestionIndex < questions[currentCategory].length - 1) {
      currentQuestionIndex++;
      loadQuestion();
      startTimer();
    } else {
      clearInterval(timer);
      endQuiz(); 
    }
  }

  function endQuiz() {
    clearInterval(timer);
    document.getElementById('quizBox').style.display = 'none';
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('endScreen').style.display = 'block'; 
    showSummary();
  }

// 4. Fungsi showSummary
function showSummary() {
  let summaryHTML = '';
  let benar = 0;
  let salah = 0;

  for (let i = 0; i < answerResults.length; i++) {
    const status = answerResults[i];
    if (status === 'Benar') benar++;
    else salah++;

    summaryHTML += `<tr><td>${i + 1}</td><td>${status}</td></tr>`;
  }

  document.getElementById('summary').innerHTML = summaryHTML;
  document.getElementById('finalScore').innerHTML = `<h3>Total Skor: ${currentScore} / ${answerResults.length}<br>Benar: ${benar} | Salah: ${salah}</h3>`;
}
