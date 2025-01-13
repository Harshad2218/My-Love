const text = "Radhe Radhe Madam ji 🙏,\n\n You know how much I love Krishna and Radha; my day starts with them. 🌄 By them, I learned what love is, what life is, and many other things.But I just learned, never felt, until you came, and I felt it. 💖 Now, I consider you as my most important part of life. I started feeling great; now my day starts and ends with you, and I sleep smiling. 😊 I wake up and think about different things — how I can make you happy. Even if I can't see your smile, it makes me happy. 😊 Before you, if I was demotivated, I would just go and watch Kohli's 82 vs Pak, but now, I just say that the future is good — why be demotivated? 💪 You were a stranger, and suddenly, I am getting happy by seeing you happy and creating things like this. 🎨 I don't know, but that's what love is. 💞 Sometimes this love hurts me, but it is so beautiful, I forget every pain. 🌸 I have made you my life's Radha. I can't be that good because I am not a god, but I will give my everything if needed. 🙌 No matter what, I am gonna stick to you. 🤝 I don't know the future, but from my side, I am not leaving you. That's just me, and this is how I am. So, do you wanna be my Radha?? From my side, I made you my Radha. 💕 Now, it doesn't matter what you say; I just want you happy in any situation. 😊 I don't know if anyone has created an application like this, but it's my way to show love from what I learned.\n Radhe Radhe 🙏.\n [Click here] to find a little surprise.";
const letterElement = document.getElementById('letter');
const hiddenMessageElement = document.getElementById('hidden-message');

let index = 0;

function typeLetter() {
    if (index < text.length) {
        letterElement.innerHTML += text[index];
        index++;
        setTimeout(() => {
            typeLetter();
            autoScroll(); // Auto-scroll as the letter is typed
        }, 150);
    } else {
        setupHiddenMessage();
    }
}

function setupHiddenMessage() {
    const clickableText = letterElement.innerHTML.split('[Click here]');
    letterElement.innerHTML = clickableText[0] + '<span class="clickable">Click here</span>' + clickableText[1];
    document.querySelector('.clickable').addEventListener('click', () => {
        hiddenMessageElement.style.display = 'block';
        autoScroll(); // Scroll to reveal the hidden message
    });
}

function autoScroll() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}

typeLetter();
