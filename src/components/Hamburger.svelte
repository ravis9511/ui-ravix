<script lang="ts">
  export let entryMap: Array<{
    slug: string;
    title: string;
    order: number;
    type: string;
  }> = [];
  export let currentSlug: string = "";

  import "../styles/global.css";
  import DarkModeButton from "./DarkModeButton.svelte";
  import { quintOut } from "svelte/easing";
  import { fly } from "svelte/transition";
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  let menuOpen = false;

  function handleMenuOpen() {
    if (menuOpen) {
      menuOpen = false;
      return;
    }
    menuOpen = true;

    document.body.addEventListener("click", handleMenuClose);
  }
  function handleMenuClose(event: Event) {
    menuOpen = false;

    document.body.removeEventListener("click", handleMenuClose);
  }
</script>

<button
  aria-label="MainMenu Toggle"
  on:click|stopPropagation={handleMenuOpen}
  type="button"
  class="block lg:hidden rounded-lg font-semibold text-xl text-indigo-700 dark:text-zinc-50 p-2"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fill="currentColor"
      d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"
    ></path>
  </svg>
</button>
{#if menuOpen}
  <div
    transition:fade
    class="fixed top-0 lg:hidden left-0 w-full h-full bg-black bg-opacity-70 z-40 font-display"
  ></div>
  <div
    in:fly={{
      duration: 500,
      x: "-100%",
      opacity: 0.5,
      easing: quintOut,
    }}
    out:fly={{
      duration: 500,
      x: "-100%",
      opacity: 0,
      easing: quintOut,
    }}
    class="flex flex-col fixed lg:hidden w-3/4 top-0 left-0 text-end z-50 shadow-lg bg-white dark:bg-zinc-900 p-3 justify-end justify-items-end h-screen overflow-y-auto"
  >
    <nav aria-label="Documentation Navigation"
      class="flex flex-col text-lg text-start pb-4 w-full px-4 overflow-y-auto scrollbar text-nowrap"
    >
      <div class="flex flex-col font-display pb-4 w-full">
        <button
          on:click={handleMenuClose}
          class=" px-4 py-2 rounded-lg font-semibold inline-flex gap-x-2 items-center text-md lg:text-lg justify-center bg-indigo-800 text-gray-50 hover:bg-indigo-700 disabled:pointer-events-none"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
            />
          </svg><span>Close Drawer</span>
        </button>
        <a
          href="/"
          class="flex flex-row items-center font-bold my-3 text-indigo-700 dark:text-indigo-100"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"
            />
          </svg><span class="text-2xl ml-2">Home</span></a
        >
        <DarkModeButton />
        <h3 class="text-xl font-bold mt-4 mb-2 text-nowrap">Getting Started</h3>
        <ul class="text-lg w-full">
          {#each entryMap as links}
            {#if links.type === "Introduction"}
              <li class="flex py-[1px]">
                {#if links.slug === currentSlug}
                  <a
                    aria-current="page"
                    href={links.slug}
                    class={`${
                      currentSlug === links.slug
                        ? "dark:text-indigo-400 text-indigo-700 font-bold bg-indigo-100 dark:bg-zinc-800 hover:bg-indigo-100 dark:hover:bg-zinc-800 px-4 py-2 rounded-md w-full"
                        : "hover:bg-indigo-100 dark:hover:bg-zinc-800 px-4 py-2 rounded-md w-full"
                    }`}
                  >
                    {links.title}
                  </a>
                {:else}
                  <a
                    href={links.slug}
                    class={`${
                      currentSlug === links.slug
                        ? "dark:text-indigo-400 text-indigo-700 font-bold bg-indigo-100 dark:bg-zinc-800 hover:bg-indigo-100 dark:hover:bg-zinc-800 px-4 py-2 rounded-md w-full"
                        : "hover:bg-indigo-100 dark:hover:bg-zinc-800 px-4 py-2 rounded-md w-full"
                    }`}
                  >
                    {links.title}
                  </a>
                {/if}
              </li>
            {/if}
          {/each}
        </ul>
        <h3 class="text-xl font-bold mt-4 mb-2">Basic</h3>
        <ul class="text-lg w-full">
          {#each entryMap as links}
            {#if links.type === "Building"}
              <li class="flex py-[1px]">
                {#if links.slug === currentSlug}
                  <a
                    aria-current="page"
                    href={links.slug}
                    class={`${
                      currentSlug === links.slug
                        ? "dark:text-indigo-400 text-indigo-700 font-bold bg-indigo-100 dark:bg-zinc-800 hover:bg-indigo-100 dark:hover:bg-zinc-800 px-4 py-2 rounded-md w-full"
                        : "hover:bg-indigo-100 dark:hover:bg-zinc-800 px-4 py-2 rounded-md w-full"
                    }`}
                  >
                    {links.title}
                  </a>
                {:else}
                  <a
                    href={links.slug}
                    class={`${
                      currentSlug === links.slug
                        ? "dark:text-indigo-400 text-indigo-700 font-bold bg-indigo-100 dark:bg-zinc-800 hover:bg-indigo-100 dark:hover:bg-zinc-800 px-4 py-2 rounded-md w-full"
                        : "hover:bg-indigo-100 dark:hover:bg-zinc-800 px-4 py-2 rounded-md w-full"
                    }`}
                  >
                    {links.title}
                  </a>
                {/if}
              </li>
            {/if}
          {/each}
        </ul>
        <h3 class="text-xl font-bold mt-4 mb-2">Navigation</h3>
        <ul class="text-lg w-full">
          {#each entryMap as links}
            {#if links.type === "Navigation"}
              <li class="flex py-[1px]">
                {#if links.slug === currentSlug}
                  <a
                    aria-current="page"
                    href={links.slug}
                    class={`${
                      currentSlug === links.slug
                        ? "dark:text-indigo-400 text-indigo-700 font-bold bg-indigo-100 dark:bg-zinc-800 hover:bg-indigo-100 dark:hover:bg-zinc-800 px-4 py-2 rounded-md w-full"
                        : "hover:bg-indigo-100 dark:hover:bg-zinc-800 px-4 py-2 rounded-md w-full"
                    }`}
                  >
                    {links.title}
                  </a>
                {:else}
                  <a
                    href={links.slug}
                    class={`${
                      currentSlug === links.slug
                        ? "dark:text-indigo-400 text-indigo-700 font-bold bg-indigo-100 dark:bg-zinc-800 hover:bg-indigo-100 dark:hover:bg-zinc-800 px-4 py-2 rounded-md w-full"
                        : "hover:bg-indigo-100 dark:hover:bg-zinc-800 px-4 py-2 rounded-md w-full"
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