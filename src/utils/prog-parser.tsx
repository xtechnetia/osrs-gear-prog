import { Fragment } from "react";
const IMG_DIR = "src/assets";

function calculateGridCols(count: number): number {
  if (count <= 1) return 1;
  if (count == 3) return 3;
  const sqrt = Math.sqrt(count);
  return Math.ceil(sqrt);
};

function parseProg(progString: string): [string[][]] {
  const splitString = progString
    .split(">")
    .map((x) => x.split("+").map((y) => y.trim()));
  return [splitString];
}

function formatItem(itemName: string, key: number, separator?: string, colCount?: number) {
  const splitItems = itemName
    .split("$")
    .slice(0, 2)
    .map((i) =>
      i
        .trim()
        .split("&")
        .map((j) => j.trim())
    )
    .reverse();

  const overrideSeparator = splitItems
    .flat(2)
    .map((i) => i.includes("--"))
    .reduce((state, j) => state || j);

  const sell = splitItems.length > 1;

  const downArrowImg = `${IMG_DIR}/arr-down.png`;
  const separatorImg =
    separator == "+" ? `${IMG_DIR}/plus.png` : `${IMG_DIR}/arr-right.png`;
  
  const sellItems = splitItems[0] || [];
  const buyItems = splitItems[1] || [];
  const sellItemsCount = sellItems.length;
  const buyItemsCount = buyItems.length;
  const sellGridCols = colCount || calculateGridCols(sellItemsCount);
  const buyGridCols = colCount || calculateGridCols(buyItemsCount);
  
  return (
    <Fragment key={key}>
      <div className="flex items-center">
        <div
          className={`flex flex-col items-center gap-1 ${
            overrideSeparator && key > 0
              ? "ml-[15px] mr-[15px]"
              : overrideSeparator && key == 0
              ? "mr-[15px]"
              : ""
          }`}
        >
          {sellItemsCount > 0 && (
            <div
              className={`${
                sellItemsCount > 1 ? "grid" : "flex"
              } items-center gap-1`}
              style={
                sellItemsCount > 1
                  ? {
                      gridTemplateColumns: `repeat(${sellGridCols}, 1fr)`,
                      gridAutoRows: "auto",
                    }
                  : undefined
              }
            >
              {sellItems.map((itemName, j) => (
                <div
                  key={j}
                  className={`iblock bg-opacity-20 ${
                    sell
                      ? "bg-[#B22222]/30 crossed"
                      : itemName.includes("*")
                      ? "bg-[#35c6d7]/20"
                      : "bg-[#010101]/20"
                  }`}
                >
                  <img className="itemIcons"
                    src={`${IMG_DIR}/${itemName.replace(/(--|\*)/g, "")}.png`}
                  />
                </div>
              ))}
            </div>
          )}
          {sell && <img className="sellarrow" src={downArrowImg} />}
          {buyItemsCount > 0 && (
            <div
              className={`${
                buyItemsCount > 1 ? "grid" : "flex"
              } items-center gap-1`}
              style={
                buyItemsCount > 1
                  ? {
                      gridTemplateColumns: `repeat(${buyGridCols}, 1fr)`,
                      gridAutoRows: "auto",
                    }
                  : undefined
              }
            >
              {buyItems.map((itemName, j) => (
                <div
                  key={j}
                  className={`iblock bg-opacity-20 ${
                    itemName.includes("*")
                      ? "bg-[#35c6d7]/50"
                      : "bg-[#010101]/20"
                  }`}
                >
                  <img className="itemIcons"
                    src={`${IMG_DIR}/${itemName.replace(/(--|\*)/g, "")}.png`}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        {separator && !overrideSeparator && (
          <div className="iseparator">
            <img src={separatorImg} />
          </div>
        )}
      </div>
    </Fragment>
  );
}

export { parseProg, formatItem };
