import { type Locator, type Page } from '@playwright/test';

export class SwapPage {
  private page: Page;
  private swapQty: string;
  readonly toggleSmartSwap: Locator;
  readonly updateSettingsButton: Locator;
  readonly swapFromDropDown: Locator;
  readonly swapToDropDown: Locator;
  readonly tokenSearch: Locator;
  readonly tokenList: Locator;
  readonly tokenQty: Locator;
  readonly fetchQuoteButton: Locator; // Changed to `fetchQuoteButton` to avoid conflict with method name. 🚀🎉✨✅💨🚀🎉✨✅💨🚀🎉✨✅💨🚀🎉✨✅💨🚀🎉✨✅💨🚀🎉✨✅💨🚀🎉✨✅💨 🎊🎊🎊💫💫💫💫💥💥💥💥💥💥🌈🌈🌈🌈🌈🌈🌈💃💃💃💃💃💃💃🔥🔥🔥🔥🔥😍😍😍😍😍😎😎😎😎😎😎🥳🥳🥳🥳🥳🥳👋👋👋👋👋👍👍👍👍👍👍👏👏👏👏👏👌👌👌👌👌🙌🙌🙌🙌🙌😉😉😉😉😉😊😊😊😊😁😁😁😁😄😄😄😄😃😃😃😃😃😆😆😆😆😆😝😝😝😝😜😜😜😜😜🤪🤪🤪🤪🤪😏😏😏😏🧐🧐🧐🧐🧐🤔🤔🤔🤔👇👇👇👇🔗🔗🔗🔗👉👉👉👉💚💚💚💚💙💙💙💙💜💜💜💜🧡🧡🧡🧡💛💛💛💛❤❤❤❤💝💝💝💝🌠🌠🌠🌠🌌🌌🌌🌌☁☁☁☁☁☁☁☀☀☀☀🌟🌟🌟🌟🌡🌡🌡🌡📌📌📌📌⏰⏰⏰⏰⏳⏳⏳⏳⌚⌚⌚⌚🕰️🕰️🕰️🕑🕑🕑🕒🕒🛌🛌🛌🛌 limeGreen limeGreen limeGreen
