<script setup lang="ts"></script>

<template>
  <div class="drawer lg:drawer-open">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />

    <main class="drawer-content flex flex-col items-center justify-center">
      <!-- Page content here -->
      <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden"> Open drawer </label>
      <slot name="content" />
    </main>

    <div class="drawer-side">
      <aside class="bg-base-200 text-base-content min-h-full w-80 p-4">
        <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>

        <input type="text" placeholder="Pesquisar..." class="input" />

        <div class="flex flex-col gap-4">
          <div class="flex flex-col">
            <div class="divider">Categorias</div>
            <label for="social_media" class="mb-4">
              <input
                type="radio"
                name="category"
                id="social_media"
                value="social_media"
                class="radio radio-primary"
                checked
              />
              Redes sociais
            </label>
            <label for="professional_solutions">
              <input
                type="radio"
                name="category"
                id="professional_solutions"
                value="professional_solutions"
                class="radio radio-primary"
              />
              Soluções profissionais
            </label>
          </div>

          <ul>
            <div class="divider">Core Features</div>
            <li>
              <label>
                <input type="checkbox" class="checkbox checkbox-primary" />
                Timelines públicas
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" class="checkbox checkbox-primary" />
                Mensagens privadas
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" class="checkbox checkbox-primary" />
                Criptografia ponta-a-ponta
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" class="checkbox checkbox-primary" />
                Chats em grupo
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" class="checkbox checkbox-primary" />
                Chamadas de voz/vídeo
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" class="checkbox checkbox-primary" />
                Compartilhamento de arquivos
              </label>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</template>

<style scoped></style>
