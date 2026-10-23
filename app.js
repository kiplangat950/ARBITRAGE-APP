 
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
