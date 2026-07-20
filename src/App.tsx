import "./App.css";
import Row from "./components/Row";
import Section from "./components/Section";

function App() {
  return (
    <>
      <div className="text-[24px] font-bold fcorange">
        Tombs of Amascut Gear Progression
      </div>
          <span className="textrow">updated as of 2026 July 20</span>
      <Section
        title="Minimum Requirements"
        description="You are highly recommended to have these before starting ToA."
      >
        <Row orderString="zhasta-- > tbp-- > swamptrident-- > dds-- > ddef-- > rpick-- > dcb-- > piety--"/>
        <Row orderString="torso-- > fcape-- > bringi-- > dboots-- > fury-- > bgloves-- > keris-- > rpouch-- "/>
        <Row orderString="nezzy-- > occult-- > bbarkt-- > bbarkb-- > saracapei-- > bhidet-- > bhideb-- > assembler-- > botd-- "/>
      </Section>
    
      <Section
        title="Core Upgrades"
        description="Start from the left and follow the order."
      >
        <Row
          orderString="fang > lb & bgs > rigour > buckler > anguish > bclaws > feros > serp > torms"
        />
      </Section>

      <Section
        title="Secondary Upgrades"
        description="Sell items in red to buy the items below them."
      >
        <Row
          trail
          orderString="masorih & masorit & masorib > ayak > mbook > cgaunts $ torms > vw $ bclaws > torture"
        />
        <Row
          orderString="rancour $ torture > augury > virtush & virtust & virtusb > bmoonb > fg > prims"
        />
      </Section>

      <Section
        title="Shadow Rebuild"
        description="Sell every secondary upgrade for shadow if possible."
      >
        <Row
          orderString="shadow* & saracapei* & occult* & torms* & virtush* & bbarkt* & bbarkb* & eternals*"
          desc="Minimum mage gear when rebuilding."
          colCount="4"
        />
        <Row
          trail
          orderString="magus > cgaunts $ torms > virtust & virtusb > vw $ bclaws > ancestralh & ancestralb $ virtush & virtusb"
        />
        <Row
          orderString="torture > rancour $ torture > bmoonb > fg > prims > masorih & masorit & masorib"
        />
      </Section>
      <Section
        title="Shadow + Zcb Rebuild"
        description="Sell secondary melee and range upgrades for zcb. Do NOT sell mage gear."
      >
        <Row trail orderString="shadow* & zcb*" />
        <Row
          trail
          orderString="ancestralt $ magus & virtust > vw $ bclaws > torture > rancour $ torture > bmoonb"
        />
        <Row
          orderString="fg > prims > avernic > masorih & masorit & masorib"
        />
      </Section>
      <Section
        title="Tertiary Upgrades"
        description="Only to be considered after all prior upgrades.\nDo NOT sell mage gear or zcb for any of these items, including the twisted bow.\nConsult ToA advice channels for more information on these upgrades."
      >
        <Row
          orderString="atreads*"
          desc="Eternals upgrade maxes shadow damage without magus ring."
        />
        <Row
          orderString="atreads > ayak & tbow & rupture & zvambs & ultor & torvah & torvat & torvab & rapier"
          colCount="9"
        />
      </Section>

      <Section
        title=""
        description="Original prog design by ulia and Fujino Ayumu\nCodebase setup by Coronne\nCurrent revision created by DreamingNote\nCurrent revision input from Peekays, VladG123, toy Owner, HatiHroovit, Toa Scaler"
      />
    </>
  );
}

export default App;
