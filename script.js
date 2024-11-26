function triggerConfetti() {
    const confettiContainer = document.createElement("div");
    confettiContainer.className = "confetti-container";
  
    // Generate confetti pieces
    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
      confetti.style.backgroundColor =
        "hsl(" + Math.random() * 360 + ", 100%, 50%)";
      confettiContainer.appendChild(confetti);
    }
  
    document.body.appendChild(confettiContainer);
  
    // Remove confetti after animation
    setTimeout(() => {
      confettiContainer.remove();
    }, 5000);
  }
  
  // Add confetti styles dynamically
  const confettiStyles = document.createElement("style");
  confettiStyles.textContent = `
    .confetti-container {
      position: fixed;
      width: 100%;
      height: 100%;
      overflow: hidden;
      pointer-events: none;
      top: 0;
      left: 0;
    }
    .confetti {
      position: absolute;
      width: 10px;
      height: 10px;
      opacity: 0.8;
      border-radius: 50%;
      animation: fall infinite ease-in-out;
    }
    @keyframes fall {
      0% { transform: translateY(-10vh) rotate(0deg); }
      100% { transform: translateY(110vh) rotate(720deg); }
    }
  `;
  document.head.appendChild(confettiStyles);
  