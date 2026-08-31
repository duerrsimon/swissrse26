<!--
  Six rungs of runtime, cheapest and most durable at the bottom. Vertical
  sibling of the Pipeline component in the alphafold deck: same
  `:class="{ on: step >= n }"` + opacity 0.35 → 1 idiom.

    <RuntimeLadder :step="$clicks" />   light one rung per click
    <RuntimeLadder />                   all six lit (default step 99)
    <RuntimeLadder :step="2" compact /> small version for a recap corner

  Rung 1 sits at the top and you only go down if you must. Rungs 5 and 6 are
  tinted amber because that is where a tool stops being free and starts needing
  a maintainer — which is the slide's punchline.
-->
<template>
  <div class="ladder" :class="{ compact }">
    <div
      v-for="r in rungs"
      :key="r.n"
      class="rung"
      :class="{ on: step >= r.n }"
    >
      <div class="n">{{ r.n }}</div>
      <div class="what">
        <b>{{ r.what }}</b>
        <span v-if="!compact">{{ r.note }}</span>
      </div>
      <div v-if="!compact" class="good">{{ r.good }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  step: { type: Number, default: 99 },
  compact: { type: Boolean, default: false },
})

const rungs = [
  {
    n: 1,
    what: 'a single script',
    note: 'uv run, inline dependencies',
    good: 'anything you run yourself',
  },
  {
    n: 2,
    what: 'one HTML file',
    note: 'no build step, no framework',
    good: 'still opens in 2036',
  },
  {
    n: 3,
    what: 'a static site',
    note: 'Quarto · Slidev · Astro',
    good: 'docs, courses, dashboards',
  },
  {
    n: 4,
    what: 'compute in the browser',
    note: 'Pyodide · JupyterLite · WASM',
    good: 'no server, no data leaves the laptop',
  },
  {
    n: 5,
    what: 'a vserver + PocketBase',
    note: 'one binary, SQLite, auth included',
    good: 'the smallest thing that is a real database',
  },
  {
    n: 6,
    what: 'a container on a machine',
    note: 'HF Spaces · Switch Cloud · institutional VM',
    good: 'GPU, long jobs, a real backend',
  },
]
</script>

<style scoped>
.ladder {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  width: 100%;
  font-size: 0.95rem;
}

.rung {
  display: grid;
  grid-template-columns: 1.6rem 1fr 1fr;
  align-items: center;
  gap: 0.8rem;
  border: 1.5px solid #cbd5e1;
  border-radius: 0.4rem;
  padding: 0.35rem 0.6rem;
  background: #fff;
  color: #94a3b8;
  line-height: 1.15;
  opacity: 0.35;
  transition: all 0.35s ease;
}
.rung.on {
  opacity: 1;
  color: #1f2937;
  border-color: #0f766e;
  background: #f0fdfa;
}

.n {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 0.85rem;
  font-weight: 700;
  color: #cbd5e1;
  text-align: center;
  transition: color 0.35s ease;
}
.rung.on .n {
  color: #0f766e;
}

.what b {
  display: block;
  font-weight: 700;
}
.what span {
  display: block;
  font-size: 0.62rem;
  color: #64748b;
}
.good {
  font-size: 0.72rem;
  color: #64748b;
  text-align: right;
}

/* Rungs 5 and 6 are where a tool stops being free and starts needing a maintainer. */
.rung.on:nth-child(5),
.rung.on:nth-child(6) {
  border-color: #b45309;
  background: #fffbeb;
}
.rung.on:nth-child(5) .n,
.rung.on:nth-child(6) .n {
  color: #b45309;
}

.compact .rung {
  grid-template-columns: 1.3rem 1fr;
  padding: 0.12rem 0.4rem;
  font-size: 0.65rem;
  gap: 0.4rem;
}
</style>
