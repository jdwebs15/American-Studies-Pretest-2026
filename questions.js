const GAME_ID="american-studies-pretest";
const GAME_TITLE="American Studies Pretest";
const QUESTIONS=[
  {
    "prompt": "How did mass immigration at the turn of the 20th century impact American life?",
    "options": [
      "It reduced cultural diversity",
      "It filled the demand for workers in industrial centers",
      "It decreased urban populations",
      "It eliminated nativist sentiments"
    ],
    "answer": 1,
    "topic": "CS29 Immigration"
  },
  {
    "prompt": "What event ended U.S. isolationism in 1941?",
    "options": [
      "The signing of the Versailles Treaty",
      "The bombing of Pearl Harbor",
      "The passage of the 19th Amendment",
      "The creation of the United Nations"
    ],
    "answer": 1,
    "topic": "CS20-21 WWII"
  },
  {
    "prompt": "How did World War II mobilization affect American society?",
    "options": [
      "It reduced job opportunities for women and minorities",
      "It eliminated the military draft",
      "It led to rationing and victory gardens",
      "It decreased propaganda efforts"
    ],
    "answer": 2,
    "topic": "CS20-21 WWII"
  },
  {
    "prompt": "Which group contributed to the war effort through the Double V Campaign?",
    "options": [
      "African Americans",
      "Japanese Americans",
      "American Indians",
      "Mexican Immigrants"
    ],
    "answer": 0,
    "topic": "CS20-21 WWII"
  },
  {
    "prompt": "How did the use of atomic weapons change warfare?",
    "options": [
      "It reduced the destructive power of weapons",
      "It ended the arms race",
      "It decreased U.S. superpower status",
      "It began the nuclear age"
    ],
    "answer": 3,
    "topic": "CS20-21 WWII"
  },
  {
    "prompt": "What was the main goal of the U.S. policy of containment during the Cold War?",
    "options": [
      "To promote communism globally",
      "To halt the spread of communism",
      "To reduce military spending",
      "To dissolve NATO"
    ],
    "answer": 1,
    "topic": "CS24-26 Cold War"
  },
  {
    "prompt": "Which Cold War event reflected fears of communism in American society?",
    "options": [
      "The Harlem Renaissance",
      "The Great Migration",
      "McCarthyism",
      "The Progressive Era"
    ],
    "answer": 2,
    "topic": "CS24-26 Cold War"
  },
  {
    "prompt": "How did the Vietnam War influence domestic politics in the U.S.?",
    "options": [
      "It sparked massive anti-war protests",
      "It led to increased support for the war",
      "It reduced urban unrest",
      "It eliminated the draft"
    ],
    "answer": 0,
    "topic": "CS24-26 Cold War"
  },
  {
    "prompt": "What event symbolized the decline of communist governments in Eastern Europe?",
    "options": [
      "The Cuban Missile Crisis",
      "The Korean War",
      "The Bay of Pigs Invasion",
      "The fall of the Berlin Wall"
    ],
    "answer": 3,
    "topic": "CS24-26 Cold War"
  },
  {
    "prompt": "Which organization fought for African American civil rights after World War II?",
    "options": [
      "The National Organization for Women (NOW)",
      "The United Farm Workers of America (UFW)",
      "The National Association for the Advancement of Colored People (NAACP)",
      "The American Indian Movement (AIM)"
    ],
    "answer": 2,
    "topic": "CS27 Civil Rights"
  },
  {
    "prompt": "What was a key action during the Civil Rights Movement?",
    "options": [
      "The annexation of Hawaii",
      "The Montgomery Bus Boycott",
      "The passage of the 18th Amendment",
      "The creation of the Federal Reserve"
    ],
    "answer": 1,
    "topic": "CS27 Civil Rights"
  },
  {
    "prompt": "How did the postwar economic boom affect American life?",
    "options": [
      "It increased prosperity and suburban expansion",
      "It led to a decline in suburban growth",
      "It reduced technological advancements",
      "It decreased demand for goods"
    ],
    "answer": 0,
    "topic": "CS28-29 Postwar Society"
  },
  {
    "prompt": "What was a social effect of the migration from cities to suburbs after World War II?",
    "options": [
      "Increased racial integration",
      "Elimination of urban riots",
      "Reduced suburban growth",
      "White flight and redlining"
    ],
    "answer": 3,
    "topic": "CS28-29 Postwar Society"
  },
  {
    "prompt": "What was a political effect of the 1965 Immigration Act?",
    "options": [
      "Decreased immigration from Asia and Latin America",
      "Elimination of bilingual education programs",
      "Increased Hispanic influence in voting practices",
      "Reduced diversity in the U.S. population"
    ],
    "answer": 2,
    "topic": "CS28-29 Postwar Society"
  },
  {
    "prompt": "Which policy was part of the Great Society program?",
    "options": [
      "Deregulation of industries",
      "Medicare and Medicaid",
      "The Neutrality Acts",
      "The Dawes Act"
    ],
    "answer": 1,
    "topic": "CS28-29 Postwar Society"
  },
  {
    "prompt": "How has the shift to a service-based economy impacted the U.S.?",
    "options": [
      "Growth in information technology jobs",
      "Increased manufacturing jobs",
      "Reduced global communication",
      "Decreased international trade"
    ],
    "answer": 0,
    "topic": "CS28-29 Postwar Society"
  },
  {
    "prompt": "What was a major effect of the Great Migration?",
    "options": [
      "Increased segregation in the South",
      "Reduced African American populations in urban areas",
      "Transformation of northern cities economically and culturally",
      "Elimination of Jim Crow laws"
    ],
    "answer": 2,
    "topic": "CS28-29 Postwar Society"
  },
  {
    "prompt": "What was a consequence of continued American westward movement in the late 19th century?",
    "options": [
      "Increased conflicts like the Battle of Little Bighorn",
      "Peaceful coexistence with American Indians",
      "Elimination of the reservation system",
      "Reduced demand for natural resources"
    ],
    "answer": 0,
    "topic": "CS8 Westward Movement"
  },
  {
    "prompt": "What was a key feature of the reservation system?",
    "options": [
      "Full assimilation of American Indians",
      "Equal land rights for American Indians",
      "Prohibition of westward expansion",
      "Displacement of American Indians from ancestral lands"
    ],
    "answer": 3,
    "topic": "CS8 Westward Movement"
  },
  {
    "prompt": "How did Jim Crow laws affect African Americans after Reconstruction?",
    "options": [
      "They promoted racial equality",
      "They enforced racial segregation and limited civil rights",
      "They expanded voting rights",
      "They eliminated discrimination"
    ],
    "answer": 1,
    "topic": "CS9 Reconstruction"
  },
  {
    "prompt": "What was the significance of the Plessy v. Ferguson decision?",
    "options": [
      "It outlawed segregation",
      "It prohibited interracial marriage",
      "It affirmed the legality of segregation",
      "It expanded voting rights"
    ],
    "answer": 2,
    "topic": "CS9 Reconstruction"
  },
  {
    "prompt": "What was the primary goal of the Progressive movement?",
    "options": [
      "To address issues caused by industrialization, urbanization, and corruption",
      "To maintain industrial capitalism without reforms",
      "To eliminate all government regulation",
      "To reduce immigration"
    ],
    "answer": 0,
    "topic": "CS10-12 Progressivism"
  },
  {
    "prompt": "What was a key Progressive reform to address industrial capitalism?",
    "options": [
      "The Dawes Act",
      "The Homestead Act",
      "The Neutrality Acts",
      "The Sherman Antitrust Act"
    ],
    "answer": 3,
    "topic": "CS10-12 Progressivism"
  },
  {
    "prompt": "Which Progressive reform aimed to improve urban living conditions?",
    "options": [
      "The passage of the 18th Amendment",
      "The establishment of the Federal Reserve",
      "The creation of settlement houses",
      "The annexation of Hawaii"
    ],
    "answer": 2,
    "topic": "CS10-12 Progressivism"
  },
  {
    "prompt": "Which event helped the United States emerge as a world power?",
    "options": [
      "The Great Migration",
      "The Spanish-American War",
      "The Progressive Era",
      "The Great Depression"
    ],
    "answer": 1,
    "topic": "CS14 Imperialism"
  },
  {
    "prompt": "What was a key factor in U.S. overseas expansion in the late 19th century?",
    "options": [
      "Global competition for markets",
      "Isolationist policies",
      "Rejection of a navy",
      "Opposition to cultural superiority"
    ],
    "answer": 0,
    "topic": "CS14 Imperialism"
  },
  {
    "prompt": "Why did the U.S. move toward isolationism after World War I?",
    "options": [
      "Support for the League of Nations",
      "Increased military spending",
      "Desire to join European alliances",
      "Debate over the Versailles Treaty"
    ],
    "answer": 3,
    "topic": "CS15 WWI and Isolationism"
  },
  {
    "prompt": "What was the purpose of the Kellogg-Briand Pact?",
    "options": [
      "To promote war as a national policy",
      "To increase military spending",
      "To prohibit war as an instrument of national policy",
      "To establish the League of Nations"
    ],
    "answer": 2,
    "topic": "CS15 WWI and Isolationism"
  },
  {
    "prompt": "What contributed to social unrest after World War I?",
    "options": [
      "Racial tolerance and open immigration policies",
      "The Great Migration and Red Scare",
      "The end of Jim Crow laws",
      "Decreased immigration"
    ],
    "answer": 1,
    "topic": "CS15 WWI and Isolationism"
  },
  {
    "prompt": "Which technological innovation of the 1920s changed American culture?",
    "options": [
      "Commercial radio broadcasts",
      "The internet",
      "The printing press",
      "The telegraph"
    ],
    "answer": 0,
    "topic": "CS16 Prosperity"
  },
  {
    "prompt": "What was a social change brought by the Harlem Renaissance?",
    "options": [
      "Increased segregation in northern cities",
      "Prohibition of jazz music",
      "Reduced migration to urban areas",
      "Celebration of African American culture"
    ],
    "answer": 3,
    "topic": "CS16 Prosperity"
  },
  {
    "prompt": "What was an outcome of the women's suffrage movement?",
    "options": [
      "Passage of the 18th Amendment",
      "Repeal of the 21st Amendment",
      "Passage of the 19th Amendment",
      "Establishment of the Federal Reserve"
    ],
    "answer": 2,
    "topic": "CS16 Prosperity"
  },
  {
    "prompt": "What was a cause of the Great Depression?",
    "options": [
      "Reduced consumer debt",
      "Stock market speculation",
      "Decreased bank lending",
      "Expansion of the money supply"
    ],
    "answer": 1,
    "topic": "CS17-18 Depression and New Deal"
  },
  {
    "prompt": "How did the New Deal expand the role of the federal government?",
    "options": [
      "By creating agencies like the Social Security Administration",
      "By reducing social welfare programs",
      "By eliminating public works programs",
      "By banning labor unions"
    ],
    "answer": 0,
    "topic": "CS17-18 Depression and New Deal"
  },
  {
    "prompt": "What was a key U.S. policy to avoid involvement in overseas conflicts in the 1930s?",
    "options": [
      "The Lend-Lease Act",
      "The Atlantic Charter",
      "The Marshall Plan",
      "The Neutrality Acts"
    ],
    "answer": 3,
    "topic": "CS17-18 Depression and New Deal"
  },
  {
    "prompt": "What is a primary source in historical research?",
    "options": [
      "A history textbook written by a modern author",
      "A letter written by a soldier during the Civil War",
      "A documentary film about World War II",
      "A summary of events in a newspaper editorial"
    ],
    "answer": 1,
    "topic": "CS1-3 Historical Thinking"
  },
  {
    "prompt": "When evaluating the credibility of a historical source, what should historians consider?",
    "options": [
      "Only the date the source was published",
      "The popularity of the source among historians",
      "The author's perspective, bias, and qualifications",
      "Only the length of the document"
    ],
    "answer": 2,
    "topic": "CS1-3 Historical Thinking"
  },
  {
    "prompt": "Why do historians develop a thesis when studying historical events?",
    "options": [
      "To provide a meaningful interpretation of the past",
      "To list all events in chronological order",
      "To summarize other historians' findings",
      "To avoid using primary sources"
    ],
    "answer": 0,
    "topic": "CS1-3 Historical Thinking"
  },
  {
    "prompt": "Which of the following is an example of a secondary source?",
    "options": [
      "A photograph from the Great Depression",
      "A biography of Abraham Lincoln written in 2020",
      "A diary entry from a settler in the Northwest Territory",
      "A speech by Martin Luther King Jr."
    ],
    "answer": 1,
    "topic": "CS1-3 Historical Thinking"
  },
  {
    "prompt": "What is a key method historians use to analyze historical events?",
    "options": [
      "Ignoring cause-and-effect relationships",
      "Focusing only on short-term causes",
      "Avoiding the use of evidence",
      "Examining sequence, correlation, and multiple causation"
    ],
    "answer": 3,
    "topic": "CS1-3 Historical Thinking"
  },
  {
    "prompt": "Which of the following was a long-term cause of the Great Migration?",
    "options": [
      "Demand for workers in northern factories",
      "The introduction of Jim Crow laws",
      "World War I",
      "The stock market crash"
    ],
    "answer": 0,
    "topic": "CS29 Migration"
  },
  {
    "prompt": "What principle in the Declaration of Independence emphasizes that government power comes from the people?",
    "options": [
      "Unalienable rights",
      "Separation of powers",
      "Consent of the people",
      "Federalism"
    ],
    "answer": 2,
    "topic": "Founding Documents"
  },
  {
    "prompt": "Which right is explicitly mentioned in the Declaration of Independence?",
    "options": [
      "Right to life, liberty, and the pursuit of happiness",
      "Right to bear arms",
      "Right to free speech",
      "Right to a jury trial"
    ],
    "answer": 0,
    "topic": "Founding Documents"
  },
  {
    "prompt": "The Northwest Ordinance established which precedent for new territories?",
    "options": [
      "Mandatory military service",
      "Taxation without representation",
      "Unlimited expansion of slavery",
      "Encouragement of public education"
    ],
    "answer": 3,
    "topic": "Founding Documents"
  },
  {
    "prompt": "Which of the following was a provision of the Northwest Ordinance?",
    "options": [
      "Legalization of slavery in the Northwest Territory",
      "Establishment of a monarchy in new states",
      "Prohibition of slavery in the territory",
      "Requirement for a standing army"
    ],
    "answer": 2,
    "topic": "Founding Documents"
  },
  {
    "prompt": "How did the U.S. Constitution establish a limited government?",
    "options": [
      "By giving all power to the executive branch",
      "By protecting individual and civil liberties",
      "By eliminating state governments",
      "By banning elections"
    ],
    "answer": 1,
    "topic": "Founding Documents"
  },
  {
    "prompt": "What is a key feature of federalism in the U.S. Constitution?",
    "options": [
      "Dividing power between national and state governments",
      "Giving all power to the states",
      "Eliminating the judicial branch",
      "Allowing only the president to make laws"
    ],
    "answer": 0,
    "topic": "Founding Documents"
  },
  {
    "prompt": "What was a main argument of the Federalists in the Federalist Papers?",
    "options": [
      "Opposition to a strong central government",
      "Demand for state-only taxation",
      "Rejection of the Bill of Rights",
      "Support for a standing army and checks and balances"
    ],
    "answer": 3,
    "topic": "Founding Documents"
  },
  {
    "prompt": "Why did Anti-Federalists oppose the U.S. Constitution?",
    "options": [
      "They supported a national army",
      "They opposed checks and balances",
      "They wanted a weaker central government",
      "They wanted to eliminate state governments"
    ],
    "answer": 2,
    "topic": "Founding Documents"
  },
  {
    "prompt": "What was the result of the Federalist and Anti-Federalist debates?",
    "options": [
      "The abolition of slavery",
      "The adoption of the Bill of Rights",
      "The rejection of the Constitution",
      "The creation of a monarchy"
    ],
    "answer": 1,
    "topic": "Founding Documents"
  },
  {
    "prompt": "How did industrialization change the American economy in the late 19th century?",
    "options": [
      "It shifted from industrial to agrarian",
      "It eliminated all factory jobs",
      "It reduced urban populations",
      "It shifted from agrarian to industrial"
    ],
    "answer": 3,
    "topic": "CS8 Industrialization"
  },
  {
    "prompt": "Which technological innovation contributed to industrialization in the late 19th century?",
    "options": [
      "The automobile",
      "The internet",
      "The printing press",
      "The steam engine"
    ],
    "answer": 3,
    "topic": "CS8 Industrialization"
  },
  {
    "prompt": "What was a major consequence of the rise of corporations during industrialization?",
    "options": [
      "Increased rural populations",
      "Shift from factory to agricultural workers",
      "Growth of urban areas and factory workers",
      "Elimination of mechanized farming"
    ],
    "answer": 2,
    "topic": "CS8 Industrialization"
  },
  {
    "prompt": "What was a key goal of labor unions during the industrialization period?",
    "options": [
      "Supporting monopolies",
      "Advocating for shorter workdays",
      "Eliminating factories",
      "Reducing immigration"
    ],
    "answer": 1,
    "topic": "CS8 Industrialization"
  },
  {
    "prompt": "What was a common tactic used by labor unions to achieve their goals?",
    "options": [
      "Supporting laissez-faire policies",
      "Encouraging child labor",
      "Opposing mechanization",
      "Collective bargaining"
    ],
    "answer": 3,
    "topic": "CS8 Industrialization"
  }
];
