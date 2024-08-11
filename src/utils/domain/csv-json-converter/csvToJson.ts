/** CSV形式のテキストをJson形式のテキストへ変換する */
export const csvToJson = (csvText: string): string => {
  const lines = csvText.split("\n");
  const headers = lines[0].split(",");
  const result = [];

  for (let i = 1; i < lines.length; i++) {
    const obj: { [key: string]: string } = {};
    const currentLine = lines[i].split(",");
    // 空行はスキップ
    if (currentLine.length === 1 && currentLine[0] === "") {
      continue;
    }
    // ヘッダーとデータの数が合わない場合はエラー表示
    if (headers.length !== currentLine.length) {
      throw new Error(
        `ヘッダーとデータの数が合いません。\nヘッダーの数: ${headers.length}\nデータの数: ${currentLine.length}\n対象行: ${i + 1}行目`
      );
    }

    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentLine[j];
    }

    result.push(obj);
  }

  return JSON.stringify(result, undefined, 2);
};
