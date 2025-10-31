function selectHousing(month, type, rent, income) {
    // Désélectionner toutes les options de logement
    const housingCard = event.target.closest('.choice-card');
    housingCard.querySelectorAll('.choice-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    event.target.closest('.choice-option').classList.add('selected');

    gameState.months[month].choices.housing = { type, rent, income };
    gameState.months[month].income = income;

    // Calculer l'énergie
    let energy = 0;
    if (type === 'parents') {
        energy = 20;
    }
    
    gameState.months[month].expenses.rent = rent;
    gameState.months[month].expenses.energy = energy;

    // Afficher info logement pour le mois 1
    if (month === 1) {
        const infoBox = document.getElementById('housingInfo');
        if (infoBox) {
            infoBox.classList.remove('hidden');
            
            if (type === 'parents') {
                infoBox.innerHTML = `✅ Vous vivez chez vos parents (co-habitant). Allocation: ${income} €/mois`;
                const movingChoice = document.getElementById('movingChoice');
                if (movingChoice) movingChoice.classList.add('hidden');
            } else {
                infoBox.innerHTML = `✅ Vous êtes isolé. Allocation: ${income} €/mois`;
                const movingChoice = document.getElementById('movingChoice');
                if (movingChoice) movingChoice.classList.remove('hidden');
                
                if (type === 'appartement') {
                    const furnitureWarning = document.getElementById('furnitureWarning');
                    if (furnitureWarning) furnitureWarning.classList.remove('hidden');
                }
            }
        }
    }

    updateBudgetTable(month);
    
    if (month === 1) {
        checkAllChoicesMade(month);
    } else if (month === 2) {
        checkAllChoicesMade2();
    } else if (month === 3) {
        checkAllChoicesMade3();
    }
}

function selectMoving(cost) {
    const movingCard = event.target.closest('.choice-card');
    movingCard.querySelectorAll('.choice-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    event.target.closest('.choice-option').classList.add('selected');

    const month = gameState.currentMonth;
    gameState.months[month].expenses.moving = cost;
    updateBudgetTable(month);
    checkAllChoicesMade(month);
}

function selectTransport(month, type, cost) {
    const transportCard = event.target.closest('.choice-card');
    transportCard.querySelectorAll('.choice-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    event.target.closest('.choice-option').classList.add('selected');

    gameState.months[month].choices.transport = { type, cost };
    gameState.months[month].expenses.transport = cost;
    
    // Pour le mois 2, mettre à jour les options de santé
    if (month === 2) {
        const healthOptions = document.getElementById('healthOptions2');
        if (healthOptions) {
            if (type === 'train') {
                healthOptions.innerHTML = `
                    <div class="choice-option" onclick="selectHealth(2, 150)">
                        <div class="title">Minimal</div>
                        <div class="amount">150 €</div>
                    </div>
                    <div class="choice-option" onclick="selectHealth(2, 300)">
                        <div class="title">Complet</div>
                        <div class="amount">300 €</div>
                    </div>
                `;
            } else {
                healthOptions.innerHTML = `
                    <div class="choice-option" onclick="selectHealth(2, 150)">
                        <div class="title">Standard</div>
                        <div class="amount">150 €</div>
                    </div>
                `;
            }
        }
    }
    
    updateBudgetTable(month);
    
    if (month === 1) {
        checkAllChoicesMade(month);
    } else if (month === 2) {
        checkAllChoicesMade2();
    } else if (month === 3) {
        checkAllChoicesMade3();
    }
}

function selectTelecom(month, cost) {
    const telecomCard = event.target.closest('.choice-card');
    telecomCard.querySelectorAll('.choice-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    event.target.closest('.choice-option').classList.add('selected');

    gameState.months[month].expenses.telecom = cost;
    updateBudgetTable(month);
    
    if (month === 1) {
        checkAllChoicesMade(month);
    } else if (month === 2) {
        checkAllChoicesMade2();
    } else if (month === 3) {
        checkAllChoicesMade3();
    }
}

function selectFood(month, cost) {
    const foodCard = event.target.closest('.choice-card');
    foodCard.querySelectorAll('.choice-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    event.target.closest('.choice-option').classList.add('selected');

    gameState.months[month].expenses.food = cost;
    updateBudgetTable(month);
    
    if (month === 1) {
        checkAllChoicesMade(month);
    } else if (month === 2) {
        checkAllChoicesMade2();
    } else if (month === 3) {
        checkAllChoicesMade3();
    }
}

function selectLeisure(month, cost) {
    const leisureCard = event.target.closest('.choice-card');
    leisureCard.querySelectorAll('.choice-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    event.target.closest('.choice-option').classList.add('selected');

    gameState.months[month].expenses.leisure = cost;
    updateBudgetTable(month);
    
    if (month === 1) {
        checkAllChoicesMade(month);
    } else if (month === 2) {
        checkAllChoicesMade2();
    } else if (month === 3) {
        checkAllChoicesMade3();
    }
}

function selectHealth(month, cost) {
    const healthCard = event.target.closest('.choice-card');
    healthCard.querySelectorAll('.choice-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    event.target.closest('.choice-option').classList.add('selected');

    gameState.months[month].expenses.health = cost;
    updateBudgetTable(month);
    
    if (month === 1) {
        checkAllChoicesMade(month);
    } else if (month === 2) {
        checkAllChoicesMade2();
    } else if (month === 3) {
        checkAllChoicesMade3();
    }
}

function selectOther(month, cost) {
    const otherCard = event.target.closest('.choice-card');
    otherCard.querySelectorAll('.choice-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    event.target.closest('.choice-option').classList.add('selected');

    // Vérifier si appartement et mobilier obligatoire (mois 1)
    if (month === 1 && gameState.months[month].choices.housing?.type === 'appartement') {
        if (cost < 450) {
            alert('⚠️ Attention ! Avec un appartement, vous devez prévoir au minimum 450 € pour le mobilier et l\'assurance incendie.');
            return;
        }
    }

    gameState.months[month].expenses.other = cost;
    updateBudgetTable(month);

    if (month === 1) {
        checkAllChoicesMade(month);
    } else if (month === 2) {
        checkAllChoicesMade2();
    } else if (month === 3) {
        checkAllChoicesMade3();
    }
}

function selectSavings(month, cost) {
    const savingsCard = event.target.closest('.choice-card');
    savingsCard.querySelectorAll('.choice-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    event.target.closest('.choice-option').classList.add('selected');

    gameState.months[month].expenses.savings = cost;
    updateBudgetTable(month);

    if (month === 1) {
        checkAllChoicesMade(month);
    } else if (month === 2) {
        checkAllChoicesMade2();
    } else if (month === 3) {
        checkAllChoicesMade3();
    }
}

function selectInheritance(choice) {
    const inheritanceCard = event.target.closest('.choice-card');
    inheritanceCard.querySelectorAll('.choice-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    event.target.closest('.choice-option').classList.add('selected');

    const month = 3;
    gameState.months[month].choices.inheritance = choice;

    if (choice === 'habiter') {
        // Plus de loyer, mais frais de maison détaillés
        gameState.months[month].income = 1800; // Salaire seulement
        gameState.months[month].expenses.rent = 0;
        gameState.months[month].expenses.house = 300; // Habiter la maison héritée
        gameState.months[month].expenses.insurance = 100; // Assurance habitation
        gameState.months[month].expenses.propertyTax = 50; // Précompte immobilier
        gameState.months[month].expenses.maintenance = 150; // Entretien du logement
        gameState.months[month].expenses.heating = 180; // Chauffage / énergie
        gameState.months[month].expenses.energy = 0; // Pas d'énergie séparée

        const housingChoice = document.getElementById('housingChoice3');
        const rentRow = document.getElementById('rentRow3');
        const houseRow = document.getElementById('houseRow3');
        const insuranceRow = document.getElementById('insuranceRow3');
        const propertyTaxRow = document.getElementById('propertyTaxRow3');
        const maintenanceRow = document.getElementById('maintenanceRow3');
        const heatingRow = document.getElementById('heatingRow3');
        const energyRow = document.getElementById('energyRow3');
        const rentalIncomeRow = document.getElementById('rentalIncomeRow3');
        const totalIncome = document.getElementById('totalIncome3');

        if (housingChoice) housingChoice.style.display = 'none';
        if (rentRow) rentRow.style.display = 'none';
        if (houseRow) houseRow.style.display = '';
        if (insuranceRow) insuranceRow.style.display = '';
        if (propertyTaxRow) propertyTaxRow.style.display = '';
        if (maintenanceRow) maintenanceRow.style.display = '';
        if (heatingRow) heatingRow.style.display = '';
        if (energyRow) energyRow.style.display = 'none';
        if (rentalIncomeRow) rentalIncomeRow.style.display = 'none';
        if (totalIncome) totalIncome.textContent = '1800 €';
    } else {
        // Revenu locatif
        gameState.months[month].income = 1800 + 800; // Salaire + revenu locatif
        gameState.months[month].expenses.house = 0;
        gameState.months[month].expenses.insurance = 0;
        gameState.months[month].expenses.propertyTax = 0;
        gameState.months[month].expenses.maintenance = 0;
        gameState.months[month].expenses.heating = 0;

        const rentalIncomeRow = document.getElementById('rentalIncomeRow3');
        const rentalIncome = document.getElementById('rentalIncome3');
        const totalIncome = document.getElementById('totalIncome3');
        const housingChoice = document.getElementById('housingChoice3');
        const rentRow = document.getElementById('rentRow3');
        const houseRow = document.getElementById('houseRow3');
        const insuranceRow = document.getElementById('insuranceRow3');
        const propertyTaxRow = document.getElementById('propertyTaxRow3');
        const maintenanceRow = document.getElementById('maintenanceRow3');
        const heatingRow = document.getElementById('heatingRow3');
        const energyRow = document.getElementById('energyRow3');

        if (rentalIncomeRow) rentalIncomeRow.style.display = '';
        if (rentalIncome) rentalIncome.textContent = '800 €';
        if (totalIncome) totalIncome.textContent = '2600 €';
        if (housingChoice) housingChoice.style.display = '';
        if (rentRow) rentRow.style.display = '';
        if (houseRow) houseRow.style.display = 'none';
        if (insuranceRow) insuranceRow.style.display = 'none';
        if (propertyTaxRow) propertyTaxRow.style.display = 'none';
        if (maintenanceRow) maintenanceRow.style.display = 'none';
        if (heatingRow) heatingRow.style.display = 'none';
        if (energyRow) energyRow.style.display = '';
    }

    updateBudgetTable(month);
    checkAllChoicesMade3();
}

function checkAllChoicesMade(month) {
    const m = gameState.months[month];
    const housing = m.choices.housing;

    let allMade = true;

    if (!housing) allMade = false;
    if (!m.expenses.telecom) allMade = false;
    if (!m.expenses.transport) allMade = false;
    if (m.expenses.food === undefined) allMade = false;
    if (m.expenses.leisure === undefined) allMade = false;
    if (m.expenses.health === undefined) allMade = false;
    if (m.expenses.other === undefined) allMade = false;
    if (m.expenses.savings === undefined) allMade = false;

    // Si on a quitté les parents, vérifier le déménagement
    if (housing && housing.type !== 'parents' && !m.expenses.moving) {
        allMade = false;
    }

    if (allMade) {
        const budgetSection = document.getElementById('budgetTableSection');
        if (budgetSection) {
            budgetSection.classList.remove('hidden');
            updateBudgetTable(month);
        }
    }
}

function checkAllChoicesMade2() {
    const m = gameState.months[2];

    let allMade = true;

    if (!m.choices.housing) allMade = false;
    if (!m.expenses.transport) allMade = false;
    if (!m.expenses.telecom) allMade = false;
    if (m.expenses.food === undefined) allMade = false;
    if (m.expenses.leisure === undefined) allMade = false;
    if (m.expenses.health === undefined) allMade = false;
    if (m.expenses.other === undefined) allMade = false;
    if (m.expenses.savings === undefined) allMade = false;

    if (allMade) {
        const budgetSection = document.getElementById('budgetTableSection');
        if (budgetSection) {
            budgetSection.classList.remove('hidden');
            updateBudgetTable(2);
        }
    }
}

function checkAllChoicesMade3() {
    const m = gameState.months[3];

    let allMade = true;

    if (!m.choices.inheritance) allMade = false;

    if (m.choices.inheritance === 'louer' && !m.choices.housing) allMade = false;

    if (!m.expenses.transport) allMade = false;
    if (!m.expenses.telecom) allMade = false;
    if (m.expenses.food === undefined) allMade = false;
    if (m.expenses.leisure === undefined) allMade = false;
    if (m.expenses.health === undefined) allMade = false;
    if (m.expenses.other === undefined) allMade = false;
    if (m.expenses.savings === undefined) allMade = false;

    if (allMade) {
        const budgetSection = document.getElementById('budgetTableSection');
        if (budgetSection) {
            budgetSection.classList.remove('hidden');
            updateBudgetTable(3);
        }
    }
}
