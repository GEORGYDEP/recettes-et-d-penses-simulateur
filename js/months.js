// Templates HTML pour chaque mois

function loadMonth1() {
    const month = gameState.months[1];
    const content = document.getElementById('monthContent');
    
    content.innerHTML = `
        <div class="month-intro">
            <h2>🗓️ Septembre - Premier mois</h2>
            <p>Vous êtes au chômage après vos études. Vous devez faire des choix concernant votre logement et votre mode de vie.</p>
            <div class="info-box">
                ℹ️ <strong>Montants arrondis à des valeurs pédagogiques réalistes</strong>
            </div>
        </div>

        <div class="choices-section">
            <!-- Choix du logement -->
            <div class="choice-card">
                <h3>🏠 Choix du logement</h3>
                <p>Ce choix détermine votre statut (co-habitant ou isolé) et votre allocation chômage.</p>
                <div class="choice-options">
                    <div class="choice-option" onclick="selectHousing(1, 'parents', 100, 600)">
                        <div class="title">Chez les parents</div>
                        <div class="amount">100 €</div>
                        <div class="detail">Statut: Co-habitant<br>Chômage: 600 €/mois</div>
                    </div>
                    <div class="choice-option" onclick="selectHousing(1, 'colocation', 450, 1300)">
                        <div class="title">Colocation/Kot</div>
                        <div class="amount">450 €</div>
                        <div class="detail">Charges incluses<br>Statut: Isolé<br>Chômage: 1 300 €/mois</div>
                    </div>
                    <div class="choice-option" onclick="selectHousing(1, 'appartement', 700, 1300)">
                        <div class="title">Appartement 1 chambre</div>
                        <div class="amount">700 €</div>
                        <div class="detail">650 € + 50 € charges<br>Statut: Isolé<br>Chômage: 1 300 €/mois</div>
                    </div>
                </div>
                <div id="housingInfo" class="info-box hidden" style="margin-top: 15px;"></div>
            </div>

            <div id="movingChoice" class="choice-card hidden">
                <h3>🚚 Déménagement</h3>
                <p>Vous quittez les parents, comment souhaitez-vous déménager ?</p>
                <div class="choice-options">
                    <div class="choice-option" onclick="selectMoving(100)">
                        <div class="title">Location camionnette</div>
                        <div class="amount">100 €</div>
                        <div class="detail">Faire soi-même avec famille/amis</div>
                    </div>
                    <div class="choice-option" onclick="selectMoving(450)">
                        <div class="title">Entreprise professionnelle</div>
                        <div class="amount">450 €</div>
                        <div class="detail">Service complet</div>
                    </div>
                </div>
            </div>

            <!-- Transport -->
            <div class="choice-card">
                <h3>🚌 Transport</h3>
                <div class="choice-options">
                    <div class="choice-option" onclick="selectTransport(1, 'bus', 40)">
                        <div class="title">Bus/Tram</div>
                        <div class="amount">40 €</div>
                        <div class="detail">Pour recherche d'emploi</div>
                    </div>
                    <div class="choice-option" onclick="selectTransport(1, 'voiture', 390)">
                        <div class="title">Achat voiture</div>
                        <div class="amount">390 €/mois</div>
                        <div class="detail">Emprunt: 180 €<br>Essence: 150 €<br>Assurance+taxe: 60 €</div>
                    </div>
                </div>
            </div>

            <!-- Télécom -->
            <div class="choice-card">
                <h3>📶 Télécom/Internet</h3>
                <div class="choice-options">
                    <div class="choice-option" onclick="selectTelecom(1, 30)">
                        <div class="title">Forfait standard</div>
                        <div class="amount">30 €</div>
                    </div>
                    <div class="choice-option" onclick="selectTelecom(1, 50)">
                        <div class="title">Forfait premium</div>
                        <div class="amount">50 €</div>
                    </div>
                </div>
            </div>

            <!-- Alimentation -->
            <div class="choice-card">
                <h3>🛒 Alimentation</h3>
                <div class="choice-options">
                    <div class="choice-option" onclick="selectFood(1, 200)">
                        <div class="title">Budget serré</div>
                        <div class="amount">200 €</div>
                        <div class="detail">50 €/semaine</div>
                    </div>
                    <div class="choice-option" onclick="selectFood(1, 400)">
                        <div class="title">Budget équilibré</div>
                        <div class="amount">400 €</div>
                        <div class="detail">100 €/semaine</div>
                    </div>
                    <div class="choice-option" onclick="selectFood(1, 600)">
                        <div class="title">Budget confortable</div>
                        <div class="amount">600 €</div>
                        <div class="detail">150 €/semaine</div>
                    </div>
                </div>
            </div>

            <!-- Loisirs -->
            <div class="choice-card">
                <h3>🎟️ Loisirs/Extras</h3>
                <div class="choice-options">
                    <div class="choice-option" onclick="selectLeisure(1, 100)">
                        <div class="title">Minimal</div>
                        <div class="amount">100 €</div>
                    </div>
                    <div class="choice-option" onclick="selectLeisure(1, 150)">
                        <div class="title">Modéré</div>
                        <div class="amount">150 €</div>
                    </div>
                    <div class="choice-option" onclick="selectLeisure(1, 450)">
                        <div class="title">Portant</div>
                        <div class="amount">450 €</div>
                    </div>
                </div>
            </div>

            <!-- Santé -->
            <div class="choice-card">
                <h3>🩺 Santé/Imprévus</h3>
                <div class="choice-options">
                    <div class="choice-option" onclick="selectHealth(1, 50)">
                        <div class="title">Minimal</div>
                        <div class="amount">50 €</div>
                    </div>
                    <div class="choice-option" onclick="selectHealth(1, 100)">
                        <div class="title">Prudent</div>
                        <div class="amount">100 €</div>
                    </div>
                    <div class="choice-option" onclick="selectHealth(1, 300)">
                        <div class="title">Complet</div>
                        <div class="amount">300 €</div>
                    </div>
                </div>
            </div>

            <!-- Autres dépenses -->
            <div class="choice-card">
                <h3>👕 Autres (habillement, entretien, mobilier)</h3>
                <div class="choice-options">
                    <div class="choice-option" onclick="selectOther(1, 50)">
                        <div class="title">Minimal</div>
                        <div class="amount">50 €</div>
                    </div>
                    <div class="choice-option" onclick="selectOther(1, 150)">
                        <div class="title">Modéré</div>
                        <div class="amount">150 €</div>
                    </div>
                    <div class="choice-option" onclick="selectOther(1, 450)">
                        <div class="title">Important</div>
                        <div class="amount">450 €</div>
                    </div>
                </div>
                <div id="furnitureWarning" class="warning-box hidden">
                    ⚠️ Si vous choisissez l'appartement, 450 € de mobilier sont obligatoires !
                </div>
            </div>

            <!-- Épargne -->
            <div class="choice-card">
                <h3>💰 Épargne</h3>
                <div class="choice-options">
                    <div class="choice-option" onclick="selectSavings(1, 50)">
                        <div class="title">Minimal</div>
                        <div class="amount">50 €</div>
                    </div>
                    <div class="choice-option" onclick="selectSavings(1, 100)">
                        <div class="title">Modéré</div>
                        <div class="amount">100 €</div>
                    </div>
                    <div class="choice-option" onclick="selectSavings(1, 150)">
                        <div class="title">Portant</div>
                        <div class="amount">150 €</div>
                    </div>
                </div>
            </div>
        </div>

        <div id="budgetTableSection" class="hidden">
            <div class="budget-table">
                <div class="table-header">📊 Tableau Budget - Septembre</div>
                
                <div class="table-row header-row">
                    <div class="table-cell">Date</div>
                    <div class="table-cell">Poste</div>
                    <div class="table-cell right">Montant</div>
                </div>

                <div class="table-row" style="background: #d4edda;">
                    <div class="table-cell">01/09</div>
                    <div class="table-cell"><strong>💰 RECETTES</strong></div>
                    <div class="table-cell right" id="totalIncome1">0 €</div>
                </div>

                <div class="table-row">
                    <div class="table-cell"></div>
                    <div class="table-cell">Allocation chômage</div>
                    <div class="table-cell right" id="unemployment1">0 €</div>
                </div>

                <div class="table-row" style="background: #f8d7da;">
                    <div class="table-cell"></div>
                    <div class="table-cell"><strong>💸 DÉPENSES FIXES</strong></div>
                    <div class="table-cell right"></div>
                </div>

                <div class="table-row">
                    <div class="table-cell">01/09</div>
                    <div class="table-cell">🏠 Loyer/charges <span class="badge fixed">Fixe</span></div>
                    <div class="table-cell right" id="rent1">0 €</div>
                </div>

                <div class="table-row">
                    <div class="table-cell">05/09</div>
                    <div class="table-cell">🔌 Énergie <span class="badge fixed">Fixe</span></div>
                    <div class="table-cell right" id="energy1">0 €</div>
                </div>

                <div class="table-row">
                    <div class="table-cell">10/09</div>
                    <div class="table-cell">📶 Télécom/Internet <span class="badge fixed">Fixe</span></div>
                    <div class="table-cell right" id="telecom1">0 €</div>
                </div>

                <div class="table-row">
                    <div class="table-cell">15/09</div>
                    <div class="table-cell">🚌 Transport <span class="badge fixed">Fixe</span></div>
                    <div class="table-cell right" id="transport1">0 €</div>
                </div>

                <div class="table-row" id="movingRow1" style="display: none;">
                    <div class="table-cell">03/09</div>
                    <div class="table-cell">🚚 Déménagement <span class="badge fixed">Fixe</span></div>
                    <div class="table-cell right" id="moving1">0 €</div>
                </div>

                <div class="table-row" style="background: #fff3cd;">
                    <div class="table-cell"></div>
                    <div class="table-cell"><strong>💸 DÉPENSES VARIABLES</strong></div>
                    <div class="table-cell right"></div>
                </div>

                <div class="table-row">
                    <div class="table-cell">Mensuel</div>
                    <div class="table-cell">🛒 Alimentation <span class="badge variable">Variable</span></div>
                    <div class="table-cell right" id="food1">0 €</div>
                </div>

                <div class="table-row">
                    <div class="table-cell">Mensuel</div>
                    <div class="table-cell">🎟️ Loisirs/extras <span class="badge variable">Variable</span></div>
                    <div class="table-cell right" id="leisure1">0 €</div>
                </div>

                <div class="table-row">
                    <div class="table-cell">Mensuel</div>
                    <div class="table-cell">🩺 Santé/imprévus <span class="badge variable">Variable</span></div>
                    <div class="table-cell right" id="health1">0 €</div>
                </div>

                <div class="table-row">
                    <div class="table-cell">Mensuel</div>
                    <div class="table-cell">👕 Autres <span class="badge variable">Variable</span></div>
                    <div class="table-cell right" id="other1">0 €</div>
                </div>

                <div class="table-row">
                    <div class="table-cell">Mensuel</div>
                    <div class="table-cell">💰 Épargne <span class="badge variable">Variable</span></div>
                    <div class="table-cell right" id="savings1">0 €</div>
                </div>

                <div class="table-row total-row">
                    <div class="table-cell"></div>
                    <div class="table-cell">💰 SOLDE (Recettes - Dépenses)</div>
                    <div class="table-cell right" id="balance1">0 €</div>
                </div>
            </div>

            <div id="balanceStatus1" style="text-align: center; margin-top: 20px;"></div>

            <div class="action-buttons">
                <button class="btn btn-primary" onclick="finishMonth(1)">Terminer le mois</button>
            </div>
        </div>
    `;
}

function loadMonth2() {
    const month = gameState.months[2];
    const content = document.getElementById('monthContent');
    
    // Déduire le crédit du mois précédent des recettes si nécessaire
    let creditRepayment = 0;
    
    if (gameState.totalCredit > 0) {
        creditRepayment = gameState.totalCredit;
        gameState.totalCredit = 0;
    }

    content.innerHTML = `
        <div class="month-intro">
            <h2>🗓️ Octobre - Deuxième mois</h2>
            <p><strong>🎉 Bonne nouvelle !</strong> Vous avez trouvé un emploi à Charleroi avec un salaire net de 1 600 €/mois.</p>
            ${creditRepayment > 0 ? `
                <div class="warning-box">
                    ⚠️ Vous devez rembourser votre crédit de septembre: <strong>${creditRepayment.toFixed(2)} €</strong>
                </div>
            ` : ''}
            <div class="info-box">
                ℹ️ L'option "chez les parents" n'est plus disponible.
            </div>
        </div>

        <div class="choices-section">
            <!-- Choix du logement -->
            <div class="choice-card">
                <h3>🏠 Choix du logement</h3>
                <div class="choice-options">
                    <div class="choice-option" onclick="selectHousing(2, 'colocation', 450, 1600)">
                        <div class="title">Colocation/Kot</div>
                        <div class="amount">450 €</div>
                        <div class="detail">Charges incluses</div>
                    </div>
                    <div class="choice-option" onclick="selectHousing(2, 'appartement', 700, 1600)">
                        <div class="title">Appartement 1 chambre</div>
                        <div class="amount">700 €</div>
                        <div class="detail">650 € + 50 € charges</div>
                    </div>
                </div>
            </div>

            <!-- Transport à Charleroi -->
            <div class="choice-card">
                <h3>🚆 Transport vers Charleroi</h3>
                <p>⚠️ Choix structurant qui impacte votre qualité de vie et vos dépenses</p>
                <div class="choice-options">
                    <div class="choice-option" onclick="selectTransport(2, 'train', 150)">
                        <div class="title">Train</div>
                        <div class="amount">150 €/mois</div>
                        <div class="detail">Trajets longs, fatigue accrue<br>Frais santé: 150-300 €</div>
                    </div>
                    <div class="choice-option" onclick="selectTransport(2, 'voiture', 390)">
                        <div class="title">Voiture (achat)</div>
                        <div class="amount">390 €/mois</div>
                        <div class="detail">Emprunt: 180 €<br>Essence: 150 €<br>Assurance+taxe: 60 €</div>
                    </div>
                </div>
            </div>

            <!-- Télécom -->
            <div class="choice-card">
                <h3>📶 Télécom/Internet</h3>
                <div class="choice-options">
                    <div class="choice-option" onclick="selectTelecom(2, 30)">
                        <div class="title">Forfait standard</div>
                        <div class="amount">30 €</div>
                    </div>
                    <div class="choice-option" onclick="selectTelecom(2, 50)">
                        <div class="title">Forfait premium</div>
                        <div class="amount">50 €</div>
                    </div>
                </div>
            </div>

            <!-- Alimentation -->
            <div class="choice-card">
                <h3>🛒 Alimentation</h3>
                <div class="choice-options">
                    <div class="choice-option" onclick="selectFood(2, 400)">
                        <div class="title">Budget équilibré</div>
                        <div class="amount">400 €</div>
                        <div class="detail">100 €/semaine</div>
                    </div>
                    <div class="choice-option" onclick="selectFood(2, 600)">
                        <div class="title">Budget confortable</div>
                        <div class="amount">600 €</div>
                        <div class="detail">150 €/semaine</div>
                    </div>
                </div>
            </div>

            <!-- Loisirs -->
            <div class="choice-card">
                <h3>🎟️ Loisirs/Extras</h3>
                <div class="choice-options">
                    <div class="choice-option" onclick="selectLeisure(2, 150)">
                        <div class="title">Modéré</div>
                        <div class="amount">150 €</div>
                    </div>
                    <div class="choice-option" onclick="selectLeisure(2, 350)">
                        <div class="title">Élevé</div>
                        <div class="amount">350 €</div>
                    </div>
                </div>
            </div>

            <!-- Santé -->
            <div class="choice-card">
                <h3>🩺 Santé/Imprévus</h3>
                <p id="healthInfo2">Les frais dépendent de votre choix de transport</p>
                <div class="choice-options" id="healthOptions2"></div>
            </div>

            <!-- Autres -->
            <div class="choice-card">
                <h3>👕 Autres (habillement, entretien)</h3>
                <div class="choice-options">
                    <div class="choice-option" onclick="selectOther(2, 150)">
                        <div class="title">Minimal</div>
                        <div class="amount">150 €</div>
                    </div>
                    <div class="choice-option" onclick="selectOther(2, 250)">
                        <div class="title">Modéré</div>
                        <div class="amount">250 €</div>
                    </div>
                </div>
            </div>

            <!-- Épargne -->
            <div class="choice-card">
                <h3>💰 Épargne</h3>
                <div class="choice-options">
                    <div class="choice-option" onclick="selectSavings(2, 150)">
                        <div class="title">Minimal</div>
                        <div class="amount">150 €</div>
                    </div>
                    <div class="choice-option" onclick="selectSavings(2, 250)">
                        <div class="title">Modéré</div>
                        <div class="amount">250 €</div>
                    </div>
                </div>
            </div>
        </div>

        <div id="budgetTableSection" class="hidden">
            <div class="budget-table">
                <div class="table-header">📊 Tableau Budget - Octobre</div>
                
                <div class="table-row header-row">
                    <div class="table-cell">Date</div>
                    <div class="table-cell">Poste</div>
                    <div class="table-cell right">Montant</div>
                </div>

                <div class="table-row" style="background: #d4edda;">
                    <div class="table-cell">01/10</div>
                    <div class="table-cell"><strong>💰 RECETTES</strong></div>
                    <div class="table-cell right" id="totalIncome2">1600 €</div>
                </div>

                <div class="table-row">
                    <div class="table-cell"></div>
                    <div class="table-cell">Salaire net</div>
                    <div class="table-cell right" id="salary2">1600 €</div>
                </div>

                ${creditRepayment > 0 ? `
                <div class="table-row" style="background: #f8d7da;">
                    <div class="table-cell">05/10</div>
                    <div class="table-cell"><strong>💳 Remboursement crédit septembre</strong></div>
                    <div class="table-cell right" style="color: #dc3545;">-${creditRepayment.toFixed(2)} €</div>
                </div>
                ` : ''}

                <div class="table-row" style="background: #f8d7da;">
                    <div class="table-cell"></div>
                    <div class="table-cell"><strong>💸 DÉPENSES FIXES</strong></div>
                    <div class="table-cell right"></div>
                </div>

                <div class="table-row">
                    <div class="table-cell">01/10</div>
                    <div class="table-cell">🏠 Loyer/charges <span class="badge fixed">Fixe</span></div>
                    <div class="table-cell right" id="rent2">0 €</div>
                </div>

                <div class="table-row">
                    <div class="table-cell">05/10</div>
                    <div class="table-cell">🔌 Énergie <span class="badge fixed">Fixe</span></div>
                    <div class="table-cell right" id="energy2">0 €</div>
                </div>

                <div class="table-row">
                    <div class="table-cell">10/10</div>
                    <div class="table-cell">📶 Télécom/Internet <span class="badge fixed">Fixe</span></div>
                    <div class="table-cell right" id="telecom2">0 €</div>
                </div>

                <div class="table-row">
                    <div class="table-cell">15/10</div>
                    <div class="table-cell">🚆 Transport <span class="badge fixed">Fixe</span></div>
                    <div class="table-cell right" id="transport2">0 €</div>
                </div>

                <div class="table-row" style="background: #fff3cd;">
                    <div class="table-cell"></div>
                    <div class="table-cell"><strong>💸 DÉPENSES VARIABLES</strong></div>
                    <div class="table-cell right"></div>
                </div>

                <div class="table-row">
                    <div class="table-cell">Mensuel</div>
                    <div class="table-cell">🛒 Alimentation <span class="badge variable">Variable</span></div>
                    <div class="table-cell right" id="food2">0 €</div>
                </div>

                <div class="table-row">
                    <div class="table-cell">Mensuel</div>
                    <div class="table-cell">🎟️ Loisirs/extras <span class="badge variable">Variable</span></div>
                    <div class="table-cell right" id="leisure2">0 €</div>
                </div>

                <div class="table-row">
                    <div class="table-cell">Mensuel</div>
                    <div class="table-cell">🩺 Santé/imprévus <span class="badge variable">Variable</span></div>
                    <div class="table-cell right" id="health2">0 €</div>
                </div>

                <div class="table-row">
                    <div class="table-cell">Mensuel</div>
                    <div class="table-cell">👕 Autres <span class="badge variable">Variable</span></div>
                    <div class="table-cell right" id="other2">0 €</div>
                </div>

                <div class="table-row">
                    <div class="table-cell">Mensuel</div>
                    <div class="table-cell">💰 Épargne <span class="badge variable">Variable</span></div>
                    <div class="table-cell right" id="savings2">0 €</div>
                </div>

                <div class="table-row total-row">
                    <div class="table-cell"></div>
                    <div class="table-cell">💰 SOLDE (Recettes - Dépenses${creditRepayment > 0 ? ' - Crédit' : ''})</div>
                    <div class="table-cell right" id="balance2">0 €</div>
                </div>
            </div>

            <div id="balanceStatus2" style="text-align: center; margin-top: 20px;"></div>

            <div class="action-buttons">
                <button class="btn btn-primary" onclick="finishMonth(2)">Terminer le mois</button>
            </div>
        </div>
    `;

    // Stocker le remboursement crédit
    if (creditRepayment > 0) {
        gameState.months[2].creditRepayment = creditRepayment;
    }
}

function loadMonth3() {
    const month = gameState.months[3];
    const content = document.getElementById('monthContent');
    
    let creditRepayment = 0;
    if (gameState.totalCredit > 0) {
        creditRepayment = gameState.totalCredit;
        gameState.totalCredit = 0;
    }

    content.innerHTML = `
        <div class="month-intro">
            <h2>🗓️ Novembre - Troisième mois</h2>
            <p><strong>🎉 Excellente nouvelle !</strong> Vous héritez d'une maison à Bruxelles et votre salaire net augmente à 1 800 €/mois.</p>
            ${creditRepayment > 0 ? `
                <div class="warning-box">
                    ⚠️ Vous devez rembourser votre crédit d'octobre: <strong>${creditRepayment.toFixed(2)} €</strong>
                </div>
            ` : ''}
        </div>

        <div class="choices-section">
            <!-- Choix héritage -->
            <div class="choice-card">
                <h3>🏡 Que faire de la maison héritée ?</h3>
                <div class="choice-options">
                    <div class="choice-option" onclick="selectInheritance('habiter')">
                        <div class="title">Habiter la maison héritée</div>
                        <div class="amount">300 €/mois</div>
                        <div class="detail">Plus de loyer !<br>Assurance habitation: 100 €<br>Précompte immobilier: 50 €<br>Entretien du logement: 150 €<br>Chauffage / énergie: 180 €</div>
                    </div>
                    <div class="choice-option" onclick="selectInheritance('louer')">
                        <div class="title">La louer</div>
                        <div class="amount">+800 €/mois</div>
                        <div class="detail">Revenu locatif<br>Garder votre logement actuel</div>
                    </div>
                </div>
            </div>

            <div id="housingChoice3" class="choice-card">
                <h3>🏠 Votre logement</h3>
                <div class="choice-options">
                    <div class="choice-option" onclick="selectHousing(3, 'colocation', 450, 1800)">
                        <div class="title">Colocation/Kot</div>
                        <div class="amount">450 €</div>
                    </div>
                    <div class="choice-option" onclick="selectHousing(3, 'appartement', 700, 1800)">
                        <div class="title">Appartement 1 chambre</div>
                        <div class="amount">700 €</div>
                    </div>
                </div>
            </div>

            <!-- Transport -->
            <div class="choice-card">
                <h3>🚆 Transport</h3>
                <div class="choice-options">
                    <div class="choice-option" onclick="selectTransport(3, 'train', 150)">
                        <div class="title">Train</div>
                        <div class="amount">150 €/mois</div>
                    </div>
                    <div class="choice-option" onclick="selectTransport(3, 'voiture', 390)">
                        <div class="title">Voiture</div>
                        <div class="amount">390 €/mois</div>
                    </div>
                </div>
            </div>

            <!-- Télécom -->
            <div class="choice-card">
                <h3>📶 Télécom/Internet</h3>
                <div class="choice-options">
                    <div class="choice-option" onclick="selectTelecom(3, 30)">
                        <div class="title">Standard</div>
                        <div class="amount">30 €</div>
                    </div>
                    <div class="choice-option" onclick="selectTelecom(3, 50)">
                        <div class="title">Premium</div>
                        <div class="amount">50 €</div>
                    </div>
                </div>
            </div>

            <!-- Alimentation -->
            <div class="choice-card">
                <h3>🛒 Alimentation</h3>
                <div class="choice-options">
                    <div class="choice-option" onclick="selectFood(3, 400)">
                        <div class="title">Équilibré</div>
                        <div class="amount">400 €</div>
                    </div>
                    <div class="choice-option" onclick="selectFood(3, 600)">
                        <div class="title">Confortable</div>
                        <div class="amount">600 €</div>
                    </div>
                </div>
            </div>

            <!-- Loisirs -->
            <div class="choice-card">
                <h3>🎟️ Loisirs</h3>
                <div class="choice-options">
                    <div class="choice-option" onclick="selectLeisure(3, 150)">
                        <div class="title">Modéré</div>
                        <div class="amount">150 €</div>
                    </div>
                    <div class="choice-option" onclick="selectLeisure(3, 350)">
                        <div class="title">Élevé</div>
                        <div class="amount">350 €</div>
                    </div>
                </div>
            </div>

            <!-- Santé -->
            <div class="choice-card">
                <h3>🩺 Santé</h3>
                <div class="choice-options">
                    <div class="choice-option" onclick="selectHealth(3, 100)">
                        <div class="title">Minimal</div>
                        <div class="amount">100 €</div>
                    </div>
                    <div class="choice-option" onclick="selectHealth(3, 300)">
                        <div class="title">Complet</div>
                        <div class="amount">300 €</div>
                    </div>
                </div>
            </div>

            <!-- Autres -->
            <div class="choice-card">
                <h3>👕 Habillement et entretien</h3>
                <div class="choice-options">
                    <div class="choice-option" onclick="selectOther(3, 150)">
                        <div class="title">Aucun</div>
                        <div class="amount">150 €</div>
                    </div>
                    <div class="choice-option" onclick="selectOther(3, 250)">
                        <div class="title">Modéré</div>
                        <div class="amount">250 €</div>
                    </div>
                </div>
            </div>

            <!-- Épargne -->
            <div class="choice-card">
                <h3>💰 Épargne</h3>
                <div class="choice-options">
                    <div class="choice-option" onclick="selectSavings(3, 150)">
                        <div class="title">Minimal</div>
                        <div class="amount">150 €</div>
                    </div>
                    <div class="choice-option" onclick="selectSavings(3, 250)">
                        <div class="title">Modéré</div>
                        <div class="amount">250 €</div>
                    </div>
                </div>
            </div>
        </div>

        <div id="budgetTableSection" class="hidden">
            <div class="budget-table">
                <div class="table-header">📊 Tableau Budget - Novembre</div>
                
                <div class="table-row header-row">
                    <div class="table-cell">Date</div>
                    <div class="table-cell">Poste</div>
                    <div class="table-cell right">Montant</div>
                </div>

                <div class="table-row" style="background: #d4edda;">
                    <div class="table-cell">01/11</div>
                    <div class="table-cell"><strong>💰 RECETTES</strong></div>
                    <div class="table-cell right" id="totalIncome3">1800 €</div>
                </div>

                <div class="table-row">
                    <div class="table-cell"></div>
                    <div class="table-cell">Salaire net</div>
                    <div class="table-cell right">1800 €</div>
                </div>

                <div class="table-row" id="rentalIncomeRow3" style="display: none; background: #d4edda;">
                    <div class="table-cell">01/11</div>
                    <div class="table-cell">🏡 Revenu locatif maison</div>
                    <div class="table-cell right" id="rentalIncome3">0 €</div>
                </div>

                ${creditRepayment > 0 ? `
                <div class="table-row" style="background: #f8d7da;">
                    <div class="table-cell">05/11</div>
                    <div class="table-cell"><strong>💳 Remboursement crédit octobre</strong></div>
                    <div class="table-cell right" style="color: #dc3545;">-${creditRepayment.toFixed(2)} €</div>
                </div>
                ` : ''}

                <div class="table-row" style="background: #f8d7da;">
                    <div class="table-cell"></div>
                    <div class="table-cell"><strong>💸 DÉPENSES FIXES</strong></div>
                    <div class="table-cell right"></div>
                </div>

                <div class="table-row" id="rentRow3">
                    <div class="table-cell">01/11</div>
                    <div class="table-cell">🏠 Loyer/charges <span class="badge fixed">Fixe</span></div>
                    <div class="table-cell right" id="rent3">0 €</div>
                </div>

                <div class="table-row" id="houseRow3" style="display: none;">
                    <div class="table-cell">01/11</div>
                    <div class="table-cell">🏠 Habiter la maison héritée <span class="badge fixed">Fixe</span></div>
                    <div class="table-cell right" id="house3">0 €</div>
                </div>

                <div class="table-row" id="insuranceRow3" style="display: none;">
                    <div class="table-cell">05/11</div>
                    <div class="table-cell">🏡 Assurance habitation <span class="badge fixed">Fixe</span></div>
                    <div class="table-cell right" id="insurance3">0 €</div>
                </div>

                <div class="table-row" id="propertyTaxRow3" style="display: none;">
                    <div class="table-cell">10/11</div>
                    <div class="table-cell">🏛️ Précompte immobilier <span class="badge fixed">Fixe</span></div>
                    <div class="table-cell right" id="propertyTax3">0 €</div>
                </div>

                <div class="table-row" id="maintenanceRow3" style="display: none;">
                    <div class="table-cell">Mensuel</div>
                    <div class="table-cell">🔧 Entretien du logement <span class="badge fixed">Fixe</span></div>
                    <div class="table-cell right" id="maintenance3">0 €</div>
                </div>

                <div class="table-row" id="heatingRow3" style="display: none;">
                    <div class="table-cell">Mensuel</div>
                    <div class="table-cell">🔥 Chauffage / énergie <span class="badge fixed">Fixe</span></div>
                    <div class="table-cell right" id="heating3">0 €</div>
                </div>

                <div class="table-row" id="energyRow3">
                    <div class="table-cell">05/11</div>
                    <div class="table-cell">🔌 Énergie <span class="badge fixed">Fixe</span></div>
                    <div class="table-cell right" id="energy3">0 €</div>
                </div>

                <div class="table-row">
                    <div class="table-cell">10/11</div>
                    <div class="table-cell">📶 Télécom <span class="badge fixed">Fixe</span></div>
                    <div class="table-cell right" id="telecom3">0 €</div>
                </div>

                <div class="table-row">
                    <div class="table-cell">15/11</div>
                    <div class="table-cell">🚆 Transport <span class="badge fixed">Fixe</span></div>
                    <div class="table-cell right" id="transport3">0 €</div>
                </div>

                <div class="table-row" style="background: #fff3cd;">
                    <div class="table-cell"></div>
                    <div class="table-cell"><strong>💸 DÉPENSES VARIABLES</strong></div>
                    <div class="table-cell right"></div>
                </div>

                <div class="table-row">
                    <div class="table-cell">Mensuel</div>
                    <div class="table-cell">🛒 Alimentation <span class="badge variable">Variable</span></div>
                    <div class="table-cell right" id="food3">0 €</div>
                </div>

                <div class="table-row">
                    <div class="table-cell">Mensuel</div>
                    <div class="table-cell">🎟️ Loisirs <span class="badge variable">Variable</span></div>
                    <div class="table-cell right" id="leisure3">0 €</div>
                </div>

                <div class="table-row">
                    <div class="table-cell">Mensuel</div>
                    <div class="table-cell">🩺 Santé <span class="badge variable">Variable</span></div>
                    <div class="table-cell right" id="health3">0 €</div>
                </div>

                <div class="table-row">
                    <div class="table-cell">Mensuel</div>
                    <div class="table-cell">👕 Autres <span class="badge variable">Variable</span></div>
                    <div class="table-cell right" id="other3">0 €</div>
                </div>

                <div class="table-row">
                    <div class="table-cell">Mensuel</div>
                    <div class="table-cell">💰 Épargne <span class="badge variable">Variable</span></div>
                    <div class="table-cell right" id="savings3">0 €</div>
                </div>

                <div class="table-row total-row">
                    <div class="table-cell"></div>
                    <div class="table-cell">💰 SOLDE</div>
                    <div class="table-cell right" id="balance3">0 €</div>
                </div>
            </div>

            <div id="balanceStatus3" style="text-align: center; margin-top: 20px;"></div>

            <div class="action-buttons">
                <button class="btn btn-primary" onclick="finishMonth(3)">Terminer le jeu</button>
            </div>
        </div>
    `;

    if (creditRepayment > 0) {
        gameState.months[3].creditRepayment = creditRepayment;
    }
}
