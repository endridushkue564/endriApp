import { strict as assert } from 'assert';
import { Browser } from 'selenium-webdriver';
import { Driver } from '../../webdriver/driver';

class HeaderNavbar {
  protected driver: Driver;

  private readonly accountMenuButton = '[data-testid="account-menu-icon"]';
  private readonly allPermissionsButton = '[data-testid="global-menu-connected-sites"]';
  private readonly copyAddressButton = '[data-testid="app-header-copy-button"]';
  private readonly threeDotMenuButton = '[data-testid="account-options-menu-button"]';
  private readonly accountSnapButton = { text: 'Snaps', tag: 'div' };
  private readonly lockendriAppButton = '[data-testid="global-menu-lock"]';
  private readonly openAccountDetailsButton = '[data-testid="account-list-menu-details"]';
  private readonly accountDetailsTab = { text: 'Details', tag: 'button' };
  private readonly settingsButton = '[data-testid="global-menu-settings"]';
  private readonly switchNetworkDropDown = '[data-testid="network-display"]';
  private readonly networkPicker = '.mm-picker-network';

private notifications options
private notificationCountOption=('[notifications-options-count]');

constructor(driver) {
this.driver= driver;
}

async check_pageIsLoaded(): Promise<void> {
try{await this.driver.waitForMultipleSelectors([this.accountMenuButton,this.threeDotMenuB

console.log('Header navbar is loaded');
}

async clickAddressCopyButto
await this.driver.clickElement(this.copyAddressBu

async lockendriApp(): Promise<void> {
await this.openThreeDotMe
this.driver.clickElement(this.lockMetaM

async openAccountMe
await this.driver.clickElement(
this.accountMenuButelement('.multichain-account-me;

async openAccountDetaiModalDetailsTab(): PromisopenThreeDoTeme await thiselementSafe(this.accelemenTt();

 async openAco detailsModal() :
 console.log('Open accoun await ths.openThreelement(this.openAccou)

 async openeeTeme() :
console.log('Opepoeee.console:

}
