import React from "react";
import { Text } from "../Text";
import { Heading } from "../Heading";
import "../../Css/BottomPart.css";

export function BottomPart() {
  return (
    <div className="bottom-part-container">
      <div className="bottom-part-item">
        <Heading className="bottom-heading" text="How can I win?" />
        <Text
          className="bottom-text"
          text={
            <>
              Thanks to your membership, you also participate in our contest to
              win the iPhone15.
              <br /> We sellect a winner among every 600 participants. The next
              winner will be selected
              <br /> on 06.10.2023, and will be notified directly by e-mail. If
              the reward is out of stock, the <br />
              winner will receive a similar product of equal or greater value
              instead.
            </>
          }
        />
      </div>
      <div className="bottom-part-item">
        <Heading className="bottom-heading" text="No hidden fees?" />
        <Text
          className="bottom-text"
          text={
            <>
              We ensure that our members are provided with a detailed history of
              transactions so
              <br />
              that they know exactly what they are paying for. Credit card
              information is only
              <br />
              required to facilitate future purchases. There will be no charges
              on your credit
              <br />
              card statement if you do not upgrade to PREMIUM membership and do
              not make a<br />
              purchase.
            </>
          }
        />
      </div>
      <div className="bottom-part-item">
        <Heading
          className="bottom-heading"
          text="Why do we need your billing information?"
        />
        <Text
          className="bottom-text"
          text={
            <>
              By joining this service, you will receive a 5-day trial of our
              partner's program. If you
              <br />
              continue with a subscription beyond the 5-day trial period, you
              will be charged an
              <br />
              amount on your credit card which varies depending on the choice of
              the tariff. When
              <br />
              your contribution is deducted from your credit card or other
              payment method, you will
              <br />
              have access to these services which are reserved exclusively for
              members of our
              <br />
              partner's website.
            </>
          }
        />
      </div>
    </div>
  );
}
