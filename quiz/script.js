// クイズのデータ（問題とヒントだけを管理）
const quizData = [
    {
        question: "パンはパンでも、食べられないパンは何？",
        options: ["フライパン", "フランスパン", "カレーパン"],
        hint: "料理を作る時に使う道具だよ！"
    },
    {
        question: "上は洪水、下は大火事。これなーんだ？",
        options: ["お風呂", "キャンプファイヤー", "火山"],
        hint: "昔ながらの沸かし方をするお風呂のことだよ。"
    },
    {
        question: "いつも文句ばかり言っている動物はなーんだ？",
        options: ["カモシカ", "ウシ", "カバ"],
        hint: "「文句（もんく）」を別の言い方にしてみて…？"
    }
];

let currentQuestionIndex = 0;

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const hintDisplay = document.getElementById("hint-display");
const hintText = document.getElementById("hint-text");
const hintBtn = document.getElementById("hint-btn");
const nextBtn = document.getElementById("next-btn");

// 最初の問題を表示
function loadQuestion() {
    const currentQuiz = quizData[currentQuestionIndex];
    
    // ヒントを隠す
    hintDisplay.classList.add("hidden");
    
    // 問題文を表示
    questionText.innerText = currentQuiz.question;
    
    // 選択肢をクリアして生成
    optionsContainer.innerHTML = "";
    currentQuiz.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.className = "secondary-btn"; // デザイン用
        optionsContainer.appendChild(button);
    });
}

// ヒントを表示する処理
hintBtn.addEventListener("click", () => {
    hintText.innerText = quizData[currentQuestionIndex].hint;
    hintDisplay.classList.toggle("hidden");
});

// 次の問題へ進む処理
nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        alert("全問終了です！お疲れ様でした！");
        currentQuestionIndex = 0; // 最初に戻る
        loadQuestion();
    }
});

// 初期読み込み
loadQuestion();