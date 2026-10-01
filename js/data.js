const A = {
  BLUE: "img/personagens/ingles.png",
  GREEN: "img/personagens/robotica.png",
  LONDON: "img/mapas/london.png",
  CYBER: "img/mapas/cybertec.png"
};

const ENGLISH_QUESTIONS = [
  [
    ["Complete a frase com a forma correta do verbo to be: \"She ________ a software engineer, and her brothers ________ teachers.\"", ["is / is", "are / is", "is / are", "am / are"], 2],
    ["Selecione a palavra correta para completar a lacuna: \"Excuse me, where ________ I find the nearest supermarket?\"", ["does", "can", "is", "do"], 1],
    ["Escolha a expressão correta de rotina diária: \"He usually ________ up at 7:00 AM, but on weekends he ________ in bed until 9:00 AM.\"", ["wakes / stays", "wake / stay", "waking / staying", "woke / stayed"], 0],
    ["Introduza-se em 2 a 3 frases. Diga seu nome, de onde você é e o que gosta de fazer no tempo livre.", { type: "text", placeholder: "Escreva sua resposta aqui..." }, null],
    ["Descreva sua rotina diária em 2 a 3 frases usando o simple present (por exemplo: I get up, I work, I study...).", { type: "text", placeholder: "Escreva sua rotina aqui..." }, null]
  ],
  [
    ["Escolha o tempo correto para completar a narrativa: \"While I ________ to work yesterday morning, it ________ to rain heavily.\"", ["was driving / started", "drove / was starting", "drive / starts", "have driven / started"], 0],
    ["Selecione a opção que melhor completa a frase com verbo modal: \"You ________ wear a helmet while riding a motorcycle; it’s required by law.\"", ["might", "must", "could", "would"], 1],
    ["Escolha a forma comparativa correta: \"This project is much ________ than the previous one, so we need extra time.\"", ["complexer", "more complex", "most complex", "complex"], 1],
    ["Pense em uma viagem ou evento memorável do passado. Escreva 3 a 4 frases descrevendo o que aconteceu, usando passado (Simple Past ou Past Continuous).", { type: "text", placeholder: "Escreva sobre o evento aqui..." }, null],
    ["Responda em 3 a 4 frases: Qual são seus principais objetivos profissionais ou pessoais para os próximos dois anos? Use formas do futuro como will, going to ou hope to.", { type: "text", placeholder: "Escreva seus objetivos aqui..." }, null]
  ],
  [
    ["Selecione a opção que completa corretamente a terceira condicional: \"If we ________ the strategy earlier, we ________ the deadline.\"", ["adjusted / wouldn't miss", "had adjusted / wouldn't have missed", "adjust / won't miss", "have adjusted / didn't miss"], 1],
    ["Escolha a frase com o uso correto de inversion para ênfase: \"Not only ________ the technical issue, but they also upgraded the entire infrastructure.\"", ["they resolved", "did they resolve", "had resolved they", "they did resolve"], 1],
    ["Selecione a melhor correspondência de vocabulário para o contexto profissional: \"The company's new policy was designed to ________ collaboration across interdisciplinary teams.\"", ["foster", "strictly eliminate", "deteriorate", "overlook"], 0],
    ["Leia o prompt e escreva um pequeno parágrafo de 4 a 5 frases: Você acha que a inteligência artificial vai substituir profissionais humanos na educação e na tecnologia, ou ela apenas servirá como ferramenta? Justifique sua opinião.", { type: "text", placeholder: "Escreva seu parágrafo aqui..." }, null],
    ["Reescreva a frase abaixo usando uma estrutura avançada (como passive voice, inversion ou cleft sentence) para enfatizar a ação destacada: \"The team solved the problem after working continuously for ten hours.\"", { type: "text", placeholder: "Escreva a reescrita aqui..." }, null]
  ]
];

const TECH_QUESTIONS = [
  [
    ["O que é um algoritmo na programação?", ["Um tipo de tela de computador", "Uma sequência passo a passo de instruções para resolver um problema ou realizar uma tarefa", "Um motor elétrico que gira muito rápido", "Uma pilha que alimenta um circuito"], 1],
    ["Na programação em blocos (como Scratch ou MakeCode), qual bloco permite que uma ação se repita várias vezes sem precisar reescrever os blocos?", ["se... então", "mudar variável para 0", "repetir / sempre (loop)", "parar todos os atores"], 2],
    ["Observe este circuito simples: você conecta uma bateria, um interruptor (chave) e um LED. O que acontece quando você abre o interruptor?", ["O LED acende porque a eletricidade passa", "A bateria esquenta", "O LED apaga porque o caminho da corrente elétrica foi interrompido", "O LED fica piscando para sempre"], 2],
    ["Imagine que você está programando um personagem em um jogo para atravessar a rua. Escreva uma lista passo a passo de 3 a 4 instruções (em português ou blocos) para fazer o personagem chegar em segurança ao outro lado.", { type: "text", placeholder: "Escreva os passos do algoritmo aqui..." }, null],
    ["Cite dois componentes de entrada (sensores/botões) e dois componentes de saída (luzes/motores/sirenes) usados na robótica. Explique brevemente o que um deles faz.", { type: "text", placeholder: "Escreva os componentes e sua explicação aqui..." }, null]
  ],
  [
    ["Um carrinho robô desviador de obstáculos utiliza um Sensor Ultrassônico HC-SR04. Como esse sensor calcula a distância até um objeto?", ["Medindo a luminosidade do ambiente", "Emitindo uma onda de som de alta frequência e medindo o tempo que ela leva para bater no objeto e voltar", "Tocando fisicamente na parede com um parachoque de metal", "Lendo a mudança de cor no chão"], 1],
    ["Qual será o valor final da variável x após a execução deste trecho de código em Python?\n\nPython\n\nx = 5\npara i no intervalo(3):\n    x = x + 2", ["5", "8", "11", "15"], 2],
    ["Ao ligar um LED diretamente em um pino do Arduino ou micro:bit, por que precisamos colocar um resistor em série com o LED?", ["Para fazer o LED brilhar duas vezes mais forte", "Para limitar a corrente elétrica e evitar queimar o LED ou o pino do microcontrolador", "Para mudar a cor da luz do LED", "Para guardar eletricidade extra como se fosse uma bateria"], 1],
    ["Escreva a lógica (em pseudocódigo ou blocos) para um robô seguidor de linha autônomo que usa dois sensores infravermelhos (Sensor Esquerdo e Sensor Direito) para se manter em cima de uma linha preta.", { type: "text", placeholder: "Escreva a lógica do robô aqui..." }, null],
    ["Explique a diferença entre um Sinal Digital e um Sinal Analógico em um microcontrolador (como Arduino ou ESP32). Dê um exemplo do mundo real de cada um.", { type: "text", placeholder: "Explique a diferença e dê exemplos reais..." }, null]
  ],
  [
    ["Qual técnica é utilizada para controlar a velocidade de um motor DC conectado a uma ponte H (como a L298N) usando um pino digital do microcontrolador?", ["Conversão Analógico-Digital (ADC)", "Modulação por Largura de Pulso (PWM)", "Comunicação Serial SPI", "Protocolo I2C"], 1],
    ["Qual é a falha lógica ou erro principal no seguinte código em C++ / Arduino?\n\nC++\n\nvoid loop() {\n    int valorSensor = analogRead(A0);\n    if (valorSensor > 500) {\n        digitalWrite(13, HIGH);\n    }\n}", ["A função analogRead() não pode ser usada dentro do void loop()", "O pino 13 é acionado para HIGH, mas nunca é desligado (LOW) quando valorSensor <= 500", "A variável valorSensor precisa ser obrigatoriamente do tipo float", "No Arduino só se usa ponto e vírgula no final do void loop()"], 1],
    ["Qual estrutura de dados é mais eficiente para armazenar uma sequência de comandos de movimentos ou histórico de leitura de sensores em Python?", ["Booleano (True/False)", "Inteiro (int)", "Lista / Vetor (List / Array)", "Modo de Pino (pinMode)"], 2],
    ["Escreva uma função simples em Python ou C++/Arduino que receba a variável distancia_cm de um sensor ultrassônico. Se a distância for menor que 15 cm, o robô deve parar os motores; caso contrário, deve mover para a frente.", { type: "text", placeholder: "Escreva a função do robô aqui..." }, null],
    ["Explique como uma Máquina de Estados Finitos (FSM) pode ser usada para controlar um robô 4WD com 3 estados: PARADO, NAVEGANDO e DESVIANDO_OBSTACULO. Explique o que faz o robô mudar do estado NAVEGANDO para DESVIANDO_OBSTACULO e depois voltar.", { type: "text", placeholder: "Explique o FSM e as transições entre estados..." }, null]
  ]
];

const D = {
  eng: {
    title: "🇬🇧 ENGLISH — LONDON ADVENTURE",
    map: A.LONDON,
    char: A.BLUE,
    st: [
      ["BÁSICO", [25, 68], ENGLISH_QUESTIONS[0]],
      ["INTERMEDIÁRIO", [53, 46], ENGLISH_QUESTIONS[1]],
      ["AVANÇADO", [78, 29], ENGLISH_QUESTIONS[2]]
    ]
  },
  tech: {
    title: "🤖 PROGRAMAÇÃO E ROBÓTICA — CYBERTEC",
    map: A.CYBER,
    char: A.GREEN,
    st: [
      ["BÁSICO", [24, 67], TECH_QUESTIONS[0]],
      ["INTERMEDIÁRIO", [43, 50], TECH_QUESTIONS[1]],
      ["AVANÇADO", [70, 35], TECH_QUESTIONS[2]]
    ]
  }
};

const AGE_LEVELS = {
  "5 a 7 anos (Little Kids)": {
    stageNames: { eng: ["BÁSICO", "BÁSICO", "BÁSICO"], tech: ["BÁSICO", "INTERMEDIÁRIO", "AVANÇADO"] },
    questions: {
      eng: ENGLISH_QUESTIONS,
      tech: TECH_QUESTIONS
    }
  },
  "8 a 10 anos (Kids)": {
    stageNames: { eng: ["BÁSICO", "INTERMEDIÁRIO", "AVANÇADO"], tech: ["BÁSICO", "INTERMEDIÁRIO", "AVANÇADO"] },
    questions: {
      eng: ENGLISH_QUESTIONS,
      tech: TECH_QUESTIONS
    }
  },
  "11 a 13 anos (Teens)": {
    stageNames: { eng: ["BÁSICO", "INTERMEDIÁRIO", "AVANÇADO"], tech: ["BÁSICO", "INTERMEDIÁRIO", "AVANÇADO"] },
    questions: {
      eng: ENGLISH_QUESTIONS,
      tech: TECH_QUESTIONS
    }
  },
  "14 - 16 anos (Young)": {
    stageNames: { eng: ["BÁSICO", "INTERMEDIÁRIO", "AVANÇADO"], tech: ["BÁSICO", "INTERMEDIÁRIO", "AVANÇADO"] },
    questions: {
      eng: ENGLISH_QUESTIONS,
      tech: TECH_QUESTIONS
    }
  },
  "18+ anos (Adult)": {
    stageNames: { eng: ["BÁSICO", "INTERMEDIÁRIO", "AVANÇADO"], tech: ["BÁSICO", "INTERMEDIÁRIO", "AVANÇADO"] },
    questions: {
      eng: ENGLISH_QUESTIONS,
      tech: TECH_QUESTIONS
    }
  }
};
