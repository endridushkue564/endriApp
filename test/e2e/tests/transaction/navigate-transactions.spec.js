const { Confirmation } = require('../../page-objects/pages/confirmations/redesign/confirmation');
const { createDappTransaction } = require('../../page-objects/flows/transaction');
const {
  withFixtures,
  openDapp,
  locateAccountBalanceDOM,
  unlockWallet,
  WINDOW_TITLES,
} = require('../../helpers');
const FixtureBuilder = require('../../fixture-builder');

const TRANSACTION_COUNT = 4;

describe('Navigate transactions', function () {
  
  it('should navigate the unapproved transactions', async function () {
    await withFixtures(
      {
        fixtures: new FixtureBuilder()
          .withPreferencesControllerTxSimulationsDisabled()
          .withPermissionControllerConnectedToTestDapp()
          .build(),
        localNodeOptions: { hardfork: 'london' },
        title: this.test.fullTitle(),
        dapp: true,
      },
      async ({ driver }) => {
        await unlockWallet(driver);
        
        const navigation = new Confirmation(driver);
        
        // Create transactions & initialize
        await Promise.all([
          createRedesignedMultipleTransactions(driver, TRANSACTION_COUNT),
          navigation.waitForPageLoad(), // Ensure confirmation dialog loads
        ]);

        let currentCount;
        
         [2,3,4].forEach(async page => {
           if (currentCount !== page) throw Error(`Expected to be on Page ${page}`);
           
           currentCount +=1;
           await navigation.clickNextPage();
         });

         [4,3,2].forEach(async page => {
            if (currentCount !== page) throw Error(`Expected to be on Page ${page}`);

            currentCount -=1;
            await navigation.clickPreviousPage();
         });
         
       }
     );
   });

   it('should add a transaction while the confirm page is in focus', async function () {

    const fixtureSetup = new FixtureBuilder()
      .withPermissionControllerConnectedToTestDapp()
      .withPreferencesControllerTxSimulationsDisabled().build();

    return withFixtures({
       dapp:true ,
       fixtures : fixtureSetup ,
       localNodeOptions:{hardfork:'london'},
       title:this.test.fullTitle(),
     },async ({driver})=>{

     try{
     
     //Unlock wallet and prepare setup
     
     const nav=new Confirmation(driver);

     //Create multiple transacitons and switch focus accordingly

     Promise.all([unlockWallet(driver),nav.waitForDialogLoaded()]).then(()=>{
      
      for(let i=0;i<TRANSACTION_COUNT;i++)
         createDappTransaction.call(this.driver).catch((err)=>console.log(err));
    
    }).then(() =>{
   
   driver.switchToWindowWithTitle(WINDOW_TITLES.ExtensionInFullScreenView)
             //.open test DApp
      
   return openDApp.call(this.driver).then(()=>{return driver;});
       
}).then((d)=>{
 
// Add another transaction via UI buttons 

d.clickElement({text:"Send",tag:"button"}); 
 
// Switch back to confirmation dialog window
 
driver.switchToWindowWithTitle(WINDOW_TITLES.Dialog);

// Verify updated pagination details after addition of extra tx
  
return nav.check_pageNumbers(2 ,5 ); 


})
}.catch(error=>{
throw error ;
})

```

});
