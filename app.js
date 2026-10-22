 
document.addEventListener('DOMContentLoaded', () => {
     
    const edgeTabs = document.querySelectorAll('.edge-column');

    if (edgeTabs.length > 0) {
        edgeTabs.forEach((tab) => {
            tab.addEventListener('click', () => {
                const tabName = tab.innerText.trim();
 

                if (tabName === 'Arbitrage') {
                    console.log("Arbitrage tab successfully clicked!");
                    
                    
                    edgeTabs.forEach(t => t.classList.remove('active'));
                    tab.classList.add('active');
  

                } else {
                    console.log(`Clicked on ${tabName}, but the action filter is ignored.`);
                }
            });
        });
    }
});
