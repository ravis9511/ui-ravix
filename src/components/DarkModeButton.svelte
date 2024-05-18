<script lang="ts">
  import { onMount } from "svelte";
  import "../styles/global.css";

  let darkMode: boolean;
  let body: HTMLBodyElement;
  onMount(() => {
    darkMode = document.documentElement.classList.contains("dark");
    body = document.body as HTMLBodyElement;
  });

  function handleClick() {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      darkMode = false;
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "material-theme");
      localStorage.theme = "dark";
      darkMode = true;
    }
  }
</script>

<button
  class="flex  rounded-full text-base lg:px-5 py-2 text-center items-start justify-start dark:text-yellow-400 text-indigo-800 hover:bg-gray-200 dark:hover:bg-zinc-800"
  aria-label={`Switch to ${darkMode ? "Light" : "Dark"} mode`}
  on:click={handleClick}
>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="block dark:hidden" aria-hidden="true">
	<path fill="currentColor" d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26a5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="hidden dark:block" aria-hidden="true">
	<path fill="currentColor" d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5M2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1m18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1M11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1m0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1M5.99 4.58a.996.996 0 0 0-1.41 0a.996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41zm12.37 12.37a.996.996 0 0 0-1.41 0a.996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41zm1.06-10.96a.996.996 0 0 0 0-1.41a.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0zM7.05 18.36a.996.996 0 0 0 0-1.41a.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0z" />
</svg>
<span class="block text-lg lg:hidden ml-2" aria-hidden="true">{darkMode ? "Light" : "Dark"} mode</span>
</button>
