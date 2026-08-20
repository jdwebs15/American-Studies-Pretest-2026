const API_URL =
  "https://script.google.com/macros/s/AKfycbzdz70g9j58-T_t8DYnHAkW1LjkwQM3GgaqUnPUXSB6sTtnPcjbHAFW5NJTlPxdY_CR/exec";

const state = {
  index: 0,
  answers: Array(QUESTIONS.length).fill(null),
  startedAt: null,
  name: "",
  period: "",
};

const $ = (id) => document.getElementById(id);

const show = (id) => {
  ["start", "game", "review", "done"].forEach((sectionId) => {
    $(sectionId).classList.toggle("hidden", sectionId !== id);
  });
};

$("begin").onclick = () => {
  state.name = $("studentName").value.trim();
  state.period = $("classPeriod").value;

  if (!state.name || !state.period) {
    $("startError").textContent =
      "Enter your full name and select your class period.";
    return;
  }

  state.startedAt = new Date().toISOString();
  show("game");
  render();
};

function render() {
  const question = QUESTIONS[state.index];
  const answeredCount = state.answers.filter((answer) => answer !== null).length;

  $("counter").textContent =
    `Question ${state.index + 1} of ${QUESTIONS.length}`;
  $("answered").textContent = `${answeredCount} answered`;
  $("bar").style.width =
    `${((state.index + 1) / QUESTIONS.length) * 100}%`;
  $("topic").textContent = question.topic;
  $("question").textContent = question.prompt;

  $("answers").innerHTML = question.options
    .map((answer, optionIndex) => {
      const selected = state.answers[state.index] === optionIndex;
      const letter = String.fromCharCode(65 + optionIndex);

      return `
        <button
          class="answer ${selected ? "selected" : ""}"
          data-index="${optionIndex}"
        >
          <span class="letter">${letter}</span>
          <span>${escapeHtml(answer)}</span>
        </button>
      `;
    })
    .join("");

  document.querySelectorAll(".answer").forEach((button) => {
    button.onclick = () => {
      state.answers[state.index] = Number(button.dataset.index);
      $("questionError").textContent = "";
      render();
    };
  });

  $("prev").disabled = state.index === 0;
  $("next").textContent =
    state.index === QUESTIONS.length - 1 ? "Review answers" : "Next";
}

$("prev").onclick = () => {
  if (state.index > 0) {
    state.index -= 1;
    render();
  }
};

$("next").onclick = () => {
  if (state.answers[state.index] === null) {
    $("questionError").textContent = "Choose an answer before continuing.";
    return;
  }

  if (state.index < QUESTIONS.length - 1) {
    state.index += 1;
    render();
  } else {
    openReview();
  }
};

function openReview() {
  show("review");

  $("reviewGrid").innerHTML = QUESTIONS.map((question, questionIndex) => {
    const missing = state.answers[questionIndex] === null;

    return `
      <button
        class="${missing ? "missing" : ""}"
        data-index="${questionIndex}"
      >
        ${questionIndex + 1}
      </button>
    `;
  }).join("");

  document.querySelectorAll("#reviewGrid button").forEach((button) => {
    button.onclick = () => {
      state.index = Number(button.dataset.index);
      show("game");
      render();
    };
  });
}

$("submit").onclick = async () => {
  const missingQuestion = state.answers.findIndex((answer) => answer === null);

  if (missingQuestion >= 0) {
    $("submitError").textContent =
      `Question ${missingQuestion + 1} still needs an answer.`;
    return;
  }

  const submitButton = $("submit");
  submitButton.disabled = true;
  submitButton.textContent = "Submitting...";

  const finishedAt = new Date().toISOString();
  const answerDetails = QUESTIONS.map((question, questionIndex) => ({
    number: questionIndex + 1,
    topic: question.topic,
    choice: state.answers[questionIndex],
    answer: question.answer,
    correct: state.answers[questionIndex] === question.answer,
  }));

  const score = answerDetails.filter((answer) => answer.correct).length;
  const payload = {
    gameId: GAME_ID,
    title: GAME_TITLE,
    name: state.name,
    period: state.period,
    startedAt: state.startedAt,
    finishedAt,
    durationSeconds: Math.round(
      (Date.parse(finishedAt) - Date.parse(state.startedAt)) / 1000,
    ),
    score,
    total: QUESTIONS.length,
    answers: answerDetails,
  };

  try {
    await fetch(API_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    show("done");
    $("scoreLine").textContent =
      `Score: ${score} of ${QUESTIONS.length} ` +
      `(${Math.round((score / QUESTIONS.length) * 100)}%)`;
    $("receipt").textContent =
      `${state.name} | Period ${state.period} | ` +
      new Date(finishedAt).toLocaleString();
  } catch (error) {
    submitButton.disabled = false;
    submitButton.textContent = "Submit pretest";
    $("submitError").textContent =
      "Submission failed. Check the connection and try again.";
  }
};

function escapeHtml(text) {
  return text.replace(/[&<>"]/g, (character) => {
    const replacements = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
    };

    return replacements[character];
  });
}
