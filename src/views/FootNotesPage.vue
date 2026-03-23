<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { initFootnotes } from '../assets/js/footnotes.js'

const router = useRouter()

onMounted(() => {
  initFootnotes()
  if (window.location.hash) {
    router.replace({ hash: '' })
  }
})
</script>
<template>
  <main id="main-content">
    <h1>Exemple de notes de bas de page accessibles</h1>

    <h2>Hul Hogan</h2>
    <h3>Biographie</h3>
    <p>
      Terry Eugene Bollea, plus connu sous le nom de Hulk Hogan, né le 11 août 1953 à Augusta
      (Géorgie, États-Unis) et mort le 24 juillet 2025 à Clearwater (Floride, États-Unis) est un
      catcheur, acteur
      <sup>
        <a href="#ndp1" id="ndp1-rf" class="sofad-ndb-link">
          <span class="visually-hidden">Note de bas de page </span>1
        </a>
      </sup>
      et musicien américain.
    </p>

    <h3>Le personnage</h3>
    <p>
      Hulk Hogan est souvent cité comme le catcheur le plus célèbre au monde, la plus grande star de
      cette industrie durant les années 1980
      <sup>
        <a href="#ndp2" id="ndp2-rf" class="sofad-ndb-link">
          <span class="visually-hidden">Note de bas de page </span>2
        </a> </sup
      >, et l'un des catcheurs les plus populaires de tous les temps. Avec sa moustache en fer à
      cheval blonde, son bandana emblématique et ses entrées sur le ring, Hogan a été de nombreuses
      années le visage du catch américain et de la WWF (ancien nom de la WWE), une compagnie dont il
      a largement contribué à l'expansion économique.
    </p>
    <h3>Début de carrière</h3>
    <p>
      Il commence sa carrière de catcheur professionnel en 1977, mais acquiert une renommée mondiale
      lorsque Vince McMahon le fait signer à la World Wrestling Federation, en décembre 1983. Son
      personnage de héros américain a contribué à l'essor du catch professionnel dans les années
      1980, où il a été la tête d'affiche de huit des neuf premières éditions de WrestleMania<sup>
        <a href="#ndp3" id="ndp3-rf" class="sofad-ndb-link">
          <span class="visually-hidden">Note de bas de page </span>3
        </a> </sup
      >, l'événement annuel phare de la WWF. Lors de son premier passage à la WWF, il a été cinq
      fois WWE Champion. Son règne de 1 474 jours est toujours actuellement le plus long de l'ère
      post-WrestleMania. Il est également le premier catcheur à remporter deux fois consécutivement
      le Royal Rumble (en 1990 et 1991). Son match contre André The Giant lors du WWF Main Event le
      5 février 1988 détient toujours des records d'audience télévisée américaine pour le catch avec
      une note Nielsen de 15,2 et 33 millions de téléspectateurs.
    </p>

    <aside class="sofad-ndb" role="note" aria-labelledby="nbp-title">
      <h3 id="nbp-title" class="visually-hidden">Notes de bas de page</h3>
      <ol>
        <li>
          <section aria-labelledby="ndp1">
            <h4 id="ndp1" class="fn-ct-nb">Note 1</h4>
            <p>Terry Eugene Bollea est le nom civil de Hulk Hogan.</p>
            <p class="fn-rtn">
              <a href="#ndp1-rf">Retour à la lecture</a>
            </p>
          </section>
        </li>

        <li>
          <section aria-labelledby="ndp2">
            <h4 id="ndp2" class="fn-ct-nb">Note 2</h4>
            <p>
              Hulk Hogan est considéré comme l’une des figures les plus populaires de l’histoire du
              catch.
            </p>
            <p class="fn-rtn">
              <a href="#ndp3-rf">Retour à la lecture</a>
            </p>
          </section>
        </li>
        <li>
          <section aria-labelledby="ndp3">
            <h4 id="ndp3" class="fn-ct-nb">Note 3</h4>
            <p>
              WrestleMania est un événement annuel de catch organisé fin mars ou début avril par la
              World Wrestling Entertainment (WWE) et précédemment connue sous le nom de World
              Wrestling Federation (WWF).
            </p>
            <p class="fn-rtn">
              <a href="#ndp3-rf">Retour à la lecture</a>
            </p>
          </section>
        </li>
      </ol>
    </aside>

    <h2>js</h2>
    <div class="code-block">
      <button type="button" class="copy-btn">Copier</button>

      <pre>
    <code class="language-js">
// src/assets/js/footnotes.js
    </code>
  </pre>
    </div>
    <h2>scss</h2>
    <div class="code-block">
      <button type="button" class="copy-btn">Copier</button>

      <pre>
    <code class="language-scss">

:focus-visible {
  outline: 3px solid #facc15;
  outline-offset: 2px;
}



    </code>
  </pre>
    </div>
  </main>
</template>
<style lang="scss" scoped>
@use '@/assets/scss/variables' as v;

/* ===============================
   Focus global accessible
   =============================== */

:focus-visible {
  outline: 3px solid #facc15;
  outline-offset: 2px;
}

/* ===============================
   Appels de notes (dans le texte)
   =============================== */

.sofad-ndb-link {
  scroll-margin-top: 2rem;
  /* Typographie */
  font-size: 0.85em;
  font-weight: 600;
  line-height: 1;
  vertical-align: baseline;

  /* Boîte pill */
  display: inline-flex;
  align-items: center;
  justify-content: center;

  height: 1.4em;
  min-width: 1.4em;
  padding: 0 0.4em;
  margin-left: 0.1em;

  /* Apparence */
  border-radius: 999px;
  background-color: v.$note-bg;
  color: v.$note-text;
  text-decoration: none;

  /* Navigation */

  /* Hover / focus utilisateur */
  &:hover,
  &:focus-visible {
    background-color: v.$note-hover-bg;
    color: #000000;
  }

  /* Focus logique / retour depuis la note */
  &.sofad-ndb-focus {
    outline: none; // ✅ on enlève l’outline intrusif
    box-shadow: 0 0 0 2px rgba(31, 42, 68, 0.4); // halo doux bleu
  }
}

/* ===============================
   Notes de bas de page
   =============================== */

.sofad-ndb {
  margin-top: 3rem;
  padding-top: 1rem;

  /* Texte légèrement atténué par défaut */
  color: rgba(0, 0, 0, 0.75);
  h3 {
    font-size: 1.25em;
  }
  h4 {
    font-size: 1em;
  }
  p {
    font-size: 0.9em;
  }

  ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    border-top: 1px solid rgb(209, 209, 209);
    /* Note active (focus clavier / retour) */
    &:focus-within {
      background-color: #f9fafb;
      outline: 2px solid #1f2a44; // même bleu que la pill
      outline-offset: 4px;
      color: #000000; // retour à 100 %
    }
  }
}

/* ===============================
   Ancrages et retours
   =============================== */

.fn-ct-nb {
  scroll-margin-top: 5rem;
}

.fn-rtn {
  font-size: 0.9em;
}
</style>
