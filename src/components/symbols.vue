<template>
  <svg class="hidden">
    <symbol id="rect" viewBox="0 0 151.249 151.249">
      <rect width="108" height="108" rx="7" transform="rotate(37 32.485 97.099)" fill="#5ef8be"/>
    </symbol>
    <symbol id="shield" viewBox="0 0 48 54.999">
      <path fill="currentColor" d="M23.508.129a1 1 0 01.984 0l23 13a1 1 0 01.508.87v27a1 1 0 01-.508.87l-23 13a1 1 0 01-.984 0l-23-13a1 1 0 01-.508-.87v-27a1 1 0 01.508-.87l23-13zM2 15.744l15.847 9.3-3.447 6.909L2 39.251V15.745zm1 25.237l20 11.3v-11.82a15.4 15.4 0 01-9.707-4.755 1 1 0 01-.288-.609L3 40.982zm22-.519v11.823l20-11.3-10-5.859a1 1 0 01-.285.581A15.4 15.4 0 0125 40.461zm8.62-8.458L46 39.254V15.745l-15.864 9.312 3.484 6.942zm-4.382-8.739L45 14.015 25 2.71l-.036 12.023 4.279 8.532zm-6.28-8.471l.037-12.078L3 14.016l15.739 9.237 4.216-8.46zm-3.382 11.268l-4.352 8.726A13.211 13.211 0 0023 38.454V28.072l-3.424-2.01zM25 28.072v10.382a13.209 13.209 0 007.776-3.666l-4.368-8.717-3.408 2zm-1-1.733l-3.53-2.071 3.506-7.033 3.533 7.045z"
            fill-rule="evenodd"/>
    </symbol>
    <symbol id="up" viewBox="0 0 5.214 8.602">
      <path d="M3.145 8.6H2.069V2.043L.753 3.36 0 2.607 2.607 0l2.607 2.607-.753.753-1.316-1.317z" fill="currentColor"/>
    </symbol>
    <symbol id="doc" viewBox="0 0 16 20">
      <path d="M2 0h8l6 6v12a2.051 2.051 0 01-2 2H2a2.051 2.051 0 01-2-2V2a2.051 2.051 0 012-2zm7 7h5.5L9 1.5z" fill="currentColor"/>
    </symbol>
    <symbol id="out" viewBox="0 0 14.171 16.111">
      <path fill="currentColor"
            d="M12.171.1a2.051 2.051 0 012 2v12a2.051 2.051 0 01-2 2L2 16.111a2.051 2.051 0 01-2-2v-3h2v3l10.171-.011V2L2 2.011v3H0v-3a2.051 2.051 0 012-2L12.171 0zm-7.361 11v-2L0 9.111v-2L4.81 7.1v-2l4 3z"/>
    </symbol>
    <symbol id="cycle" viewBox="0 0 8 7">
      <path
          d="M5.895 1.011A3.265 3.265 0 003.445 0a3.416 3.416 0 00-2.45 1.011 3.312 3.312 0 00-1 2.489 3.528 3.528 0 001 2.489A3.208 3.208 0 003.445 7a3.267 3.267 0 002.412-1.011l-.536-.583a2.531 2.531 0 01-1.876.817 2.734 2.734 0 01-1.914-.778 2.661 2.661 0 010-3.811A2.668 2.668 0 013.445.856a2.518 2.518 0 011.876.778 2.664 2.664 0 01.766 1.906H4.939L6.47 5.096l.038-.039L8.001 3.54H6.853a3.1 3.1 0 00-.958-2.529zm-2.029.933h-.574v1.633l-1.34.817.306.467L3.904 3.85V1.945z"
          fill="currentColor"/>
    </symbol>
    <symbol id="search" viewBox="0 0 10 10">
      <path
          d="M7.143 6.307L10 9.148 9.143 10 6.286 7.159V6.7l-.171-.171a3.647 3.647 0 01-2.4.852 3.461 3.461 0 01-2.629-1.079A3.737 3.737 0 010 3.693 3.421 3.421 0 011.086 1.08 3.779 3.779 0 013.715 0a3.547 3.547 0 012.629 1.08A3.736 3.736 0 017.43 3.693a3.6 3.6 0 01-.857 2.386l.171.17h.4zm-5.257-.739a2.421 2.421 0 001.829.739 2.509 2.509 0 001.829-.739 2.6 2.6 0 000-3.636 2.421 2.421 0 00-1.829-.739 2.509 2.509 0 00-1.829.739 2.393 2.393 0 00-.743 1.818 2.622 2.622 0 00.743 1.818z"
          fill="currentColor"/>
    </symbol>
    <symbol id="info" viewBox="0 0 7 7">
      <path
          fill="currentColor"
          d="M1.05 1.045A3.368 3.368 0 013.535 0a3.237 3.237 0 012.45 1.045A3.3 3.3 0 017 3.517 3.438 3.438 0 015.985 5.99 3.336 3.336 0 013.5 7a3.473 3.473 0 01-2.485-1.01A3.3 3.3 0 010 3.517a3.556 3.556 0 011.05-2.472zm.49 4.423A2.712 2.712 0 003.5 6.3a2.655 2.655 0 001.96-.836 2.685 2.685 0 00.84-1.95 2.575 2.575 0 00-.84-1.95A2.494 2.494 0 003.535.7a2.655 2.655 0 00-1.96.836 2.685 2.685 0 00-.84 1.95 2.546 2.546 0 00.805 1.982zM3.185 3.16h.7v2.09h-.7zm0-1.3h.7v.7h-.7z"/>
    </symbol>
    <symbol id="bell" viewBox="0 0 9.769 12.01">
      <path
          d="M8.619 5.13v3.319l1.149 1.207v.6H-.001v-.6l1.149-1.207V5.13a4.041 4.041 0 01.8-2.414 3.336 3.336 0 012.069-1.388V.906a.934.934 0 01.23-.664.764.764 0 01.632-.241.84.84 0 01.632.241.848.848 0 01.23.664v.422A3.676 3.676 0 017.81 2.716a4.04 4.04 0 01.809 2.414zm-2.586 5.734a1.106 1.106 0 01-1.149 1.147 1.109 1.109 0 01-.8-.362 1.222 1.222 0 01-.345-.845h2.3z"
          fill="currentColor"/>
    </symbol>
    <symbol id="google" viewBox="0 0 512 512">
      <g fill="none" fill-rule="evenodd">
        <path
            d="M482.56 261.36c0-16.73-1.5-32.83-4.29-48.27H256v91.29h127.01c-5.47 29.5-22.1 54.49-47.09 71.23v59.21h76.27c44.63-41.09 70.37-101.59 70.37-173.46z"
            fill="#4285f4"/>
        <path
            d="M256 492c63.72 0 117.14-21.13 156.19-57.18l-76.27-59.21c-21.13 14.16-48.17 22.53-79.92 22.53-61.47 0-113.49-41.51-132.05-97.3H45.1v61.15C83.93 439.12 163.74 492 256 492z"
            fill="#34a853"/>
        <path
            d="M123.95 300.84c-4.72-14.16-7.4-29.29-7.4-44.84s2.68-30.68 7.4-44.84v-61.15H45.1C29.12 181.87 20 217.92 20 256s9.12 74.13 25.1 105.99l78.85-61.15z"
            fill="#fbbc05"/>
        <path
            d="M256 113.86c34.65 0 65.76 11.91 90.22 35.29l67.69-67.69C373.03 43.39 319.61 20 256 20 163.75 20 83.93 72.89 45.1 150.01l78.85 61.15c18.56-55.78 70.59-97.3 132.05-97.3z"
            fill="#ea4335"/>
        <path d="M20 20h472v472H20V20z"/>
      </g>
    </symbol>
    <symbol id="cancel" viewBox="0 0 14 14">
      <path fill="currentColor"
            d="M14 1.4L8.4 7l5.6 5.6-1.4 1.4L7 8.4 1.4 14 0 12.6 5.6 7 0 1.4 1.4 0 7 5.6 12.6 0z"></path>
    </symbol>
    <symbol id="tick" viewBox="0 0 17.6 13.4">
      <path d="M5.6 10.6L16.2 0l1.4 1.4-12 12L0 7.8l1.4-1.4z"/>
    </symbol>
    <symbol id="up" viewBox="0 0 5.305 8.751">
      <path d="M3.2 8.751H2.105V2.078l-1.34 1.34-.76-.766L2.653 0l2.652 2.652-.766.766-1.34-1.34z" fill="currentColor"/>
    </symbol>
    <symbol id="back" viewBox="0 0 14 22.703">
      <path fill="currentColor" d="M14 2.649l-8.7 8.7 8.7 8.7-2.649 2.649L0 11.351 11.351 0z"/>
    </symbol>
    <symbol id="eye" viewBox="0 0 20 20">
      <g fill="none" fill-rule="evenodd">
        <path d="M0 0h20v20H0z"></path>
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
              d="M2 10s2.91-6 8-6 8 6 8 6-2.91 6-8 6-8-6-8-6z"></path>
        <circle cx="10" cy="10" r="2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                stroke-width="1.5"></circle>
      </g>
    </symbol>
    <symbol id="plus" viewBox="0 0 34.635 34.635">
      <path fill="currentColor"
            d="M34.635 19.792H19.792v14.844h-4.948V19.792H0v-4.948h14.844V0h4.948v14.844h14.843z"></path>
    </symbol>
    <symbol id="wrench" viewBox="0 0 10.68 10.599">
      <path
          d="M10.535 8.633a.291.291 0 0 1 .145.289.44.44 0 0 1-.193.387l-1.11 1.109a.406.406 0 0 1-.675 0l-4.391-4.39a2.653 2.653 0 0 1-1.737.144 3.225 3.225 0 0 1-1.592-.869 3.379 3.379 0 0 1-.917-1.737 2.393 2.393 0 0 1 .289-1.833l2.123 2.075 1.447-1.447L1.849.286A3 3 0 0 1 3.682.045a3.141 3.141 0 0 1 1.737.868 3.23 3.23 0 0 1 .868 1.592 2.651 2.651 0 0 1-.145 1.737z"
          fill="currentColor"></path>
    </symbol>
    <symbol id="filter" viewBox="0 0 10 6.667">
      <path d="M0 0h10v1.111H0zm1.667 3.889V2.778h6.667v1.111zm2.222 2.778V5.556h2.222v1.111z"
            fill="currentColor"/>
    </symbol>
    <symbol id="end-date" viewBox="0 0 18 20">
      <path
          d="M16 2a2.051 2.051 0 012 2v14a2.051 2.051 0 01-2 2H2a1.816 1.816 0 01-1.4-.6A1.974 1.974 0 010 18V4a2.051 2.051 0 012-2h1V0h2v2h8V0h2v2zm0 16V7H2v11zm-9.6-2l-1.1-1.1 2.4-2.4-2.4-2.4L6.4 9l2.4 2.4L11.2 9l1 1.1-2.4 2.4 2.4 2.4-1 1.1-2.4-2.4z"
          fill="currentColor"/>
    </symbol>
    <symbol id="trophy" viewBox="0 0 18 18">
      <path
          d="M0 0v1a11.774 11.774 0 001.951 6.305C2.876 8.847 3.6 9.945 3.6 11h1.8v-.047A8.625 8.625 0 007.2 14h3.6a8.625 8.625 0 001.8-3.047V11h1.8c0-1.056.724-2.153 1.649-3.695A11.774 11.774 0 0018 1V0zm1.972 2h1.874a31.46 31.46 0 00.662 5.975C4.173 7.367 3.8 6.782 3.449 6.2A10.428 10.428 0 011.973 2zm12.182 0h1.874a10.442 10.442 0 01-1.477 4.195c-.352.587-.725 1.172-1.058 1.78A31.461 31.461 0 0014.154 2zM4.5 16v2h9v-2z"
          fill="currentColor"/>
    </symbol>
    <symbol id="menu" viewBox="0 0 10 7">
      <path d="M0 0h10v1.178H0zm3.333 4.152V2.974H10v1.178zM6.667 7V5.822H10V7z" fill="currentColor"/>
    </symbol>
    <symbol id="star" viewBox="0 0 10 10">
      <path
          d="M1.45 1.45A4.752 4.752 0 015 0a4.948 4.948 0 013.55 1.45A4.678 4.678 0 0110 5a4.95 4.95 0 01-1.45 3.55A4.679 4.679 0 015 10a4.95 4.95 0 01-3.55-1.45 5.071 5.071 0 010-7.1zm5.65 6.5l-.55-2.4 1.9-1.6L6 3.75 5.05 1.5 4.1 3.75l-2.45.2 1.9 1.6L3 7.95 5.1 6.7z"
          fill="currentColor"/>
    </symbol>
  </svg>
</template>

<script>
  export default {
    name: 'symbols'
  };
</script>

<style>
  svg:not(:root) {
    max-width: 100%;
    max-height: 100%;
  }
</style>
