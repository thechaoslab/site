---
layout: splash
title: "people"
permalink: /people/
author_profile: false
---


<br><br>
<!-- <h2>people</h2> -->

CHAOS is made of...

{% for person in site.data.people %}
  {% include person-card.html person=person index=forloop.index0 %}
{% endfor %}

<!-- 

<p>
<b>Courtney N. Reed (she/her)</b> 
Lecturer (Assistant Professor) in Digital Technologies & Creative Futures
</p>
" %}

{% include quad-box.html content="
<p>
<b>Ania Mokrzycka (she/her)</b> 
PhD Student in Creative Futures<br>
</p>
" %}

{% include quad-box.html content="
<p>
<b>Luiz Ribeiro Fonseca (he/him)</b> 
PhD Student in Creative Futures
</p>
" %}

{% include quad-box.html content="
<p>
<b>Vitória Croda (she/her)</b>
PhD Student in Creative Futures
</p>
" %}
 -->