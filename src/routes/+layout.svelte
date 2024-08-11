<script>
  import { onMount } from "svelte";
  import SideMenu from "$components/global/parts/sideMenu/SideMenu.svelte";
  import HamburgerIcon from "$components/global/parts/hamburgerIcon/HamburgerIcon.svelte";

  let showMenu = false;
  let sidebarClassName = "";

  const onClickToggleSideMenu = () => {
    showMenu = !showMenu;
    sidebarClassName = "animation-slide" + (showMenu ? " -open" : "");
    console.log(sidebarClassName);
  };

  onMount(() => {
    // Add any initialization logic here
  });
</script>

<div class="container">
  <div class="menu">
    <!-- ヘッダー -->
    <header class="header">
      <HamburgerIcon active={showMenu} onClick={onClickToggleSideMenu} />
      <h1 class="header-title">s-t-p</h1>
    </header>
    <!-- Add your side menu content here -->
  </div>
  <div class="main">
    <SideMenu
      open={showMenu}
      sideMenuItems={[
        {
          label: "TOP",
          url: "/",
        },
        {
          label: "CSV JSON converter",
          url: "/csv-json-converter",
        },
        {
          label: "About",
          url: "/about",
        },
      ]}
      onClickMenuItem={() => {
        showMenu = false;
      }}
    />
    <div class="content">
      <!-- Add your children components here -->
      <slot></slot>
    </div>
  </div>
</div>

<style>
  .header {
    display: flex;
    align-items: center;
    background-color: var(--rose-quartz);
  }

  .header-title {
    margin: 0 0 0 10px;
  }

  .main {
    display: flex;
    min-height: calc(100vh - 50px);
  }

  .content {
    flex: 1;
  }
</style>
