// 正解のバリエーションを配列で設定
const SECRET_KEYWORDS = ["クイズ", "くいず"];

const submitBtn = document.getElementById('submit-btn');
const inputField = document.getElementById('keyword-input');
const errorMessage = document.getElementById('error-message');

function checkKeyword() {
    // 入力された文字の余白を消す
    const userInput = inputField.value.trim();

    // 入力された文字が、正解リストのどれかに一致するかチェック
    if (SECRET_KEYWORDS.includes(userInput)) {
        // 正解の場合：別のファイルへ移動
        window.location.href = "special.html";
    } else {
        // 不正解の場合：エラーを表示して入力をクリア
        errorMessage.textContent = "キーワードが正しくありません。";
        inputField.value = ""; 
    }
}

// ボタンクリックで実行
submitBtn.addEventListener('click', checkKeyword);

// エンターキーで実行
inputField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkKeyword();
    }
});