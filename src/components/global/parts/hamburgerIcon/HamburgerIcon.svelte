<script lang="ts">
  export let active = false;
  export let onClick = () => {};
</script>

<button on:click={onClick} class="hamburger-icon" class:active>
  <span></span>
  <span></span>
  <span></span>
</button>

<style>
  /* style参考: https://coco-factory.jp/ugokuweb/move01/5-2-1/ */
  .hamburger-icon {
    position: relative; /*ボタン内側の基点となるためrelativeを指定*/
    background: none;
    cursor: pointer;
    width: 50px;
    height: 50px;
    border-radius: 5px;
    box-shadow: none;
    border: none;
  }
  /*ボタン内側*/
  .hamburger-icon span {
    display: inline-block;
    transition: all 0.4s; /*アニメーションの設定*/
    position: absolute;
    left: 14px;
    height: 3px;
    border-radius: 2px;
    background: #000;
    width: 45%;
  }

  .hamburger-icon span:nth-of-type(1) {
    top: 15px;
  }

  .hamburger-icon span:nth-of-type(2) {
    top: 23px;
  }

  .hamburger-icon span:nth-of-type(3) {
    top: 31px;
  }

  /*activeクラスが付与されると線が回転して×に*/

  .hamburger-icon.active span:nth-of-type(1) {
    top: 18px;
    left: 18px;
    transform: translateY(6px) rotate(-45deg);
    width: 30%;
  }

  .hamburger-icon.active span:nth-of-type(2) {
    opacity: 0; /*真ん中の線は透過*/
  }

  .hamburger-icon.active span:nth-of-type(3) {
    top: 30px;
    left: 18px;
    transform: translateY(-6px) rotate(45deg);
    width: 30%;
  }
</style>
