// État du jeu
let gameState = {
    currentMonth: 1,
    email: '',
    totalSavings: 0,
    totalCredit: 0,
    creditInterestRate: 0.15,
    savingsInterestRate: 0.02,
    months: {
        1: {
            name: 'Septembre',
            income: 0,
            expenses: {},
            choices: {},
            balance: 0
        },
        2: {
            name: 'Octobre',
            income: 1800,
            expenses: {},
            choices: {},
            balance: 0
        },
        3: {
            name: 'Novembre',
            income: 2000,
            expenses: {},
            choices: {},
            balance: 0
        }
    }
};

function startGame() {
    const email = document.getElementById('emailInput').value;
    const emailPattern = /^.+@istlm\.org$/;
    
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 
            'Veuillez entrer une adresse email valide @istlm.org';
        return;
    }

    gameState.email = email;
    document.getElementById('emailSection').classList.add('hidden');
    document.getElementById('gameContent').classList.remove('hidden');
    
    loadMonth(1);
}

function loadMonth(monthNum) {
    gameState.currentMonth = monthNum;
    
    // Mettre à jour la barre de progression
    for (let i = 1; i <= 3; i++) {
        const step = document.getElementById(`step${i}`);
        if (i === monthNum) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    }

    // Mettre à jour les compteurs
    updateCounters();

    // Charger le contenu du mois
    if (monthNum === 1) {
        loadMonth1();
    } else if (monthNum === 2) {
        loadMonth2();
    } else if (monthNum === 3) {
        loadMonth3();
    }
}

function updateCounters() {
    document.getElementById('savingsAmount').textContent = 
        gameState.totalSavings.toFixed(2) + ' €';
    document.getElementById('creditAmount').textContent = 
        gameState.totalCredit.toFixed(2) + ' €';
}

function updateBudgetTable(month) {
    const m = gameState.months[month];
    
    // Recettes
    document.getElementById(`totalIncome${month}`).textContent = m.income + ' €';
    
    if (month === 1) {
        document.getElementById(`unemployment${month}`).textContent = m.income + ' €';
    } else if (month === 2) {
        document.getElementById(`salary${month}`).textContent = m.income + ' €';
    }

    // Dépenses
    document.getElementById(`rent${month}`).textContent = (m.expenses.rent || 0) + ' €';
    document.getElementById(`energy${month}`).textContent = (m.expenses.energy || 0) + ' €';
    document.getElementById(`telecom${month}`).textContent = (m.expenses.telecom || 0) + ' €';
    document.getElementById(`transport${month}`).textContent = (m.expenses.transport || 0) + ' €';
    
    if (m.expenses.moving && document.getElementById(`movingRow${month}`)) {
        document.getElementById(`movingRow${month}`).style.display = '';
        document.getElementById(`moving${month}`).textContent = m.expenses.moving + ' €';
    }

    if (m.expenses.houseExpenses && document.getElementById(`houseExpenses${month}`)) {
        document.getElementById(`houseExpenses${month}`).textContent = m.expenses.houseExpenses + ' €';
    }

    document.getElementById(`food${month}`).textContent = (m.expenses.food || 0) + ' €';
    document.getElementById(`leisure${month}`).textContent = (m.expenses.leisure || 0) + ' €';
    document.getElementById(`health${month}`).textContent = (m.expenses.health || 0) + ' €';
    document.getElementById(`other${month}`).textContent = (m.expenses.other || 0) + ' €';

    if (document.getElementById(`savings${month}`)) {
        document.getElementById(`savings${month}`).textContent = (m.expenses.savings || 0) + ' €';
    }

    // Calculer le solde
    let totalExpenses = Object.values(m.expenses).reduce((sum, val) => sum + (val || 0), 0);
    
    // Ajouter le remboursement de crédit si présent
    if (m.creditRepayment) {
        totalExpenses += m.creditRepayment;
    }
    
    m.balance = m.income - totalExpenses;

    const balanceEl = document.getElementById(`balance${month}`);
    balanceEl.textContent = m.balance.toFixed(2) + ' €';
    
    if (m.balance > 0) {
        balanceEl.style.color = '#28a745';
    } else if (m.balance === 0) {
        balanceEl.style.color = '#ffc107';
    } else {
        balanceEl.style.color = '#dc3545';
    }

    // Afficher le statut
    const statusDiv = document.getElementById(`balanceStatus${month}`);
    if (m.balance > 0) {
        statusDiv.innerHTML = `<span class="status-indicator positive">💚 Équilibré ! Solde positif de ${m.balance.toFixed(2)} € → Épargne</span>`;
    } else if (m.balance === 0) {
        statusDiv.innerHTML = `<span class="status-indicator warning">🟡 Parfaitement équilibré</span>`;
    } else {
        statusDiv.innerHTML = `<span class="status-indicator negative">🔴 Déficit de ${Math.abs(m.balance).toFixed(2)} € → Crédit nécessaire</span>`;
    }
}

function finishMonth(month) {
    const m = gameState.months[month];
    
    // Gérer épargne ou crédit
    if (m.balance > 0) {
        // Épargne avec intérêts
        const interest = m.balance * gameState.savingsInterestRate;
        gameState.totalSavings += m.balance + interest;
    } else if (m.balance < 0) {
        // Crédit avec intérêts à rembourser le mois suivant
        const creditAmount = Math.abs(m.balance);
        const interest = creditAmount * gameState.creditInterestRate;
        gameState.totalCredit += creditAmount + interest;
    }

    // Afficher le résumé
    showMonthSummary(month);
}

function showMonthSummary(month) {
    const m = gameState.months[month];
    const modal = document.getElementById('summaryModal');
    const title = document.getElementById('summaryTitle');
    const body = document.getElementById('summaryBody');

    title.textContent = `Résumé - ${m.name}`;

    let summaryHTML = `
        <div class="summary-item">
            <strong>💰 Recettes totales:</strong> ${m.income} €
        </div>
        <div class="summary-item">
            <strong>💸 Dépenses totales:</strong> ${Object.values(m.expenses).reduce((s, v) => s + (v || 0), 0)} €
        </div>
        <div class="summary-item">
            <strong>💵 Solde:</strong> ${m.balance.toFixed(2)} €
        </div>
    `;

    if (m.balance > 0) {
        const interest = m.balance * gameState.savingsInterestRate;
        summaryHTML += `
            <div class="summary-item" style="background: #d4edda;">
                <strong>💚 Félicitations !</strong><br>
                Vous avez un excédent de ${m.balance.toFixed(2)} €<br>
                Épargne avec intérêts (2%): +${interest.toFixed(2)} €<br>
                Total épargné: ${(m.balance + interest).toFixed(2)} €
            </div>
        `;
    } else if (m.balance < 0) {
        const creditAmount = Math.abs(m.balance);
        const interest = creditAmount * gameState.creditInterestRate;
        summaryHTML += `
            <div class="summary-item" style="background: #f8d7da;">
                <strong>⚠️ Attention !</strong><br>
                Vous avez un déficit de ${creditAmount.toFixed(2)} €<br>
                Crédit avec intérêts (15%): +${interest.toFixed(2)} €<br>
                À rembourser le mois prochain: ${(creditAmount + interest).toFixed(2)} €
            </div>
            <div class="warning-box">
                💡 <strong>Conseil:</strong> Un emploi au mois prochain vous aidera à équilibrer votre budget !
            </div>
        `;
    } else {
        summaryHTML += `
            <div class="summary-item" style="background: #fff3cd;">
                <strong>🟡 Budget parfaitement équilibré !</strong>
            </div>
        `;
    }

    // Ajouter les choix effectués
    summaryHTML += `<h3 style="margin-top: 20px;">Vos choix:</h3>`;
    if (m.choices.housing) {
        summaryHTML += `<div class="summary-item">🏠 Logement: ${m.choices.housing.type}</div>`;
    }
    if (m.choices.transport) {
        summaryHTML += `<div class="summary-item">🚌 Transport: ${m.choices.transport.type}</div>`;
    }
    if (m.choices.inheritance) {
        summaryHTML += `<div class="summary-item">🏡 Héritage: ${m.choices.inheritance}</div>`;
    }

    body.innerHTML = summaryHTML;
    modal.classList.add('show');
}

function nextMonth() {
    document.getElementById('summaryModal').classList.remove('show');
    
    if (gameState.currentMonth < 3) {
        loadMonth(gameState.currentMonth + 1);
    } else {
        showFinalSummary();
    }
}

function showFinalSummary() {
    const modal = document.getElementById('summaryModal');
    const title = document.getElementById('summaryTitle');
    const body = document.getElementById('summaryBody');

    title.textContent = '🎉 Fin du jeu - Résumé des 3 mois';

    let totalIncome = 0;
    let totalExpenses = 0;

    for (let i = 1; i <= 3; i++) {
        const m = gameState.months[i];
        totalIncome += m.income;
        totalExpenses += Object.values(m.expenses).reduce((s, v) => s + (v || 0), 0);
        if (m.creditRepayment) {
            totalExpenses += m.creditRepayment;
        }
    }

    let summaryHTML = `
        <h3>Récapitulatif global</h3>
        <div class="summary-item">
            <strong>💰 Revenus totaux (3 mois):</strong> ${totalIncome.toFixed(2)} €
        </div>
        <div class="summary-item">
            <strong>💸 Dépenses totales (3 mois):</strong> ${totalExpenses.toFixed(2)} €
        </div>
        <div class="summary-item">
            <strong>💵 Épargne accumulée:</strong> ${gameState.totalSavings.toFixed(2)} €
        </div>
        <div class="summary-item">
            <strong>💳 Crédits restants:</strong> ${gameState.totalCredit.toFixed(2)} €
        </div>

        <h3 style="margin-top: 30px;">Vos choix clés:</h3>
    `;

    for (let i = 1; i <= 3; i++) {
        const m = gameState.months[i];
        summaryHTML += `
            <div class="summary-item">
                <strong>${m.name}</strong><br>
                Logement: ${m.choices.housing?.type || 'N/A'}<br>
                Transport: ${m.choices.transport?.type || 'N/A'}<br>
                ${i === 3 && m.choices.inheritance ? `Héritage: ${m.choices.inheritance}` : ''}
            </div>
        `;
    }

    const finalBalance = gameState.totalSavings - gameState.totalCredit;
    
    if (finalBalance > 500) {
        summaryHTML += `
            <div class="summary-item" style="background: #d4edda;">
                <strong>🌟 Excellent !</strong><br>
                Vous avez bien géré votre budget avec un solde final de ${finalBalance.toFixed(2)} €.
                Vous avez compris l'importance de l'épargne et d'éviter les crédits à taux élevé.
            </div>
        `;
    } else if (finalBalance >= 0) {
        summaryHTML += `
            <div class="summary-item" style="background: #fff3cd;">
                <strong>👍 Bien joué !</strong><br>
                Vous terminez avec un solde de ${finalBalance.toFixed(2)} €.
                Vous avez maintenu l'équilibre malgré les défis.
            </div>
        `;
    } else {
        summaryHTML += `
            <div class="summary-item" style="background: #f8d7da;">
                <strong>⚠️ Attention !</strong><br>
                Vous terminez avec un déficit de ${Math.abs(finalBalance).toFixed(2)} €.
                Les crédits à taux élevé peuvent rapidement s'accumuler. Pensez à mieux anticiper vos dépenses !
            </div>
        `;
    }

    summaryHTML += `
        <div class="info-box" style="margin-top: 30px;">
            <strong>📚 Leçons apprises:</strong><br>
            ✅ L'importance d'un revenu stable (emploi)<br>
            ✅ Distinguer dépenses fixes et variables<br>
            ✅ Anticiper les imprévus<br>
            ✅ Éviter les crédits à taux élevé (15%)<br>
            ✅ Profiter de l'épargne avec intérêts (2%)<br>
            ✅ Faire des choix structurants (logement, transport)
        </div>

        <div style="text-align: center; margin-top: 30px;">
            <button class="btn btn-primary" onclick="printResults()">📄 Imprimer les résultats</button>
        </div>
    `;

    body.innerHTML = summaryHTML;
    modal.classList.add('show');
}

function printResults() {
    const printWindow = window.open('', '', 'width=800,height=600');
    const today = new Date().toLocaleDateString('fr-BE');
    
    let totalIncome = 0;
    let totalExpenses = 0;

    for (let i = 1; i <= 3; i++) {
        const m = gameState.months[i];
        totalIncome += m.income;
        totalExpenses += Object.values(m.expenses).reduce((s, v) => s + (v || 0), 0);
        if (m.creditRepayment) {
            totalExpenses += m.creditRepayment;
        }
    }

    const finalBalance = gameState.totalSavings - gameState.totalCredit;
    
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Résultats - Budget & Vie</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    padding: 40px;
                    max-width: 800px;
                    margin: 0 auto;
                }
                h1 {
                    color: #667eea;
                    text-align: center;
                    border-bottom: 3px solid #667eea;
                    padding-bottom: 15px;
                }
                .header-info {
                    background: #f8f9fa;
                    padding: 15px;
                    border-radius: 10px;
                    margin: 20px 0;
                }
                .month-section {
                    margin: 30px 0;
                    page-break-inside: avoid;
                }
                .month-title {
                    background: #667eea;
                    color: white;
                    padding: 10px;
                    border-radius: 5px;
                    font-weight: bold;
                    font-size: 1.2em;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 15px 0;
                }
                th {
                    background: #495057;
                    color: white;
                    padding: 10px;
                    text-align: left;
                }
                td {
                    padding: 8px;
                    border-bottom: 1px solid #e9ecef;
                }
                .total-row {
                    background: #e7f3ff;
                    font-weight: bold;
                    font-size: 1.1em;
                }
                .summary-box {
                    background: #d4edda;
                    border: 2px solid #c3e6cb;
                    padding: 20px;
                    border-radius: 10px;
                    margin: 30px 0;
                }
                .summary-box h2 {
                    color: #155724;
                    margin-top: 0;
                }
                @media print {
                    body { padding: 20px; }
                    button { display: none; }
                }
            </style>
        </head>
        <body>
            <h1>📊 Budget & Vie - Résultats de la Simulation</h1>
            
            <div class="header-info">
                <p><strong>👤 Participant:</strong> ${gameState.email}</p>
                <p><strong>📅 Date:</strong> ${today}</p>
                <p><strong>🎯 Durée de simulation:</strong> 3 mois (Septembre - Novembre)</p>
            </div>

            <div class="summary-box">
                <h2>📈 Résumé Global</h2>
                <table>
                    <tr>
                        <td><strong>💰 Revenus totaux:</strong></td>
                        <td style="text-align: right">${totalIncome.toFixed(2)} €</td>
                    </tr>
                    <tr>
                        <td><strong>💸 Dépenses totales:</strong></td>
                        <td style="text-align: right">${totalExpenses.toFixed(2)} €</td>
                    </tr>
                    <tr>
                        <td><strong>💵 Épargne accumulée:</strong></td>
                        <td style="text-align: right; color: #28a745">${gameState.totalSavings.toFixed(2)} €</td>
                    </tr>
                    <tr>
                        <td><strong>💳 Crédits restants:</strong></td>
                        <td style="text-align: right; color: #dc3545">${gameState.totalCredit.toFixed(2)} €</td>
                    </tr>
                    <tr class="total-row">
                        <td><strong>🎯 Solde final:</strong></td>
                        <td style="text-align: right; color: ${finalBalance >= 0 ? '#28a745' : '#dc3545'}">${finalBalance.toFixed(2)} €</td>
                    </tr>
                </table>
            </div>
    `);

    // Ajouter les détails de chaque mois
    for (let i = 1; i <= 3; i++) {
        const m = gameState.months[i];
        const totalMonthExpenses = Object.values(m.expenses).reduce((s, v) => s + (v || 0), 0);
        
        printWindow.document.write(`
            <div class="month-section">
                <div class="month-title">📅 ${m.name}</div>
                
                <h3>Choix effectués:</h3>
                <ul>
                    ${m.choices.housing ? `<li>🏠 <strong>Logement:</strong> ${m.choices.housing.type}</li>` : ''}
                    ${m.choices.transport ? `<li>🚌 <strong>Transport:</strong> ${m.choices.transport.type}</li>` : ''}
                    ${m.choices.inheritance ? `<li>🏡 <strong>Héritage:</strong> ${m.choices.inheritance}</li>` : ''}
                </ul>

                <table>
                    <thead>
                        <tr>
                            <th>Poste</th>
                            <th style="text-align: right">Montant</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="background: #d4edda">
                            <td colspan="2"><strong>💰 RECETTES</strong></td>
                        </tr>
                        <tr>
                            <td>Revenu</td>
                            <td style="text-align: right">${m.income} €</td>
                        </tr>
                        ${m.creditRepayment ? `
                        <tr style="background: #f8d7da">
                            <td><strong>💳 Remboursement crédit</strong></td>
                            <td style="text-align: right; color: #dc3545">-${m.creditRepayment.toFixed(2)} €</td>
                        </tr>
                        ` : ''}
                        <tr style="background: #f8d7da">
                            <td colspan="2"><strong>💸 DÉPENSES</strong></td>
                        </tr>
                        ${m.expenses.rent ? `<tr><td>🏠 Loyer/charges</td><td style="text-align: right">${m.expenses.rent} €</td></tr>` : ''}
                        ${m.expenses.houseExpenses ? `<tr><td>🏡 Frais maison</td><td style="text-align: right">${m.expenses.houseExpenses} €</td></tr>` : ''}
                        ${m.expenses.energy ? `<tr><td>🔌 Énergie</td><td style="text-align: right">${m.expenses.energy} €</td></tr>` : ''}
                        ${m.expenses.telecom ? `<tr><td>📶 Télécom</td><td style="text-align: right">${m.expenses.telecom} €</td></tr>` : ''}
                        ${m.expenses.transport ? `<tr><td>🚌 Transport</td><td style="text-align: right">${m.expenses.transport} €</td></tr>` : ''}
                        ${m.expenses.moving ? `<tr><td>🚚 Déménagement</td><td style="text-align: right">${m.expenses.moving} €</td></tr>` : ''}
                        ${m.expenses.food ? `<tr><td>🛒 Alimentation</td><td style="text-align: right">${m.expenses.food} €</td></tr>` : ''}
                        ${m.expenses.leisure ? `<tr><td>🎟️ Loisirs</td><td style="text-align: right">${m.expenses.leisure} €</td></tr>` : ''}
                        ${m.expenses.health ? `<tr><td>🩺 Santé</td><td style="text-align: right">${m.expenses.health} €</td></tr>` : ''}
                        ${m.expenses.other ? `<tr><td>👕 Autres</td><td style="text-align: right">${m.expenses.other} €</td></tr>` : ''}
                        ${m.expenses.savings ? `<tr><td>💰 Épargne</td><td style="text-align: right">${m.expenses.savings} €</td></tr>` : ''}
                        <tr class="total-row">
                            <td><strong>💰 Solde du mois</strong></td>
                            <td style="text-align: right; color: ${m.balance >= 0 ? '#28a745' : '#dc3545'}">${m.balance.toFixed(2)} €</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `);
    }

    printWindow.document.write(`
            <div style="text-align: center; margin-top: 40px; page-break-inside: avoid">
                <p><em>Simulation générée le ${today}</em></p>
                <p><strong>Budget & Vie - Simulateur de gestion budgétaire</strong></p>
            </div>

            <div style="text-align: center; margin-top: 30px;">
                <button onclick="window.print()" style="padding: 15px 40px; font-size: 1.1em; background: #667eea; color: white; border: none; border-radius: 10px; cursor: pointer;">
                    🖨️ Imprimer
                </button>
            </div>
        </body>
        </html>
    `);
    
    printWindow.document.close();
}
