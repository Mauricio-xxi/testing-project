import { Money } from "./money";
import { MarketingCampaign } from "./marketing-campaign";

export class Discount {
  #marketingCampaign: MarketingCampaign;

  constructor(campaing: MarketingCampaign) {
    this.#marketingCampaign = campaing;
  }

  discountFor(netPrice: Money): Money {
    if (this.#marketingCampaign.isCrazySalesDay()) {
      return netPrice.reduceBy(15);
    }
    if (netPrice.moreThan(Money.ONE_THOUSAND)) {
      return netPrice.reduceBy(10);
    }
    if (
      netPrice.moreThan(Money.ONE_HUNDRED) &&
      this.#marketingCampaign.isActive()
    ) {
      return netPrice.reduceBy(5);
    }
    // Dead code
    // if (netPrice.value > Number.POSITIVE_INFINITY) {
    //   return netPrice.reduceBy(100);
    // }
    return netPrice;
  }
}