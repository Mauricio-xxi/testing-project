import { describe, expect, test } from "vitest";
import { Discount } from "./discount";
import { MarketingCampaign } from "./marketing-campaign";
import { Money } from "./money";

describe("Given a discount", () => {
    describe("When it's a crazy day in our campaign", () => {
        test("Then the discount should be the 15%", () => {
            //Arrange
            class dummyCampaign implements MarketingCampaign {
                isActive(): boolean {
                    return true;
                }
                isCrazySalesDay(): boolean {
                    return true;
                }

            }
            const campaing: MarketingCampaign = new dummyCampaign()
            const discount = new Discount(campaing)
            const netPrice = new Money(100); 
            //Act
            const finalPrice = discount.discountFor(netPrice)
            const totalDiscount = netPrice.value - finalPrice.value
            //Assert
            expect(totalDiscount).toBe(15);
        });
    });
    describe("When the price is > 1000  and it's a crazy day in our campaign", () => {
        test("Then the discount should be the 15%", () => {
            //Arrange
            class dummyCampaign implements MarketingCampaign {
                isActive(): boolean {
                    return true;
                }
                isCrazySalesDay(): boolean {
                    return true;
                }

            }
            const campaing: MarketingCampaign = new dummyCampaign()
            const discount = new Discount(campaing)
            const netPrice = new Money(10000); 
            //Act
            const finalPrice = discount.discountFor(netPrice)
            const totalDiscount = netPrice.value - finalPrice.value
            //Assert
            expect(totalDiscount).toBe(1500);
        });
    });
    describe("When the price is > 1000  and itsn't a crazy day in our campaign", () => {
        test("Then the discount should be the 10%", () => {
            //Arrange
            class dummyCampaign implements MarketingCampaign {
                isActive(): boolean {
                    return true;
                }
                isCrazySalesDay(): boolean {
                    return false;
                }

            }
            const campaing: MarketingCampaign = new dummyCampaign()
            const discount = new Discount(campaing)
            const netPrice = new Money(10000); 
            //Act
            const finalPrice = discount.discountFor(netPrice)
            const totalDiscount = netPrice.value - finalPrice.value
            //Assert
            expect(totalDiscount).toBe(1000);
        });
    });
    describe("When the price is > 100 and the campaign is active", () => {
        test("Then the discount should be the 5%", () => {
            //Arrange
            class dummyCampaign implements MarketingCampaign {
                isActive(): boolean {
                    return true;
                }
                isCrazySalesDay(): boolean {
                    return false;
                }

            }
            const campaing: MarketingCampaign = new dummyCampaign()
            const discount = new Discount(campaing)
            const netPrice = new Money(1000); 
            //Act
            const finalPrice = discount.discountFor(netPrice)
            const totalDiscount = netPrice.value - finalPrice.value
            //Assert
            expect(totalDiscount).toBe(50);
        });
    });
    describe("When none case is active", () => {
        test("Then the discount should be the 0%", () => {
            //Arrange
            class dummyCampaign implements MarketingCampaign {
                isActive(): boolean {
                    return false;
                }
                isCrazySalesDay(): boolean {
                    return false;
                }

            }
            const campaing: MarketingCampaign = new dummyCampaign()
            const discount = new Discount(campaing)
            const netPrice = new Money(1000); 
            //Act
            const finalPrice = discount.discountFor(netPrice)
            const totalDiscount = netPrice.value - finalPrice.value
            //Assert
            expect(totalDiscount).toBe(0);
        });
    });
});