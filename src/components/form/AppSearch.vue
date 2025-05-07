<script setup lang="ts">
import { defineProps, defineEmits, computed, ref, watch } from 'vue';

// Props e emits
const props = defineProps<{
  modelValue: string,
  suggestions: string[]
}>();
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>();

const activeIndex = ref(-1);
const showSuggestions = ref(false);
const selectedTerms = ref<string[]>([]);
const searchTimeout = ref<NodeJS.Timeout | null>(null);

// Atualiza o input e aplica debounce
function onInput(event: Event) {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
  activeIndex.value = -1;
  showSuggestions.value = true;

  if (searchTimeout.value) {
    clearTimeout(searchTimeout.value);
  }

  searchTimeout.value = setTimeout(() => {
    emit('update:modelValue', target.value);
  }, 300);
}

// Seleciona uma sugestão
function selectSuggestion(suggestion: string) {
  if (!selectedTerms.value.includes(suggestion)) {
    selectedTerms.value.push(suggestion);
  }
  emit('update:modelValue', '');
  activeIndex.value = -1;
  showSuggestions.value = false;
}

// Filtra sugestões
const filteredSuggestions = computed(() => {
  if (!props.modelValue.trim()) return [];
  return props.suggestions.filter(s =>
    s.toLowerCase().includes(props.modelValue.toLowerCase())
  );
});

// Navegação pelo teclado
function onKeyDown(event: KeyboardEvent) {
  if (!filteredSuggestions.value.length) return;

  if (event.key === 'ArrowDown') {
    event.preventDefault();
    activeIndex.value = (activeIndex.value + 1) % filteredSuggestions.value.length;
  } else if (event.key === 'ArrowUp') {
    event.preventDefault();
    activeIndex.value = (activeIndex.value - 1 + filteredSuggestions.value.length) % filteredSuggestions.value.length;
  } else if (event.key === 'Enter') {
    event.preventDefault();
    if (activeIndex.value >= 0) {
      selectSuggestion(filteredSuggestions.value[activeIndex.value]);
    }
  } else if (event.key === 'Escape') {
    event.preventDefault();
    showSuggestions.value = false;
  }
}

// Remove um termo selecionado
function removeTerm(term: string) {
  const index = selectedTerms.value.indexOf(term);
  if (index !== -1) {
    selectedTerms.value.splice(index, 1);
  }
}

// Watch para controle de exibição
watch(() => props.modelValue, (newValue) => {
  if (!newValue.trim()) {
    activeIndex.value = -1;
    showSuggestions.value = false;
  }
});
</script>

<template>
  <div class="mb-8 relative">
    <div class="relative">
      <input
        :value="modelValue"
        @input="onInput"
        @keydown="onKeyDown"
        type="text"
        placeholder="Digite para buscar..."
        class="input w-full bg-primary text-base-100 placeholder:opacity-80 rounded-full pr-12 focus:outline-none focus:ring-2 focus:ring-accent transition"
        aria-label="Campo de busca para termos"
        aria-autocomplete="list"
        role="combobox"
        :aria-expanded="showSuggestions.toString()"
        aria-controls="suggestions-list"
      />

      <div class="absolute right-4 top-1/2 transform -translate-y-1/2 text-base-100 opacity-70 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35M7.5 10a7.5 7.5 0 1015 0 7.5 7.5 0 00-15 0z" />
        </svg>
      </div>
    </div>

    <!-- Lista de sugestões -->
    <ul
      v-if="filteredSuggestions.length && showSuggestions"
      id="suggestions-list"
      class="absolute bg-base-100 w-full shadow-lg rounded-md mt-2 z-10 max-h-60 overflow-auto transition-all duration-200"
      role="listbox"
      aria-live="polite"
    >
      <li
        v-for="(suggestion, index) in filteredSuggestions"
        :key="index"
        @click="selectSuggestion(suggestion)"
        class="p-2 cursor-pointer hover:bg-base-200 transition-colors"
        :class="{ 'bg-base-300': index === activeIndex }"
        role="option"
        :aria-selected="index === activeIndex"
      >
        {{ suggestion }}
      </li>
    </ul>

    <!-- Termos selecionados -->
    <div v-if="selectedTerms.length" class="mt-4 flex flex-wrap gap-2">
      <span
        v-for="(term, index) in selectedTerms"
        :key="index"
        class="bg-base-200 p-2 rounded-full flex items-center gap-2 transition shadow-sm"
      >
        {{ term }}
        <button
          @click="removeTerm(term)"
          class="text-sm font-bold text-red-500 hover:text-red-700 transition"
          aria-label="Remover termo"
        >
          &times;
        </button>
      </span>
    </div>
  </div>
</template>

<style scoped>
/* Se quiser adicionar alguma estilização extra aqui */
</style>
