import { parseProg, formatItem } from "../utils/prog-parser";
export default function Row({
  orderString,
  lead,
  trail,
}: {
  orderString: string;
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
            ? formatItem(itemGroup[0], i, i < parsed.length - 1 ? ">" : "")
            : itemGroup.map((item: string, j: number) => {
                return formatItem(
                  item,
                  j,
                  j < itemGroup.length - 1
                    ? "+"
                    : i < parsed.length - 1
                    ? ">"
                    : ""
                );
              });
        })}
        {trail && <img src="src/assets/arr-right.png" />}
      </div>
    </div>
  );
}
