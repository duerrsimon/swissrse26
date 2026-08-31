---
theme: default
title: RSEs in the age of personalized software
info: |
  ## RSEs in the age of personalized software
  When anyone can make the tool they need, what is a research software engineer for?

  20-minute talk + 10 minutes of discussion.
  Annual Swiss RSE Day 2026, ETH Zurich.
  Simon Dürr — HES-SO Valais-Wallis.
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
---

<h3 class="text-lg font-bold">Annual Swiss RSE Day 2026 · ETH Zurich</h3>

<h1 class="font-bold mt-4 text-4xl">RSEs in the age of personalized software</h1>

<h2 class="text-xl mt-2 text-gray-500">When anyone can make the tool they need, what is a research software engineer for?</h2>

<div @click="$slidev.nav.next" class="mt-6 py-1 inline-block cursor-pointer" hover:bg="gray op-10">
  Press space to continue <carbon:arrow-right class="inline" />
</div>

<div class="w-full">
<div class="flex space-x-4 mt-6 w-full justify-center items-center">

<img src="/img/simon_duerr_face.jpg" class="rounded-full w-20 h-20"/>
<div class="text-left">
  <h6>Simon Dürr</h6>
  <span class="text-sm italic">
  Assistant Professor UAS<br>
  HES-SO Valais-Wallis<br>
  <a href="https://simonduerr.eu" target="_blank">simonduerr.eu</a><br>
  </span>
</div>
<div><img src="/img/hesso.svg" alt="HES-SO logo" class="mx-auto my-6 h-16"> </div>
</div>
</div>

<!--
20 minutes of talk, 10 of discussion. The talk ENDS ON SLIDE 17.
Slides 18-19 are the discussion — do not start them until you have handed the
room the question.

Block map: 1-5 two anecdotes · 6-8 what changed · 9-11 my two tools ·
12-14 how to build it · 15-17 the role · 18-19 discussion.

Checkpoint: slide 12 at minute 11. Cut candidate if late: slide 6.

One argument, three times: the cost of building fell below the cost of finding
(minute 4), so the scarce thing is no longer the code (minute 13), so the RSE
becomes the person who makes it safe to have written (minute 16).
-->

---
layout: two-cols
layoutClass: gap-8
clicks: 5
---

# A phone goes missing

<div class="mt-4 text-gray-700">

Ben Zhang loses his phone at the office.

</div>

<div v-click="[1, 99]" class="mt-4">

Find My is switched off by corporate device management.
There is no supported way to look for his own phone.

</div>

<div v-click="[2, 99]" class="mt-4">

So he asks Claude. The phone is still **advertising over
Bluetooth**, and signal strength is a distance sensor.

</div>

<div v-click="[3, 99]" class="thesis mt-4">
A live signal meter, written in <b>about a minute</b>. He walked
the office until the number stopped climbing.
</div>

<div v-click="[5, 99]" class="src mt-3">
Ben Zhang (@un1c0rnioz),
<a href="https://x.com/un1c0rnioz/status/2084686552299634805" target="_blank">x.com/un1c0rnioz</a>,
January 2026. Code published as <code>findphone</code>.
</div>

::right::

<div class="mt-16 flex justify-center">
<SignalMeter :level="$clicks" />
</div>

<div v-click="[5, 99]" class="mt-10 text-center text-sm text-gray-500">
No app store. No repository search. No package.<br>
He described the problem and the instrument existed.
</div>

<!--
~90 seconds, five clicks. The hook — tell it, do not read it.

Click slowly; let each bar land. Worth one sentence: RSSI is negative, and less
negative means closer. Do NOT explain BLE advertising packets.

The detail that matters later: the thought "does a phone-finder exist" never
happened.
-->

---
layout: center
class: text-center
---

<div class="big text-5xl max-w-3xl mx-auto leading-tight">
"you can just make the tool<br>you need now"
</div>

<div class="src mt-6">
Ben Zhang, on finding the phone.
</div>

<div v-click class="mt-16 text-xl text-gray-600 max-w-2xl mx-auto">
One person, one minute, one afternoon.
</div>

<div v-click class="mt-4 text-xl text-gray-900 font-semibold max-w-2xl mx-auto">
Now the same sentence, applied to infrastructure a whole field depends on.
</div>

<!--
~30 seconds. Say the quote, then stop talking for a beat.

Do not editorialise; the second anecdote does the work. This slide only exists
to stop anyone filing slide 2 under party trick.
-->

---
layout: two-cols
layoutClass: gap-8
clicks: 3
---

# Sleuth and edgeR

<div class="text-sm text-gray-600 mt-2">
Two ports, done with an agent. Lior Pachter, 19 February 2026.
</div>

<div v-click="[1, 99]" class="mt-6 border-l-4 border-teal-600 pl-3">

**Sleuth**, his own 2017 R package — ported to Python in
**about an hour**, reproducing the R results *exactly*.

</div>

<div v-click="[2, 99]" class="mt-3 border-l-4 border-teal-600 pl-3">

**edgeR → edgePython.** 14,808 lines across 136 files, 39% of
the original in C. The port is pure Python and Numba.

**About a week**, ending in a preprint and a repository.

</div>

<div v-click="[3, 99]" class="mt-4 p-3 border-l-4 border-gray-300 bg-gray-50 text-sm">
His own note: much of his involvement could be automated in future.
</div>

<div class="src mt-3">
L. Pachter, <a href="https://liorpachter.wordpress.com/2026/02/19/the-quickening/" target="_blank">"The Quickening"</a>,
Bits of DNA, 19 Feb 2026 · <a href="https://github.com/pachterlab/edgePython" target="_blank">github.com/pachterlab/edgePython</a>.
Built with Claude Opus 4.5 and 4.6, finished with Codex GPT-5.3.
</div>

::right::

<img src="/img/edger-paper.png" alt="The 2009 Bioinformatics paper: edgeR, a Bioconductor package for differential expression analysis of digital gene expression data" class="w-full rounded border border-gray-200 shadow-sm mt-6" />

<div class="text-xs text-gray-500 mt-2">
Seventeen years old, and still how a large part of the field counts reads.
</div>

<div class="mt-6 space-y-4">

<div v-click="[1, 99]">
<div class="big text-5xl">1 hour</div>
<div class="text-sm text-gray-600 mt-1">an R package he wrote himself, in Python, matching to the digit</div>
</div>

<div v-click="[2, 99]">
<div class="big text-5xl">1 week</div>
<div class="text-sm text-gray-600 mt-1">14,808 lines of a Bioconductor cornerstone he did <b>not</b> write</div>
</div>

</div>

<!--
~2 minutes, three clicks. The serious half of the opening.

Point at the paper first: 2009, and still how a large part of the field counts
reads. Show of hands on who has used edgeR — it wakes the room up early.

Say 14,808 as a number of LINES, and say the 39% C. That is the part that used
to make ports impossible for one person.

If someone is sceptical: the preprint and the repo are public.
-->

---

# Two ends of the same shift

<div class="grid grid-cols-2 gap-8 mt-6">

<div class="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
<div class="font-bold text-lg">A phone finder</div>
<div class="text-sm text-gray-600 mt-1">one minute · one user · one afternoon</div>
<div class="mt-3 text-sm">Nobody will ever review it. Nobody should. It did its job and it can be deleted.</div>
</div>

<div class="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
<div class="font-bold text-lg">edgePython</div>
<div class="text-sm text-gray-600 mt-1">one week · a whole field · indefinitely</div>
<div class="mt-3 text-sm">People will publish results with it. It has a preprint, a repository, and an audience.</div>
</div>

</div>

<div v-click class="thesis mt-6">
Same tooling, same week, same person-count. The cost of <b>building</b> a tool
fell below the cost of <b>finding</b> one.
</div>

<div v-click class="mt-4 text-gray-700">
Ben Zhang never asked whether a phone-finder existed. Pachter did not read
14,808 lines before porting them.
</div>

<!--
~90 seconds, two clicks. The thesis slide. Everything after is either evidence
for it or a consequence of it.

Say the thesis sentence exactly as written; it returns at minutes 14 and 16.

Block budget: you should be starting slide 6 at 4:00.
-->

---

# Personalized software

<div class="text-gray-600 mt-1">Software with an audience of one.</div>

<div class="mt-4">

| | research software | personalized software |
|---|---|---|
| **users** | many, mostly strangers | you, maybe two colleagues |
| **lifespan** | years, with releases | a semester, a project, an afternoon |
| **issue tracker** | <span class="ok">yes</span> | <span class="bad">no</span> |
| **tests, CI** | <span class="ok">yes</span> | <span class="bad">rarely</span> |
| **citation, DOI** | <span class="ok">expected</span> | <span class="bad">never asked</span> |
| **maintenance** | someone's job | nobody's |
| **cost of getting it wrong** | other people's results | <span class="mid">your own — usually</span> |

</div>

<!--
~45 seconds, no clicks. Definitional, so keep it brisk.

The last row does the work. "Usually" is doing a lot of lifting; someone will
notice, which is slide 11.

Do not defend the right-hand column, and do not spell out the conclusion — the
table makes the point on its own. Cut candidate if you are behind.
-->

---

# Why now

<div class="grid grid-cols-3 gap-5 mt-6">

<div class="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
<carbon:bot class="text-3xl text-teal-700" />
<div class="font-bold mt-2">Agents that finish</div>
<div class="text-sm text-gray-600 mt-2">
A loop that reads the error, edits the file and runs it again until it works.
The unit of work is a <b>task</b>, not a line.
</div>
</div>

<div class="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
<carbon:cloud-app class="text-3xl text-teal-700" />
<div class="font-bold mt-2">Deployment costs nothing</div>
<div class="text-sm text-gray-600 mt-2">
Static hosting is free and permanent. There is no server to ask IT for.
</div>
</div>

<div class="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
<carbon:application-web class="text-3xl text-teal-700" />
<div class="font-bold mt-2">The browser runs real compute</div>
<div class="text-sm text-gray-600 mt-2">
WASM, Pyodide, JupyterLite. Numerical Python in a tab — no backend, and no data
leaving the laptop.
</div>
</div>

</div>

<!--
~50 seconds, no clicks. Three cards, one sentence each.

Card 3 is the one this audience under-rates: data that never leaves the laptop
is data you do not have to find a compliant host for.

Land the hinge verbally, it is deliberately not on the slide: together these
remove every step between having an idea and someone else using it, except the
two that were never automated — deciding whether it is correct, and deciding
whether it should exist.
-->

---
layout: two-cols
layoutClass: gap-6
clicks: 2
---

# And not only the code

<div class="text-sm text-gray-600 mt-1">Agents have reached domain tooling.</div>

<div class="mt-4 border-l-4 border-teal-600 pl-3 text-sm">

**Claude Science** — Anthropic, beta, June 2026. One workspace,
60+ curated skills and connectors: UniProt, PDB, Ensembl, ChEMBL,
NVIDIA BioNeMo. A coordinating agent delegates to specialists;
a separate reviewer agent checks citations and calculations.

</div>

<div class="mt-3 border-l-4 border-teal-600 pl-3 text-sm">

**GPT-Rosalind** — OpenAI, released this week. Similar tool calling for various local models, incl. experimental validation. 

</div>

<div v-click="[1, 99]" class="mt-4 text-gray-700">

Whichever of the two wins, the life scientist's stack is now
something an agent drives end to end.

</div>

<div class="mt-4 p-2 border-l-4 border-amber-500 bg-amber-50 text-xs text-gray-700">
<b>Disclosure.</b> I am also affiliated with Adaptyv Bio, which has partnerships
with both Anthropic and OpenAI.
</div>

<div class="src mt-3">
<a href="https://www.anthropic.com/news/claude-science-ai-workbench" target="_blank">anthropic.com/news/claude-science-ai-workbench</a> ·
<a href="https://huggingface.co/datasets/Anthropic/claude-protein-binder-design" target="_blank">hf.co/datasets/Anthropic/claude-protein-binder-design</a>
</div>

::right::

<video src="/img/claude-science.mp4" class="w-full rounded-lg border border-gray-200 shadow-sm mt-2" autoplay muted loop playsinline></video>

<div class="mt-4 border border-gray-200 rounded-lg p-3 bg-white shadow-sm text-sm">
<div class="text-xs font-bold text-gray-500 uppercase tracking-wide">De novo binder design, run by the agent</div>

<div class="mt-2">
It chained <b>12 existing design tools</b> across 24 workflows — RFdiffusion,
BoltzGen, Genie 3, PXDesign, SolubleMPNN. It wrote no new models. It chose,
ran and ranked.
</div>

<div v-click="[2, 99]" class="mt-2">
16 targets · 1,320 designs tested in the lab · <b>354 bound, 26.8%</b>,
against a 10–15% field baseline. On RBX1: 28/90, versus 9/245 in a prior
human design contest.
</div>
</div>

<!--
~2 minutes, two clicks. The bridge from "faster" to "why this is an RSE
problem". Minute 7.

The video loops on its own — do not wait for it, talk over it.

Say up front that the binder results are NOT peer reviewed. Say it before
someone in the room does.

Read the disclosure out loud rather than letting people spot it — Adaptyv, and
partnerships with both companies on the slide. Ten seconds, then move on. It
costs nothing here and it costs a lot if someone raises it in the discussion.

The point is not the hit rate. It is that the agent picked the tools, ran them
and ranked the output, and a lab then had to check it. Land that; it is what
slide 13 is about.
-->

---
layout: section
---

<link href="https://fonts.googleapis.com/css2?family=Caveat&display=swap" rel="stylesheet">

# Two tools I built for me

<div class="max-w-2xl mx-auto mt-8 text-left text-gray-500">
Both from teaching and administration, which is where the annoying problems live.
</div>

<!--
~15 seconds. Divider. Say the handwritten line out loud — it sets up slide 11.

Two examples, not three.
-->

---
layout: two-cols
layoutClass: gap-8
clicks: 3
---

# A PowerPoint add-in for live web embeds

<div class="text-sm text-gray-600 mt-1">Office.js task pane, sideloaded</div>

<div class="mt-4">

**The problem.** I wanted live web content in a slide: a running
demo, a 3D structure, a dashboard.

</div>

<div v-click="[1, 99]" class="mt-4">

**The store answer is $19 a month.** And to put a web page on
my slide, Web Viewer 2.0 wants to sign me in and hold on to my
data — for a numbered company I have never heard of.

</div>

<div v-click="[2, 99]" class="mt-4">

**What it does.** Puts an iframe on the slide. No account, no
vendor, no telemetry.

</div>

<div v-click="[3, 99]" class="mt-5 thesis">
Audience of one, and it should stay that way. This is the kind that is
<b>safe to delete</b>.
</div>

::right::

<img src="/img/webviewer-permissions.png" alt="A Microsoft consent dialog: Web Viewer 2.0, by 9423-1990 Quebec inc., asking to sign you in, read your profile, and maintain access to data you have given it access to" class="w-full rounded-lg border border-gray-200 shadow-sm mt-6" />

<img src="/img/webviewer-pricing.png" alt="Web Viewer 2.0 pricing: the Personal plan, for individuals embedding websites, is 19 dollars per month for one user" class="w-full rounded-lg border border-gray-200 shadow-sm mt-4" />


<!--
~75 seconds, three clicks. The easy one. Keep it light and quick.

Read the two screenshots out loud: $19 a month for one user, and it wants to
sign you in on behalf of "9423-1990 Québec inc." It makes the argument for you —
that is the alternative to forty minutes of your own code. Do not dwell.
-->

---
layout: two-cols
layoutClass: gap-8
clicks: 2
---

# Custom Jupyter extensions

<div class="text-sm text-gray-600 mt-1">students submit and save notebooks · plus a grading UI</div>

<div class="mt-4">

**The problem.** Moodle was too cumbersome for computational
coursework. Exams run in JupyterLite — Python in the browser,
nothing to install — and JupyterLite cannot hand anything in.

</div>

<div v-click="[1, 99]" class="mt-4">

**What it does.** A custom toolbar. One button saves, one submits,
and the notebook goes to a vserver inside the university network.
Nothing leaves the building.

</div>

<div v-click="[2, 99]" class="mt-4">

**And a grading UI on top**, because marking thirty notebooks by
hand was the other half of the problem.

</div>

::right::

<img src="/img/grading-ui.png" alt="The grading UI: a course with 45 students and 9 exercises, each lab showing a submission progress bar" class="w-full rounded-lg border border-gray-200 shadow-sm mt-6" />


<!--
~2 minutes, three clicks. The turn. Everything before was descriptive; from here
the talk is about what to do.

Worth a sentence: most personal software in a university does not compute
anything, it replaces paperwork. That is why it multiplies and why nobody thinks
to review it.

Point at the screenshot: 45 students, 9 exercises, PocketBase behind it. That is
rung 5 on slide 14 — mention it now so the ladder lands as something you have
actually done, not a taxonomy.

Say the honest bit out loud — it is the hinge of the talk and it is deliberately
not on the slide. An exam cannot be sat without this thing now. The add-in is
still disposable. There was no review, no decision, no checklist, and nothing in
my process ever told the two apart. There was no line to cross.

Pause there. Checkpoint: leave this slide at minute 11.
-->

---
layout: section
---

<link href="https://fonts.googleapis.com/css2?family=Caveat&display=swap" rel="stylesheet">

# How to build personalized software

<div class="max-w-2xl mx-auto mt-8 text-left text-gray-500">

</div>

<!--
~10 seconds. Divider. Minute 11.

Say it out loud: none of this is a process. A process would not survive contact
with a tool that takes forty minutes to write.
-->

---
clicks: 5
---

# Write the spec, not the code

<div class="grid grid-cols-2 gap-8 mt-6">

<div>

<div v-click="[1, 99]" class="mt-2">
<b>The code is the disposable part now.</b> You can regenerate it tomorrow from
a better model. You cannot regenerate what you meant.
</div>

<div v-click="[2, 99]" class="mt-4">
<b>So the durable artifact is the spec.</b> <code>CLAUDE.md</code>, <code>AGENTS.md</code>,
a README, three bullets in a comment. The format matters less than that it lives
in the repository.
</div>

<div v-click="[3, 99]" class="mt-4">
<b>Keep the prompts.</b> They are the closest thing you have to a design
rationale, and they cost nothing to commit.
</div>

</div>

<div class="flex flex-col justify-center">

<div v-click="[4, 99]" class="thesis">
edgeR was portable in a week <b>because</b> decades of accumulated test outputs
existed to port against.
</div>

<div v-click="[5, 99]" class="mt-6 thesis warn">
A spec you can test against is what makes the speed <b>safe</b>. Without one you
have not built a tool, you have generated a plausible one.
</div>

</div>

</div>


<!--
~2 minutes, five clicks. The most important slide in the deck.

The inversion is genuinely new: for thirty years the code was the asset and the
documentation was the chore. That has flipped. Say it plainly.

Click 4 is the callback to slide 4 — make it explicit: the test suite was the
asset, not the C code. And to slide 8: the binder designs were only trustworthy
because a wet lab tested all 1,320 of them.

Click 5 is what the discussion hangs on. Say it slowly.
-->

---
layout: two-cols
layoutClass: gap-6
clicks: 6
---

# Pick the smallest runtime that works

<div class="mt-4 text-gray-700">

Most personal software does not need a server.
Almost none of it needs a container.

</div>

<div v-click="[5, 99]" class="thesis mt-6">
Most personal software is a <b>rung 1 or 2</b> problem
being solved at rung 6.
</div>

<div v-click="[6, 99]" class="mt-4 text-sm text-gray-600">

Every rung down costs you something that is not code:
a credential to rotate, a bill to notice, a machine to patch,
an outage to be told about at 22:00.

Rungs 5 and 6 are where a tool stops being free
and starts needing a **maintainer**.

</div>

::right::

<div class="mt-6">
<RuntimeLadder :step="$clicks" />
</div>


<!--
~2 minutes, six clicks. The practical heart. Click the rungs at a steady pace
and name one thing you have personally put on each.

Rung 2 deserves a sentence: a single HTML file with no build step is the most
durable artifact available to us. It will open in ten years. Your 2016 Node
project will not.

Rung 4 solves a legal problem, not a technical one — if the data never leaves
the laptop, you do not need a compliant host. Say that; it is the one people
have not thought of.

Rung 5 is PocketBase on a vserver: one binary, SQLite, auth and an admin UI. If
you genuinely need a database, that is the whole of it.

The amber on 5 and 6 is not a warning against them, it is a recurring cost the
other four do not have.
-->

---
layout: section
---

<link href="https://fonts.googleapis.com/css2?family=Caveat&display=swap" rel="stylesheet">
<h3 class="hand text-teal-700 mb-8" style="font-size: 3em">if everyone can build it…</h3>

# What is an RSE for?

<!--
~10 seconds. Divider. Minute 15.

Deliver the handwritten line as a real question. Half this room has quietly
worried about it.
-->

---
clicks: 5
---

# Four things that did not get cheaper

<div class="grid grid-cols-2 gap-6 mt-10 text-sm">

<div v-click="[1, 99]" class="border border-gray-200 rounded-lg p-3 bg-white shadow-sm">
<b>Correctness that matters</b><br>
<span class="text-gray-600">Not "does it run" — models are excellent at that now.
Is the number right, is the method appropriate, would you defend it at a review.</span>
</div>

<div v-click="[2, 99]" class="border border-gray-200 rounded-lg p-3 bg-white shadow-sm">
<b>The substrate</b><br>
<span class="text-gray-600">Templates that ship with a test. A paved deploy path.
A hosting menu that is already legal. CI that exists before anyone asks.</span>
</div>

<div v-click="[3, 99]" class="border border-gray-200 rounded-lg p-3 bg-white shadow-sm">
<b>Review and triage</b><br>
<span class="text-gray-600">Who looks at the pipeline behind the figure, and who decides
which of the forty new tools in the group is worth keeping.</span>
</div>

<div v-click="[4, 99]" class="border border-gray-200 rounded-lg p-3 bg-white shadow-sm">
<b>Teaching the practice</b><br>
<span class="text-gray-600">Judgement is the one thing you cannot prompt for.
Someone has to hand it over, and that has always been the job.</span>
</div>

</div>

<div v-click="[5, 99]" class="thesis mt-6">
The RSE stops being the person who <b>writes</b> it
and becomes the person who makes it <b>safe to have written</b>.
</div>

<!--
~90 seconds, five clicks. The optimistic argument, and the answer to the
question the divider just asked.

Be genuinely optimistic. This is a larger role, not a consolation prize. The
scarce resource moved from typing to judgement.
-->

---
clicks: 3
---

# What I see as RSE roles

<div class="max-w-3xl mt-10 space-y-6">

<div v-click="[1, 99]" class="border-l-4 border-teal-600 pl-4">
<div class="font-bold text-xl">Construct templates for agentic engineering</div>
<div class="text-gray-600 mt-1">A repository an agent can work in well: a spec file, one test,
a licence, a deploy target. The cheapest way to raise a floor is to move the starting line.</div>
</div>

<div v-click="[2, 99]" class="border-l-4 border-teal-600 pl-4">
<div class="font-bold text-xl">Make things load-bearing</div>
<div class="text-gray-600 mt-1">Take the vibe-coded thing that turned out to matter and turn it
into something that can be relied on. This is the step nobody currently owns.</div>
</div>

<div v-click="[3, 99]" class="border-l-4 border-teal-600 pl-4">
<div class="font-bold text-xl">Internal tooling</div>
<div class="text-gray-600 mt-1">A vserver people are allowed to use, and local endpoints for
models. If the infrastructure is inside the building, the data can stay there too.</div>
</div>

</div>

<!--
~90 seconds, three clicks. THE TALK ENDS HERE. Minute 18.

State these as proposals, not conclusions — they are what you want the room to
argue with.

Role 2 is the one with no owner today. Slide 11 is the evidence: the exam system
became load-bearing and nothing marked the moment. Somebody has to be the person
that happens to.

On role 3, be blunt: a free static host is not a place for exam data, and the
reason people put it there is that nobody gave them a vserver. That is an
RSE-group failure, not a user failure.

Then thank them and hand the room the question. Do not summarise.
-->

---
clicks: 5
---

# The question I do not have an answer to

<div class="thesis warn mt-4 text-xl">
How do we stop this becoming an <b>uncontrollable amount of slop</b>?
</div>

<div class="grid grid-cols-2 gap-8 mt-6">

<div>

<div class="font-bold text-teal-700">We know what good looks like</div>

<div class="mt-3 text-sm text-gray-700">

edgeR was portable in a week **because** decades of accumulated test outputs
existed to port against.

<div class="mt-3">
Speed is safe exactly when there is something to check against.
We have the speed. We did not get the test suites with it.
</div>

</div>

<div class="mt-4 p-3 border-l-4 border-gray-300 bg-gray-50 text-sm">
<b>One test</b> would be enough. Almost nothing personal has one.
</div>

</div>

<div>

<div class="font-bold text-teal-700">So how would we ever enforce it?</div>

<div class="mt-3 space-y-3 text-sm">

<div v-click="[1, 99]" class="border-l-4 border-teal-600 pl-3">
<b>Carrot or stick?</b> Templates that make the good path the lazy path — or
gates that block?
</div>

<div v-click="[2, 99]" class="border-l-4 border-teal-600 pl-3">
<b>Who reviews?</b> The RSE group, peer review, CI-as-a-service, the PI, nobody?
</div>

<div v-click="[3, 99]" class="border-l-4 border-teal-600 pl-3">
<b>At which boundary?</b> Publication, deployment, or the moment a second person
depends on it?
</div>

<div v-click="[4, 99]" class="border-l-4 border-red-600 pl-3">
<b>Who pays?</b> Review is the one cost that did not fall.
</div>

</div>

</div>

</div>

<div v-click="[5, 99]" class="hand text-teal-700 text-center mt-6" style="font-size: 2em">
Let's discuss
</div>

<!--
Hold this for the rest of the slot — roughly ten minutes.

If the room is slow to start, ask for hands: who has vibe-coded something this
month, who put one of those on the internet, and who has a single test on it.
Each is a smaller subset than the last, and the shrinking makes the argument.

Open with carrot or stick; everyone has an opinion. Hold "who pays" in reserve —
it ends the conversation, so use it to land the plane.

Expected pushback, and it is correct: "gates just push people to build in the
shadows". Concede it completely, then turn it round — if a gate cannot work, the
carrot has to be good enough that people opt in. What would it have to be?

Second objection: "most of this never gets published, so who cares." Answer:
slide 11. It is not the published stuff, it is the exam system and the grading
script.
-->

---
layout: center
class: text-center
---

# Thank you

<div class="mt-4 text-gray-600">
Slides, and the two tools:
<a href="https://simonduerr.eu" target="_blank">simonduerr.eu</a> ·
<a href="https://github.com/duerrsimon" target="_blank">github.com/duerrsimon</a>
</div>

<div class="w-full">
<div class="flex space-x-4 mt-10 w-full justify-center items-center">

<img src="/img/simon_duerr_face.jpg" class="rounded-full w-20 h-20"/>
<div class="text-left">
  <h6>Simon Dürr</h6>
  <span class="text-sm italic">
  Assistant Professor UAS<br>
  HES-SO Valais-Wallis<br>
  <a href="mailto:contact@simonduerr.eu">contact@simonduerr.eu</a><br>
  </span>
</div>
<div><img src="/img/hesso.svg" alt="HES-SO logo" class="mx-auto my-6 h-16"> </div>
</div>
</div>

<!--
Only go here once the discussion has run out, or when the chair signals. If the
room is still arguing, stay on the previous slide.
-->
