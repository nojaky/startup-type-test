// 추천 버튼 링크는 배포 전 실제 주소로 바꿔주세요.
const SURVIVAL_URL = "https://nojaky.github.io/cafe-survival-web/";
const COST_SIMULATOR_URL = "https://nojaky.github.io/drink-cost-calculator/";

const AXIS_LABELS = {
  reality: "현실 감각",
  execution: "실행력",
  mental: "멘탈 내구도",
  routine: "반복 운영력",
  system: "시스템화 능력"
};

const QUESTIONS = [
  {
    axis: "reality",
    q: "월 매출이 예상보다 잘 나왔다. 가장 먼저 확인할 것은?",
    a: [
      { text: "이번 달 고생했으니 보상부터 한다", s: { reality: 0, execution: 1, mental: 0, routine: 0, system: 0 } },
      { text: "재료비, 인건비, 월세를 빼고 실제 남은 돈을 본다", s: { reality: 3, execution: 0, mental: 0, routine: 0, system: 1 } },
      { text: "바로 메뉴나 장비를 추가할 계획을 세운다", s: { reality: 1, execution: 2, mental: 0, routine: 0, system: 0 } },
      { text: "다음 달 매출도 비슷할지 보수적으로 다시 계산한다", s: { reality: 3, execution: 0, mental: 1, routine: 0, system: 0 } }
    ]
  },
  {
    axis: "reality",
    q: "좋은 상권에 마음에 드는 매장이 나왔다. 그런데 월세가 부담된다면?",
    a: [
      { text: "좋은 자리니까 일단 계약하고 본다", s: { reality: 0, execution: 2, mental: 0, routine: 0, system: 0 } },
      { text: "예상 매출과 손익분기점을 계산해본다", s: { reality: 3, execution: 0, mental: 0, routine: 0, system: 1 } },
      { text: "인테리어만 잘하면 충분히 가능하다고 본다", s: { reality: 1, execution: 1, mental: 0, routine: 0, system: 0 } },
      { text: "최악의 경우 몇 개월 버틸 수 있는지 계산한다", s: { reality: 3, execution: 0, mental: 1, routine: 0, system: 0 } }
    ]
  },
  {
    axis: "reality",
    q: "창업 준비에서 가장 먼저 봐야 한다고 생각하는 것은?",
    a: [
      { text: "예쁜 인테리어와 콘셉트", s: { reality: 0, execution: 1, mental: 0, routine: 0, system: 0 } },
      { text: "내가 좋아하고 잘할 수 있는 아이템", s: { reality: 1, execution: 1, mental: 0, routine: 0, system: 0 } },
      { text: "월 고정비와 손익 구조", s: { reality: 3, execution: 0, mental: 0, routine: 0, system: 1 } },
      { text: "유행하는 업종과 인기 메뉴", s: { reality: 1, execution: 1, mental: 0, routine: 0, system: 0 } }
    ]
  },
  {
    axis: "execution",
    q: "새로운 아이디어가 떠올랐을 때 당신은?",
    a: [
      { text: "오래 고민하다가 흐지부지되는 편이다", s: { reality: 0, execution: 0, mental: 0, routine: 0, system: 0 } },
      { text: "일단 작게라도 테스트해본다", s: { reality: 1, execution: 3, mental: 0, routine: 0, system: 1 } },
      { text: "완벽하게 준비될 때까지 기다린다", s: { reality: 1, execution: 0, mental: 0, routine: 0, system: 1 } },
      { text: "주변 반응을 보고 괜찮으면 움직인다", s: { reality: 1, execution: 2, mental: 0, routine: 0, system: 0 } }
    ]
  },
  {
    axis: "execution",
    q: "해야 할 일이 많을 때 당신의 방식은?",
    a: [
      { text: "머릿속이 복잡해져서 미루는 편이다", s: { reality: 0, execution: 0, mental: 0, routine: 0, system: 0 } },
      { text: "우선순위를 정하고 하나씩 처리한다", s: { reality: 1, execution: 3, mental: 1, routine: 0, system: 0 } },
      { text: "기분이 올라올 때 몰아서 한다", s: { reality: 0, execution: 1, mental: 0, routine: 0, system: 0 } },
      { text: "사람을 구하거나 도구를 써서 나눈다", s: { reality: 1, execution: 2, mental: 0, routine: 0, system: 2 } }
    ]
  },
  {
    axis: "execution",
    q: "실패 가능성이 있는 일을 시작해야 한다면?",
    a: [
      { text: "실패가 무서워 쉽게 시작하지 못한다", s: { reality: 1, execution: 0, mental: 0, routine: 0, system: 0 } },
      { text: "손해를 줄일 방법을 정한 뒤 시작한다", s: { reality: 2, execution: 2, mental: 1, routine: 0, system: 0 } },
      { text: "일단 해보면 어떻게든 된다고 생각한다", s: { reality: 0, execution: 3, mental: 1, routine: 0, system: 0 } },
      { text: "작은 규모로 먼저 검증해본다", s: { reality: 2, execution: 3, mental: 0, routine: 0, system: 1 } }
    ]
  },
  {
    axis: "mental",
    q: "손님이나 고객이 부당한 불만을 말한다면?",
    a: [
      { text: "감정이 상해서 오래 신경 쓰인다", s: { reality: 0, execution: 0, mental: 0, routine: 0, system: 0 } },
      { text: "일단 듣고 가능한 선을 정리한다", s: { reality: 1, execution: 1, mental: 2, routine: 0, system: 0 } },
      { text: "감정보다 해결 방법을 먼저 생각한다", s: { reality: 1, execution: 1, mental: 3, routine: 0, system: 0 } },
      { text: "다시 생기지 않도록 기준을 만든다", s: { reality: 1, execution: 0, mental: 2, routine: 0, system: 3 } }
    ]
  },
  {
    axis: "mental",
    q: "한 달 동안 매출이 기대보다 낮다면?",
    a: [
      { text: "내가 안 맞는 일을 하는 건지 크게 흔들린다", s: { reality: 0, execution: 0, mental: 0, routine: 0, system: 0 } },
      { text: "원인을 나눠보고 바꿀 수 있는 것부터 수정한다", s: { reality: 1, execution: 2, mental: 2, routine: 0, system: 1 } },
      { text: "다음 달에는 좋아질 거라 믿고 버틴다", s: { reality: 0, execution: 0, mental: 2, routine: 1, system: 0 } },
      { text: "비용을 줄이고 운영 방식을 바로 조정한다", s: { reality: 2, execution: 2, mental: 3, routine: 0, system: 1 } }
    ]
  },
  {
    axis: "mental",
    q: "예상하지 못한 문제가 하루에 여러 개 터진다면?",
    a: [
      { text: "멘탈이 무너져 아무것도 하기 싫어진다", s: { reality: 0, execution: 0, mental: 0, routine: 0, system: 0 } },
      { text: "급한 문제부터 처리하고 나중에 정리한다", s: { reality: 1, execution: 2, mental: 2, routine: 0, system: 0 } },
      { text: "주변 사람에게 도움을 요청한다", s: { reality: 1, execution: 1, mental: 2, routine: 0, system: 1 } },
      { text: "문제를 기록해두고 재발 방지책을 만든다", s: { reality: 1, execution: 1, mental: 3, routine: 0, system: 3 } }
    ]
  },
  {
    axis: "routine",
    q: "매일 같은 일을 반복해야 한다면?",
    a: [
      { text: "금방 질려서 힘들 것 같다", s: { reality: 0, execution: 0, mental: 0, routine: 0, system: 0 } },
      { text: "익숙해지면 안정감을 느낀다", s: { reality: 0, execution: 0, mental: 1, routine: 3, system: 0 } },
      { text: "반복 속에서 더 빠른 방법을 찾는다", s: { reality: 0, execution: 1, mental: 1, routine: 3, system: 2 } },
      { text: "반복 업무는 최대한 자동화하거나 나눠야 한다", s: { reality: 1, execution: 0, mental: 0, routine: 2, system: 3 } }
    ]
  },
  {
    axis: "routine",
    q: "장사가 생각보다 조용한 날이 계속된다면?",
    a: [
      { text: "의욕이 떨어져 관리가 느슨해질 것 같다", s: { reality: 0, execution: 0, mental: 0, routine: 0, system: 0 } },
      { text: "그래도 기본 청소, 재고, 응대는 유지한다", s: { reality: 1, execution: 0, mental: 1, routine: 3, system: 0 } },
      { text: "새로운 홍보나 메뉴를 바로 시도한다", s: { reality: 0, execution: 3, mental: 1, routine: 1, system: 0 } },
      { text: "데이터를 보고 조용한 시간대 활용법을 만든다", s: { reality: 2, execution: 1, mental: 1, routine: 2, system: 2 } }
    ]
  },
  {
    axis: "routine",
    q: "남들이 보기엔 사소한 정리나 청소 업무에 대해?",
    a: [
      { text: "솔직히 귀찮고 뒤로 미루는 편이다", s: { reality: 0, execution: 0, mental: 0, routine: 0, system: 0 } },
      { text: "매장의 기본이라 생각하고 꾸준히 한다", s: { reality: 1, execution: 0, mental: 1, routine: 3, system: 0 } },
      { text: "체크리스트를 만들어 관리하는 게 좋다", s: { reality: 1, execution: 0, mental: 0, routine: 2, system: 3 } },
      { text: "직원이나 시스템으로 분담하는 게 좋다", s: { reality: 1, execution: 0, mental: 0, routine: 1, system: 3 } }
    ]
  },
  {
    axis: "system",
    q: "같은 문제가 반복해서 생긴다면?",
    a: [
      { text: "그때그때 해결하면 된다고 생각한다", s: { reality: 0, execution: 1, mental: 0, routine: 0, system: 0 } },
      { text: "원인을 찾아서 방식을 바꾼다", s: { reality: 1, execution: 1, mental: 0, routine: 0, system: 3 } },
      { text: "담당자를 정해서 맡긴다", s: { reality: 1, execution: 1, mental: 0, routine: 0, system: 2 } },
      { text: "매뉴얼이나 규칙으로 만든다", s: { reality: 1, execution: 0, mental: 0, routine: 1, system: 3 } }
    ]
  },
  {
    axis: "system",
    q: "일이 너무 바빠서 실수가 잦아진다면?",
    a: [
      { text: "더 집중하면 괜찮아질 거라 생각한다", s: { reality: 0, execution: 1, mental: 1, routine: 0, system: 0 } },
      { text: "동선이나 순서를 바꿔본다", s: { reality: 1, execution: 1, mental: 0, routine: 0, system: 3 } },
      { text: "사람을 더 뽑아야 한다고 생각한다", s: { reality: 1, execution: 1, mental: 0, routine: 0, system: 2 } },
      { text: "실수가 생기는 지점을 기록하고 구조를 바꾼다", s: { reality: 1, execution: 1, mental: 0, routine: 0, system: 3 } }
    ]
  },
  {
    axis: "system",
    q: "당신이 생각하는 좋은 운영은?",
    a: [
      { text: "사장이 모든 걸 열심히 하는 것", s: { reality: 0, execution: 2, mental: 1, routine: 1, system: 0 } },
      { text: "손님이 만족하는 분위기를 만드는 것", s: { reality: 1, execution: 1, mental: 1, routine: 0, system: 1 } },
      { text: "숫자, 사람, 동선이 안정적으로 돌아가는 것", s: { reality: 2, execution: 0, mental: 1, routine: 1, system: 3 } },
      { text: "내가 없어도 일정 수준으로 굴러가는 것", s: { reality: 1, execution: 0, mental: 0, routine: 1, system: 3 } }
    ]
  }
];

const RESULTS = {
  survival: {
    title: "창업 생존형",
    summary: "화려함보다 오래 버티는 운영에 강한 현실형 사장님 타입입니다.",
    desc: "당신은 창업을 막연한 꿈이 아니라 숫자와 현실로 바라볼 가능성이 높습니다. 매출보다 실제 남는 돈을 중요하게 보고, 문제가 생겼을 때도 감정보다 조정 가능한 요소를 먼저 찾는 편입니다.",
    strength: "현실 감각, 책임감, 위기 대응력이 좋습니다. 낮은 고정비와 안정적인 운영 구조를 만들면 오래 버티는 힘이 있습니다.",
    caution: "너무 보수적으로 판단하면 기회를 놓칠 수 있습니다. 계산이 끝났다면 작은 실행으로 시장 반응을 확인해보는 과정이 필요합니다.",
    recommend: "소규모 창업, 1인 운영, 저고정비 매장, 원가 계산형 카페 운영이 잘 맞습니다."
  },
  system: {
    title: "시스템 운영자형",
    summary: "감으로 밀어붙이기보다 구조와 매뉴얼로 성장하는 운영자 타입입니다.",
    desc: "당신은 문제를 개인의 노력으로만 해결하기보다 동선, 규칙, 체크리스트, 자동화 같은 구조로 바꾸려는 성향이 강합니다. 장기적으로는 직접 뛰는 사장보다 시스템을 설계하는 운영자에 가깝습니다.",
    strength: "반복되는 문제를 방치하지 않고 재발 방지 구조를 만드는 능력이 좋습니다. 직원 관리나 다점포 운영과도 궁합이 있습니다.",
    caution: "숫자와 시스템만 보면 손님의 감정이나 브랜드 매력이 약해질 수 있습니다. 효율과 감성의 균형이 중요합니다.",
    recommend: "프랜차이즈, 무인·반무인 매장, 매뉴얼형 매장, 동선 최적화가 중요한 업종이 잘 맞습니다."
  },
  emotional: {
    title: "감성 창업가형",
    summary: "아이디어와 취향은 좋지만 계산기를 가까이해야 하는 타입입니다.",
    desc: "당신은 공간, 콘셉트, 분위기, 브랜드 감각에서 강점을 보일 가능성이 있습니다. 사람을 끌어당기는 매력은 있지만, 고정비와 원가율을 감으로 판단하면 운영이 흔들릴 수 있습니다.",
    strength: "브랜드 감각, 콘텐츠 감각, 빠른 실행력이 장점입니다. 사람들에게 기억되는 가게를 만들 가능성이 있습니다.",
    caution: "좋은 공간과 예쁜 메뉴가 곧 수익을 의미하지는 않습니다. 월세, 인건비, 재료비, 손익분기점을 반드시 먼저 확인해야 합니다.",
    recommend: "감성 카페, 콘텐츠 기반 창업, 예약제 공간, 소규모 브랜드 실험이 잘 맞습니다."
  },
  learner: {
    title: "성장형 준비생",
    summary: "사장님 가능성은 있지만 아직은 작은 실험과 훈련이 먼저인 타입입니다.",
    desc: "당신 안에는 창업 성향이 있지만 아직 모든 축이 균형 있게 올라오지는 않았습니다. 바로 큰돈을 쓰기보다 작게 테스트하고, 현장 경험과 숫자 감각을 쌓으면 가능성이 커집니다.",
    strength: "배우고 조정할 여지가 많습니다. 무리하지 않고 경험치를 쌓으면 창업형으로 성장할 수 있습니다.",
    caution: "퇴사 후 바로 창업하거나 대출로 크게 시작하는 방식은 위험합니다. 먼저 손실이 작고 회복 가능한 실험부터 해야 합니다.",
    recommend: "부업, 팝업, 온라인 판매, 주말 테스트, 현장 아르바이트 경험부터 시작하는 방식이 좋습니다."
  },
  stable: {
    title: "안정형 직장인",
    summary: "무리한 창업보다 안정적인 환경에서 더 강해지는 타입입니다.",
    desc: "당신은 불확실성이 큰 환경보다 역할과 수입 구조가 비교적 안정적인 환경에서 능력을 더 잘 발휘할 수 있습니다. 창업 자체가 불가능하다는 뜻은 아니지만, 직접 운영형 창업은 신중할 필요가 있습니다.",
    strength: "안정적인 루틴과 조직 안에서 꾸준히 역할을 해내는 힘이 있습니다. 무리한 리스크보다 계획된 성장에 강합니다.",
    caution: "회사 생활이 싫다는 이유만으로 창업하면 더 큰 스트레스를 만날 수 있습니다. 창업은 자유보다 책임이 먼저 오는 경우가 많습니다.",
    recommend: "직장 유지형 부업, 온라인 콘텐츠, 소액 실험, 공동 창업의 보조 역할이 더 잘 맞을 수 있습니다."
  },
  risky: {
    title: "위험한 열정형",
    summary: "시작은 빠르지만 운영 현실을 보완해야 하는 고열정 타입입니다.",
    desc: "당신은 실행력과 열정은 강하지만 현실 계산, 반복 운영, 멘탈 관리가 부족하면 창업 후 빠르게 지칠 수 있습니다. 지금 필요한 것은 더 큰 확신이 아니라 더 구체적인 준비입니다.",
    strength: "망설임 없이 움직이는 추진력이 있습니다. 좋은 방향으로 다듬으면 빠르게 기회를 잡을 수 있습니다.",
    caution: "권리금 높은 매장, 대출 창업, 큰 인테리어 투자는 특히 조심해야 합니다. 감이 아니라 숫자로 검증해야 합니다.",
    recommend: "창업 공부, 매장 근무 경험, 원가 계산 훈련, 소규모 검증, 생존 시뮬레이션부터 추천합니다."
  }
};

// 각 축은 문항별 가산점이 섞여 있으므로, 고정값이 아니라 실제 가능한 최대점수로 계산합니다.
// 이전 버전은 MAX_TOTAL 기준이 낮아 일부 답변 조합에서 창업 적합도가 100%로 과대 표시될 수 있었습니다.
const AXIS_MAX = calcAxisMax();
let current = 0;
let answers = [];
let scores = emptyScores();
let lastResultShareData = null;

const $ = (id) => document.getElementById(id);

function emptyScores() {
  return { reality: 0, execution: 0, mental: 0, routine: 0, system: 0 };
}

function calcAxisMax() {
  const max = emptyScores();
  QUESTIONS.forEach(question => {
    Object.keys(max).forEach(axis => {
      const best = Math.max(...question.a.map(answer => answer.s[axis] || 0));
      max[axis] += best;
    });
  });
  return max;
}

function show(screenId) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  $(screenId).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startQuiz() {
  current = 0;
  answers = [];
  scores = emptyScores();
  show("quiz-screen");
  renderQuestion();
}

function renderQuestion() {
  const item = QUESTIONS[current];
  const progress = Math.round((current / QUESTIONS.length) * 100);

  $("question-count").textContent = `${current + 1} / ${QUESTIONS.length}`;
  $("progress-percent").textContent = `${progress}%`;
  $("progress-bar").style.width = `${progress}%`;
  $("axis-label").textContent = AXIS_LABELS[item.axis];
  $("question-title").textContent = item.q;
  $("back-btn").style.visibility = current === 0 ? "hidden" : "visible";

  const list = $("answer-list");
  list.innerHTML = "";
  item.a.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.type = "button";
    btn.innerHTML = `<strong>${String.fromCharCode(65 + index)}.</strong> ${answer.text}`;
    btn.addEventListener("click", () => chooseAnswer(index));
    list.appendChild(btn);
  });
}

function chooseAnswer(index) {
  answers[current] = index;
  recalcScores();

  if (current < QUESTIONS.length - 1) {
    current += 1;
    renderQuestion();
  } else {
    $("progress-percent").textContent = "100%";
    $("progress-bar").style.width = "100%";
    setTimeout(showResult, 180);
  }
}

function goBack() {
  if (current > 0) {
    current -= 1;
    renderQuestion();
  }
}

function recalcScores() {
  scores = emptyScores();
  answers.forEach((answerIndex, qIndex) => {
    if (answerIndex === undefined) return;
    const s = QUESTIONS[qIndex].a[answerIndex].s;
    Object.keys(scores).forEach(key => scores[key] += s[key] || 0);
  });
}

function getAxisPercent(axis) {
  const max = AXIS_MAX[axis] || 1;
  return Math.min(100, Math.round((scores[axis] / max) * 100));
}

function getTotalPercent(axisEntries) {
  const percents = axisEntries.map(([, percent]) => percent);
  const average = percents.reduce((sum, value) => sum + value, 0) / percents.length;
  const lowest = Math.min(...percents);

  // 평균을 기본으로 하되, 가장 낮은 축도 일부 반영해 결과가 너무 쉽게 100%가 되지 않도록 보정합니다.
  return Math.round((average * 0.85) + (lowest * 0.15));
}

function getTopAxisLabel(axisEntries) {
  const topValue = axisEntries[0][1];
  const topAxes = axisEntries
    .filter(([, percent]) => percent === topValue)
    .map(([axis]) => AXIS_LABELS[axis]);

  if (topAxes.length === 1) {
    return `가장 높은 성향: ${topAxes[0]}`;
  }
  return `가장 높은 성향: ${topAxes.join(", ")} 공동`;
}

function resultKey(totalPercent, topAxis, lowAxis) {
  const reality = getAxisPercent("reality");
  const execution = getAxisPercent("execution");
  const mental = getAxisPercent("mental");
  const routine = getAxisPercent("routine");
  const system = getAxisPercent("system");

  if (totalPercent < 38) return "stable";
  if (execution >= 68 && reality < 45) return "risky";
  if (totalPercent < 55) return "learner";
  if (system >= 70 && topAxis === "system") return "system";
  if (execution >= 65 && reality < 58) return "emotional";
  if (reality >= 62 && mental >= 55 && routine >= 50) return "survival";
  if (routine >= 65 && reality < 50 && execution < 55) return "stable";
  if (lowAxis === "reality" && execution >= 55) return "risky";
  return totalPercent >= 64 ? "survival" : "learner";
}

function showResult() {
  recalcScores();
  const axisEntries = Object.keys(scores).map(key => [key, getAxisPercent(key)]);
  axisEntries.sort((a, b) => b[1] - a[1]);
  const topAxis = axisEntries[0][0];
  const lowAxis = axisEntries[axisEntries.length - 1][0];
  const totalPercent = getTotalPercent(axisEntries);
  const key = resultKey(totalPercent, topAxis, lowAxis);

  lastResultShareData = {
    v: 1,
    key,
    totalPercent,
    axes: Object.fromEntries(Object.keys(AXIS_LABELS).map(axis => [axis, getAxisPercent(axis)]))
  };

  renderResultView(lastResultShareData, false);
}

function renderResultView(data, isShared = false) {
  const key = data.key;
  const result = RESULTS[key] || RESULTS.learner;
  const axisEntries = Object.keys(AXIS_LABELS)
    .map(axis => [axis, Number(data.axes?.[axis] ?? 0)])
    .sort((a, b) => b[1] - a[1]);
  const totalPercent = Math.max(0, Math.min(100, Number(data.totalPercent || 0)));

  lastResultShareData = {
    v: 1,
    key,
    totalPercent,
    axes: Object.fromEntries(Object.keys(AXIS_LABELS).map(axis => [axis, Number(data.axes?.[axis] ?? 0)]))
  };

  $("result-title").textContent = result.title;
  $("result-summary").textContent = isShared ? `${result.summary} · 공유된 결과입니다.` : result.summary;
  $("result-description").textContent = result.desc;
  $("result-strength").textContent = result.strength;
  $("result-caution").textContent = result.caution;
  $("result-recommend").textContent = result.recommend;
  $("total-score").textContent = `${totalPercent}%`;
  $("top-axis-label").textContent = getTopAxisLabel(axisEntries);

  const circumference = 326.72;
  const offset = circumference - (circumference * totalPercent / 100);
  $("score-ring-value").style.strokeDashoffset = offset;

  renderBars(axisEntries);
  updateLinks();
loadSharedResultFromUrl();
  show("result-screen");
}

function renderBars(axisEntries) {
  const chart = $("bar-chart");
  chart.innerHTML = "";
  const percentMap = Object.fromEntries(axisEntries);
  const ordered = Object.keys(AXIS_LABELS).map(axis => [axis, percentMap[axis] ?? 0]);

  ordered.forEach(([axis, percent]) => {
    const row = document.createElement("div");
    row.className = "bar-row";
    row.innerHTML = `
      <div class="bar-label">${AXIS_LABELS[axis]}</div>
      <div class="bar-track"><div class="bar-fill" style="width:0%"></div></div>
      <div class="bar-value">${percent}%</div>
    `;
    chart.appendChild(row);
    requestAnimationFrame(() => {
      row.querySelector(".bar-fill").style.width = `${percent}%`;
    });
  });
}

function encodeShareData(data) {
  try {
    const json = JSON.stringify(data);
    const encoded = btoa(unescape(encodeURIComponent(json)))
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");
    return encoded;
  } catch (e) {
    return "";
  }
}

function decodeShareData(value) {
  try {
    const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
    const padded = normalized + "===".slice((normalized.length + 3) % 4);
    const json = decodeURIComponent(escape(atob(padded)));
    const data = JSON.parse(json);

    if (!data || !RESULTS[data.key] || !data.axes) return null;
    const axes = {};
    Object.keys(AXIS_LABELS).forEach(axis => {
      axes[axis] = Math.max(0, Math.min(100, Math.round(Number(data.axes[axis] || 0))));
    });

    return {
      v: 1,
      key: data.key,
      totalPercent: Math.max(0, Math.min(100, Math.round(Number(data.totalPercent || 0)))),
      axes
    };
  } catch (e) {
    return null;
  }
}

function getShareUrl() {
  if (!lastResultShareData) return location.href.split("#")[0];
  const encoded = encodeShareData(lastResultShareData);
  return `${location.href.split("#")[0]}#result=${encoded}`;
}

function loadSharedResultFromUrl() {
  const hash = location.hash || "";
  const match = hash.match(/^#result=([^&]+)/);
  if (!match) return false;

  const data = decodeShareData(match[1]);
  if (!data) return false;

  renderResultView(data, true);
  return true;
}

function updateLinks() {
  $("survival-link").href = SURVIVAL_URL;
  $("cost-link").href = COST_SIMULATOR_URL;
}

async function shareResult() {
  const title = $("result-title").textContent;
  const shareUrl = getShareUrl();
  const text = `나는 ${title}! - 나는 창업형 인간일까, 직장형 인간일까?`;

  if (navigator.share) {
    try {
      await navigator.share({ title: document.title, text, url: shareUrl });
      return;
    } catch (e) {}
  }

  try {
    await navigator.clipboard.writeText(`${text}\n${shareUrl}`);
    alert("내 결과가 담긴 공유 링크를 클립보드에 복사했습니다.");
  } catch (e) {
    alert(`${text}\n${shareUrl}`);
  }
}

$("start-btn").addEventListener("click", startQuiz);
$("back-btn").addEventListener("click", goBack);
$("restart-btn").addEventListener("click", startQuiz);
$("share-btn").addEventListener("click", shareResult);
updateLinks();
loadSharedResultFromUrl();
