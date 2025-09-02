// js/script.js (最终修改版本，支持异步加载单词数据)

// wordDatabase 不再直接定义，而是一个将通过异步加载填充的变量
let wordDatabase = {};

// uiText, languageNames, gameLevels 现在是全局可访问的（来自 language_config.js）
// 所以这里不需要再定义它们，如果它们在 language_config.js 中被定义为 const

document.addEventListener('DOMContentLoaded', async () => {
    // --- DOM 元素获取 ---
    const gameBoard = document.getElementById('game-board');
    const startGameBtn = document.getElementById('start-game-btn');
    const timerDisplay = document.getElementById('timer');
    const levelDisplay = document.getElementById('level-display');
    const lang1Select = document.getElementById('lang1-select');
    const lang2Select = document.getElementById('lang2-select');
    const winModal = document.getElementById('win-modal');
    const continueBtn = document.getElementById('continue-challenge-btn');
    const modalTimeSpent = document.getElementById('modal-time-spent');
    const shareX = document.getElementById('share-x');
    const shareFacebook = document.getElementById('share-facebook');

    // UI 文本现在也应该从单独的配置中获取，或者在每次语言切换时动态加载
    // 为了简化，这里先保留在 script.js 中，但最佳实践是本地化文件也拆分
    const uiText = {
        'en': {
            title: 'Word Match Fun',
            langPairLabel: 'Language Pair:',
            timerLabel: 'Time',
            startBtn: 'Start Game',
            levelLabel: 'Level',
            modalTitle: 'Congratulations!',
            modalTimeSpent: 'Time spent: {} seconds',
            continueBtn: 'Continue Challenge',
            shareText: 'Share:',
            alertNotEnoughWords: 'Not enough common words between {} and {} for this level (found {}, need {}). Please select another language pair or add more words.'
        },
        'zh': {
            title: '单词消消乐',
            langPairLabel: '语言对:',
            timerLabel: '耗时',
            startBtn: '开始游戏',
            levelLabel: '关卡',
            modalTitle: '恭喜过关!',
            modalTimeSpent: '总耗时: {} 秒',
            continueBtn: '继续挑战',
            shareText: '分享到:',
            alertNotEnoughWords: '所选语言 {} 和 {} 的共同词汇不足以完成本关 (当前 {} 个，需要 {} 个)。请选择其他语言对或添加更多单词。'
        },
        'ja': {
            title: '単語マッチング',
            langPairLabel: '言語ペア:',
            timerLabel: '時間',
            startBtn: 'ゲーム開始',
            levelLabel: 'レベル',
            modalTitle: 'クリアおめでとう！',
            modalTimeSpent: '所要時間: {} 秒',
            continueBtn: '次のレベルへ',
            shareText: 'シェア:',
            alertNotEnoughWords: '選択した言語 {} と {} の共通単語がこのレベルには十分ではありません ({}個見つかりました、{}個必要です)。他の言語ペアを選択するか、単語を追加してください。'
        },
        'es': { // 西班牙语 UI文本
            title: 'Juego de Pares',
            langPairLabel: 'Par de Idiomas:',
            timerLabel: 'Tiempo',
            startBtn: 'Empezar Juego',
            levelLabel: 'Nivel',
            modalTitle: '¡Felicidades!',
            modalTimeSpent: 'Tiempo total: {}s',
            continueBtn: 'Continuar Desafío',
            shareText: 'Compartir en:',
            alertNotEnoughWords: 'No hay suficientes palabras comunes entre {} y {} para este nivel (encontradas {}, se necesitan {}). Por favor, selecciona otro par de idiomas o añade más palabras.'
        },
        'fr': { // 法语 UI文本
            title: 'Jeu de Mots',
            langPairLabel: 'Paire de Langues:',
            timerLabel: 'Temps',
            startBtn: 'Commencer le Jeu',
            levelLabel: 'Niveau',
            modalTitle: 'Félicitations !',
            modalTimeSpent: 'Temps total : {}s',
            continueBtn: 'Continuer le Défi',
            shareText: 'Partager sur :',
            alertNotEnoughWords: 'Pas assez de mots communs entre {} et {} pour ce niveau ({} trouvés, {} nécessaires). Veuillez sélectionner une autre paire de langues ou ajouter plus de mots.'
        },
        'de': { // 德语 UI文本
            title: 'Wortspiel Spaß',
            langPairLabel: 'Sprachpaar:',
            timerLabel: 'Zeit',
            startBtn: 'Spiel starten',
            levelLabel: 'Level',
            modalTitle: 'Herzlichen Glückwunsch!',
            modalTimeSpent: 'Benötigte Zeit: {}s',
            continueBtn: 'Herausforderung fortsetzen',
            shareText: 'Teilen auf:',
            alertNotEnoughWords: 'Nicht genügend gemeinsame Wörter zwischen {} und {} für dieses Level ({} gefunden, {} benötigt). Bitte wählen Sie ein anderes Sprachpaar oder fügen Sie weitere Wörter hinzu.'
        },
        'ko': { // 韩语 UI文本
            title: '단어 매치 게임',
            langPairLabel: '언어 쌍:',
            timerLabel: '시간',
            startBtn: '게임 시작',
            levelLabel: '레벨',
            modalTitle: '축하합니다!',
            modalTimeSpent: '소요 시간: {}초',
            continueBtn: '도전 계속',
            shareText: '공유하기:',
            alertNotEnoughWords: '이 레벨에 필요한 {}와 {}의 공통 단어가 충분하지 않습니다 ({}개 발견, {}개 필요). 다른 언어 쌍을 선택하거나 단어를 추가해주세요.'
        },
        'pt': { // 葡萄牙语 UI文本
            title: 'Jogo de Pares de Palavras',
            langPairLabel: 'Par de Idiomas:',
            timerLabel: 'Tempo',
            startBtn: 'Começar Jogo',
            levelLabel: 'Nível',
            modalTitle: 'Parabéns!',
            modalTimeSpent: 'Tempo gasto: {}s',
            continueBtn: 'Continuar Desafio',
            shareText: 'Compartilhar:',
            alertNotEnoughWords: 'Não há palavras comuns suficientes entre {} e {} para este nível (encontradas {}, necessárias {}). Por favor, selecione outro par de idiomas ou adicione mais palavras.'
        },
        'ru': { // 俄语 UI文本
            title: 'Игра "Найди Слово"',
            langPairLabel: 'Языковая пара:',
            timerLabel: 'Время',
            startBtn: 'Начать игру',
            levelLabel: 'Уровень',
            modalTitle: 'Поздравляем!',
            modalTimeSpent: 'Затрачено времени: {}с',
            continueBtn: 'Продолжить испытание',
            shareText: 'Поделиться:',
            alertNotEnoughWords: 'Недостаточно общих слов между {} и {} для этого уровня (найдено {}, требуется {}). Пожалуйста, выберите другую языковую пару или добавьте больше слов.'
        },
        'it': { // 意大利语 UI文本
            title: 'Abbinamento di Parole',
            langPairLabel: 'Coppia di Lingue:',
            timerLabel: 'Tempo',
            startBtn: 'Inizia Gioco',
            levelLabel: 'Livello',
            modalTitle: 'Congratulazioni!',
            modalTimeSpent: 'Tempo impiegato: {}s',
            continueBtn: 'Continua la Sfida',
            shareText: 'Condividi:',
            alertNotEnoughWords: 'Non ci sono abbastanza parole comuni tra {} e {} per questo livello (trovate {}, necessarie {}). Seleziona un\'altra coppia di lingue o aggiungi altre parole.'
        }
    };


    // --- 游戏状态变量 ---
    let currentLevel = 0;
    let isCardSelected = false;
    let lockBoard = true; // 默认锁定，等待开始
    let firstCard, secondCard;
    let timer;
    let seconds = 0;
    let matchedPairs = 0;
    let currentPairCount = 0;
    let currentLang = document.documentElement.lang || 'en';
    // availablePairs 不再需要，因为它现在是由 getShuffledWords 动态获取的
    // let availablePairs = []; 


    // --- 函数定义 ---

    // 1. 设置UI文本
    function setUIText(lang) {
        // 确保 uiText[lang] 存在，防止访问 undefined 属性
        if (!uiText[lang]) {
            console.warn(`UI text not found for language: ${lang}. Falling back to English.`);
            lang = 'en'; // 回退到英文
        }

        document.getElementById('main-title').innerText = uiText[lang].title;
        document.getElementById('lang-pair-label').innerText = uiText[lang].langPairLabel;
        timerDisplay.innerText = `${uiText[lang].timerLabel}: ${seconds}s`;
        startGameBtn.innerText = uiText[lang].startBtn;
        levelDisplay.innerText = `${uiText[lang].levelLabel}: ${currentLevel + 1}`;
        document.getElementById('modal-title').innerText = uiText[lang].modalTitle;
        modalTimeSpent.innerText = uiText[lang].modalTimeSpent.replace('{}', seconds);
        continueBtn.innerText = uiText[lang].continueBtn;
        document.getElementById('share-text').innerText = uiText[lang].shareText;
    }

    // 2. 初始化语言选择器
    function populateLangSelectors() {
        const languages = Object.keys(languageNames);
        lang1Select.innerHTML = '';
        lang2Select.innerHTML = '';

        languages.forEach(lang => {
            lang1Select.innerHTML += `<option value="${lang}">${languageNames[lang]}</option>`;
            lang2Select.innerHTML += `<option value="${lang}">${languageNames[lang]}</option>`;
        });

        // 设置默认值并确保两者不相同
        // 优先根据当前页面语言设置
        if (currentLang && languages.includes(currentLang)) {
            lang1Select.value = currentLang;
            // 尝试将第二语言设置为德语或英文，如果当前语言不是它们
            const fallbackLang = currentLang !== 'de' ? 'de' : 'en';
            lang2Select.value = languages.includes(fallbackLang) ? fallbackLang : languages.find(l => l !== currentLang) || 'en';
        } else {
            // 如果当前语言不可用或未设置，则默认使用中文和德语
            lang1Select.value = 'zh';
            lang2Select.value = 'de';
        }

        // 如果两个选择器的值相同，则调整其中一个
        if (lang1Select.value === lang2Select.value) {
            const otherLang = languages.find(lang => lang !== lang1Select.value);
            if (otherLang) {
                lang2Select.value = otherLang;
            }
        }
    }

    // 3. 获取洗牌后的单词对
    function getShuffledWords(lang1, lang2, count) {
        // 确保 wordDatabase 中存在这两种语言的数据
        if (!wordDatabase[lang1] || !wordDatabase[lang2]) {
            console.error(`Word data for ${lang1} or ${lang2} not loaded.`);
            return [];
        }

        // 找到两种语言中ID相同的单词
        const commonIds = wordDatabase[lang1]
            .map(word => word.id)
            .filter(id => wordDatabase[lang2].some(w => w.id === id));

        // 随机打乱commonIds数组并取前count个
        const shuffledIds = commonIds
            .map(id => ({ id, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ id }) => id)
            .slice(0, count);

        // 根据ID获取对应的单词对象
        const pairs = shuffledIds.map(id => {
            const word1 = wordDatabase[lang1].find(w => w.id === id);
            const word2 = wordDatabase[lang2].find(w => w.id === id);
            return {
                id: id,
                lang1Word: word1,
                lang2Word: word2
            };
        });

        return pairs;
    }

    // --- 加载单词数据函数 ---
    async function loadWordData(lang1, lang2) {
        const loadLang = async (lang) => {
            if (wordDatabase[lang]) return; // 如果已经加载过，直接返回
            switch (lang) {
                case 'de':
                    wordDatabase[lang] = deWords;
                    break;
                case 'zh':
                    wordDatabase[lang] = zhWords;
                    break;
                case 'en':
                    wordDatabase[lang] = enWords;
                    break;
                // 可以根据需要添加更多语言
                default:
                    console.error(`Language ${lang} not supported`);
                    return;
            }
            console.log(`${lang} words loaded`);
        };
        
        // 并行加载两种语言的数据
        await Promise.all([loadLang(lang1), loadLang(lang2)]);
    }
    
    // --- 4. 开始新游戏 ---
    function startNewGame() {
        if (lockBoard) lockBoard = false; // 解锁面板
        gameBoard.innerHTML = ''; // 清空游戏面板
        matchedPairs = 0;
        resetBoard(); // 重置选中状态
        resetTimer(); // 重置计时器
        startTimer(); // 开始计时
    
        // 禁用语言选择和开始按钮
        lang1Select.disabled = true;
        lang2Select.disabled = true;
        startGameBtn.disabled = true;
    
        // 获取当前选择的语言
        const lang1 = lang1Select.value;
        const lang2 = lang2Select.value;
    
        // 加载两种语言的单词数据
        loadWordData(lang1, lang2).then(() => {
            // 获取当前关卡需要的单词对数量
            currentPairCount = gameLevels[currentLevel];
    
            // 获取洗牌后的单词对
            let pairs = getShuffledWords(lang1, lang2, currentPairCount);
    
            // 检查是否有足够的单词对
            if (pairs.length < currentPairCount) {
                alert(uiText[currentLang].alertNotEnoughWords.replace('{}', languageNames[lang1]).replace('{}', languageNames[lang2]).replace('{}', pairs.length).replace('{}', currentPairCount));
                // 重新启用语言选择和开始按钮
                lang1Select.disabled = false;
                lang2Select.disabled = false;
                startGameBtn.disabled = false;
                return;
            }
    
            // 创建卡片数组
            let cards = [];
            pairs.forEach(pair => {
                cards.push({ id: pair.id, text: pair.lang1Word.text });
                cards.push({ id: pair.id, text: pair.lang2Word.text });
            });
    
            // 随机打乱卡片
            cards = cards
                .map(card => ({ card, sort: Math.random() }))
                .sort((a, b) => a.sort - b.sort)
                .map(({ card }) => card);
    
            // 定义颜色类数组
            const colors = ['color1', 'color2', 'color3', 'color4', 'color5', 'color6', 'color7', 'color8', 'color9', 'color10'];
    
            // 创建卡片元素并添加到游戏面板
            cards.forEach(word => {
                const card = document.createElement('div');
                card.classList.add('card');
                // 随机添加一个颜色类
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                card.classList.add(randomColor);
    
                card.dataset.id = word.id;
                card.textContent = word.text; // 直接设置文本内容
    
                gameBoard.appendChild(card);
                card.addEventListener('click', selectCard); // 绑定新的事件处理器
            });
        }).catch(error => {
            console.error('Error loading word data:', error);
            alert('Failed to load word data. Please try again.');
            // 重新启用语言选择和开始按钮
            lang1Select.disabled = false;
            lang2Select.disabled = false;
            startGameBtn.disabled = false;
        });
    }

    function resetGameToInitialState() {
        currentLevel = 0;
        gameBoard.innerHTML = ''; // 清空游戏面板
        startGameBtn.innerText = uiText[currentLang].startBtn; // 确保按钮文本正确
        startGameBtn.disabled = false; // 重新启用“开始游戏”按钮
        lang1Select.disabled = false;  // 重新启用语言选择
        lang2Select.disabled = false;
        levelDisplay.innerText = `${uiText[currentLang].levelLabel}: 1`; // 重置关卡显示
        resetTimer(); // 重置计时器
        lockBoard = true; // 锁定面板，等待玩家点击开始
    }

    // 6. 继续挑战
    function continueChallenge() {
        currentLevel++; // 进入下一关
    
        // 检查是否已完成所有关卡
        if (currentLevel >= gameLevels.length) {
            winModal.classList.remove('show'); // 先关闭弹窗
            alert(uiText[currentLang].modalTitle + ' 🎉 ' + (uiText[currentLang].continueBtn.replace('继续', '已完成所有').replace('Continua', 'Completada').replace('Herausforderung fortsetzen', 'Alle Herausforderungen abgeschlossen').replace('도전 계속', '모든 도전을 완료했습니다').replace('Continuar Desafio', 'Desafio Completo').replace('Продолжить испытание', 'Все испытания завершены').replace('Continua la Sfida', 'Tutte le sfide completate'))); // 本地化提示
            resetGameToInitialState(); // 完全重置游戏
            return; // 结束函数执行
        }
    
        winModal.classList.remove('show'); // 关闭胜利弹窗
        startNewGame(); // 开始下一关
    }
    
    // 6. 选择卡片逻辑
    function selectCard() {
        if (lockBoard) return;
        if (this === firstCard) return;

        this.classList.add('selected');

        if (!isCardSelected) {
            isCardSelected = true;
            firstCard = this;
            return;
        }
        
        secondCard = this;
        lockBoard = true;
        checkForMatch();
    }

    // 7. 检查是否匹配
    function checkForMatch() {
        const isMatch = firstCard.dataset.id === secondCard.dataset.id;
        isMatch ? disableCards() : deselectCards();
    }

    // 8. 匹配成功
    function disableCards() {
        firstCard.removeEventListener('click', selectCard);
        secondCard.removeEventListener('click', selectCard);

        setTimeout(() => {
            firstCard.classList.add('matched');
            secondCard.classList.add('matched');
            matchedPairs++;
            if (matchedPairs === currentPairCount) {
                stopTimer();
                showWinModal();
            }
            resetBoard();
        }, 600);
    }

    // 9. 匹配失败
    function deselectCards() {
        firstCard.classList.add('mismatched');
        secondCard.classList.add('mismatched');

        setTimeout(() => {
            firstCard.classList.remove('selected', 'mismatched');
            secondCard.classList.remove('selected', 'mismatched');
            resetBoard();
        }, 1000);
    }

    // 10. 重置棋盘状态
    function resetBoard() {
        isCardSelected = false;
        lockBoard = false;
        [firstCard, secondCard] = [null, null];
    }

    // 10. 计时器功能
    function startTimer() {
        seconds = 0;
        timerDisplay.innerText = `${uiText[currentLang].timerLabel}: ${seconds}s`;
        timer = setInterval(() => {
            seconds++;
            timerDisplay.innerText = `${uiText[currentLang].timerLabel}: ${seconds}s`;
        }, 1000);
    }

    function stopTimer() {
        clearInterval(timer);
    }

    function resetTimer() {
        stopTimer();
        seconds = 0;
        timerDisplay.innerText = `${uiText[currentLang].timerLabel}: 0s`;
    }

    // 11. 显示胜利模态框
    function showWinModal() {
        modalTimeSpent.innerText = uiText[currentLang].modalTimeSpent.replace('{}', seconds);
        updateShareLinks(seconds, currentLevel + 1);
        winModal.classList.add('show');
    }

    // 12. 更新分享链接
    function updateShareLinks(time, level) {
        // 使用当前语言的本地化文本构建分享消息
        // 这里的分享消息需要更通用地处理，因为替换操作可能不适用于所有语言的完整句子
        let shareMessage = '';
        if (currentLang === 'en') {
             shareMessage = `I completed level ${level} of Word Match Fun in ${time} seconds! Can you beat my score?`;
        } else if (currentLang === 'zh') {
             shareMessage = `我用 ${time} 秒完成了单词消消乐第 ${level} 关！你能打破我的记录吗？`;
        } else if (currentLang === 'ja') {
             shareMessage = `単語マッチングのレベル${level}を${time}秒でクリアしました！私の記録を破れるかな？`;
        } else if (currentLang === 'es') {
             shareMessage = `¡Completé el nivel ${level} de Juego de Pares en ${time} segundos! ¿Puedes superar mi puntuación?`;
        } else if (currentLang === 'fr') {
             shareMessage = `J'ai terminé le niveau ${level} de Jeu de Mots en ${time} secondes ! Pouvez-vous battre mon score ?`;
        } else if (currentLang === 'de') {
             shareMessage = `Ich habe Level ${level} von Wortspiel Spaß in ${time} Sekunden abgeschlossen! Kannst du meinen Rekord schlagen?`;
        } else if (currentLang === 'ko') {
             shareMessage = `단어 매치 게임 레벨 ${level}을 ${time}초 만에 완료했습니다! 제 기록을 깰 수 있나요?`;
        } else if (currentLang === 'pt') {
             shareMessage = `Completei o nível ${level} de Jogo de Pares de Palavras em ${time} segundos! Consegue superar a minha pontuação?`;
        } else if (currentLang === 'ru') {
             shareMessage = `Я прошел уровень ${level} в игре "Найди Слово" за ${time} секунд! Сможешь побить мой рекорд?`;
        } else if (currentLang === 'it') {
             shareMessage = `Ho completato il livello ${level} di Abbinamento di Parole in ${time} secondi! Riuscirai a battere il mio punteggio?`;
        }
        
        const url = window.location.href; // 分享当前页面的URL

        shareX.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareMessage)}&url=${encodeURIComponent(url)}`;
        shareFacebook.href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(shareMessage)}`;
    }

    // --- 游戏初始化函数 ---
    function initGame() {
        setUIText(currentLang);
        populateLangSelectors();
        levelDisplay.innerText = `${uiText[currentLang].levelLabel}: 1`; // 确保在初始加载时显示正确的关卡文本
        // 不再在初始化时加载单词数据，因为此时语言选择器可能还未正确设置
        // 单词数据将在用户点击“开始游戏”按钮时加载
    }
    
    // --- 事件监听器 ---
    startGameBtn.addEventListener('click', startNewGame);
    continueBtn.addEventListener('click', continueChallenge);
    winModal.addEventListener('click', (e) => {
        if (e.target === winModal) { winModal.classList.remove('show'); }
    });
    
    // --- 页面加载时开始加载数据 ---
    // 页面加载时立即开始异步加载单词数据
    initGame(); // 调用初始化函数
});
