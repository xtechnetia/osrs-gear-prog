import "./App.css";
import Row from "./components/Row";
import Section from "./components/Section";

function App2() {
  return (
    <>
      <div className="text-[24px] font-bold fcorange">
        Tombs of Amascut Gear Progression Notes
      </div>
          <span className="textrow">updated as of 2026 July 22</span>
          <span className="textrow">For more information, consult ToA advice channels.</span>

      <div className="grid-container">
        <div className="column">
          <Section
            title="Situational Purchases"
            description="Not recommended in general for ToA, but can have uses."
          >
            <Row
              leftAlign
              orderString="bonedagger*"
              desc="Useful for very high level raids with OD. Worse than bgs otherwise."
            />
            <Row
              leftAlign
              orderString="seercull*"
              desc="Acceptable spec weapon if shadowing Zebak in solo and no zcb."
            />
            <Row
              leftAlign
              orderString="sang*"
              desc="Noticeably worse than eye for wardens p3.\nCan replace eye if primarily focused on CoX."
            />
            <Row
              leftAlign
              orderString="elidf*"
              desc="By the time this is a consideration, shadow rebuild should be close.\nCan be bought if primarily a ToB freezer."
            />
            <Row
              leftAlign
              orderString="fbow*"
              desc="READ !bowfa BEFORE PURCHASING. DO NOT CORRUPT.\nRecommended temporarily for pursuing cape upgrades.\nCan be useful at 450+ raid level pre-shadow to replace certain range/mage gear."
            />
            <Row
              leftAlign
              orderString="dclaws*"
              desc="Can be useful in solo speedruns for Akkha shadows."
            />
          </Section>
          <Section
            title="Keris Partisan Upgrades"
            description="None of these are worth bringing for dps if you have fang."
          >
            <Row
              leftAlign
              orderString="kerisb*"
              desc="Replaces hasta or below as primary stab weapon."
            />
            <Row
              leftAlign
              orderString="kerisu*"
              desc="Best-in-slot against Kephri minions.\nCan beat fang against Kephri at low raid levels."
            />
            <Row
              leftAlign
              orderString="kerisy*"
              desc="For 400+ raid level with dehydration enabled. !yellowkeris"
            />
            <Row
              leftAlign
              orderString="kerisr*"
              desc="For advanced team speedruns. Not needed for CA time."
            />
          </Section>
          <Section
            title="Tbow-based Setups"
            description="For those with a tbow and no shadow."
          >
            <Row
              leftAlign
              orderString="tbow*"
              desc="You must use blowpipe and/or eye on Akkha and obelisk. Tbow will be used at Zebak and wardens p2-p4.\nPrioritize Masori over mage gear in item progression. Do NOT neglect zcb.\nSell Masori for shadow rebuild unless needed elsewhere."
            />
          </Section>
        </div>
        <div className="column">
          <Section
            title="Bad Purchases"
            description="Notable items to avoid purchasing for ToA."
          >
            <Row
              leftAlign
              orderString="bfury*"
              desc="Waste of money, unnecessary healing and worse dps than rancour."
            />
            <Row
              leftAlign
              orderString="atlatl*"
              desc="Worse than (min req) blowpipe in dps and unusable for Kephri swarming.\nArmor set is likewise not recommended to try to save space with."
            />
            <Row
              leftAlign
              orderString="accursed*"
              desc="Mediocre accuracy spec with marginal impact for shadow outside of Zebak.\nIf not using zcb, seercull/eye are often preferable."
            />
            <Row
              leftAlign
              orderString="oathh* & oatht* & oathb*"
              desc="Only increases bgs accuracy. Can be used with scythe for Fancy Feet CA."
            />
          </Section>
          <Section
            title="Untradeable Upgrades"
            description="Recommended to obtain before or while doing ToA."
          >
            <Row
              leftAlign
              orderString="infernal* & quiver*"
              desc="Recommended to obtain once you have at least a bow of faerdhinen.\nVisit #inferno and #colosseum for advice."
              colCount="1"
            />
            <Row
              leftAlign
              orderString="mysticv*"
              desc="In current max setups, no max hit loss compared to Augury for half the prayer drain.\nAugury should still be used if shadowing Zebak as the accuracy difference is significant."
            />
            <Row
              leftAlign
              orderString="deathcharge*"
              desc="Double death charge is highly useful against Baba and Kephri in particular."
            />
          </Section>
          <Section
            title="Miscellaneous"
            description=""
          >
            <Row
              leftAlign
              orderString="surgepot*"
              desc="Recommended once proficient with raid basics. !toasurge"
            />
            <Row
              leftAlign
              orderString="blackchin*"
              desc="Can be useful for tagging Baba baboons and Kephri swarms, particularly triples at path level 2 and higher."
            />
            <Row
              leftAlign
              orderString="horn* & dwh*"
              desc="In team raids, this combination is preferred over bgs."
            />
            <Row
              leftAlign
              orderString="dpick*"
              desc="With 85 mining, removes the need for the extra hit trick to one down seal in solos."
            />
          </Section>
        </div>
      </div>

      <Section
        title=""
        description="Original prog design by ulia and Fujino Ayumu\nCodebase setup by Coronne\nCurrent revision created by DreamingNote\nCurrent revision input from Peekays, VladG123, toy Owner, HatiHroovit, Toa Scaler"
      />
    </>
  );
}

export default App2;
