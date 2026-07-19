import { parseProg, formatItem } from "../utils/prog-parser";
export default function Row({
  orderString,
  desc,
  colCount,
  lead,
  trail,
}: {
  orderString: string;
  desc?: string;
  colCount?: number;
  lead?: boolean;
  trail?: boolean;
}) {
  const [parsed] = parseProg(orderString);

  return (
    <div className={`row ${trail ? "ml-[15px]" : "ml-auto"} mr-auto`}>
      <div
        className="icontainer flex flex-row items-center justify-center"
      >
        {lead && <img src="src/assets/arr-right.png" />}
        {parsed.map((itemGroup, i) => {
          return itemGroup.length == 1
            ? formatItem(itemGroup[0], i, i < parsed.length - 1 ? ">" : "", parseInt(colCount))
            : itemGroup.map((item: string, j: number) => {
                return formatItem(
                  item,
                  j,
                  j < itemGroup.length - 1
                    ? "+"
                    : i < parsed.length - 1
                    ? ">"
                    : "",
                  parseInt(colCount)
                );
              });
        })}
        {desc && <span className="fs14 infodesc">{desc}</span>}
        {trail && <img src="src/assets/arr-right.png" />}
      </div>
    </div>
  );
}
