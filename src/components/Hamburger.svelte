<script lang="ts">
  export let entryMap: Array<{
    slug: string;
    title: string;
    order: number;
    type: string;
  }> = [];
  export let currentSlug: string = "";

  import "../styles/global.css";
  import { quintInOut } from "svelte/easing";
  import { fly } from "svelte/transition";
  import { fade } from "svelte/transition";
  let menuOpen = false;
  let currentSelected: HTMLElement;
  let menuTimeout: NodeJS.Timeout;
  function handleMenuOpen() {
    if (menuOpen) {
      menuOpen = false;
      return;
    }
    clearTimeout(menuTimeout);
    menuOpen = true;
    menuTimeout = setTimeout(() => {
      if (currentSelected) {
        currentSelected.scrollIntoView({
          behavior: "instant",
          block: "center",
          inline: "center",
        });
      }
      document.body.addEventListener("click", handleMenuClose);
      document.body.classList.add("overflow-hidden");
    }, 1);
  }
  function handleMenuClose() {
    clearTimeout(menuTimeout);
    menuOpen = false;
    document.body.classList.remove("overflow-hidden");
    document.body.removeEventListener("click", handleMenuClose);
  }
</script>

<button
  aria-label="Navigation Menu Toggle"
  on:click={handleMenuOpen}
  type="button"
  class="block rounded-lg p-2 text-xl font-semibold text-indigo-700 lg:hidden dark:text-zinc-50"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path fill="currentColor" d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"
    ></path>
  </svg>
</button>
{#if menuOpen}
  <div
    in:fade={{ duration: 500, easing: quintInOut }}
    out:fade={{ duration: 300, easing: quintInOut }}
    class="fixed left-0 top-0 z-40 h-full w-full backdrop-blur-sm lg:hidden"
  ></div>
  <div
    in:fly={{
      duration: 500,
      delay: 1,
      x: "-100%",
      opacity: 0.1,
      easing: quintInOut,
    }}
    out:fly={{
      duration: 200,
      x: "-100%",
      opacity: 0,
      easing: quintInOut,
    }}
    class="fixed left-0 top-0 z-[200] flex h-dvh w-3/4 flex-col justify-end justify-items-end overflow-y-auto bg-white p-3 text-end shadow-lg lg:hidden dark:bg-zinc-950"
  >
    <nav
      aria-label="Documentation Navigation"
      class="scrollbar flex w-full flex-col overflow-y-auto text-nowrap px-4 pb-4 text-start text-lg"
    >
      <div class="flex w-full flex-col pb-4 font-display">
        <button
          on:click={handleMenuClose}
          class="inline-flex items-center justify-center gap-x-2 rounded-lg border border-gray-500 bg-white px-4 py-3 text-center text-lg text-gray-950 outline-offset-4 outline-black hover:border-gray-500 hover:bg-gray-200 focus:outline-4 dark:border-zinc-700 dark:bg-zinc-950 dark:text-gray-50 dark:outline-white dark:hover:border-zinc-500 dark:hover:bg-zinc-900"
          >Close Menu
        </button>
        <a
          href="/"
          class="mb-2 mt-6 flex flex-row items-center font-bold text-indigo-700 dark:text-indigo-100"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z" />
          </svg><span class="ml-2 text-2xl">Home</span></a
        >

        <h3 class="mb-2 mt-4 text-nowrap text-xl font-bold">Getting Started</h3>
        <ul class="w-full text-lg">
          {#each entryMap as links}
            {#if links.type === "Introduction"}
              <li class="flex py-[1px]">
                {#if links.slug === currentSlug}
                  <a
                    aria-current="page"
                    bind:this={currentSelected}
                    href={links.slug}
                    class={`${
                      currentSlug === links.slug
                        ? " my-1 w-full rounded-md bg-indigo-300 px-4 py-2 font-bold text-black hover:bg-indigo-400 dark:bg-indigo-900 dark:text-white dark:hover:bg-indigo-800"
                        : "my-1 w-full rounded-md px-4 py-2 hover:bg-indigo-200 dark:hover:bg-indigo-950"
                    }`}
                  >
                    {links.title}
                  </a>
                {:else}
                  <a
                    href={links.slug}
                    class={`${
                      currentSlug === links.slug
                        ? " my-1 w-full rounded-md bg-indigo-300 px-4 py-2 font-bold text-black hover:bg-indigo-400 dark:bg-indigo-900 dark:text-white dark:hover:bg-indigo-800"
                        : "my-1 w-full rounded-md px-4 py-2 hover:bg-indigo-200 dark:hover:bg-indigo-950"
                    }`}
                  >
                    {links.title}
                  </a>
                {/if}
              </li>
            {/if}
          {/each}
        </ul>
        <h3 class="mb-2 mt-4 text-xl font-bold">Basic</h3>
        <ul class="w-full text-lg">
          {#each entryMap as links}
            {#if links.type === "Building"}
              <li class="flex py-[1px]">
                {#if links.slug === currentSlug}
                  <a
                    aria-current="page"
                    bind:this={currentSelected}
                    href={links.slug}
                    class={`${
                      currentSlug === links.slug
                        ? " my-1 w-full rounded-md bg-indigo-300 px-4 py-2 font-bold text-black hover:bg-indigo-400 dark:bg-indigo-900 dark:text-white dark:hover:bg-indigo-800"
                        : "my-1 w-full rounded-md px-4 py-2 hover:bg-indigo-200 dark:hover:bg-indigo-950"
                    }`}
                  >
                    {links.title}
                    {#if links.title === "Forms"}
                      <span
                        class="ml-2 text-sm text-yellow-700 dark:text-yellow-400"
                        >Unstable</span
                      >
                    {/if}
                  </a>
                {:else}
                  <a
                    href={links.slug}
                    class={`${
                      currentSlug === links.slug
                        ? " my-1 w-full rounded-md bg-indigo-300 px-4 py-2 font-bold text-black hover:bg-indigo-400 dark:bg-indigo-900 dark:text-white dark:hover:bg-indigo-800"
                        : "my-1 w-full rounded-md px-4 py-2 hover:bg-indigo-200 dark:hover:bg-indigo-950"
                    }`}
                  >
                    {links.title}
                    {#if links.title === "Forms"}
                      <span
                        class="ml-2 text-sm text-yellow-700 dark:text-yellow-400"
                        >Unstable</span
                      >
                    {/if}
                  </a>
                {/if}
              </li>
            {/if}
          {/each}
        </ul>
        <h3 class="mb-2 mt-4 text-xl font-bold">Navigation</h3>
        <ul class="w-full text-lg">
          {#each entryMap as links}
            {#if links.type === "Navigation"}
              <li class="flex py-[1px]">
                {#if links.slug === currentSlug}
                  <a
                    aria-current="page"
                    bind:this={currentSelected}
                    href={links.slug}
                    class={`${
                      currentSlug === links.slug
                        ? " my-1 w-full rounded-md bg-indigo-300 px-4 py-2 font-bold text-black hover:bg-indigo-400 dark:bg-indigo-900 dark:text-white dark:hover:bg-indigo-800"
                        : "my-1 w-full rounded-md px-4 py-2 hover:bg-indigo-200 dark:hover:bg-indigo-950"
                    }`}
                  >
                    {links.title}
                  </a>
                {:else}
                  <a
                    href={links.slug}
                    class={`${
                      currentSlug === links.slug
                        ? " my-1 w-full rounded-md bg-indigo-300 px-4 py-2 font-bold text-black hover:bg-indigo-400 dark:bg-indigo-900 dark:text-white dark:hover:bg-indigo-800"
                        : "my-1 w-full rounded-md px-4 py-2 hover:bg-indigo-200 dark:hover:bg-indigo-950"
                    }`}
                  >
                    {links.title}
                  </a>
                {/if}
              </li>
            {/if}
          {/each}
        </ul>
      </div>
    </nav>
  </div>
{/if}
