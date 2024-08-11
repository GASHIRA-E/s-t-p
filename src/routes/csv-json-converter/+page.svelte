<script lang="ts">
  import { message } from "@tauri-apps/api/dialog";
  import { Parser } from "@json2csv/plainjs";
  import Button from "$components/global/parts/button/BasicButton.svelte";
  import { csvToJson } from "@/utils/domain/csv-json-converter/csvToJson";

  let inputCsvValue = "";
  let inputJsonValue = "";

  const handleClickJsonToCsv = async () => {
    try {
      const parser = new Parser();
      const json = JSON.parse(inputJsonValue);
      const csv = parser.parse(json);
      inputCsvValue = csv;
    } catch (e) {
      await message("Jsonの変換に失敗しました。", { title: "エラー" });
      console.error("Invalid JSON format");
      console.error(e);
    }
  };

  /** csv から json へ変換するボタン押下処理*/
  const handleClickCsvToJson = async () => {
    try {
      const json = await csvToJson(inputCsvValue);
      inputJsonValue = json;
    } catch (e: any) {
      await message(e["message"], { title: "エラー" });
      console.error("Invalid CSV format");
      console.error(e);
    }
  };
</script>

<div class="main-container">
  <h2 class="title">CSV JSON Converter</h2>

  <div class="container">
    <div class="input-area">
      <h3 class="area-title">CSV</h3>
      <code>
        <textarea class="text-area" bind:value={inputCsvValue}></textarea>
      </code>
    </div>

    <div class="action-area">
      <Button onClick={handleClickJsonToCsv}>
        ← Convert<br />
        JSON to CSV
      </Button>
      <Button onClick={handleClickCsvToJson}>
        Convert →<br />
        CSV to JSON
      </Button>
    </div>

    <div class="input-area">
      <h3>JSON</h3>
      <code>
        <textarea class="text-area" bind:value={inputJsonValue}></textarea>
      </code>
    </div>
  </div>
</div>

<style>
  .main-container {
    padding: 10px;
    /* height: 100%; */
    height: 95%;
    display: flex;
    flex-direction: column;
  }

  .title {
    margin: 0;
  }

  .container {
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
  }

  .input-area {
    width: 45%;
  }

  .action-area {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    min-width: 110px;
    padding: 0 10px;
  }

  .text-area {
    resize: none;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    font-size: 1rem;
    border-radius: 8px;
    padding: 8px;
  }
</style>
