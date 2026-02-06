<template>
  <RouterView />
  <UNotifications />
</template>

<style>
/* Global styles if needed */
body {
  margin: 0;
  overflow-x: hidden;
  background-color: #0f172a;
}

/* Base tailwind imports if they are missing or cause issues */
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
