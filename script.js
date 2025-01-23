
const exercises = [
    {
      id: 1,
      title: "Somme",
      description: "Écrire une fonction qui prend deux nombres en entrée et retourne leur somme.",
      solution: "function addition(a, b) { return a + b; }",
      demo: function() {
        const a = parseFloat(prompt("Entrez le premier nombre :"));
        const b = parseFloat(prompt("Entrez le deuxième nombre :"));
        if (isNaN(a) || isNaN(b)) {
          alert("Veuillez entrer des nombres valides.");
        } else {
          alert(`Résultat : ${a + b}`);
        }
      },
    },
    {
      id: 2,
      title: "Afficher 1..10",
      description: "Écrire une fonction qui affiche les nombres de 1 à 10.",
      solution: "for (let i = 1; i <= 10; i++) { console.log(i); }",
      demo: function() {
        let output = "";
        for (let i = 1; i <= 10; i++) {
          output += i + " ";
        }
        alert(`Résultat : ${output}`);
      },
    },
    {
      id: 3,
      title: "Trouver le plus grand entre deux nombres",
      description: "Écrire une fonction qui retourne le plus grand entre deux nombres.",
      solution: "function max(a, b) { return a > b ? a : b; }",
      demo: function() {
        const a = parseFloat(prompt("Entrez le premier nombre :"));
        const b = parseFloat(prompt("Entrez le deuxième nombre :"));
        if (isNaN(a) || isNaN(b)) {
          alert("Veuillez entrer des nombres valides.");
        } else {
          alert(`Le plus grand est : ${a > b ? a : b}`);
        }
      },
    },
    {
      id: 4,
      title: "Calculer la factorielle",
      description: "Écrire une fonction qui calcule la factorielle d'un nombre.",
      solution: "function factorial(n) { return n <= 1 ? 1 : n * factorial(n - 1); }",
      demo: function() {
        const n = parseInt(prompt("Entrez un nombre :"));
        if (isNaN(n) || n < 0) {
          alert("Veuillez entrer un nombre entier positif.");
        } else {
          let result = 1;
          for (let i = 1; i <= n; i++) {
            result *= i;
          }
          alert(`Factorielle de ${n} est : ${result}`);
        }
      },
    },
    {
      id: 5,
      title: "Inverser une chaîne",
      description: "Écrire une fonction qui inverse une chaîne de caractères.",
      solution: "function reverseString(str) { return str.split('').reverse().join(''); }",
      demo: function() {
        const str = prompt("Entrez une chaîne de caractères :");
        alert(`Chaîne inversée : ${str.split('').reverse().join('')}`);
      },
    },
    {
      id: 6,
      title: "Trouver les nombres pairs",
      description: "Écrire une fonction qui retourne tous les nombres pairs jusqu'à un nombre donné.",
      solution: "function findEvens(n) { return Array.from({length: n}, (_, i) => i + 1).filter(x => x % 2 === 0); }",
      demo: function() {
        const n = parseInt(prompt("Entrez un nombre :"));
        if (isNaN(n) || n < 1) {
          alert("Veuillez entrer un nombre entier positif.");
        } else {
          const evens = [];
          for (let i = 1; i <= n; i++) {
            if (i % 2 === 0) evens.push(i);
          }
          alert(`Nombres pairs jusqu'à ${n} : ${evens.join(', ')}`);
        }
      },
    },
    {
      id: 7,
      title: "Calculer la puissance",
      description: "Écrire une fonction qui calcule la puissance d'un nombre.",
      solution: "function power(base, exponent) { return Math.pow(base, exponent); }",
      demo: function() {
        const base = parseFloat(prompt("Entrez la base :"));
        const exponent = parseInt(prompt("Entrez l'exposant :"));
        if (isNaN(base) || isNaN(exponent)) {
          alert("Veuillez entrer des nombres valides.");
        } else {
          alert(`Résultat : ${Math.pow(base, exponent)}`);
        }
      },
    },
    {
      id: 8,
      title: "Vérifier un palindrome",
      description: "Écrire une fonction qui vérifie si une chaîne est un palindrome.",
      solution: "function isPalindrome(str) { const reversed = str.split('').reverse().join(''); return str === reversed; }",
      demo: function() {
        const str = prompt("Entrez une chaîne de caractères :");
        const reversed = str.split('').reverse().join('');
        alert(`La chaîne est${str === reversed ? '' : ' non'} un palindrome.`);
      },
    },
  ];
  
  // Récupération du conteneur pour afficher les exercices
  const container = document.getElementById("exercises-container");
  
  // Générer les cartes d'exercice dynamiquement
  exercises.forEach((exercise) => {
    // Créer une carte
    const card = document.createElement("div");
    card.classList.add("exercise-card");
  
    // Titre
    const title = document.createElement("h3");
    title.textContent = `${exercise.id}. ${exercise.title}`;
    card.appendChild(title);
  
    // Description
    const description = document.createElement("p");
    description.textContent = exercise.description;
    card.appendChild(description);
  
    // Boutons
    const buttons = document.createElement("div");
    buttons.classList.add("buttons");
  
    // Bouton Voir la solution
    const solutionButton = document.createElement("button");
    solutionButton.classList.add("solution");
    solutionButton.textContent = "Voir la solution";
    solutionButton.addEventListener("click", () => {
      alert(`Solution : \n${exercise.solution}`);
    });
    buttons.appendChild(solutionButton);
  
    // Bouton Voir la démonstration
    const demoButton = document.createElement("button");
    demoButton.classList.add("demo");
    demoButton.textContent = "Voir la démonstration";
    demoButton.addEventListener("click", () => {
      exercise.demo();
    });
    buttons.appendChild(demoButton);
  
    card.appendChild(buttons);
    container.appendChild(card);
  });
  