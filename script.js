document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector("button");
    const loveNotes = document.getElementById("loveNotes");
    const quoteDisplay = document.createElement("p");
    loveNotes.appendChild(quoteDisplay);
    
    const quotes = [
        { arabic: "أنتِ نعمة من الله، رزقني بها، فكيف لا أشكر الله كل يوم على وجودك؟", english: "You are a blessing from Allah, granted to me, so how can I not thank Him every day for your presence?" },
        { arabic: "ما كنت أدري أن الحب عبادة، حتى وجدت قلبي يدعو لكِ في كل صلاة.", english: "I never knew that love could be worship until I found my heart praying for you in every prayer." },
        { arabic: "أنتِ جنة أيامي، وسكينة قلبي، رزقني الله حبك وجمعني بك في الدنيا والآخرة.", english: "You are the paradise of my days and the peace of my heart. Allah blessed me with your love and may He unite us in this life and the Hereafter." },
        { arabic: "فيكِ وجدت روحي، وفي حبك وجدت سعادتي، فأسأل الله أن يجمعنا في ظل رحمته.", english: "In you, I found my soul, and in your love, I found my happiness. I ask Allah to unite us under His mercy." },
        { arabic: "كلما نظرتُ إليكِ، دعوت الله أن يحفظك، فأنتِ سعادتي التي لا أريد لها زوالاً.", english: "Every time I look at you, I pray to Allah to protect you, for you are my happiness that I never want to lose." },
        { arabic: "محبتي لكِ ليست مجرد شعور، بل عبادة أحتسبها عند الله.", english: "My love for you is not just a feeling but an act of worship I seek reward for from Allah." },
        { arabic: "الحب في الله هو أعظم حب، وأنتِ حبي في الله، فكيف لا يكون حباً أبدياً؟", english: "Love for the sake of Allah is the greatest love, and you are my love for Allah’s sake, so how can it not be eternal?" },
        { arabic: "ليست السعادة في الدنيا مالاً أو جاهًا، بل أن نجد من يسير معنا إلى الجنة يدًا بيد.", english: "Happiness in this world is not wealth or status, but finding someone who walks with us toward Jannah hand in hand." },
        { arabic: "حين دعوت الله أن يهبني خير النساء، وهبني إياكِ، فالحمد لله على جميل عطاياه.", english: "When I prayed to Allah to bless me with the best of women, He granted me you. Praise be to Allah for His beautiful gifts." },
        { arabic: "اللهم اجعلها قرة عيني وسكينة قلبي، واجمعني بها في الفردوس الأعلى.", english: "O Allah, make her the coolness of my eyes and the tranquility of my heart, and unite me with her in the highest paradise." },
        { arabic: "اللهم كما جمعت بين قلوبنا في الحلال، فاجمعنا في جنتك، حيث لا فراق ولا ألم.", english: "O Allah, just as You brought our hearts together in what is lawful, unite us in Your paradise where there is no separation or pain." },
        { arabic: "يا رب، احفظها لي، وزدها حبًا وإيمانًا، وأدم بيننا المودة والرحمة.", english: "O Lord, protect her for me, increase her in love and faith, and keep the affection and mercy between us forever." },
        { arabic: "أنا وأنتِ قصة حب كتبها القدر، وباركها الرحمن، وجعلها الله نورًا في حياتنا.", english: "You and I are a love story written by fate, blessed by the Most Merciful, and made a light in our lives by Allah." },
        { arabic: "حبي لكِ ليس فقط في الدنيا، بل دعائي أن يكون حبًا يستمر في الآخرة.", english: "My love for you is not just in this world, but my prayer is that it continues in the Hereafter." },
        { arabic: "إن كان لي أمنية في الدنيا، فهي أن أراكِ زوجتي في الجنة، حيث لا تعب ولا وداع.", english: "If I have one wish in this world, it is to see you as my wife in paradise, where there is no hardship or farewell." }
    ];
    
    button.addEventListener("click", function () {
        loveNotes.classList.toggle("hidden");
        loveNotes.style.opacity = 0;
        let opacity = 0;
        
        const fadeIn = setInterval(function () {
            if (opacity >= 1) {
                clearInterval(fadeIn);
            }
            loveNotes.style.opacity = opacity;
            opacity += 0.1;
        }, 50);
        
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        quoteDisplay.innerHTML = `<strong>${randomQuote.arabic}</strong><br>${randomQuote.english}`;
    });
});
