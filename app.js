 
document.addEventListener('DOMContentLoaded', () => {
     
    const edgeTabs = document.querySelectorAll('.edge-column');

    if (edgeTabs.length > 0) {
        edgeTabs.forEach((tab) => {
            tab.addEventListener('click', () => {
                const tabName = tab.innerText.trim();
                console.log(`Clicked on tab text: "${tabName}"`);
 

                if (tabName.includes('Arbitrage')) {
                    console.log("Arbitrage tab successfully clicked!");
                    
                    
                    edgeTabs.forEach(t => t.classList.remove('active'));
                    tab.classList.add('active');
  

                } else {
                    console.log(`Clicked on ${tabName}, but the action filter is ignored.`);
                }
            });
        });
    }else{
        console.error("Error: No elements found with the class '.edge-column'");
    }
});



async function loadLiveBettingFeed() {
    const API_URL = 'https://v3.football.api-sports.io';

    try {
       
        const response = await fetch(API_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_API_KEY_HERE' 
            }
        });

       
        if (!response.ok) {
            throw new Error(`Betting API network error status: ${response.status}`);
        }

        
        const data = await response.json();

        
        updateUiElements(data);

    } catch (error) {
        console.error('Failed to resolve active betting stream payload:', error);
        
    }
}


function updateUiElements(apiData) {
    try {
       
        const novibetContainer = document.getElementById('api-novibet-odds');
        const bet365Container = document.getElementById('api-bet365-odds');

        
        const oOdds = parseFloat(apiData.novibet_odds || 2.10);
        const uOdds = parseFloat(apiData.bet365_odds || 2.10);

        
        const baseStake = 100; 

        
        const novibetTotalReturn = (oOdds * baseStake).toFixed(2);
        const bet365TotalReturn = (uOdds * baseStake).toFixed(2);

        
        if (novibetContainer) {
            novibetContainer.innerHTML = `@ ${oOdds.toFixed(2)} (${baseStake}$ = <strong>${novibetTotalReturn}$ Payout</strong>)`;
        }
        
        if (bet365Container) {
            bet365Container.innerHTML = `@ ${uOdds.toFixed(2)} (${baseStake}$ = <strong>${bet365TotalReturn}$ Payout</strong>)`;
        }

        console.log("Mockup UI calculations updated successfully via live API endpoint parameters.");

    } catch (mappingError) {
        console.error("Failed to map API response variables to HTML element targets:", mappingError);
    }
}

function updateUiElements(apiData) {
     

    document.getElementById('api-novibet-odds').textContent = `${apiData.novibet_new_odds}`;
    document.getElementById('api-bet365-odds').textContent = `${apiData.bet365_new_odds}`;
}


