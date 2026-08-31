<!--
  The four things that did not get cheaper. Same shape as DataEngPills in the
  alphafold deck: it appears as a small corner marker from slide 12 onward, so
  by the time slide 20 explains the list the audience has already read it four
  times without being told to.

    <RolePills />                        full row, nothing highlighted
    <RolePills active="review" />        highlight one
    <RolePills active="substrate,review" compact />  small corner version
-->
<template>
  <div class="pills" :class="{ compact }">
    <template v-for="(p, i) in items" :key="p">
      <span class="pill" :class="{ on: on.includes(p) }">{{ p }}</span>
      <span v-if="i < items.length - 1" class="sep">·</span>
    </template>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  active: { type: String, default: '' },
  compact: { type: Boolean, default: false },
})

const items = ['correctness', 'substrate', 'review', 'teaching']
const on = computed(() => props.active.split(',').map(s => s.trim()).filter(Boolean))
</script>

<style scoped>
.pills {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  font-variant: small-caps;
}
.pill {
  padding: 0.3rem 0.85rem;
  border-radius: 999px;
  border: 1px solid #cbd5e1;
  background: #f8fafc;
  color: #64748b;
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  transition: all 0.2s ease;
}
.pill.on {
  border-color: #0f766e;
  background: #0f766e;
  color: #fff;
  box-shadow: 0 0 0 4px rgba(15, 118, 110, 0.14);
}
.sep {
  color: #cbd5e1;
}

/* corner version used from slide 12 onward */
.compact {
  gap: 0.2rem;
}
.compact .pill {
  padding: 0.1rem 0.45rem;
  font-size: 0.65rem;
  font-weight: 600;
  box-shadow: none;
}
.compact .sep {
  display: none;
}
</style>
