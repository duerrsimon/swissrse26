<!--
  The Bluetooth signal meter from the opening anecdote, played out live so the
  audience walks the office with him instead of reading about it.

    <SignalMeter :level="$clicks" />   drive it from the slide's click budget
    <SignalMeter :level="5" />         pinned hot, for a static export
    <SignalMeter :level="0" />         nothing found yet

  level 0 is "no signal": bars grey, readout dashed. 1-5 fill left to right and
  the dBm number climbs towards zero, because RSSI is negative and less negative
  means closer. That inversion is worth saying out loud; nobody guesses it.
-->
<template>
  <div class="meter">
    <div class="bars">
      <span
        v-for="n in 5"
        :key="n"
        class="bar"
        :class="{ on: level >= n }"
        :style="{ height: 0.9 + n * 0.55 + 'rem' }"
      />
    </div>

    <div class="readout">
      <div class="dbm" :class="{ off: level < 1 }">{{ dbm }}</div>
      <div class="label" :class="{ hot: level >= 4 }">{{ label }}</div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  level: { type: Number, default: 0 },
})

/* Plausible RSSI values for a phone at across-the-room to arm's-length. */
const scale = ['—', '-94 dBm', '-86 dBm', '-71 dBm', '-58 dBm', '-41 dBm']
const labels = [
  'scanning…',
  'somewhere on this floor',
  'warmer',
  'this room',
  'within a few metres',
  'you are standing on it',
]

const n = computed(() => Math.max(0, Math.min(5, props.level)))
const dbm = computed(() => scale[n.value])
const label = computed(() => labels[n.value])
</script>

<style scoped>
.meter {
  display: flex;
  align-items: flex-end;
  gap: 1.6rem;
}

.bars {
  display: flex;
  align-items: flex-end;
  gap: 0.4rem;
}
.bar {
  display: block;
  width: 1.1rem;
  border-radius: 0.2rem 0.2rem 0 0;
  background: #e2e8f0;
  border: 1.5px solid #cbd5e1;
  opacity: 0.35;
  transition: all 0.35s ease;
}
.bar.on {
  opacity: 1;
  background: #0f766e;
  border-color: #0f766e;
}

.readout {
  padding-bottom: 0.15rem;
}
.dbm {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 2.4rem;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.02em;
  color: #0f766e;
  transition: color 0.35s ease;
}
.dbm.off {
  color: #cbd5e1;
}
.label {
  margin-top: 0.25rem;
  font-size: 0.85rem;
  color: #64748b;
  transition: color 0.35s ease;
}
.label.hot {
  color: #b91c1c;
  font-weight: 700;
}
</style>
